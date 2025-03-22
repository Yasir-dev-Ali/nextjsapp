// About Section Component
function AboutSection() {
    return (
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            We are dedicated to building modern, fast, and scalable web applications.
            Our goal is to provide seamless user experiences with cutting-edge technology.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AboutCard title="Our Mission" description="Empowering businesses and individuals through technology." />
            <AboutCard title="Our Vision" description="To create innovative, scalable, and user-friendly solutions." />
            <AboutCard title="Our Values" description="Commitment to quality, integrity, and continuous learning." />
          </div>
        </div>
      </section>
    );
  }
  
  // About Card Component
  function AboutCard({ title, description }: { title: string; description: string }) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  }
  
  export default AboutSection;
  