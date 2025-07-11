export default function CareersPage() {
  return (
    <main className="bg-white text-black min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        At Rose Sing Eastham and Associates, Inc., we are always looking for talented and passionate individuals to join our team. Whether you're an experienced professional or just starting your career, we offer opportunities to grow and make a difference in the industry.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="/careers/apply"
          className="bg-blue text-white px-6 py-3 rounded-lg text-lg hover:bg-light-blue transition duration-300"
        >
          Apply Now
        </a>
        <a
          href="/contact-us"
          className="bg-gray-200 text-black px-6 py-3 rounded-lg text-lg hover:bg-gray-300 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}
