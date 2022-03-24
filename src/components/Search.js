import React from "react";

const Search = ({ handleSearchTodo }) => {
  return (
    <div className="search">
      <input
        onChange={(event) => handleSearchTodo(event.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;