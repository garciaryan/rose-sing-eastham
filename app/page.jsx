'use client';

import HomeCarousel from "./components/HomeCarousel";
import Services from "./components/Home/Services";
import AboutUs from "./components/Home/AboutUs";
import { Button, Divider } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-white text-black">
        <div className="h-full relative flex flex-col items-center justify-between hero">
          <HomeCarousel />
          <div className="pl-4 lg:pl-0 absolute z-10 w-full h-full bg-[rgba(0,0,0,0.6)] grid grid-cols-6 grid-rows-8">
            <h1 className="lg:text-8xl text-6xl font-semibold col-span-6 lg:col-span-5 self-end row-start-3 lg:col-start-2 text-white">Rose Sing Eastham</h1>
            <h2 className="mt-3 lg:mt-8 lg:text-4xl text-2xl lg:col-span-2 col-span-6 lg:col-start-4 row-start-4 text-white font-extralight">Let us light your way</h2>
            <div className="flex flex-col lg:flex-row lg:justify-evenly col-span-6 row-start-6 mt-4 items-center">
              <Link href="#projects" className="max-h-24 mb-4">
                <Button className="min-w-[12rem] cursor-pointer project-button lg:text-2xl text-xl border-4 h-24 text-white" size="lg">Projects</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center my-10 lg:my-20">
          <Divider className=" text-gray-400 lg:max-w-2xl max-w-[60%]" />
        </div>
        <AboutUs />
        <div className="relative flex items-center justify-center my-10 lg:my-20">
          <Divider className=" text-gray-400 lg:max-w-2xl max-w-[60%]" />
        </div>
        <Services />
      </main>
    </>
  );
}
