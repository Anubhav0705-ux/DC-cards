import React, { useState } from "react";
import Charactercard from "../components/Charactercard";
import Pagination from "../components/Pagination";
import Charactermodel from "../components/Charactermodel";

const Characterpages = ({ character, page, setpage, totalPages }) => {
  const [showModal, setshowModal] = useState(false);
  const [selectcharacter, setselectcharacter] = useState(null);

  return (
    <div className="page">

      {/* 🔵 DC LOGO */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"
        alt="DC Logo"
        className="dc-logo"
      />

      <h1>DC Universe</h1>

      <div className="grid">
        {character.map((char) => (
          <Charactercard
            key={char.id}
            data={char}
            onClick={() => {
              setselectcharacter(char);
              setshowModal(true);
            }}
          />
        ))}
      </div>

      {showModal && (
        <Charactermodel
          characters={selectcharacter}
          onClose={() => setshowModal(false)}
        />
      )}

      <Pagination
        page={page}
        setpage={setpage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Characterpages;