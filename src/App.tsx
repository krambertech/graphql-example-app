import React from 'react';
import { gql, useQuery } from '@apollo/client';
import CountryCard from './components/CountryCard';

const COUNTRIES = gql`
  query GetCountries {
    countries: Country {
      _id
      ...CountryCard_Country
    }
  }
  ${CountryCard.fragments.country}
`;

function App() {
  const countries = useQuery<any>(COUNTRIES);

  if (!countries.data) {
    return null;
  }

  return (
    <div className="App">
      {countries.data.countries.map((country: any) => (
        <CountryCard key={country._id} country={country} />
      ))}
    </div>
  );
}

export default App;
