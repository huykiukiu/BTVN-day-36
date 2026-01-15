import React from "react";

export default function Products() {
  return (
    <div className="max-w-[1200px] mx-auto mt-5">
      <h1 className="text-3xl font-bold">Products</h1>
      <select>
        <option value="all">All</option>
        <option value="#">One</option>
        <option value="#">Two</option>
      </select>
      <input type="text" className="border px-3" placeholder="Tìm kiếm..." />
    </div>
  );
}
