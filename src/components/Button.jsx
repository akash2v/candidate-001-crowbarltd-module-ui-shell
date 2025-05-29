import React, { useState } from "react";
import styles from "./styles";

const Button = ({ children, onClick, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      onClick && onClick(href.slice(1));
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      style={{
        ...styles.btn,
        ...(isHovered ? styles.btnHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
};

export default Button;
