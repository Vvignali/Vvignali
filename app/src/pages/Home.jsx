// src/pages/Home.jsx
import "../styles/Home.css";

const Home = () => {
  return (
    <section id="accueil" className="home">
      <div className="home-content">
        <div className="home-text">
          <h1>Développeur Fullstack</h1>
          <p>
            Je conçois des solutions digitales sur mesure, robustes et
            performantes, en accompagnant chaque client dans la concrétisation
            de son application.
          </p>
          <p className="home-stack">React • Java • Swift • Python</p>
          <div className="home-buttons">
            <a href="#contact" className="home-btn">Me contacter</a>
            <a href="#projets" className="home-btn secondary">Voir mes projets</a>
          </div>
        </div>
        <div className="home-photo">
          <img src="/images/og-default.png" alt="Vincent Vignali portrait" />
        </div>
      </div>
    </section>
  );
};

export default Home;
