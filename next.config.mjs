/** @type {import('next').NextConfig} */
const nextConfig = {
  // In file-backed mode the cockpit reads deal-room/*.json at request time.
  // Include those files in the serverless function bundle so reads work on
  // Vercel (they are dynamic reads Next's tracer would otherwise miss).
  outputFileTracingIncludes: {
    "/deals/**": ["./deal-room/**/*"],
    "/api/deals/**": ["./deal-room/**/*"],
  },
};

export default nextConfig;
