import React, { useState, useEffect } from "react";
import GoogleFonts from "./components/GoogleFonts";
import Header from "./components/Header";
import Button from "./components/Button";
import Card from "./components/Card";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import RafflesSection from "./components/RafflesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import styles from "./components/styles";

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "raffles", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={styles.root}>
      <GoogleFonts />
      <div style={styles.blueprintGrid}></div>
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main style={styles.main}>
        <div style={styles.container}>
          <HeroSection onNavigate={handleNavigate} />
          <ServicesSection />
          <RafflesSection />
          <ContactSection />
        </div>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
