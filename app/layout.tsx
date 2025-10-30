import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-[url('/background.jpeg')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/15 ">
        {children}
      </body>
    </html>
  );
}
