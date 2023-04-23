import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((li) => li.category))];

function App() {
  const [memuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section>
        <h2 className="title">Our Menu</h2>
      </section>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu memuItems={memuItems} />
    </main>
  );
}

export default App;
