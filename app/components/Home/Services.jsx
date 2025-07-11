export default function Services() {
  const servicesList = ['Electrical Design', 'Lighting Design', 'Short Circuit/Coordination\s Studies', 'Arc Flash Studies', 'Fire Alarm System Design', 'Mass Notification Services', 'Fire Alarm Systems', 'Public Address Systems', 'Data Centers', 'Uninterrupted Backup Systems', 'Structured Cabling Systems', 'Local Area Network Systems'];

  const servicesListCont = ['Wireless Lan Systems', 'School Intercom Systems', 'Master Clock Systems', 'Telephone Systems (VoIP & PBX)', 'Classroom Audio Visual Systems', 'Campus Emergency Phones and Area of Rescue', 'Pro Audio Sound Systems', 'Surveillance Camera Systems', 'Card Access Systems', 'Burglar Alarm Systems', 'Distributed Antenna Systems'];

  return (
    <div className="relative bg-gray-100 text-black grid grid-cols-12" id="services">
      <div className="half-1 lg:px-[50px] px-0 py-8 lg:col-span-5 col-span-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl mb-4 font-bold">Services</h1>
        <p className="text-2xl font-light">We offer a range of services to help you achieve your goals.</p>
      </div>
      <div className="bg-light-blue p-8 lg:p-17 half-2 lg:col-span-7 col-span-12 flex flex-col lg:flex-row justify-center text-xl lg:text-2xl">
        <ul className="w-full pr-4">
          {servicesList.map((service, index) => (
            <li key={index} className="mb-4">
              {service}
            </li>
          ))}
        </ul>
        <ul className="w-full ">
          {servicesListCont.map((service, index) => (
            <li key={index} className="mb-4">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}