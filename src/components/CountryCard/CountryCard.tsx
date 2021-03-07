import React from 'react';
import { gql } from '@apollo/client';
import { Box } from '@chakra-ui/react';

type CountryCardProps = {
    country: any;
}

function CountryCard({ country }: CountryCardProps) {
    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        {country.flag.emoji} {country.name}, {country.capital}
      </Box>
  );
}

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
    `
}

export default CountryCard;
