import React from 'react';
import Hero from '../components/home/Hero'; // Your existing component
import PrincipalMessage from '../components/home/PrincipalMessage';
import LatestNews from '../components/home/LatestNews';
import UpcomingEvents from '../components/home/UpcomingEvents';
import Achievements from '../components/home/Achievements';
import Testimonials from '../components/home/Testimonials';
import GalleryPreview from '../components/home/GalleryPreview';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <main className="bg-slate-950 min-h-screen text-white font-jakarta overflow-hidden">
      <Hero /> 
      <PrincipalMessage />
      <Achievements />
      <UpcomingEvents />
      <LatestNews />
      <GalleryPreview />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Home;