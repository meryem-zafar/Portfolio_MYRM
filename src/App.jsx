import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './Components/Navbar/Navbar';
import PremiumHero from './Components/PremiumHero/PremiumHero';
import FloatingSkillsCloud from './Components/FloatingSkillsCloud/FloatingSkillsCloud';
import PremiumProjects from './Components/PremiumProjects/PremiumProjects';
import ExperienceTimeline from './Components/ExperienceTimeline/ExperienceTimeline';
import EducationSection from './Components/EducationSection/EducationSection';
import AchievementsSection from './Components/AchievementsSection/AchievementsSection';
import Contact from './Components/Contacct/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-shell bg-gradient-to-b from-[#060816] via-[#0B1120] to-[#060816]">
      <Navbar />
      <PremiumHero />
      <FloatingSkillsCloud />
      <PremiumProjects />
      <ExperienceTimeline />
      <EducationSection />
      <AchievementsSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
