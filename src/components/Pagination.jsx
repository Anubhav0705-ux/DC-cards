import React from "react";

const Pagination = ({ page, setpage, totalPages }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setpage(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>

      <span className="page-number">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => setpage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;