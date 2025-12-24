import { NextRequest } from 'next/server';

// Normalizes usernames for full Wikimedia compatibility
function userMatch(apiUser: string, inputUser: string) {
  // Wikimedia usernames are case-insensitive, spaces and underscores mostly equivalent
  const norm = (s: string) => s.trim().toLowerCase().replace(/[_ ]/g, '');
  return norm(apiUser) === norm(inputUser);
}

// Fetch count of uploads by user in a specific competition category
async function fetchUserCategoryUploads(username: string, category: string): Promise<number> {
  const encodedCategory = encodeURIComponent(category);
  let fileTitles: string[] = [];

  // Paginate through all members of the category
  let cmcontinue: string | null = null;
  do {
    let apiUrl =
      `https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers` +
      `&cmtitle=Category:${encodedCategory}` +
      `&cmnamespace=6&cmlimit=500&format=json&origin=*` +
      (cmcontinue ? `&cmcontinue=${encodeURIComponent(cmcontinue)}` : '');

    try {
        const catResp = await fetch(apiUrl, { next: { revalidate: 3600 } }); // Cache for 1 hour
        const catData = await catResp.json();

        if (catData?.query?.categorymembers) {
            fileTitles.push(...catData.query.categorymembers.map((file: { title: string }) => file.title));
        }
        cmcontinue = catData?.continue?.cmcontinue || null;
    } catch (e) {
        console.error(`Error fetching category members for ${category}:`, e);
        cmcontinue = null; // Stop pagination on error
    }
  } while (cmcontinue);

  if (fileTitles.length === 0) return 0;

  // Check each file's uploader via imageinfo (batch in groups for API efficiency)
  let userUploadCount = 0;
  for (let i = 0; i < fileTitles.length; i += 50) {
    const batch = fileTitles.slice(i, i + 50).map(f => encodeURIComponent(f)).join('|');
    const infoUrl =
      `https://commons.wikimedia.org/w/api.php?action=query&titles=${batch}` +
      `&prop=imageinfo&iiprop=user&format=json&origin=*`;

    try {
        const infoResp = await fetch(infoUrl, { next: { revalidate: 3600 } }); // Cache for 1 hour
        const infoData = await infoResp.json();

        if (infoData.query?.pages) {
            Object.values(infoData.query.pages).forEach((page: any) => {
                if (
                page.imageinfo &&
                page.imageinfo[0].user &&
                userMatch(page.imageinfo[0].user, username)
                ) {
                userUploadCount += 1;
                }
            });
        }
    } catch (e) {
        console.error(`Error fetching image info for batch starting at ${i}:`, e);
    }
  }

  return userUploadCount;
}

// API handler function for GET requests
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username');
  
  const mobileCategory = 'Eligible_mobile_images_for_WSC_2025_India';
  const cameraCategory = 'Eligible_camera_images_for_WSC_2025_India';

  if (!username) {
    return new Response(JSON.stringify({ eligible: false, count: 0, error: 'Username is required.' }), { status: 400 });
  }

  try {
    // Fetch counts from both categories in parallel
    const [mobileCount, cameraCount] = await Promise.all([
      fetchUserCategoryUploads(username, mobileCategory),
      fetchUserCategoryUploads(username, cameraCategory)
    ]);
    
    const totalCount = mobileCount + cameraCount;

    return new Response(
      JSON.stringify({ eligible: totalCount >= 20, count: totalCount }),
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error checking uploads:', error);
    return new Response(
      JSON.stringify({ eligible: false, count: 0, error: 'Failed to fetch data from Wikimedia Commons.' }), 
      { status: 500 }
    );
  }
}
