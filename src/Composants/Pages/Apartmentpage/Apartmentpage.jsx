import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import './Apartmentpage.scss';

function Apartmentpage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apartment, setApartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/logements.json')
      .then((res) => {
        if (!res.ok) throw new Error('Erreur de chargement');
        return res.json();
      })
      .then((data) => {
        const found = data.find((apt) => apt.id === id);
        if (found) {
          setApartment(found);
          setCurrentIndex(0);
        } else {
          navigate('/404', { replace: true }); //  Redirection si non trouvé
        }
      })
      .catch((err) => {
        console.error(err);
        navigate('/404', { replace: true }); //  Redirection si erreur fetch
      })
      .finally(() => setLoading(false));
  }, [id, navigate]);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? apartment.pictures.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === apartment.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} style={{ color: i < rating ? '#FF6060' : '#E3E3E3' }}>★</span>
    ));
  };

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="apartment-container">
      <div className="apartment-slider">
        <img
          src={apartment.pictures[currentIndex]}
          alt={`${apartment.title} image ${currentIndex + 1}`}
          className="apartment-image"
        />
        <div className="image-counter">
          {currentIndex + 1} / {apartment.pictures.length}
        </div>
        <i className="fa-solid fa-chevron-left chevron chevron-left" onClick={prevImage} />
        <i className="fa-solid fa-chevron-right chevron chevron-right" onClick={nextImage} />
      </div>

      <div className="apartment-header">
        <div className="left-info">
          <h1>{apartment.title}</h1>
          <p className="location">{apartment.location}</p>
          <div className="tags">
            {apartment.tags.map((tag, index) => (
              <span className="tag" key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="right-info">
          <div className="host">
            <span className="host-name">{apartment.host.name}</span>
            <img className="host-picture" src={apartment.host.picture} alt={apartment.host.name} />
          </div>
          <div className="rating">{renderStars(parseInt(apartment.rating))}</div>
        </div>
      </div>

      <div className="dropdown-grid">
        <Dropdown title="Description" content={apartment.description} className="Apartment-dropdown" />
        <Dropdown title="Équipements" content={apartment.equipments} className="Apartment-dropdown" />
      </div>
    </div>
  );
}

export default Apartmentpage;
