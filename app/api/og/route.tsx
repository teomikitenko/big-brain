import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          display: 'flex',
          justifyContent:'space-between',
          backgroundColor:'white'
        }}
      >
        <h2> BigBrain acts as your team's second brain, storing all your docs and allowing easy vector search.</h2>
        <img src="https://big-brain-ecru.vercel.app//logo.png" alt="" />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
