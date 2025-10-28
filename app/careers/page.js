import { Button } from "@heroui/react";
import Link from "next/link";
import CTA from "../components/CTA";

export default function CareersPage() {
  return (
    <main className="bg-gray-100 text-black min-h-screen">
      {/* Hero Section */}
      <section 
        className=" text-white min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-60"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            At Rose Sing Eastham and Associates, Inc., we are always looking for talented and passionate individuals to join our team. Whether you&apos;re an experienced professional or just starting your career, we offer opportunities to grow and make a difference in the industry.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Philosophy</h2>
          <p className="text-lg leading-relaxed text-center mb-8">
            At RSE, we are committed to delivering electrical engineering solutions that are efficient, thorough, and of the highest quality. Our team works with clients to ensure that we are meeting today&apos;s standards with future long-term needs in a sustainable economically-minded sense.
          </p>
          <p className="text-lg leading-relaxed text-center">
            RSE prides itself on a collaborative environment and supporting continuous learning, enabling our team members to develop deep expertise in their respective areas. This approach ensures that every project benefits from the collective knowledge and skills of our team, leading to consistent and reliable outcomes for our clients.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-light-blue py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Culture</h2>
          <p className="text-lg leading-relaxed text-center mb-12">
            RSE believes that when our team thrives, so does our work. We&apos;re committed to creating an environment where everyone feels valued, supported, and empowered to do their best.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefits */}
            {[
              {
                title: "Career Growth",
                description: "We offer strengths-based career paths and annual development planning to help you reach your professional goals.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
              },
              {
                title: "Wellness Days",
                description: "Take time for yourself with paid wellness days to recharge and focus on your well-being.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                title: "Flexible Schedules",
                description: "Enjoy alternative work week options, including half-day Fridays, to balance work and life.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Community & Connection",
                description: "Participate in both in-office and out-of-office social gatherings and volunteer opportunities to build connections and give back.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                title: "Health Benefits",
                description: "Health, dental, and vision insurance coverage for you.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Retirement Planning",
                description: "RSE does a 4% matching fund towards 401K and Roth Contributions.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue text-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={benefit.icon}
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTA 
        title="Ready to Join Us?"
        description="Send us your resume and let us know how you'd be a great fit!"
        primaryButton={{ text: "Contact Us", href: "mailto:jeastham@rse-eng.com" }}
        showSecondaryButton={false}
      />
    </main>
  );
}
