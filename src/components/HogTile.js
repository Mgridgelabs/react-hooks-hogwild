import React, { useState } from 'react'

function HogTile({hog}) {
    const [showDetails, setshowDetails]=useState(false)

    const handleClick =()=> {
        setshowDetails(!showDetails)
    };

    return (
        <div className="ui eight wide column">
          <div className="ui card" onClick={handleClick}>
            <div className="image">
              <img src={hog.image} alt={hog.name} />
            </div>
            <div className="content">
              <div className="header">{hog.name}</div>
            </div>
            {showDetails && (
              <div className="extra content">
                <p>Specialty: {hog.specialty}</p>
                <p>Weight: {hog.weight}</p>
                <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                <p>Highest Medal Achieved: {hog.highest_medal}</p>
              </div>
            )}
          </div>
        </div>
      );
}

export default HogTile;