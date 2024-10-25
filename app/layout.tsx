import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Body from "@/components/Shared/Body";
import Header from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm_sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Diddles Music",
  description: "Music minister, preacher and Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${dm_sans.variable} ${montserrat.variable}`}
      >
        <Body>
          <Header />
          <div className="pt-12 flex-1 flex flex-col w-full ">{children}</div>
          <Footer />
        </Body>
      </body>
    </html>
  );
}
