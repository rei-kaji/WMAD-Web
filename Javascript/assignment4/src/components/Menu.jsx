import React from "react";

const menuItem = [
  "Night",
  "Sunset",
  "Genus altostratus (AS)",
  "Monsoons",
  "Lightning",
  "Wind",
  "Rain",
  "Cloud formation",
  "Party Cloudy",
  "Genus cirrus (Ci)",
  "Drizzle",
  "Mountain effects",
  "Haze",
  "Genus cirrocumulus (Cc)",
  "Polar deserts",
  "",
  "Sunny",
  "Genus altocumulus (Ac)",
  "Rainforests",
];

const Menu = () => {
  return (
    <div className="menu">
      {menuItem.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default Menu;
