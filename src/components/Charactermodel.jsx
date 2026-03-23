import React from "react";

const Charactermodel = ({ characters, onClose }) => {
  if (!characters) return null;

  return (
    <div className="model-overlay" onClick={onClose}>
      <div className="model" onClick={(e) => e.stopPropagation()}>
        <img src={characters.image} alt={characters.name} />

        <h2>{characters.name}</h2>
        <p><strong>Real Name:</strong> {characters.realName}</p>
        <p><strong>Power:</strong> {characters.power}</p>
        <p><strong>Team:</strong> {characters.team}</p>
        <p><strong>Weapon:</strong> {characters.weapon}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Charactermodel;