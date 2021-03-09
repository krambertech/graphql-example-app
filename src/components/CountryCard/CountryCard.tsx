import { gql } from '@apollo/client';
import { Box } from '@chakra-ui/react';
import { FCWithFragments } from '../../types';
import { CountryCard_Country } from './__generated__/CountryCard';

type CountryCardProps = {
  country: CountryCard_Country;
};

const CountryCard: FCWithFragments<CountryCardProps> = ({ country }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      {country.flag?.emoji} {country.name}, {country.capital} {country.area}
    </Box>
  );
};

CountryCard.fragments = {
  country: gql`
    fragment CountryCard_Country on Country {
      _id
      name
      capital
      area
      flag {
        _id
        emoji
      }
    }
  `,
};

export default CountryCard;
