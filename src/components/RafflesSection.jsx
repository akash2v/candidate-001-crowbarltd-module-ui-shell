import React from "react";
import styles from "./styles";
import Card from "./Card";

const RafflesSection = () => {
  const raffleServices = [
    {
      title: "Fair Distribution Engine",
      description:
        "Cryptographically secure random number generation ensuring completely fair and transparent raffle outcomes.",
    },
    {
      title: "Compliance Framework",
      description:
        "Built-in regulatory compliance tools meeting international lottery and gaming standards across jurisdictions.",
    },
  ];

  return (
    <section id="raffles" style={styles.section}>
      <h2 style={styles.sectionTitle}>
        <span style={styles.toolIcon}></span>
        Raffle Infrastructure
      </h2>
      <p style={styles.sectionText}>
        Robust raffle and lottery infrastructure with advanced security protocols and fair distribution algorithms.
      </p>
      <div style={styles.grid}>
        {raffleServices.map((service, index) => (
          <Card key={index} title={service.title}>
            {service.description}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RafflesSection;
