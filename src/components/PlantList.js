import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants }) {
  const listPlants = plants.map(plant => {
    return (
      <PlantCard key={plant.id} plant={plant} />
    )
  })
  
  return (
    <ul className="cards">
      {listPlants}
    </ul>
  );
}

export default PlantList;
