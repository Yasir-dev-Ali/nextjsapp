'use client';

import Link from 'next/link';



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6">
        <h1 className="text-5xl font-bold mb-4">Build Amazing Web Experiences</h1>
        <p className="text-lg mb-6 max-w-lg">Create modern, fast, and scalable applications with ease.</p>
        <Link href="/signup" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <FeatureCard title="Lightning Fast" description="Optimized for performance and speed." />
          <FeatureCard title="Secure & Reliable" description="Industry-standard security features." />
          <FeatureCard title="User Friendly" description="Easy to use, simple, and intuitive." />
          <FeatureCard title="SEO Optimized" description="Boost your visibility on search engines." />
          <FeatureCard title="Mobile Responsive" description="Looks great on any device." />
          <FeatureCard title="24/7 Support" description="We’re always here to help." />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <TestimonialCard name="Alice Johnson" text="This platform is fantastic! It transformed my business." />
          <TestimonialCard name="Michael Smith" text="Super easy to use and extremely efficient!" />
          <TestimonialCard name="Emily Davis" text="I love the design and functionality!" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Terms of Service</Link>
        </div>
      </footer>
    </main>
  );
}

// Feature Card Component
function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
      <p className="text-gray-800 italic">{text}</p>
      <h4 className="text-lg font-semibold mt-4">{name}</h4>
    </div>
  );
}
