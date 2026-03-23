import React from "react";

const Charactercard = ({ data, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image">
        <img src={data.image} alt={data.name} />
      </div>
      <h3>{data.name}</h3>
      <p>{data.realName}</p>
    </div>
  );
};

export default Charactercard;