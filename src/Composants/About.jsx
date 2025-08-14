import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './About.scss';
import Dropdown from './Dropdown.jsx';

function About() {
  const cards = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: 'Responsabilité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div className="Main-About">
      <div className="Image-About">
        <img src="/Image-About.png" alt="photo de montagne" />
      </div>
      <div className="About-grid">
        {cards.map((card, index) => (
          <Dropdown
            key={index}
            title={card.title}
            content={card.content}
            className="About-card" // Ajout de la classe spécifique à About
          />
        ))}
      </div>
    </div>
  );
}

export default About;
