'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-lg mb-6">Your one-stop solution for amazing web experiences.</p>
        <Link href="/signup" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* <FeatureCard title="Fast & Secure" description="We prioritize speed and security for a seamless experience." /> */}
          {/* <FeatureCard title="User-Friendly" description="Our interface is designed for ease of use and navigation." /> */}
          {/* <FeatureCard title="24/7 Support" description="We're here to help you anytime you need us." /> */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* <TestimonialCard name="John Doe" text="This platform changed the way I work!" /> */}
          {/* <TestimonialCard name="Jane Smith" text="Super intuitive and feature-rich!" /> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2024 Your Brand. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Terms of Service</Link>
        </div>
      </footer>
    </main>
  );
}




