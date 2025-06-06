// src/pages/About.jsx
import "../styles/About.css";

const About = () => {
  return (
    <section id="a-propos" className="about">
      <div className="about-container">
        <h2>À propos</h2>
        <p>
          Développeur fullstack avec une approche orientée solution, je mets mes
          compétences au service de projets personnalisés, robustes et
          évolutifs. Mon objectif est de fournir des applications qui répondent
          précisément aux besoins métiers de mes clients.
        </p>

        <h3>Parcours</h3>
        <ul className="about-list">
          <li>Bac+2 – Développement Web (Epitech)</li>
          <li>Bac+3 – DevOps (La Capsule)</li>
          <li>En cours – Bac+5 Architecte Logiciel (Epitech)</li>
        </ul>

        <h3>Expérience professionnelle</h3>
        <ul className="about-list">
          <li>1 an chez Sogeti – développement d'applications métiers</li>
          <li>1 an professeur à Epitech</li>
          <li>En poste (2 ans) à la DGA – fin de formation en ingénierie logicielle</li>
        </ul>

        <h3>Valeurs de travail</h3>
        <p>
          J’accorde une grande importance à l’écoute, la clarté des échanges et
          la fiabilité technique. Mon but : vous accompagner de manière
          rigoureuse pour bâtir des outils durables, performants et utiles.
        </p>
      </div>
    </section>
  );
};

export default About;
