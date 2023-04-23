import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <section className="btn-container">
      {categories.map((li) => (
        <button key={li} className="filter-btn" onClick={() => filterItems(li)}>
          {li}
        </button>
      ))}
    </section>
  );
};

export default Categories;
