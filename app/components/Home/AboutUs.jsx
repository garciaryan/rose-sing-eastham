import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="w-full grid grid-cols-12 relative" id="about-us">
      <div className="relative text-black col-span-12 lg:col-span-7 flex flex-col items-center justify-center p-8 lg:p-17 bg-light-blue">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-xl mb-8 indent-8 leading-9">
          RSE is located in Visalia&comma; CA and performs projects throughout the Central and Northern California areas. Our staff of engineering&comma; design&comma; inspection&comma; and CAD professionals can support projects of varying types and sizes. Our work experience includes projects such as clinics&comma; schools&comma; hospitals&comma; airport facilities&comma; corporate office headquarters&comma; jails&comma; telecommunication facilities&comma; and water treatment plants&comma; to name just a few. Our vast experience in project types exposes us to new and state-of-the-art products and technology&comma; which can be applied to specific jobs. Each project is approached with the owner&rsquo;s interest in mind. Our goal is to combine the owner&rsquo;s criteria with our technical expertise to produce systems that meet the specific requirements of the project. Factors that influence our design include life cycle costs&comma; energy conservation&comma; and function of each space&comma; aesthetics and ease of maintenance. We strive to produce contract documents that are clear in their intent and that promote competitive bidding. Whenever possible the materials and equipment specified will be readily available from local suppliers. Computer technology is used for production of specifications&comma; engineering calculations and billing procedures. RSE provides complete electrical design and engineering services including Fault&comma; Coordination&comma; Arc Flash and Load Flow studies.
        </p>
      </div>
      <div className="relative col-span-12 lg:col-span-5 ">
        <Image
          src="/unsplash-tower.jpg"
          alt="About Us"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
}
