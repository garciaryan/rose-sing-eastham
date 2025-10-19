'use client';

import HomeCarousel from "./components/HomeCarousel";
import Services from "./components/Home/Services";
import AboutUs from "./components/Home/AboutUs";
import Logos from "./components/Home/Logos";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-white text-black">
        {/* Hero Section */}
        <div className="h-full relative flex flex-col items-center justify-between hero">
          <HomeCarousel />
          <div className="pl-4 lg:pl-0 absolute z-10 w-full h-full bg-[rgba(0,0,0,0.6)] grid grid-cols-6 grid-rows-8">
            {/* Logo and H1 container */}
            <div className="col-span-6 lg:col-span-5 lg:col-start-2 row-start-2 lg:row-start-3 flex flex-col lg:flex-row lg:items-end items-start lg:space-x-6">
              {/* Logo positioned above h1 on mobile, next to h1 on desktop */}
              <div className="flex justify-start lg:justify-center items-center mb-4 lg:mb-0">
                <Image
                  src="/rse-logo-trans.png"
                  alt="Rose Sing Eastham Logo"
                  width={100}
                  height={79}
                  className="bg-white/90 backdrop-blur-sm rounded-md p-2"
                />
              </div>
              
              <h1 className="lg:text-8xl text-6xl font-semibold text-white flex-1">Rose Sing Eastham</h1>
            </div>
            
            <h2 className="mt-3 lg:mt-8 lg:text-4xl text-2xl lg:col-span-2 col-span-6 lg:col-start-4 row-start-4 text-white font-extralight">Let us light your way</h2>
            <div className="flex flex-col lg:flex-row lg:justify-evenly col-span-6 row-start-6 mt-4 items-center">
              <Link href="/projects" className="max-h-24 mb-4">
                <Button className="min-w-[12rem] cursor-pointer project-button lg:text-2xl text-xl border-4 h-24 text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300" size="lg">
                  View Our Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <section className="pb-20 bg-white">
          <AboutUs />
        </section>

        {/* Divider */}
        <div className="relative flex items-center justify-center py-16 bg-gray-50">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative bg-gray-50 px-6">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-blue rounded-full"></div>
              <span className="text-gray-500 font-medium tracking-wider text-sm uppercase">Excellence in Engineering</span>
              <div className="w-3 h-3 bg-blue rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="pt-20 bg-white">
          <Services />
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-blue text-white">
          <div className="max-w-6xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              From concept to completion, we provide comprehensive electrical engineering solutions tailored to your specific needs. Let&apos;s design something brilliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="w-full sm:w-auto">
                <Button className="bg-white text-blue px-8 py-3 text-lg hover:bg-gray-100 transition-all duration-300 w-full sm:min-w-[200px]">
                  Join Our List of Satisfied Customers
                </Button>
              </Link>
              <Link href="/projects" className="w-full sm:w-auto">
                <Button className="bg-transparent border-2 border-white text-white px-8 py-3 text-lg hover:bg-white hover:text-blue transition-all duration-300 w-full sm:min-w-[200px]">
                  View Our Work
                </Button>
              </Link>
            </div>
            <Logos />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-light-blue">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-blue mb-2">25+</div>
                <div className="text-lg text-gray-700">Years of Experience</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue mb-2">500+</div>
                <div className="text-lg text-gray-700">Projects Completed</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue mb-2">100%</div>
                <div className="text-lg text-gray-700">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
