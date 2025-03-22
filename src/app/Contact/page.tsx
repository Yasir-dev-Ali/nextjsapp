// Contact Section Component
function ContactSection() {
    return (
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Have questions or want to work with us? Feel free to reach out.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 text-left font-medium">Name</label>
                <input type="text" placeholder="Your Name" className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-left font-medium">Email</label>
                <input type="email" placeholder="Your Email" className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-left font-medium">Message</label>
                <textarea placeholder="Your Message" rows={4} className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
  
            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-6 text-gray-700">
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 text-xl">📍</span>
                <p>123 Main Street, Your City, Country</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 text-xl">📞</span>
                <p>+1 234 567 890</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 text-xl">✉️</span>
                <p>contact@yourwebsite.com</p>
              </div>
              <div className="flex justify-center space-x-4 text-blue-600 text-2xl">
                <a href="#" className="hover:text-blue-800">🌍</a>
                <a href="#" className="hover:text-blue-800">📘</a>
                <a href="#" className="hover:text-blue-800">🐦</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default ContactSection;
  