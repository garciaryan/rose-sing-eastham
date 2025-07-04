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
  description: "Rose Sing Eastham and Associates, Inc. is located in Visalia, CA and performs projects throughout the Central and Northern California areas. Our staff of engineering, design, inspection, and CAD professionals can support projects of varying types and sizes.",
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
