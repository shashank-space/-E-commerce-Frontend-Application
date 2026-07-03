function SortDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 rounded-xl px-4 py-3 w-full"
    >
      <option value="">Sort By</option>

      <option value="price-low">
        Price: Low → High
      </option>

      <option value="price-high">
        Price: High → Low
      </option>

      <option value="rating">
        Highest Rated
      </option>

      <option value="name">
        Name (A-Z)
      </option>
    </select>
  );
}

export default SortDropdown;