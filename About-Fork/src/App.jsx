import React from "react";
import ParticlesComponent from "./components/ParticlesComponent"; // make sure this path is correct

const About = () => {
  return (
    <div style={styles.page}>
      {/* Particle background */}
      <ParticlesComponent />

      <h1 style={styles.heading}></h1>

      <img
        src="/About us.jpg"
        alt="About Us"
        style={styles.headerImage}
      />

      <div style={styles.container}>
        <p style={styles.paragraph}>
          GreenRank is an AI-powered sustainability platform built by a passionate team aiming to make eco-friendly living easier and smarter. We help users understand their environmental impact through features like carbon footprint analysis, garbage zone detection, EV charging station maps, green space discovery, and a carbon emission radar. Our mission is to drive real-world change by making sustainability practical, data-driven, and accessible. What sets GreenRank apart is its all-in-one, location-based approach that turns awareness into meaningful action.
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 30px",
    position: "relative",        // ⬅️ Add this
    overflow: "hidden",          // ⬅️ Prevent scroll from particles
  },
  heading: {
    color: "#fff",
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "40px",
  },
  headerImage: {
    maxWidth: "60%",
    width: "450px",
    marginTop: "20px",
    marginBottom: "60px",
  },
  container: {
    backgroundColor: "#0d0d0d",
    borderRadius: "20px",
    border: "1.5px solid #1de9b6",
    boxShadow: "0 0 20px #1de9b6",
    padding: "35px 25px",
    width: "85%",
    maxWidth: "600px",
    textAlign: "center",
    zIndex: 1,                   // ⬅️ Ensure content is above particles
  },
  paragraph: {
    color: "#ccc",
    fontSize: "1rem",
    lineHeight: "1.7",
  },
};

export default About;
