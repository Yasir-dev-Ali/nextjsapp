// Services Section Component
function ServicesSection() {
    return (
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            We offer a range of services to help you build and scale your digital presence.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Development"
              description="Creating modern, scalable, and responsive websites."
            />
            <ServiceCard
              title="UI/UX Design"
              description="Designing user-friendly and visually appealing interfaces."
            />
            <ServiceCard
              title="SEO Optimization"
              description="Improving your website’s visibility on search engines."
            />
            <ServiceCard
              title="Mobile App Development"
              description="Building cross-platform and native mobile applications."
            />
            <ServiceCard
              title="E-Commerce Solutions"
              description="Developing powerful online stores and payment integrations."
            />
            <ServiceCard
              title="Custom Software"
              description="Tailor-made solutions to meet your business needs."
            />
          </div>
        </div>
      </section>
    );
  }
  
  // Service Card Component
  function ServiceCard({ title, description }: { title: string; description: string }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  }
  
  export default ServicesSection;
  