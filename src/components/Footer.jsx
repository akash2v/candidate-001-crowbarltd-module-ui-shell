import React from "react";
import styles from "./styles";

const Footer = ({ onNavigate }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "raffles", label: "Raffles" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <nav style={styles.footerNav}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={styles.footerNavLink}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#FF5722";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#757575";
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p style={styles.footerText}>
          © 2025 CrowbarLtd. Industrial-strength digital operations.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
