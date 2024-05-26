import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Montserrat } from 'next/font/google';
import { Providers } from "./providers";

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: "Rose Sing Eastham and Associates, Inc. | Electrical Consultants",
  description: "Rose Sing Eastham and Associates, Inc. is located in Visalia, CA and performs projects throughout the Central and Northern California areas. Our staff of engineering, design, inspection, and CAD professionals can support projects of varying types and sizes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light h-full">
      <body className={`${montserrat.className} bg-[#4F6D7A] h-full`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
