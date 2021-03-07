import React from 'react';
import { gql, useQuery } from '@apollo/client';
import CountryCard from './components/CountryCard';
import { Heading } from '@chakra-ui/react';

const COUNTRIES = gql`
  query GetCountries {
    countries: Country {
      _id
      ...CountryCard_Country
    }
  }
  ${CountryCard.fragments.country}
`;

const App: React.FC = () => {
  const countries = useQuery<any>(COUNTRIES);

  if (!countries.data) {
    return null;
  }

  return (
    <div className="App">
      <Heading>Countries</Heading>
      {countries.data.countries.map((country: any) => (
        <CountryCard key={country._id} country={country} />
      ))}
    </div>
  );
};

export default App;
