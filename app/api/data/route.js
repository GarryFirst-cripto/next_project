export async function GET(request) {
  // return new Response('Hello, world!', {
  //   status: 200,
  //   headers: {
  //     'Content-Type': 'text/plain',
  //   },
  // });

  return new Response(JSON.stringify({ a: 'XXXXXXXXXX', b: 'YYYYYYYYYYY' }),
    { headers: { 'Content-Type': 'text/plain' } }
  )
}