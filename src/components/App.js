import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import Filter from "./Filter";
import Sort from "./Sort";
import hogs from "../porkers_data";

function App() {
  const [hogsState, setHogsState] = useState(hogs); // Changed variable name to avoid confusion
  const [greasedFilter, setGreasedFilter] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const handleFilterChange = (isGreased) => {
    setGreasedFilter(isGreased);
  };

  const handleSortChange = (criteria) => {
    setSortBy(criteria);
  };

  const filteredHogs = hogsState.filter(hog => !greasedFilter || hog.greased);
  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "weight") {
      return a.weight - b.weight;
    }
    return 0;
  });

  return (
    <div className="App">
      <Nav />
      <Filter onFilter={handleFilterChange} />
      <Sort onSort={handleSortChange} />
      <div className="ui grid container">
        {sortedHogs.map(hog => (
          <HogTile key={hog.name} hog={hog} />
        ))}
      </div>
    </div>
  );
}

export default App;