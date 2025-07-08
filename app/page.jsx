'use client';

import HomeCarousel from "./components/HomeCarousel";
import Services from "./components/Home/Services";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  const projects = [
    { name: 'Educational', link: '/educational' },
    { name: 'Commercial', link: '/commercial' },
    { name: 'Municipalities', link: '/municipalities' }
  ]
  return (
    <>
      <main className="bg-blue text-white">
        <div className="h-full relative flex flex-col items-center justify-between hero">
          <HomeCarousel />
          <div className="pl-4 lg:pl-0 absolute z-10 w-full h-full bg-[rgba(0,0,0,0.6)] grid grid-cols-6 grid-rows-8">
            <h1 className="lg:text-8xl text-6xl font-semibold col-span-6 lg:col-span-3 self-end row-start-3 lg:col-start-3">Projects</h1>
            <h2 className="mt-3 lg:text-4xl text-2xl lg:col-span-2 col-span-6 lg:col-start-4 row-start-4 font-extralight">Let us light your way</h2>
            <div className="flex flex-col lg:flex-row lg:justify-evenly col-span-6 row-start-5 mt-4 items-center">
              {projects.map(project => (
                <Link key={project.name} href={project.link} className="max-h-24 mb-4">
                  <Button className="min-w-[12rem] cursor-pointer project-button lg:text-2xl text-xl border-4 h-24" size="lg">{project.name}</Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Services />
      </main>
    </>
  );
}
