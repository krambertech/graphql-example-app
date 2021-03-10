import React, { FC } from 'react';
import { HiFlag, HiUserGroup } from 'react-icons/hi';
import { Box, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { CountryCardCountry } from './__generated__/CountryCardCountry.fragment';
import formatNumber from '../../utils/formatNumber';

type CountryCardProps = {
  country: CountryCardCountry;
};

const CountryCard: FC<CountryCardProps> = ({ country }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={6} overflow="hidden">
      <HStack spacing={4}>
        <Text fontSize="4xl">{country.flag?.emoji}</Text>
        <VStack spacing={2} align="start">
          <Link fontWeight="bold">{country.name}</Link>
          <HStack spacing={4}>
            <HStack spacing={1}>
              <HiFlag />
              <Text>{country.capital || '-'}</Text>
            </HStack>
            <HStack spacing={1}>
              <HiUserGroup /> <Text>{formatNumber(country.population)}</Text>
            </HStack>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default CountryCard;
