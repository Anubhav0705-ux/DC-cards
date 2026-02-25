import React from "react";

const Pagination = ({ page, setpage }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setpage(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>

      <button onClick={() => setpage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;