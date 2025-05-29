import React from "react";
import styles from "./styles";
import Card from "./Card";

const ServicesSection = () => {
  const services = [
    {
      title: "Micro-Services Architecture",
      description:
        "Scalable, modular service architecture built for enterprise-level reliability and performance optimization.",
    },
    {
      title: "Digital Operations",
      description:
        "Comprehensive digital infrastructure management with industrial-strength monitoring and automation.",
    },
    {
      title: "System Integration",
      description:
        "Seamless integration solutions that connect disparate systems with military-grade precision and security.",
    },
  ];

  return (
    <section id="services" style={styles.section}>
      <h2 style={styles.sectionTitle}>
        <span style={styles.toolIcon}></span>
        Services
      </h2>
      <p style={styles.sectionText}>
        Industrial-grade digital operations and micro-service architecture designed for maximum reliability and efficiency.
      </p>
      <div style={styles.grid}>
        {services.map((service, index) => (
          <Card key={index} title={service.title}>
            {service.description}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
