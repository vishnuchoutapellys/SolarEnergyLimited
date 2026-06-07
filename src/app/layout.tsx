import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import FloatingCall from "@/components/ui/FloatingCall";
import StickyQuoteBtn from "@/components/ui/StickyQuoteBtn";
import LeadPopup from "@/components/ui/LeadPopup";
import Script from "next/script";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rudraa Solar Power | Best Solar Panel Installation Company in Telangana",
  description: "Switch to solar with Rudraa solar power private limited! We provide premium rooftop solar panel installations for homes, commercial businesses, and industries in Korutla, Jagityal, and across Telangana. 25-year panel warranty, 10-year inverter warranty, and 5 years free service support. Bank loan & EMI assistance available. Get your free solar quote today!",
  keywords: ["solar panels telangana", "rooftop solar panels", "solar installer korutla", "solar panel installation jagityal", "Rudraa Solar Power", "solar energy solutions india", "best solar company telangana", "solar panel price subsidy"],
  metadataBase: new URL("https://rudrasolarenergy.com"), // Fallback URL
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rudrasolarenergy.com",
    title: "Rudraa solar power private limited | Premium Solar Installer in Telangana",
    description: "Switch to solar with Rudraa Solar Power! Get premium rooftop solar panel installations for homes and businesses with 25-year warranty, EMI options, and 5 years free service support.",
    siteName: "Rudraa Solar Power",
    images: [
      {
        url: "/Logo1.png",
        width: 800,
        height: 600,
        alt: "Rudraa Solar Power Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudraa solar power private limited | Premium Solar Installer",
    description: "Get premium rooftop solar panel installations for homes and businesses with 25-year warranty, EMI options, and 5 years free service support in Telangana.",
    images: ["/Logo1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Replace with your measurement ID

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-body antialiased text-slate-800 bg-white min-h-screen flex flex-col justify-between`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Lead Generation & Floating Elements */}
        <FloatingWhatsApp />
        <FloatingCall />
        <StickyQuoteBtn />
        <LeadPopup />
      </body>
    </html>
  );
}
