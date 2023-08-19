/**
 * ************************************
 *
 * @module PlantCard
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sum, Brandon Chmiel
 * @date 08/18/2023
 * @description deconstruct relevant props, then create the cards for the plants
 *
 * ************************************
 */

import React from 'react';
const PlantCard = (props) => {
  const { photo, plantName, DOB } = props;

  return (
    <div className="plantBox">
      <div className="photoAndInfoTag">
        <div className="plantPhoto">
          <img src={photo} alt="" />
        </div>
        <div className="plantName">{plantName}</div>
      </div>

      <div className="infoContainer">
        {/* for when data comes in from DB */}

        {/* <div className='plantDetail'>Species: {type}</div>
				<div className='plantDetail'>Last Watered: {lastWatered}</div>
				<div className='plantDetail'>Watering Frequency: {frequency}</div>
				<div className='plantDetail'>Soil Type: {soil}</div>
				<div className='plantDetail'>Last Potted: {lastPotted}</div>
				<div className='plantDetail'>Sunlight: {sunlight}</div>
				<div className='plantDetail'>DOB: {DOB}</div>
				<div className='plantDetail'>Date Added: {dateAdded}</div> */}

        {/* for testing purposes */}
        <div className="plantDetail">Species: {}</div>
        <div className="plantDetail">Last Watered: {}</div>
        <div className="plantDetail">Watering Frequency: {}</div>
        <div className="plantDetail">Soil Type: {}</div>
        <div className="plantDetail">Last Potted: {}</div>
        <div className="plantDetail">Sunlight: {}</div>
        <div className="plantDetail">DOB: {DOB}</div>
        <div className="plantDetail">Date Added: {}</div>
      </div>
    </div>
  );
};

export default PlantCard;
