import React from "react";

interface SearchbarProps {
  width: "large" | "small";
  placeholder: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ width, placeholder }) => {
  return (
    <input
      className={`searchBar ${
        width === "large" ? "searchBar--large" : "searchBar--small"
      }`}
      placeholder={placeholder}
    ></input>
  );
};

export default Searchbar;
