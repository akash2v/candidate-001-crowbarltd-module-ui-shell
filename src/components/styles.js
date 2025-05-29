// src/components/styles.js
// Extracted styles from App.jsx

const styles = {
  root: {
    fontFamily: 'Roboto Mono, monospace',
    backgroundColor: '#212121',
    color: '#ffffff',
    lineHeight: '1.6',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
  },
  
  // Header Styles
  header: {
    backgroundColor: '#212121',
    borderBottom: '2px solid #FF5722',
    padding: '16px 24px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  
  headerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  },
  
  logo: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '28px',
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#FF5722',
    textDecoration: 'none',
    letterSpacing: '2px',
  },
  
  nav: {
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap',
  },
  
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontFamily: 'Oswald, sans-serif',
    textTransform: 'uppercase',
    fontWeight: '400',
    letterSpacing: '1px',
    padding: '8px 16px',
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  
  navLinkActive: {
    color: '#FF5722',
    borderColor: '#FF5722',
  },
  
  // Main Content
  main: {
    flex: 1,
    padding: '48px 24px',
  },
  
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  hero: {
    textAlign: 'center',
    padding: '48px 0',
    background: 'linear-gradient(135deg, #212121 0%, #2a2a2a 100%)',
    marginBottom: '48px',
    position: 'relative',
    overflow: 'hidden',
  },
  
  heroContent: {
    position: 'relative',
    zIndex: 2,
  },
  
  heroTitle: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '48px',
    textTransform: 'uppercase',
    marginBottom: '16px',
    color: '#FF5722',
    letterSpacing: '3px',
    margin: '0 0 16px 0',
  },
  
  heroSubtitle: {
    fontSize: '18px',
    color: '#757575',
    marginBottom: '24px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  
  section: {
    marginBottom: '48px',
    padding: '32px',
    backgroundColor: '#2a2a2a',
    borderLeft: '4px solid #FF5722',
  },
  
  sectionTitle: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '32px',
    textTransform: 'uppercase',
    color: '#FF5722',
    marginBottom: '24px',
    letterSpacing: '2px',
    margin: '0 0 24px 0',
    display: 'flex',
    alignItems: 'center',
  },
  
  sectionText: {
    fontSize: '16px',
    color: '#ffffff',
    marginBottom: '16px',
  },
  
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginTop: '24px',
  },
  
  card: {
    backgroundColor: '#212121',
    padding: '24px',
    border: '2px solid #757575',
    position: 'relative',
    transition: 'all 0.3s ease',
  },
  
  cardHover: {
    borderColor: '#FF5722',
    transform: 'translateY(-2px)',
  },
  
  cardTitle: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '20px',
    textTransform: 'uppercase',
    color: '#FF5722',
    marginBottom: '16px',
    margin: '0 0 16px 0',
  },
  
  cardText: {
    fontSize: '16px',
    color: '#ffffff',
    marginBottom: '16px',
  },
  
  btn: {
    display: 'inline-block',
    backgroundColor: '#FF5722',
    color: 'white',
    padding: '16px 24px',
    textDecoration: 'none',
    fontFamily: 'Oswald, sans-serif',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: '1px',
    border: '2px solid #FF5722',
    transition: 'all 0.3s ease',
    marginTop: '16px',
    cursor: 'pointer',
  },
  
  btnHover: {
    backgroundColor: 'transparent',
    color: '#FF5722',
  },
  
  // Footer Styles
  footer: {
    backgroundColor: '#1a1a1a',
    borderTop: '2px solid #FF5722',
    padding: '32px 24px',
    marginTop: 'auto',
  },
  
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  
  footerNav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    marginBottom: '24px',
    flexWrap: 'wrap',
  },
  
  footerNavLink: {
    color: '#757575',
    fontSize: '14px',
    textDecoration: 'none',
    fontFamily: 'Oswald, sans-serif',
    textTransform: 'uppercase',
    transition: 'color 0.3s ease',
  },
  
  footerText: {
    color: '#757575',
    fontSize: '14px',
    fontFamily: 'Roboto Mono, monospace',
  },
  
  toolIcon: {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    backgroundColor: '#FF5722',
    marginRight: '8px',
    clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
  },
  
  blueprintGrid: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `
      linear-gradient(rgba(255, 87, 34, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 87, 34, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
    pointerEvents: 'none',
    zIndex: -1,
  },
};

export default styles;
