import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Montserrat, Plus_Jakarta_Sans } from 'next/font/google';
import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ['latin'] });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: "Rose Sing Eastham and Associates, Inc. | Electrical Consultants",
  description: "Rose Sing Eastham and Associates, Inc. is located in Visalia, CA and performs projects throughout the Central and Northern California areas. Our staff of engineering, design, inspection, and CAD professionals can support projects of varying types and sizes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light h-full">
      <Head>
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="og:title" content={metadata.title} />
        <meta name="og:description" content={metadata.description} />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="/rse-logo.png" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Rose Sing Eastham and Associates, Inc",
            "url": "https://www.rosesingeastham.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "131 S. Dunworth St.",
              "addressLocality": "Visalia",
              "addressRegion": "CA",
              "postalCode": "93292-6705",
              "addressCountry": "US"
            }  
          })}
        </script>
      </Head>
      <body className={`${montserrat.className} ${plusJakartaSans.className} bg-blue h-full`}>
        <Providers>
          <Header />
            {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
