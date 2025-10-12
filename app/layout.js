import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Montserrat, Plus_Jakarta_Sans } from 'next/font/google';
import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ['latin'] });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: "Rose Sing Eastham and Associates, Inc. | Electrical Consultants",
  description: "Rose, Sing, Eastham works with architects, school districts, various commercial and agricultural industries, hospitals, medical facilities and municipalities to provide electrical design plans and calculations for new construction, remodels, parks, industrial buildings, wells, street lighting, and municipality upgrades.",
  openGraph: {
    title: "Rose Sing Eastham and Associates, Inc. | Electrical Consultants",
    description: "Rose, Sing, Eastham works with architects, school districts, various commercial and agricultural industries, hospitals, medical facilities and municipalities to provide electrical design plans and calculations for new construction, remodels, parks, industrial buildings, wells, street lighting, and municipality upgrades.",
    type: "website",
    images: ["/rse-logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Rose Sing Eastham and Associates, Inc",
      "url": "https://www.rse-eng.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "131 S. Dunworth St.",
        "addressLocality": "Visalia",
        "addressRegion": "CA",
        "postalCode": "93292-6705",
        "addressCountry": "US"
      }  
    })
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light h-full">
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
