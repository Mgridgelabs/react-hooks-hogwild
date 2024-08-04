import React from 'react'

function Sort({onSort}) {
    const handleChange =(event)=> {
        onSort(event.target.value)
    }

  return (
    <div>
    <label>
      Sort By:
      <select onChange={handleChange}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </label>
  </div>
);
}

export default Sort;