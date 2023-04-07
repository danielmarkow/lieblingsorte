import "./globals.css";

export const metadata = {
  title: "Lieblingsorte",
  description: "Teile deine Lieblingsorte",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
