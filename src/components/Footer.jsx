import React from "react";
import styles from "./styles";

const Footer = () => {

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>

        <p style={{ fontSize: 18, color: "#fff", marginBottom: 8 }}>
          info@crowbarltd.com
        </p>
        <p style={styles.footerText}>
          © 2025 CrowbarLtd. Registered Office: 71–75 Shelton St, Covent Garden,
          London WC2H 9JQ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
