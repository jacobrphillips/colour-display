import React from "react";
import "./SearchColor.css";

const SearchColor = ({ currentColor, handleSubmit, colorInputHandler }) => {
  return (
    <form className="search-color" onSubmit={handleSubmit} autoComplete="off">
      <input
        id="search-bar"
        type="text"
        value={currentColor}
        onChange={(e) => colorInputHandler(e.target.value)}
        placeholder="Add color name"
      />
    </form>
  );
};

export default SearchColor;
