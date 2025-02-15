// components/SearchForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import {SearchContainer, StyledDateInput} from './styled/Style';
import {ButtonWithIcon } from './styled/Button.tsx';
import { customStyles } from '../helpers.js';


const SearchForm = ({ onSearch, loading }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [originEntityId, setOriginEntityId] = useState('');
  const [destinationEntityId, setDestinationEntityId] = useState('');
  const [date, setDate] = useState('');
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    getAirports();
  }, [])

  const airportsOptions = [...airports, {skyId: 'LOND', entityId: '27544008'}, {skyId: 'LGW', entityId: '27544008'}].map((x) => ({...x, label: x.skyId, value: x.entityId}))
  const getAirports = async() => {
    const options = {
      method: 'GET',
      url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
      params: {
        query: 'new',
        locale: 'en-US'
      },
      headers: {
        'x-rapidapi-key': '020a73e996msh82c916b22cbc854p10e14ejsnbf39910c75eb',
        'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      setAirports(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ origin: origin?.skyId, destination: destination?.skyId, originEntityId: origin?.entityId, destinationEntityId: destination?.entityId, date });
  };

  return (
    <form onSubmit={handleSubmit}>
     <SearchContainer>
        <Select options={airportsOptions} styles={customStyles} placeholder="Origin (e.g., JFK)" onChange={(e) => setOrigin(e)} value={origin} required/>
        <Select options={airportsOptions.filter((x) => x.skyId !== origin?.skyId)} styles={customStyles} placeholder="Destination (e.g., LAX)" onChange={(e) => setDestination(e)} value={destination} required isDisabled={!origin}/>
      <StyledDateInput
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      {/* <Button type="submit">Search Flights</Button> */}
      <ButtonWithIcon text={'Search Flights'} onSubmit={handleSubmit} type="submit" loading={loading}/>
      </SearchContainer>
    </form>
  );
};

export default SearchForm;