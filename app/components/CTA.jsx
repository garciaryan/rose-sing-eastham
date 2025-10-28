'use client';

import { Button } from "@heroui/react";
import Link from "next/link";

export default function CTA({ 
  title = "Ready to Start Your Project?", 
  description = "From concept to completion, we provide comprehensive electrical engineering solutions tailored to your specific needs. Let's design something brilliant.",
  primaryButton = { text: "Join Our List of Satisfied Customers", href: "/contact-us" },
  secondaryButton = { text: "View Our Work", href: "/projects" },
  showSecondaryButton = true,
  children
}) {
  return (
    <section className="py-20 bg-blue text-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryButton.href} className="w-full sm:w-auto">
            <Button className="bg-white text-blue px-8 py-3 text-lg hover:bg-gray-100 transition-all duration-300 w-full sm:min-w-[200px]">
              {primaryButton.text}
            </Button>
          </Link>
          {showSecondaryButton && (
            <Link href={secondaryButton.href} className="w-full sm:w-auto">
              <Button className="bg-transparent border-2 border-white text-white px-8 py-3 text-lg hover:bg-white hover:text-blue transition-all duration-300 w-full sm:min-w-[200px]">
                {secondaryButton.text}
              </Button>
            </Link>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
