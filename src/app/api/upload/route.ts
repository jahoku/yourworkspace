export const runtime = 'nodejs';

import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename) {
    return NextResponse.json(
      { error: 'Filename is required' },
      { status: 400 }
    );
  }

  try {
    const blob = await put(filename, request.body as any, {
      access: 'public',
    });

    return NextResponse.json(blob);
  } catch (error) {
    console.error('Upload API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 