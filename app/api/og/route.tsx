import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
export const dynamic = 'force-dynamic'

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
        <div
         style={{
          position:'relative',
          width:'100px',
          height:'100px'
        }}
        >
        <img 
        style={{
        position:'absolute',
        width:'100%',
        height:'100%'
        }}
        src="https://big-brain-ecru.vercel.app//logo.png" alt="logo" />
        </div>
          
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
