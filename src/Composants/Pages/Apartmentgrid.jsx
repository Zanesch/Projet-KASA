import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; //  Import pour la navigation
import './Apartmentgrid.scss';

function AppartementsGrid() {
  const [logements, setLogements] = useState([]);
  const navigate = useNavigate(); //  Initialiser la navigation

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => setLogements(data))
      .catch(error => console.error('Erreur lors du chargement des logements :', error));
  }, []);

  const handleClick = (id) => {
    navigate(`/appartement/${id}`); //  Redirection vers la page de détail
  };

  return (
    <div className="gallery-container">
      <div className="appartements-grid">
        {logements.map((logement) => (
          <div
            key={logement.id}
            className="appartement-card"
            style={{ backgroundImage: `url(${logement.cover})` }}
            onClick={() => handleClick(logement.id)} // Clic déclenche navigation
          >
            <div className="appartement-overlay">
              <h5>{logement.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppartementsGrid;
