import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type AllUserNameQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllUserNameQuery = { __typename?: 'Query', findAllUser: Array<{ __typename?: 'User', name: string } | null> };


export const AllUserNameDocument = gql`
    query AllUserName {
  findAllUser {
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AllUserName(variables?: AllUserNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllUserNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllUserNameQuery>(AllUserNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllUserName', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
