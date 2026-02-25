import React, { useState } from "react";
import Charactercard from "../components/Charactercard";
import Pagination from "../components/Pagination";
import Charactermodel from "../components/Charactermodel";

const Characterpages = ({ character, page, setpage }) => {
  const [showModal, setshowModal] = useState(false);
  const [selectcharacter, setselectcharacter] = useState(null);

  return (
    <div className="page">
      <h1>Marvel Characters</h1>

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

      <Pagination page={page} setpage={setpage} />
    </div>
  );
};

export default Characterpages;