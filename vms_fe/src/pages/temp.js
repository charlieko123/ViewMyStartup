import React, { useState } from "react";
import SearchBar from "../components/SearchBar.js";
import SearchBarSmall from "../components/SearchBarSmall.js";

const SearchTest = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "green",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: "white" }}>검색창 테스트</h2>
      <SearchBar
        value={searchQuery}
        onChange={handleSearchChange}
        onClear={handleClearSearch}
      />
      <SearchBarSmall value={searchQuery} onChange={handleSearchChange} />
      {searchQuery && (
        <p style={{ color: "white", marginTop: "20px" }}>
          입력된 검색어: {searchQuery}
        </p>
      )}
    </div>
  );
};

export default SearchTest;
