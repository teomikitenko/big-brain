// Import required modules and constants
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
 
// Route segment config
export const runtime = "edge";
 
// Define a function to handle GET requests
export async function GET(req: NextRequest) {
  // Extract title from query parameters
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
 
  // Fetch the Outfit font from the specified URL
 
  // Create an ImageResponse with dynamic content
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <h2>Hello big brain</h2>
          <img src="https://big-brain-ecru.vercel.app/logo.png" alt="logo" />  
   
      </div>
    ),
    // ImageResponse options
    {
      width: 1920,
      height: 1080,
   
    },
  );
}