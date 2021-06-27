import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cards_Category = {
  __typename?: 'Cards_category';
  cd_id: Scalars['Float'];
  cd_userid: Scalars['Float'];
  cd_name: Scalars['String'];
  cd_link: Scalars['String'];
  cd_resume: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FieldName = {
  __typename?: 'FieldName';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  category: Cards_Category;
  updateCategory?: Maybe<Cards_Category>;
  isPackNameExisting?: Maybe<FieldName>;
};


export type MutationRegisterArgs = {
  options: UsernamePasswordinput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationCategoryArgs = {
  options: CategoryFields;
};


export type MutationUpdateCategoryArgs = {
  cd_id: Scalars['Float'];
  cd_resume: Scalars['String'];
  cd_link: Scalars['String'];
  cd_name: Scalars['String'];
};


export type MutationIsPackNameExistingArgs = {
  cd_name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  getInfoPack?: Maybe<Cards_Category>;
  getAllPack: AllPack;
};


export type QueryGetInfoPackArgs = {
  cd_id: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordinput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type AllPack = {
  __typename?: 'allPack';
  pack: Array<Cards_Category>;
};

export type CategoryFields = {
  cd_name: Scalars['String'];
  cd_link: Scalars['String'];
  cd_resume: Scalars['String'];
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type CategoryMutationVariables = Exact<{
  input: CategoryFields;
}>;


export type CategoryMutation = (
  { __typename?: 'Mutation' }
  & { category: (
    { __typename?: 'Cards_category' }
    & Pick<Cards_Category, 'cd_id' | 'cd_userid' | 'cd_name' | 'cd_link' | 'cd_resume'>
  ) }
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordinput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type UpdateCategoryMutationVariables = Exact<{
  cd_name: Scalars['String'];
  cd_link: Scalars['String'];
  cd_resume: Scalars['String'];
  cd_id: Scalars['Float'];
}>;


export type UpdateCategoryMutation = (
  { __typename?: 'Mutation' }
  & { updateCategory?: Maybe<(
    { __typename?: 'Cards_category' }
    & Pick<Cards_Category, 'cd_id' | 'cd_userid' | 'cd_name' | 'cd_link' | 'cd_resume'>
  )> }
);

export type GetAllPackQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPackQuery = (
  { __typename?: 'Query' }
  & { getAllPack: (
    { __typename?: 'allPack' }
    & { pack: Array<(
      { __typename?: 'Cards_category' }
      & Pick<Cards_Category, 'cd_id' | 'cd_name' | 'cd_resume'>
    )> }
  ) }
);

export type GetInfoPackQueryVariables = Exact<{
  cd_id: Scalars['Float'];
}>;


export type GetInfoPackQuery = (
  { __typename?: 'Query' }
  & { getInfoPack?: Maybe<(
    { __typename?: 'Cards_category' }
    & Pick<Cards_Category, 'cd_id' | 'cd_userid' | 'cd_name'>
  )> }
);

export type IsPackNameExistingMutationVariables = Exact<{
  cd_name: Scalars['String'];
}>;


export type IsPackNameExistingMutation = (
  { __typename?: 'Mutation' }
  & { isPackNameExisting?: Maybe<(
    { __typename?: 'FieldName' }
    & Pick<FieldName, 'message'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const CategoryDocument = gql`
    mutation Category($input: categoryFields!) {
  category(options: $input) {
    cd_id
    cd_userid
    cd_name
    cd_link
    cd_resume
  }
}
    `;
export type CategoryMutationFn = Apollo.MutationFunction<CategoryMutation, CategoryMutationVariables>;

/**
 * __useCategoryMutation__
 *
 * To run a mutation, you first call `useCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [categoryMutation, { data, loading, error }] = useCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CategoryMutation, CategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CategoryMutation, CategoryMutationVariables>(CategoryDocument, options);
      }
export type CategoryMutationHookResult = ReturnType<typeof useCategoryMutation>;
export type CategoryMutationResult = Apollo.MutationResult<CategoryMutation>;
export type CategoryMutationOptions = Apollo.BaseMutationOptions<CategoryMutation, CategoryMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordinput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation updateCategory($cd_name: String!, $cd_link: String!, $cd_resume: String!, $cd_id: Float!) {
  updateCategory(
    cd_name: $cd_name
    cd_link: $cd_link
    cd_resume: $cd_resume
    cd_id: $cd_id
  ) {
    cd_id
    cd_userid
    cd_name
    cd_link
    cd_resume
  }
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      cd_name: // value for 'cd_name'
 *      cd_link: // value for 'cd_link'
 *      cd_resume: // value for 'cd_resume'
 *      cd_id: // value for 'cd_id'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const GetAllPackDocument = gql`
    query getAllPack {
  getAllPack {
    pack {
      cd_id
      cd_name
      cd_resume
    }
  }
}
    `;

/**
 * __useGetAllPackQuery__
 *
 * To run a query within a React component, call `useGetAllPackQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPackQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPackQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPackQuery, GetAllPackQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPackQuery, GetAllPackQueryVariables>(GetAllPackDocument, options);
      }
export function useGetAllPackLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPackQuery, GetAllPackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPackQuery, GetAllPackQueryVariables>(GetAllPackDocument, options);
        }
export type GetAllPackQueryHookResult = ReturnType<typeof useGetAllPackQuery>;
export type GetAllPackLazyQueryHookResult = ReturnType<typeof useGetAllPackLazyQuery>;
export type GetAllPackQueryResult = Apollo.QueryResult<GetAllPackQuery, GetAllPackQueryVariables>;
export const GetInfoPackDocument = gql`
    query getInfoPack($cd_id: Float!) {
  getInfoPack(cd_id: $cd_id) {
    cd_id
    cd_userid
    cd_name
  }
}
    `;

/**
 * __useGetInfoPackQuery__
 *
 * To run a query within a React component, call `useGetInfoPackQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInfoPackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInfoPackQuery({
 *   variables: {
 *      cd_id: // value for 'cd_id'
 *   },
 * });
 */
export function useGetInfoPackQuery(baseOptions: Apollo.QueryHookOptions<GetInfoPackQuery, GetInfoPackQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInfoPackQuery, GetInfoPackQueryVariables>(GetInfoPackDocument, options);
      }
export function useGetInfoPackLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInfoPackQuery, GetInfoPackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInfoPackQuery, GetInfoPackQueryVariables>(GetInfoPackDocument, options);
        }
export type GetInfoPackQueryHookResult = ReturnType<typeof useGetInfoPackQuery>;
export type GetInfoPackLazyQueryHookResult = ReturnType<typeof useGetInfoPackLazyQuery>;
export type GetInfoPackQueryResult = Apollo.QueryResult<GetInfoPackQuery, GetInfoPackQueryVariables>;
export const IsPackNameExistingDocument = gql`
    mutation isPackNameExisting($cd_name: String!) {
  isPackNameExisting(cd_name: $cd_name) {
    message
  }
}
    `;
export type IsPackNameExistingMutationFn = Apollo.MutationFunction<IsPackNameExistingMutation, IsPackNameExistingMutationVariables>;

/**
 * __useIsPackNameExistingMutation__
 *
 * To run a mutation, you first call `useIsPackNameExistingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIsPackNameExistingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [isPackNameExistingMutation, { data, loading, error }] = useIsPackNameExistingMutation({
 *   variables: {
 *      cd_name: // value for 'cd_name'
 *   },
 * });
 */
export function useIsPackNameExistingMutation(baseOptions?: Apollo.MutationHookOptions<IsPackNameExistingMutation, IsPackNameExistingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IsPackNameExistingMutation, IsPackNameExistingMutationVariables>(IsPackNameExistingDocument, options);
      }
export type IsPackNameExistingMutationHookResult = ReturnType<typeof useIsPackNameExistingMutation>;
export type IsPackNameExistingMutationResult = Apollo.MutationResult<IsPackNameExistingMutation>;
export type IsPackNameExistingMutationOptions = Apollo.BaseMutationOptions<IsPackNameExistingMutation, IsPackNameExistingMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;