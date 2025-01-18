import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  // Poppins,
  Open_Sans,
  Roboto,
} from "next/font/google";
import "../styles/index.scss";
import { Header, ThemeProvider } from "@/components/index.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "700", "900"],
// });

const openSans = Open_Sans({
  variable: "--font-open_sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://next-modules.vercel.app";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: [
      { rel: "icon", url: "/assets/images/favicon/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/assets/images/favicon/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/assets/images/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sheet - Your Website Name",
    description: "This is the sheet page for managing your content.",
    url: `${siteUrl}`,
    siteName: "Your Website Name",
    images: [
      {
        url: `${siteUrl}/assets/images/og-image.png`,
        width: 800,
        height: 600,
        alt: "Your Website Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheet - Your Website Name",
    description: "This is the sheet page for managing your content.",
    images: [`${siteUrl}/assets/images/twitter-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${roboto.variable}  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
