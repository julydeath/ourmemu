import React from "react";

const Menu = ({ memuItems }) => {
  return (
    <div className="section-center">
      {memuItems.map((li) => (
        <article key={li.id} className="menu-item">
          <img src={li.img} alt="name" className="photo" />
          <div className="item-info">
            <header>
              <h4>{li.title}</h4>
              <h4 className="price">${li.price}</h4>
            </header>
            <p>{li.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Menu;
