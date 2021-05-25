import * as Types from '../../../__generated__/types';

import { CountryCardCountry } from '../../../components/CountryCard/__generated__/CountryCardCountry.fragment';
import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CountryDetailsVariables = Types.Exact<{
  code: Types.Scalars['ID'];
}>;


export type CountryDetails = { __typename: 'Query', country?: Types.Maybe<{ __typename: 'Country', code: string, name: string, native: string, capital?: Types.Maybe<string>, emoji: string, phone: string, currency?: Types.Maybe<string>, continent: { __typename: 'Continent', code: string, name: string, countries: Array<(
        { __typename: 'Country', code: string }
        & CountryCardCountry
      )> }, states: Array<{ __typename: 'State', code?: Types.Maybe<string>, name: string }>, languages: Array<{ __typename: 'Language', code: string, name?: Types.Maybe<string>, native?: Types.Maybe<string>, rtl: boolean }> }> };


export const CountryDetailsDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CountryDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"native"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"continent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryCardCountry"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"states"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"native"}},{"kind":"Field","name":{"kind":"Name","value":"rtl"}}]}}]}}]}},...CountryCardCountry.definitions]};

/**
 * __useCountryDetails__
 *
 * To run a query within a React component, call `useCountryDetails` and pass it any options that fit your needs.
 * When your component renders, `useCountryDetails` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryDetails({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCountryDetails(baseOptions: Apollo.QueryHookOptions<CountryDetails, CountryDetailsVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountryDetails, CountryDetailsVariables>(CountryDetailsDocument, options);
      }
export function useCountryDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountryDetails, CountryDetailsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountryDetails, CountryDetailsVariables>(CountryDetailsDocument, options);
        }
export type CountryDetailsHookResult = ReturnType<typeof useCountryDetails>;
export type CountryDetailsLazyQueryHookResult = ReturnType<typeof useCountryDetailsLazyQuery>;
export type CountryDetailsQueryResult = Apollo.QueryResult<CountryDetails, CountryDetailsVariables>;