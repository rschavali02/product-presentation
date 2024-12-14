import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Features from '../components/features';
import Build from '../components/build';
import Footer from '../components/footer';
import FAQ from '../components/faq';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Build />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;