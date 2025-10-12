export default function Services() {
  const servicesList = ['Electrical Design', 'Lighting Design', 'Short Circuit/Coordination Studies', 'Arc Flash Studies', 'Fire Alarm System Design', 'Mass Notification Services', 'Fire Alarm Systems', 'Public Address Systems', 'Data Centers', 'Uninterrupted Backup Systems', 'Structured Cabling Systems', 'Local Area Network Systems'];

  const servicesListCont = ['Wireless Lan Systems', 'School Intercom Systems', 'Master Clock Systems', 'Telephone Systems (VoIP & PBX)', 'Classroom Audio Visual Systems', 'Campus Emergency Phones and Area of Rescue', 'Pro Audio Sound Systems', 'Surveillance Camera Systems', 'Card Access Systems', 'Burglar Alarm Systems', 'Distributed Antenna Systems'];

  return (
    <div className="bg-gray-50 py-20" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-16">
          <div className="lg:col-span-2 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-blue/10 text-blue rounded-full text-sm font-medium mb-4">
              What We Do
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Services
            </h1>
            <p className="text-xl lg:text-2xl font-light text-gray-600 leading-relaxed">
              We offer a range of services to help you achieve your goals.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Column Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-blue rounded-full mr-3"></div>
                  <h3 className="font-semibold text-lg text-blue">Core Services</h3>
                </div>
                <ul className="space-y-4">
                  {servicesList.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue/40 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-base leading-relaxed hover:text-blue transition-colors cursor-default">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Second Column Card */}
              <div className="bg-gradient-to-br from-light-blue to-blue/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-blue/20">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-blue rounded-full mr-3"></div>
                  <h3 className="font-semibold text-lg text-blue">Specialized Systems</h3>
                </div>
                <ul className="space-y-4">
                  {servicesListCont.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-base leading-relaxed hover:text-blue transition-colors cursor-default">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}