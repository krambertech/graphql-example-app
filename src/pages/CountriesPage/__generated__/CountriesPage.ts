import * as Types from '../../../__generated__/types';

import { CountryCard_CountryFragment } from '../../../components/CountryCard/__generated__/CountryCard';
import { gql } from '@apollo/client';
import { CountryCard_CountryFragmentDoc } from '../../../components/CountryCard/__generated__/CountryCard';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CountryListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CountryListQuery = { __typename: 'Query', countries?: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'Country', _id?: Types.Maybe<string>, area?: Types.Maybe<number>, population: number }
    & CountryCard_CountryFragment
  )>>> };


export const CountryListDocument = gql`
    query CountryList {
  countries: Country {
    _id
    area
    population
    ...CountryCard_Country
  }
}
    ${CountryCard_CountryFragmentDoc}`;

/**
 * __useCountryListQuery__
 *
 * To run a query within a React component, call `useCountryListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountryListQuery(baseOptions?: Apollo.QueryHookOptions<CountryListQuery, CountryListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountryListQuery, CountryListQueryVariables>(CountryListDocument, options);
      }
export function useCountryListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountryListQuery, CountryListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountryListQuery, CountryListQueryVariables>(CountryListDocument, options);
        }
export type CountryListQueryHookResult = ReturnType<typeof useCountryListQuery>;
export type CountryListLazyQueryHookResult = ReturnType<typeof useCountryListLazyQuery>;
export type CountryListQueryResult = Apollo.QueryResult<CountryListQuery, CountryListQueryVariables>;