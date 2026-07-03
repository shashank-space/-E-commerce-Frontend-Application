function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
    <div className="flex justify-center items-center gap-3 mt-14">

      <button
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
        className="px-4 py-2 rounded-lg border disabled:opacity-50"
      >
        Previous
      </button>

      <span className="font-medium">
        {currentPage} / {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
        className="px-4 py-2 rounded-lg border disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;