import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Page navigation example" className="flex justify-center items-center p-5">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <a
            href="#"
            onClick={() => onPageChange(currentPage - 1)}
            className={`flex items-center justify-center px-4 h-10 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            } ...`}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <a
              href="#"
              onClick={() => onPageChange(pageNumber)}
              className={`flex items-center justify-center px-4 h-10 leading-tight ${
                pageNumber === currentPage ? "text-blue-600 bg-blue-50" : "text-gray-500 bg-white"
              } hover:bg-gray-100 ...`}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            onClick={() => onPageChange(currentPage + 1)}
            className={`flex items-center justify-center px-4 h-10 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            } ...`}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
