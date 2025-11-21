import { NextRequest } from 'next/server';

// Normalizes usernames for full Wikimedia compatibility
function userMatch(apiUser: string, inputUser: string) {
  // Wikimedia usernames are case-insensitive, spaces and underscores mostly equivalent
  const norm = (s: string) => s.trim().toLowerCase().replace(/[_ ]/g, '');
  return norm(apiUser) === norm(inputUser);
}

// Fetch count of uploads by user in competition category
async function fetchUserCategoryUploads(username: string, category: string) {
  const encodedCategory = encodeURIComponent(category);
  let fileTitles: string[] = [];

  // ----------------------------
  // 🔥 FIX: PAGINATION ADDED HERE
  // ----------------------------
  let cmcontinue: string | null = null;

  do {
    let apiUrl =
      `https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers` +
      `&cmtitle=Category:${encodedCategory}` +
      `&cmnamespace=6&cmlimit=500&format=json&origin=*` +
      (cmcontinue ? `&cmcontinue=${encodeURIComponent(cmcontinue)}` : '');

    const catResp = await fetch(apiUrl);
    const catData = await catResp.json();

    if (catData?.query?.categorymembers) {
      fileTitles.push(...catData.query.categorymembers.map((file: { title: string }) => file.title));
    }

    cmcontinue = catData?.continue?.cmcontinue || null;

  } while (cmcontinue);
  // ----------------------------
  // END PAGINATION FIX
  // ----------------------------

  if (fileTitles.length === 0) return 0;

  // Step 2: Check each file's uploader via imageinfo (batch in groups for API efficiency)
  let userUploadCount = 0;

  for (let i = 0; i < fileTitles.length; i += 50) {
    const batch = fileTitles.slice(i, i + 50).map(f => encodeURIComponent(f)).join('|');
    const infoUrl =
      `https://commons.wikimedia.org/w/api.php?action=query&titles=${batch}` +
      `&prop=imageinfo&iiprop=user&format=json&origin=*`;

    const infoResp = await fetch(infoUrl);
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
  }

  return userUploadCount;
}

// API handler function for GET requests
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username');
  const category = 'Images_from_Wiki_Science_Competition_2025_in_India';

  if (!username) {
    return new Response(JSON.stringify({ eligible: false, count: 0 }), { status: 400 });
  }

  const count = await fetchUserCategoryUploads(username, category);

  return new Response(
    JSON.stringify({ eligible: count >= 20, count }),
    { status: 200 }
  );
}
