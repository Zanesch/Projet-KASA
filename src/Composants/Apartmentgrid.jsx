import React, { useEffect, useState } from 'react';
import './Apartmentgrid.css';

function AppartementsGrid() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => setLogements(data))
      .catch(error => console.error('Erreur lors du chargement des logements :', error));
  }, []);

  return (
    <div className="gallery-container">
      <div className="appartements-grid">
        {logements.map((logement) => (
          <div
            key={logement.id}
            className="appartement-card"
            style={{ backgroundImage: `url(${logement.cover})` }}
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
