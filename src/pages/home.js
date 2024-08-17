import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Features from '../components/features';
import Build from '../components/build';
import Footer from '../components/footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Build />
      <Footer />
    </div>
  );
}

export default Home;