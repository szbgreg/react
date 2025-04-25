import React from "react";

const Filter = ({ searchText, setSearchText, filterMonth, setFilterMonth }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Keresés..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      
      <select
        value={filterMonth}
        onChange={(e) => setFilterMonth(e.target.value)}
      >
        <option value="">Összes hónap</option>
        <option value="1">Január</option>
        <option value="2">Február</option>
        <option value="3">Március</option>
        <option value="4">Április</option>
        <option value="5">Május</option>
        <option value="6">Június</option>
        <option value="7">Július</option>
        <option value="8">Augusztus</option>
        <option value="9">Szeptember</option>
        <option value="10">Október</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  );
};

export default Filter;