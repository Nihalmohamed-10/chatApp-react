
import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className='pagination'>
      {[...Array(totalPages).keys()].map((page) => (
        <button key={page + 1} onClick={() => onPageChange(page + 1)} className={page + 1 === currentPage ? 'active' : ''}>
          {page + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;