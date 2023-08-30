"use client"
import "@styles/globals.css";

export const metadata = {
  title: "App Supreme",
  description: "A full-stack Next.js app to learn.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>RootLayout{children}
      <button onClick={() => alert('ssss')}>eh</button></body>
    </html>
  );
}
