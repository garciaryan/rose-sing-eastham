'use client';
import { useEffect, useState } from 'react';

import { register } from "swiper/element/bundle";
import Image from "next/image";
import { projectsList } from './projectsList';

export default function Projects() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    register(); // Register Swiper web components
  }, []);

  if (!isClient) {
    return (
      <main className="bg-gray-100 text-black min-h-screen">
        {/* Hero Section */}
        <section className="bg-blue text-white py-20">
          <div className="max-w-6xl mx-auto text-center px-6">
            <h1 className="text-5xl font-bold mb-6">Projects</h1>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Explore our portfolio of electrical engineering projects that showcase our expertise in delivering innovative solutions across various industries.
            </p>
          </div>
        </section>

        {/* Loading placeholder */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-96 md:h-[500px] lg:h-[600px] bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="text-gray-500">Loading...</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-gray-100 text-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-6">Projects</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Explore our portfolio of electrical engineering projects that showcase our expertise in delivering innovative solutions across various industries.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Carousel Container */}
            <div className="relative h-96 md:h-[500px] lg:h-[600px]">
              <swiper-container
                class="projectSwiper"
                loop={true}
                autoplay-delay="5000"
                autoplay-disable-on-interaction={false}
                navigation={true}
              >
                {projectsList.map((project) => (
                  <swiper-slide key={project.id}>
                    <Image
                      alt={project.alt}
                      src={project.src}
                      fill
                      className="object-cover"
                    />
                  </swiper-slide>
                ))}
              </swiper-container>
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From industrial facilities to power distribution systems, our team has successfully completed projects across various sectors. Each project demonstrates our commitment to quality, safety, and innovative electrical engineering solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
