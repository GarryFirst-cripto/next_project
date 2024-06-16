// import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

const socials = {
  data: 'Socials Key'
}

export async function GET() {
  // const { data } = await fetch('http://localhost:8000/history')
  //   .then(response => response.json())
  const data = "History from Awas";
  return NextResponse.json({ data });
}