import React, { useState } from 'react';

function Dropdown({ title, content, className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <div className={`dropdown-header ${className || ''}`} onClick={toggle}>
        <h6>{title}</h6>
        <div className="dropdown-icon">
          {isOpen ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="dropdown-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
