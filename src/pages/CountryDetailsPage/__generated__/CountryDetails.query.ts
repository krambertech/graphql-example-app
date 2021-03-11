import * as Types from '../../../__generated__/types';

import { CountryCardCountry } from '../../../components/CountryCard/__generated__/CountryCardCountry.fragment';
import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CountryDetailsVariables = Types.Exact<{
  code: Types.Scalars['String'];
}>;


export type CountryDetails = { __typename: 'Query', countries?: Types.Maybe<Array<Types.Maybe<{ __typename: 'Country', _id?: Types.Maybe<string>, name: string, nativeName: string, capital: string, population: number, area?: Types.Maybe<number>, flag?: Types.Maybe<{ __typename: 'Flag', _id?: Types.Maybe<string>, emoji: string }>, subregion?: Types.Maybe<{ __typename: 'Subregion', _id?: Types.Maybe<string>, name: string }>, timezones?: Types.Maybe<Array<Types.Maybe<{ __typename: 'Timezone', _id?: Types.Maybe<string>, name: string }>>>, currencies?: Types.Maybe<Array<Types.Maybe<{ __typename: 'Currency', _id?: Types.Maybe<string>, code: string, name: string, symbol: string }>>>, borders?: Types.Maybe<Array<Types.Maybe<(
      { __typename: 'Country', _id?: Types.Maybe<string> }
      & CountryCardCountry
    )>>> }>>> };


export const CountryDetailsDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CountryDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"countries"},"name":{"kind":"Name","value":"Country"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"alpha2Code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nativeName"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"area"}},{"kind":"Field","name":{"kind":"Name","value":"flag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subregion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezones"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"Field","name":{"kind":"Name","value":"borders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryCardCountry"}}]}}]}}]}},...CountryCardCountry.definitions]};

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