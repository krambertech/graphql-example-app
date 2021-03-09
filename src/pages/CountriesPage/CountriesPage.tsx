import { gql, useQuery } from '@apollo/client';
import { Heading } from '@chakra-ui/react';
import CountryCard from '../../components/CountryCard';

const COUNTRIES = gql`
  query CountryList {
    countries: Country {
      _id
      area
      population
      ...CountryCard_Country
    }
  }
  ${CountryCard.fragments.country}
`;

const CountriesPage: React.FC = () => {
  const countries = useQuery<any>(COUNTRIES);

  if (!countries.data) {
    return null;
  }

  return (
    <div>
      <Heading>Countries</Heading>
      {countries.data.countries.map((country: any) => (
        <CountryCard key={country._id} country={country} />
      ))}
    </div>
  );
};

export default CountriesPage;
