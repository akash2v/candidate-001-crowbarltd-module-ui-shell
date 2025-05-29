import React from "react";
import styles from "./styles";
import Button from "./Button";

const HeroSection = ({ onNavigate }) => (
  <section id="home" style={styles.hero}>
    <div style={styles.heroContent}>
      <h1 style={styles.heroTitle}>CrowbarLtd</h1>
      <p style={styles.heroSubtitle}>
        Digital-ops shell powering micro-services and raffle infrastructure—standing for reliability, efficiency, and industrial strength.
      </p>
      <Button href="#services" onClick={onNavigate}>
        Explore Services
      </Button>
    </div>
  </section>
);

export default HeroSection;
