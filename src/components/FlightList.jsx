// components/FlightList.js
import React from 'react';
import FlightItem from './FlightItem';

const FlightList = ({ flights }) => {
  if (flights.length === 0) {
    return <p>No flights found.</p>;
  }
  
  return (
    <div className="flight-list">
      {flights?.itineraries?.map((flight) => (
        <FlightItem key={flight.id} flight={flight} destinationImg={flights?.destinationImageUrl}/>
      ))}
    </div>
  );
};

export default FlightList;