import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { HiFlag } from 'react-icons/hi';
import { Box, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { CountryCardCountry } from './__generated__/CountryCardCountry.fragment';

type CountryCardProps = {
  country: CountryCardCountry;
};

const CountryCard: FC<CountryCardProps> = ({ country }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={6} overflow="hidden" data-testid="countryCard">
      <HStack spacing={4}>
        <Text fontSize="4xl">{country.emoji}</Text>
        <VStack spacing={2} align="start">
          <Link as={RouterLink} to={`/countries/${country.code}`} fontWeight="bold">
            {country.name}
          </Link>
          <HStack spacing={4}>
            <HStack spacing={1}>
              <HiFlag />
              <Text>{country.capital || '-'}</Text>
            </HStack>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default CountryCard;
