'use client';
import { useEffect, useState, useRef } from 'react';

import { register } from "swiper/element/bundle";
import Image from "next/image";
import { commercial, schools, municipalities } from './projectsList';

export default function Projects() {
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState('Schools');
  const swiperRefs = useRef({});

  useEffect(() => {
    setIsClient(true);
    register(); // Register Swiper web components
  }, []);

  useEffect(() => {
    if (isClient && swiperRefs.current[activeTab]) {
      // Force reinitialize the active swiper
      const swiperEl = swiperRefs.current[activeTab];
      if (swiperEl && swiperEl.swiper) {
        swiperEl.swiper.update();
      }
    }
  }, [activeTab, isClient]);

  // Get projects by category
  const getProjectsByCategory = (category) => {
    switch (category) {
      case 'Schools':
        return schools;
      case 'Municipalities':
        return municipalities;
      case 'Commercial':
        return commercial;
      default:
        return [];
    }
  };

  const tabs = [
    { id: 'Schools', label: 'Schools' },
    { id: 'Municipalities', label: 'Municipalities' },
    { id: 'Commercial', label: 'Commercial' }
  ];

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
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-md p-1 w-full max-w-md">
              <div className="flex flex-col sm:flex-row">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 rounded-md font-medium transition-colors text-sm sm:text-base flex-1 ${
                      activeTab === tab.id
                        ? 'bg-blue text-white shadow-sm'
                        : 'text-gray-600 hover:text-blue hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Carousel Container */}
            <div className="relative h-96 md:h-[500px] lg:h-[600px]">
              {tabs.map((tab) => {
                const categoryProjects = getProjectsByCategory(tab.id);
                return (
                  <div
                    key={tab.id}
                    className={`absolute inset-0 ${activeTab === tab.id ? 'block' : 'hidden'}`}
                  >
                    {categoryProjects.length > 0 ? (
                      <swiper-container
                        ref={(el) => {
                          if (el) swiperRefs.current[tab.id] = el;
                        }}
                        class={`projectSwiper-${tab.id}`}
                        slides-per-view="1"
                        space-between="0"
                        loop={categoryProjects.length > 1 ? "true" : "false"}
                        autoplay-delay="5000"
                        autoplay-disable-on-interaction="false"
                        navigation="true"
                      >
                        {categoryProjects.map((project) => (
                          <swiper-slide key={project.id} style={{ height: '100%' }}>
                            <div className="relative w-full h-full">
                              <Image
                                alt={project.alt}
                                src={project.src}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                priority={activeTab === tab.id}
                              />
                              {/* Title Overlay */}
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-4 md:p-6">
                                <div className="flex items-center justify-between">
                                  <h3 className="text-white text-lg md:text-xl font-semibold leading-tight flex-1">
                                    {project.alt}
                                  </h3>
                                  {project.architectLogo && (
                                    <div className="ml-4 flex-shrink-0">
                                      <Image
                                        src={project.architectLogo}
                                        alt="Architect Logo"
                                        width={100}
                                        height={80}
                                        className="object-contain"
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </swiper-slide>
                        ))}
                      </swiper-container>
                    ) : (
                      <div className="flex items-center justify-center h-full bg-gray-100">
                        <p className="text-gray-500">No projects available for {tab.label}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{activeTab} Projects</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {activeTab === 'Schools' && 'Educational facilities require specialized electrical systems to support modern learning environments. Our school projects focus on safety, efficiency, and future-ready infrastructure.'}
              {activeTab === 'Municipalities' && 'Municipal projects demand reliable and code-compliant electrical solutions. We work with local governments to deliver sustainable infrastructure that serves communities effectively.'}
              {activeTab === 'Commercial' && 'Commercial electrical projects require scalable solutions that support business operations. From office buildings to retail spaces, we deliver systems that enhance productivity and efficiency.'}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
