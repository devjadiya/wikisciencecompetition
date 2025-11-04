
import { NextResponse } from 'next/server';

export const maxDuration = 120; // Set max duration to 2 minutes

const API_URL = 'https://commons.wikimedia.org/w/api.php';
const CATEGORY = 'Category:Images_from_Wiki_Science_Competition_2025_in_India';

async function getCategoryMembers(cmcontinue = ''): Promise<{ members: any[], continue: string | null }> {
  const params = new URLSearchParams({
    action: 'query',
    list: 'categorymembers',
    cmtitle: CATEGORY,
    cmlimit: '500',
    cmtype: 'file',
    format: 'json',
    origin: '*',
    ...(cmcontinue && { cmcontinue }),
  });

  const response = await fetch(`${API_URL}?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`Wikimedia API error! status: ${response.status}`);
  }
  const data = await response.json();
  return {
    members: data.query.categorymembers,
    continue: data['continue'] ? data.continue.cmcontinue : null,
  };
}

async function getImageInfo(pageids: string[]): Promise<any[]> {
    if (pageids.length === 0) return [];
    
    const params = new URLSearchParams({
        action: 'query',
        prop: 'imageinfo',
        iiprop: 'user',
        pageids: pageids.join('|'),
        format: 'json',
        origin: '*',
    });

    const response = await fetch(`${API_URL}?${params.toString()}`);
    if (!response.ok) {
        throw new Error(`Wikimedia API error! status: ${response.status}`);
    }
    const data = await response.json();
    return Object.values(data.query.pages);
}


export async function GET() {
  try {
    let allMembers: any[] = [];
    let cmcontinue: string | null = null;
    let hasMore = true;

    // Loop to handle pagination from the API
    while (hasMore) {
      const { members, continue: nextContinue } = await getCategoryMembers(cmcontinue || '');
      if (members) {
        allMembers = allMembers.concat(members);
      }
      cmcontinue = nextContinue;
      hasMore = !!nextContinue;
    }

    const pageids = allMembers.map(member => member.pageid);
    const userUploads: { [key: string]: number } = {};

    // Batch requests to getImageInfo to avoid hitting URL length limits
    const batchSize = 50;
    for (let i = 0; i < pageids.length; i += batchSize) {
        const batch = pageids.slice(i, i + batchSize);
        const imageInfos = await getImageInfo(batch);
        
        for (const info of imageInfos) {
            if (info.imageinfo && info.imageinfo[0] && info.imageinfo[0].user) {
                const user = info.imageinfo[0].user;
                userUploads[user] = (userUploads[user] || 0) + 1;
            }
        }
    }
    
    const leaderboard = Object.entries(userUploads)
      .map(([username, uploads]) => ({ username, uploads }))
      .sort((a, b) => b.uploads - a.uploads);

    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error('Failed to fetch leaderboard data:', error);
    return NextResponse.json({ error: 'Failed to fetch leaderboard data' }, { status: 500 });
  }
}
