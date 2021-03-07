import React from 'react';
import { gql } from '@apollo/client';
import { Box } from '@chakra-ui/react';
import { FCWithFragments } from '../../types';

type CountryCardProps = {
  country: any;
};

const CountryCard: FCWithFragments<CountryCardProps> = ({ country }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      {country.flag.emoji} {country.name}, {country.capital}
    </Box>
  );
};

CountryCard.fragments = {
  country: gql`
    fragment CountryCard_Country on Country {
      _id
      name
      capital
      flag {
        _id
        emoji
      }
    }
  `,
};

export default CountryCard;
