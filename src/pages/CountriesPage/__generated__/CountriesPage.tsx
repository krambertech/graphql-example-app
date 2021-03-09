import * as Types from '../../../__generated__/types';

import { CountryCard_Country } from '../../../components/CountryCard/__generated__/CountryCard';
import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CountryListVariables = Types.Exact<{ [key: string]: never; }>;


export type CountryList = { __typename: 'Query', countries?: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'Country', _id?: Types.Maybe<string>, area?: Types.Maybe<number> }
    & CountryCard_Country
  )>>> };


export const CountryListDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CountryList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"countries"},"name":{"kind":"Name","value":"Country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"area"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryCard_Country"}}]}}]}},...CountryCard_Country.definitions]};

/**
 * __useCountryList__
 *
 * To run a query within a React component, call `useCountryList` and pass it any options that fit your needs.
 * When your component renders, `useCountryList` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryList({
 *   variables: {
 *   },
 * });
 */
export function useCountryList(baseOptions?: Apollo.QueryHookOptions<CountryList, CountryListVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountryList, CountryListVariables>(CountryListDocument, options);
      }
export function useCountryListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountryList, CountryListVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountryList, CountryListVariables>(CountryListDocument, options);
        }
export type CountryListHookResult = ReturnType<typeof useCountryList>;
export type CountryListLazyQueryHookResult = ReturnType<typeof useCountryListLazyQuery>;
export type CountryListQueryResult = Apollo.QueryResult<CountryList, CountryListVariables>;