import React from 'react';
import { Input } from 'antd';

const Search = ({ search, setSearch }) => {
  const handleChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  return (
    <div>
      <h2>Search</h2>
      <Input value={search} type="text" id="search" onChange={handleChange} />
    </div>
  );
};

export default Search;
