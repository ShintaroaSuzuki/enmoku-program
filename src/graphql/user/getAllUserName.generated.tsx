import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AllUserNameQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllUserNameQuery = { __typename?: 'Query', findAllUser: Array<{ __typename?: 'User', name: string } | null> };


export const AllUserNameDocument = gql`
    query AllUserName {
  findAllUser {
    name
  }
}
    `;

/**
 * __useAllUserNameQuery__
 *
 * To run a query within a React component, call `useAllUserNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUserNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUserNameQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUserNameQuery(baseOptions?: Apollo.QueryHookOptions<AllUserNameQuery, AllUserNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUserNameQuery, AllUserNameQueryVariables>(AllUserNameDocument, options);
      }
export function useAllUserNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUserNameQuery, AllUserNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUserNameQuery, AllUserNameQueryVariables>(AllUserNameDocument, options);
        }
export type AllUserNameQueryHookResult = ReturnType<typeof useAllUserNameQuery>;
export type AllUserNameLazyQueryHookResult = ReturnType<typeof useAllUserNameLazyQuery>;
export type AllUserNameQueryResult = Apollo.QueryResult<AllUserNameQuery, AllUserNameQueryVariables>;