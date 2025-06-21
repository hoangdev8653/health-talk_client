import React from "react";

interface SortValueProps {
  sortOrder?: string;
  onChange?: (value: string) => void;
}

const SortValue: React.FC<SortValueProps> = ({ sortOrder, onChange }) => {
  return (
    <div className="flex items-center">
      <span>Sort by</span>
      <select
        title="sort by"
        value={sortOrder}
        onChange={(e) => onChange?.(e.target.value)}
        className="border p-1 bg-white text-black"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};

export default SortValue;
