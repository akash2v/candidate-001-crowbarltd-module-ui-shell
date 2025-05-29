import React, { useState } from "react";
import styles from "./styles";
import Button from "./Button";

const Card = ({ title, children, hasButton, buttonText, onButtonClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardText}>{children}</p>
      {hasButton && <Button onClick={onButtonClick}>{buttonText}</Button>}
    </div>
  );
};

export default Card;
