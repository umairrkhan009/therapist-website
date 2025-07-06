import "./globals.css";

export const metadata = {
  title: "Dr. Serena Blake",
  description:
    "Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🌿</text></svg>"
        />
      </head>
      <body className="bg-[#fefefe] h-[100dvh] antialiased">{children}</body>
    </html>
  );
}
