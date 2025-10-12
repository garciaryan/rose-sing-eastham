export default function ContactUsPage() {
  return (
    <main className="bg-gray-100 text-black min-h-screen">
      {/* Hero Section */}
      <section 
        className="text-white min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/crane.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-70"></div>
        <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with our team of electrical engineering experts.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Steve Eastham Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue mb-1">Steve Eastham</h3>
                <p className="text-gray-600 text-sm">President and Principal Engineer</p>
              </div>
              <div className="space-y-3">
                <a href="mailto:seastham@rse-eng.com" className="flex items-center text-gray-700 hover:text-blue transition-colors">
                  <svg className="w-5 h-5 text-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">seastham@rse-eng.com</span>
                </a>
                <a href="tel:559-733-2671" className="flex items-center text-gray-700 hover:text-blue transition-colors">
                  <svg className="w-5 h-5 text-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">559-733-2671 x101</span>
                </a>
              </div>
            </div>

            {/* Jessica Eastham Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue mb-1">Jessica Eastham</h3>
                <p className="text-gray-600 text-sm">HR and Accounting</p>
              </div>
              <div className="space-y-3">
                <a href="mailto:jeastham@rse-eng.com" className="flex items-center text-gray-700 hover:text-blue transition-colors">
                  <svg className="w-5 h-5 text-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">jeastham@rse-eng.com</span>
                </a>
                <a href="tel:559-733-2671" className="flex items-center text-gray-700 hover:text-blue transition-colors">
                  <svg className="w-5 h-5 text-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">559-733-2671 x106</span>
                </a>
              </div>
            </div>

            {/* Office Information Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue mb-1">Our Office</h3>
                <p className="text-gray-600 text-sm">Rose Sing Eastham and Associates, Inc.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start text-gray-700">
                  <svg className="w-5 h-5 text-blue mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-sm">
                    <p>131 S. Dunworth St.</p>
                    <p>Visalia, CA 93292</p>
                  </div>
                </div>
                <a href="tel:559-733-2671" className="flex items-center text-gray-700 hover:text-blue transition-colors">
                  <svg className="w-5 h-5 text-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">559-733-2671</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue text-white py-32">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Contact us today to discuss your electrical engineering needs and discover how we can help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:jeastham@rse-eng.com"
              className="bg-white text-blue px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
