import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="w-full" id="about-us">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        {/* Content Section */}
        <div className="relative bg-gradient-to-br from-light-blue via-light-blue to-blue/20 flex flex-col justify-center p-8 lg:p-16">
          <div className="max-w-2xl mx-auto lg:mx-0">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-blue/15 text-blue rounded-full text-sm font-medium mb-4">
                Our Story
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                About Us
              </h2>
            </div>
            
            {/* Content */}
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                RSE is located in Visalia, CA and performs projects throughout the Central and Northern California areas. Our staff of engineering, design, inspection, and CAD professionals can support projects of varying types and sizes.
              </p>
              
              <p>
                Our work experience includes projects such as <span className="font-semibold text-blue">clinics, schools, hospitals, airport facilities, corporate office headquarters, jails, telecommunication facilities, and water treatment plants</span>, to name just a few. Our vast experience in project types exposes us to new and state-of-the-art products and technology, which can be applied to specific jobs.
              </p>
              
              <div className="bg-white/80 p-6 rounded-xl border-l-4 border-blue shadow-sm">
                <p className="font-medium text-blue mb-2">Our Approach</p>
                <p className="text-sm">
                  Each project is approached with the owner&apos;s interest in mind. Our goal is to combine the owner&apos;s criteria with our technical expertise to produce systems that meet the specific requirements of the project.
                </p>
              </div>
              
              <p>
                Factors that influence our design include life cycle costs, energy conservation, and function of each space, aesthetics and ease of maintenance. We strive to produce contract documents that are clear in their intent and that promote competitive bidding.
              </p>
              
              <p>
                Whenever possible the materials and equipment specified will be readily available from local suppliers. Computer technology is used for production of specifications, engineering calculations and billing procedures. RSE provides complete electrical design and engineering services including Fault, Coordination, Arc Flash and Load Flow studies.
              </p>
            </div>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="relative min-h-[500px] lg:min-h-full overflow-hidden">
          <Image
            src="/unsplash-tower.jpg"
            alt="About Us"
            className="object-cover transition-transform duration-700 hover:scale-105"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          
          {/* Floating stats */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="border-r border-gray-200 last:border-r-0">
                  <div className="text-2xl font-bold text-blue">25+</div>
                  <div className="text-xs text-gray-600 mt-1">Years Experience</div>
                </div>
                <div className="border-r border-gray-200 last:border-r-0">
                  <div className="text-2xl font-bold text-blue">500+</div>
                  <div className="text-xs text-gray-600 mt-1">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue">CA</div>
                  <div className="text-xs text-gray-600 mt-1">Statewide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
