import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CountryListVariables = Types.Exact<{
  filter?: Types.Maybe<Types.CountryFilterInput>;
}>;


export type CountryList = { __typename: 'Query', countries: Array<{ __typename: 'Country', code: string, name: string, emoji: string, capital?: Types.Maybe<string> }> };


export const CountryListDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CountryList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CountryFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}}]}}]}}]};

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
 *      filter: // value for 'filter'
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