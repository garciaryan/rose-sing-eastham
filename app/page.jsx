import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeCarousel from "./components/HomeCarousel";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  const projects = [
    { name: 'Educational', link: '/educational' },
    { name: 'Commercial', link: '/commercial' },
    { name: 'Municipalities', link: '/municipalities' }
  ]
  return (
    <>
      <Header />
      <main className="relative flex flex-col items-center justify-between bg-blue">
        <HomeCarousel />
        <div className="pl-4 desktop:pl-0 absolute z-10 w-full h-full bg-[rgba(0,0,0,0.6)] grid grid-cols-6 grid-rows-8">
          <h1 className="desktop:text-8xl text-6xl font-semibold col-span-6 desktop:col-span-3 self-end row-start-3 desktop:col-start-3">Projects</h1>
          <h4 className="mt-3 text-3xl desktop:col-span-2 col-span-6 desktop:col-start-4 row-start-4">Let us light your way</h4>
          <div className="flex flex-col desktop:flex-row justify-evenly col-span-6 row-span-3 row-start-5">
            {projects.map(project => (
              <Link key={project.name} href={project.link}>
                <Button className="project-button desktop:text-2xl text-xl bg-blue text-white" radius="sm" size="lg">{project.name}</Button>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
