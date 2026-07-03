function Filters({ categories, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 rounded-xl px-4 py-3 w-full"
    >
      <option value="all">All Categories</option>

      {categories.map((category) => (
        <option
          key={category}
          value={category}
        >
          {category}
        </option>
      ))}
    </select>
  );
}

export default Filters;