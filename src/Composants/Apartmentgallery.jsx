import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Appartementgallery() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch('/logements.json')
      .then(res => res.json())
      .then(data => {
        const selected = data.find(item => item.id === id);
        setLogement(selected);
      });
  }, [id]);

  if (!logement) return <p>Chargement...</p>;

  return (
    <div>
      <h2>{logement.title}</h2>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
      {/* Ajoutez plus d’infos ici si nécessaire */}
    </div>
  );
}

export default Appartementgallery;
