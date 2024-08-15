import { ImageResponse } from 'next/og';
// Image metadata
export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export const dynamic = 'force-dynamic';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 50,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p
        style={{
            textWrap:'balance'
        }}
        >BigBrain acts as your team`s second brain, storing all your docs and allowing easy vector search</p>
  
          <img
            style={{          
              width: '300px',
              height:'300px',
              border:'1px',
              borderRadius:'65px'
            }}
            src="http://localhost:3000/logo.png"
            alt="logo"
          />
   
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
