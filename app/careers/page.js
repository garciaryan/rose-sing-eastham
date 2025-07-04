export default function CareersPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen container">
      <div className="bg-blue text-white h-screen w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg mb-8">We are always looking for talented individuals to join our team.</p>
        <a href="/careers/apply" className="bg-white text-blue px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">
          Apply Now
        </a>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
        <ul className="list-disc list-inside">
          <li>Electrical Engineer</li>
          <li>Project Manager</li>
          <li>CAD Technician</li>
          <li>Field Inspector</li>
        </ul>
      </div>
    </div>
  );
}
