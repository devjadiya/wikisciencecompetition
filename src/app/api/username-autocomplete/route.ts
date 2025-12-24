
import { NextRequest, NextResponse } from 'next/server';

const API_URL = 'https://commons.wikimedia.org/w/api.php';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const prefix = searchParams.get('prefix');

  if (!prefix) {
    return NextResponse.json({ error: 'Prefix is required.' }, { status: 400 });
  }

  const params = new URLSearchParams({
    action: 'query',
    list: 'allusers',
    auprefix: prefix,
    aulimit: '10', // Limit to 10 suggestions
    format: 'json',
    origin: '*',
  });

  try {
    const response = await fetch(`${API_URL}?${params.toString()}`, {
        next: { revalidate: 3600 } // Cache results for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Wikimedia API error! status: ${response.status}`);
    }

    const data = await response.json();
    const usernames = data.query.allusers.map((user: { name: string }) => user.name);

    return NextResponse.json(usernames);
  } catch (error) {
    console.error('Failed to fetch usernames:', error);
    return NextResponse.json({ error: 'Failed to fetch usernames from Wikimedia Commons.' }, { status: 500 });
  }
}
