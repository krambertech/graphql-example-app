import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ContinentListVariables = Types.Exact<{ [key: string]: never; }>;


export type ContinentList = { __typename: 'Query', continents: Array<{ __typename: 'Continent', code: string, name: string }> };


export const ContinentListDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContinentList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"continents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};

/**
 * __useContinentList__
 *
 * To run a query within a React component, call `useContinentList` and pass it any options that fit your needs.
 * When your component renders, `useContinentList` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContinentList({
 *   variables: {
 *   },
 * });
 */
export function useContinentList(baseOptions?: Apollo.QueryHookOptions<ContinentList, ContinentListVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContinentList, ContinentListVariables>(ContinentListDocument, options);
      }
export function useContinentListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContinentList, ContinentListVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContinentList, ContinentListVariables>(ContinentListDocument, options);
        }
export type ContinentListHookResult = ReturnType<typeof useContinentList>;
export type ContinentListLazyQueryHookResult = ReturnType<typeof useContinentListLazyQuery>;
export type ContinentListQueryResult = Apollo.QueryResult<ContinentList, ContinentListVariables>;