// App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import FlightList from './components/FlightList';
import DUMMY_DATA from './data/dummy-data.json';

const App = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(DUMMY_DATA)
  const searchFlights = async ({origin = 'LOND', destination = 'NYCA', date, originEntityId = '27544008', destinationEntityId = '27537542'}) => {
    const options = {
      method: 'GET',
      url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights',
      params: {
        originSkyId: origin,
        destinationSkyId: destination,
        originEntityId,
        destinationEntityId,
        date: date,
        cabinClass: 'economy',
        adults: '1',
        sortBy: 'best',
        currency: 'USD',
        market: 'en-US',
        countryCode: 'US'
      },
      headers: {
        'x-rapidapi-key': '020a73e996msh82c916b22cbc854p10e14ejsnbf39910c75eb',
        'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
      }
    };
    try {
      setLoading(true);
      const response = await axios.request(options);
      // I am using dummy data from Sky Scrapper API Response because Rapis API somethimes not working
      setFlights(DUMMY_DATA?.data);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="App">
      <h1>Rapid Flights</h1>
      <SearchForm onSearch={searchFlights} loading={loading}/>
      {loading ? "Searching..." : <FlightList flights={flights} />}
    </div>
  );
};

export default App;