export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">We would love to hear from you! Please fill out the form below.</p>
      <form className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">Send Message</button>
      </form>
    </div>
  )
}