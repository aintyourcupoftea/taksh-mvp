import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Taksh As A Service</h1>
      <p className="text-xl mb-8">Gain excellence in tech skills through packaged projects</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        {/* Add ProjectCard components here */}
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
        {/* Add testimonial components here */}
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Daily Dose of Content</h2>
        {/* Add content promoting project-based learning */}
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">About Taksh</h2>
        <p>Information about Taksh and its mission...</p>
      </section>
      <Link 
        to="/projects"
        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-600 transition-colors"
      >
        Get Started
      </Link>
    </div>
  );
};

export default LandingPage;