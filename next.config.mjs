/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = withPWA({
  dest: "public", // where service worker gets generated
  register: true, // auto register service worker
  skipWaiting: true, // activate new SW immediately
})({
  reactStrictMode: true,
});

export default nextConfig;
