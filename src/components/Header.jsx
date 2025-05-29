import React from "react";
import styles from "./styles";

const Header = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "raffles", label: "Raffles" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        <a
          href="#"
          style={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
          }}
        >
          CrowbarLtd
        </a>
        <nav style={styles.nav}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                ...styles.navLink,
                ...(activeSection === item.id ? styles.navLinkActive : {}),
              }}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.target.style.color = "#FF5722";
                  e.target.style.borderColor = "#FF5722";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.target.style.color = "#ffffff";
                  e.target.style.borderColor = "transparent";
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
