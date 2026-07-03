import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">

      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500"
      />

    </div>
  );
}

export default SearchBar;