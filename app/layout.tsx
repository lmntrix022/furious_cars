import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Furious Car",
  description: "Découvrez la meilleure application de présentation de voitures au monde",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
