import React from "react";
import styles from "./styles";
import Card from "./Card";

const ContactSection = () => {
  const contactOptions = [
    {
      title: "Technical Consultation",
      description:
        "Schedule a technical deep-dive session to discuss your infrastructure requirements and optimization strategies.",
      buttonText: "Schedule Consultation",
    },
    {
      title: "Project Inquiry",
      description:
        "Submit detailed project specifications for comprehensive technical evaluation and implementation roadmap.",
      buttonText: "Submit Inquiry",
    },
  ];

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.sectionTitle}>
        <span style={styles.toolIcon}></span>
        Contact
      </h2>
      <p style={styles.sectionText}>
        Ready to implement industrial-strength digital solutions? Get in touch with our engineering team.
      </p>
      <div style={styles.grid}>
        {contactOptions.map((option, index) => (
          <Card
            key={index}
            title={option.title}
            hasButton={true}
            buttonText={option.buttonText}
            onButtonClick={() => console.log(`${option.title} clicked`)}
          >
            {option.description}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
