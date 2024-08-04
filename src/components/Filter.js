import React from 'react'

function Filter({onFilter}) {
    const handleChange=(event) => {
        onFilter(event.target.checked)
    }

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleChange} />
        Show Greased Hogs
      </label>
    </div>
  );
}

export default Filter;