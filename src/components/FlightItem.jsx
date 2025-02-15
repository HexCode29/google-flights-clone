// components/FlightItem.js
import React, { useState } from 'react';
import { CheapestTag, ShortestTag } from './styled/Tags.tsx';

const FlightItem = ({ flight }) => {
const leg = flight?.legs?.[0];
const totalMinutes = leg?.durationInMinutes;
const arrival = leg?.arrival;
const arrivalDate = new Date(arrival);
const departure = leg?.departure;
const departureDate = new Date(departure);

  // Calculate hours and minutes
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

  return (
    <div className="flight-card">
      <strong>Price: {flight?.price?.formatted}</strong><br/>
      <div className='flex flex-center items-center'>
        <small className='mt-small mr-s-small'>{leg?.carriers?.marketing?.[0]?.name}</small>
        <img src={leg?.carriers?.marketing?.[0]?.logoUrl} style={{width: "40px", height: "40px"}}/>
      </div> 
      <small>Duration: {hours} hours and {minutes} minutes</small> <br/>
      <small className='mt-small'>Arrival: {arrivalDate.toLocaleString()} {leg?.origin?.name}</small><br/>
      <small className='mt-small'>Departure: {departureDate.toLocaleString()}</small>
      <div className='mt-small'>
        {flight.tags.map(((x) => (
          x.includes('cheapest') ? <CheapestTag>{x}</CheapestTag> : <ShortestTag>{x}</ShortestTag>
        )))} 
      </div>
      {/* <p>From: {flight.origin} (Entity ID: {flight.originEntityId})</p>
      <p>To: {flight.destination} (Entity ID: {flight.destinationEntityId})</p>
      <p>Departure: {flight.departureTime}</p>
      <p>Arrival: {flight.arrivalTime}</p>
      <p>Price: {flight.price}</p> */}
    </div>
  );
};

export default FlightItem;