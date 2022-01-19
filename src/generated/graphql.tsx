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

export type Cards_Family = {
  __typename?: 'Cards_family';
  cf_id: Scalars['Float'];
  cf_category: Scalars['Float'];
  cf_number: Scalars['Float'];
  cf_name: Scalars['String'];
  cf_color: Scalars['String'];
};

export type Cards_Game = {
  __typename?: 'Cards_game';
  cg_id: Scalars['Float'];
  cg_category: Scalars['Float'];
  cg_family: Scalars['Float'];
  cg_number: Scalars['Float'];
  cg_question: Scalars['String'];
  cg_reponse: Scalars['String'];
  cg_image: Scalars['String'];
};

export type Cards_Image = {
  __typename?: 'Cards_image';
  img_id: Scalars['Float'];
  img_name: Scalars['String'];
  img_tag1: Scalars['Float'];
  img_tag2: Scalars['Float'];
};

export type Cards_Tags = {
  __typename?: 'Cards_tags';
  tag_id: Scalars['Float'];
  tag_num: Scalars['Float'];
  tag_name: Scalars['String'];
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
  family: Cards_Family;
  isFamilyNameExist?: Maybe<FieldName>;
  updateFamily?: Maybe<Cards_Family>;
  game: FieldName;
  isGameExist?: Maybe<FieldName>;
  updateGame?: Maybe<Cards_Game>;
  getImagesByTags: AllImages;
  updateImage?: Maybe<Cards_Game>;
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


export type MutationFamilyArgs = {
  options: FamilyFields;
};


export type MutationIsFamilyNameExistArgs = {
  cf_number: Scalars['Float'];
  cf_category: Scalars['Float'];
};


export type MutationUpdateFamilyArgs = {
  cf_number: Scalars['Float'];
  cf_color: Scalars['String'];
  cf_name: Scalars['String'];
  cf_category: Scalars['Float'];
};


export type MutationGameArgs = {
  options: CategoryGameFields;
};


export type MutationIsGameExistArgs = {
  cg_category: Scalars['Float'];
};


export type MutationUpdateGameArgs = {
  cg_reponse: Scalars['String'];
  cg_question: Scalars['String'];
  cg_number: Scalars['Float'];
  cg_family: Scalars['Float'];
  cg_category: Scalars['Float'];
};


export type MutationGetImagesByTagsArgs = {
  img_tag2?: Maybe<Scalars['Float']>;
  img_tag1: Scalars['Float'];
};


export type MutationUpdateImageArgs = {
  cg_image: Scalars['String'];
  cg_number: Scalars['Float'];
  cg_family: Scalars['Float'];
  cg_category: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  getInfoPack?: Maybe<Cards_Category>;
  getAllPack: AllPack;
  getImages: AllImages;
  getTags: AllTags;
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

export type AllImages = {
  __typename?: 'allImages';
  images: Array<Cards_Image>;
};

export type AllPack = {
  __typename?: 'allPack';
  pack: Array<Cards_Category>;
};

export type AllTags = {
  __typename?: 'allTags';
  tags: Array<Cards_Tags>;
};

export type CategoryFields = {
  cd_name: Scalars['String'];
  cd_link: Scalars['String'];
  cd_resume: Scalars['String'];
};

export type CategoryGameFields = {
  cg_category: Scalars['Float'];
  cg_family: Scalars['Float'];
  cg_number: Scalars['Float'];
  cg_question: Scalars['String'];
  cg_reponse: Scalars['String'];
};

export type FamilyFields = {
  cf_category: Scalars['Float'];
  cf_number: Scalars['Float'];
  cf_name: Scalars['String'];
  cf_color: Scalars['String'];
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

export type FamilyMutationVariables = Exact<{
  input: FamilyFields;
}>;


export type FamilyMutation = (
  { __typename?: 'Mutation' }
  & { family: (
    { __typename?: 'Cards_family' }
    & Pick<Cards_Family, 'cf_id' | 'cf_category' | 'cf_number' | 'cf_name' | 'cf_color'>
  ) }
);

export type GameMutationVariables = Exact<{
  input: CategoryGameFields;
}>;


export type GameMutation = (
  { __typename?: 'Mutation' }
  & { game: (
    { __typename?: 'FieldName' }
    & Pick<FieldName, 'message'>
  ) }
);

export type GetImagesByTagsMutationVariables = Exact<{
  img_tag1: Scalars['Float'];
  img_tag2?: Maybe<Scalars['Float']>;
}>;


export type GetImagesByTagsMutation = (
  { __typename?: 'Mutation' }
  & { getImagesByTags: (
    { __typename?: 'allImages' }
    & { images: Array<(
      { __typename?: 'Cards_image' }
      & Pick<Cards_Image, 'img_name'>
    )> }
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

export type UpdateFamilyMutationVariables = Exact<{
  cf_name: Scalars['String'];
  cf_category: Scalars['Float'];
  cf_color: Scalars['String'];
  cf_number: Scalars['Float'];
}>;


export type UpdateFamilyMutation = (
  { __typename?: 'Mutation' }
  & { updateFamily?: Maybe<(
    { __typename?: 'Cards_family' }
    & Pick<Cards_Family, 'cf_name' | 'cf_color'>
  )> }
);

export type UpdateGameMutationVariables = Exact<{
  cg_category: Scalars['Float'];
  cg_family: Scalars['Float'];
  cg_number: Scalars['Float'];
  cg_question: Scalars['String'];
  cg_reponse: Scalars['String'];
}>;


export type UpdateGameMutation = (
  { __typename?: 'Mutation' }
  & { updateGame?: Maybe<(
    { __typename?: 'Cards_game' }
    & Pick<Cards_Game, 'cg_category'>
  )> }
);

export type UpdateImageMutationVariables = Exact<{
  cg_category: Scalars['Float'];
  cg_family: Scalars['Float'];
  cg_number: Scalars['Float'];
  cg_image: Scalars['String'];
}>;


export type UpdateImageMutation = (
  { __typename?: 'Mutation' }
  & { updateImage?: Maybe<(
    { __typename?: 'Cards_game' }
    & Pick<Cards_Game, 'cg_image'>
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

export type GetTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTagsQuery = (
  { __typename?: 'Query' }
  & { getTags: (
    { __typename?: 'allTags' }
    & { tags: Array<(
      { __typename?: 'Cards_tags' }
      & Pick<Cards_Tags, 'tag_name' | 'tag_num'>
    )> }
  ) }
);

export type IsFamilyNameExistMutationVariables = Exact<{
  cf_number: Scalars['Float'];
  cf_category: Scalars['Float'];
}>;


export type IsFamilyNameExistMutation = (
  { __typename?: 'Mutation' }
  & { isFamilyNameExist?: Maybe<(
    { __typename?: 'FieldName' }
    & Pick<FieldName, 'message'>
  )> }
);

export type IsGameExistMutationVariables = Exact<{
  cg_category: Scalars['Float'];
}>;


export type IsGameExistMutation = (
  { __typename?: 'Mutation' }
  & { isGameExist?: Maybe<(
    { __typename?: 'FieldName' }
    & Pick<FieldName, 'message'>
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
export const FamilyDocument = gql`
    mutation Family($input: familyFields!) {
  family(options: $input) {
    cf_id
    cf_category
    cf_number
    cf_name
    cf_color
  }
}
    `;
export type FamilyMutationFn = Apollo.MutationFunction<FamilyMutation, FamilyMutationVariables>;

/**
 * __useFamilyMutation__
 *
 * To run a mutation, you first call `useFamilyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFamilyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [familyMutation, { data, loading, error }] = useFamilyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFamilyMutation(baseOptions?: Apollo.MutationHookOptions<FamilyMutation, FamilyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FamilyMutation, FamilyMutationVariables>(FamilyDocument, options);
      }
export type FamilyMutationHookResult = ReturnType<typeof useFamilyMutation>;
export type FamilyMutationResult = Apollo.MutationResult<FamilyMutation>;
export type FamilyMutationOptions = Apollo.BaseMutationOptions<FamilyMutation, FamilyMutationVariables>;
export const GameDocument = gql`
    mutation Game($input: categoryGameFields!) {
  game(options: $input) {
    message
  }
}
    `;
export type GameMutationFn = Apollo.MutationFunction<GameMutation, GameMutationVariables>;

/**
 * __useGameMutation__
 *
 * To run a mutation, you first call `useGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [gameMutation, { data, loading, error }] = useGameMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGameMutation(baseOptions?: Apollo.MutationHookOptions<GameMutation, GameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GameMutation, GameMutationVariables>(GameDocument, options);
      }
export type GameMutationHookResult = ReturnType<typeof useGameMutation>;
export type GameMutationResult = Apollo.MutationResult<GameMutation>;
export type GameMutationOptions = Apollo.BaseMutationOptions<GameMutation, GameMutationVariables>;
export const GetImagesByTagsDocument = gql`
    mutation getImagesByTags($img_tag1: Float!, $img_tag2: Float) {
  getImagesByTags(img_tag1: $img_tag1, img_tag2: $img_tag2) {
    images {
      img_name
    }
  }
}
    `;
export type GetImagesByTagsMutationFn = Apollo.MutationFunction<GetImagesByTagsMutation, GetImagesByTagsMutationVariables>;

/**
 * __useGetImagesByTagsMutation__
 *
 * To run a mutation, you first call `useGetImagesByTagsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetImagesByTagsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getImagesByTagsMutation, { data, loading, error }] = useGetImagesByTagsMutation({
 *   variables: {
 *      img_tag1: // value for 'img_tag1'
 *      img_tag2: // value for 'img_tag2'
 *   },
 * });
 */
export function useGetImagesByTagsMutation(baseOptions?: Apollo.MutationHookOptions<GetImagesByTagsMutation, GetImagesByTagsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetImagesByTagsMutation, GetImagesByTagsMutationVariables>(GetImagesByTagsDocument, options);
      }
export type GetImagesByTagsMutationHookResult = ReturnType<typeof useGetImagesByTagsMutation>;
export type GetImagesByTagsMutationResult = Apollo.MutationResult<GetImagesByTagsMutation>;
export type GetImagesByTagsMutationOptions = Apollo.BaseMutationOptions<GetImagesByTagsMutation, GetImagesByTagsMutationVariables>;
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
export const UpdateFamilyDocument = gql`
    mutation updateFamily($cf_name: String!, $cf_category: Float!, $cf_color: String!, $cf_number: Float!) {
  updateFamily(
    cf_name: $cf_name
    cf_category: $cf_category
    cf_color: $cf_color
    cf_number: $cf_number
  ) {
    cf_name
    cf_color
  }
}
    `;
export type UpdateFamilyMutationFn = Apollo.MutationFunction<UpdateFamilyMutation, UpdateFamilyMutationVariables>;

/**
 * __useUpdateFamilyMutation__
 *
 * To run a mutation, you first call `useUpdateFamilyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFamilyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFamilyMutation, { data, loading, error }] = useUpdateFamilyMutation({
 *   variables: {
 *      cf_name: // value for 'cf_name'
 *      cf_category: // value for 'cf_category'
 *      cf_color: // value for 'cf_color'
 *      cf_number: // value for 'cf_number'
 *   },
 * });
 */
export function useUpdateFamilyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFamilyMutation, UpdateFamilyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFamilyMutation, UpdateFamilyMutationVariables>(UpdateFamilyDocument, options);
      }
export type UpdateFamilyMutationHookResult = ReturnType<typeof useUpdateFamilyMutation>;
export type UpdateFamilyMutationResult = Apollo.MutationResult<UpdateFamilyMutation>;
export type UpdateFamilyMutationOptions = Apollo.BaseMutationOptions<UpdateFamilyMutation, UpdateFamilyMutationVariables>;
export const UpdateGameDocument = gql`
    mutation updateGame($cg_category: Float!, $cg_family: Float!, $cg_number: Float!, $cg_question: String!, $cg_reponse: String!) {
  updateGame(
    cg_category: $cg_category
    cg_family: $cg_family
    cg_number: $cg_number
    cg_question: $cg_question
    cg_reponse: $cg_reponse
  ) {
    cg_category
  }
}
    `;
export type UpdateGameMutationFn = Apollo.MutationFunction<UpdateGameMutation, UpdateGameMutationVariables>;

/**
 * __useUpdateGameMutation__
 *
 * To run a mutation, you first call `useUpdateGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGameMutation, { data, loading, error }] = useUpdateGameMutation({
 *   variables: {
 *      cg_category: // value for 'cg_category'
 *      cg_family: // value for 'cg_family'
 *      cg_number: // value for 'cg_number'
 *      cg_question: // value for 'cg_question'
 *      cg_reponse: // value for 'cg_reponse'
 *   },
 * });
 */
export function useUpdateGameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGameMutation, UpdateGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGameMutation, UpdateGameMutationVariables>(UpdateGameDocument, options);
      }
export type UpdateGameMutationHookResult = ReturnType<typeof useUpdateGameMutation>;
export type UpdateGameMutationResult = Apollo.MutationResult<UpdateGameMutation>;
export type UpdateGameMutationOptions = Apollo.BaseMutationOptions<UpdateGameMutation, UpdateGameMutationVariables>;
export const UpdateImageDocument = gql`
    mutation updateImage($cg_category: Float!, $cg_family: Float!, $cg_number: Float!, $cg_image: String!) {
  updateImage(
    cg_category: $cg_category
    cg_family: $cg_family
    cg_number: $cg_number
    cg_image: $cg_image
  ) {
    cg_image
  }
}
    `;
export type UpdateImageMutationFn = Apollo.MutationFunction<UpdateImageMutation, UpdateImageMutationVariables>;

/**
 * __useUpdateImageMutation__
 *
 * To run a mutation, you first call `useUpdateImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateImageMutation, { data, loading, error }] = useUpdateImageMutation({
 *   variables: {
 *      cg_category: // value for 'cg_category'
 *      cg_family: // value for 'cg_family'
 *      cg_number: // value for 'cg_number'
 *      cg_image: // value for 'cg_image'
 *   },
 * });
 */
export function useUpdateImageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateImageMutation, UpdateImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateImageMutation, UpdateImageMutationVariables>(UpdateImageDocument, options);
      }
export type UpdateImageMutationHookResult = ReturnType<typeof useUpdateImageMutation>;
export type UpdateImageMutationResult = Apollo.MutationResult<UpdateImageMutation>;
export type UpdateImageMutationOptions = Apollo.BaseMutationOptions<UpdateImageMutation, UpdateImageMutationVariables>;
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
export const GetTagsDocument = gql`
    query getTags {
  getTags {
    tags {
      tag_name
      tag_num
    }
  }
}
    `;

/**
 * __useGetTagsQuery__
 *
 * To run a query within a React component, call `useGetTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
      }
export function useGetTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
        }
export type GetTagsQueryHookResult = ReturnType<typeof useGetTagsQuery>;
export type GetTagsLazyQueryHookResult = ReturnType<typeof useGetTagsLazyQuery>;
export type GetTagsQueryResult = Apollo.QueryResult<GetTagsQuery, GetTagsQueryVariables>;
export const IsFamilyNameExistDocument = gql`
    mutation isFamilyNameExist($cf_number: Float!, $cf_category: Float!) {
  isFamilyNameExist(cf_number: $cf_number, cf_category: $cf_category) {
    message
  }
}
    `;
export type IsFamilyNameExistMutationFn = Apollo.MutationFunction<IsFamilyNameExistMutation, IsFamilyNameExistMutationVariables>;

/**
 * __useIsFamilyNameExistMutation__
 *
 * To run a mutation, you first call `useIsFamilyNameExistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIsFamilyNameExistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [isFamilyNameExistMutation, { data, loading, error }] = useIsFamilyNameExistMutation({
 *   variables: {
 *      cf_number: // value for 'cf_number'
 *      cf_category: // value for 'cf_category'
 *   },
 * });
 */
export function useIsFamilyNameExistMutation(baseOptions?: Apollo.MutationHookOptions<IsFamilyNameExistMutation, IsFamilyNameExistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IsFamilyNameExistMutation, IsFamilyNameExistMutationVariables>(IsFamilyNameExistDocument, options);
      }
export type IsFamilyNameExistMutationHookResult = ReturnType<typeof useIsFamilyNameExistMutation>;
export type IsFamilyNameExistMutationResult = Apollo.MutationResult<IsFamilyNameExistMutation>;
export type IsFamilyNameExistMutationOptions = Apollo.BaseMutationOptions<IsFamilyNameExistMutation, IsFamilyNameExistMutationVariables>;
export const IsGameExistDocument = gql`
    mutation isGameExist($cg_category: Float!) {
  isGameExist(cg_category: $cg_category) {
    message
  }
}
    `;
export type IsGameExistMutationFn = Apollo.MutationFunction<IsGameExistMutation, IsGameExistMutationVariables>;

/**
 * __useIsGameExistMutation__
 *
 * To run a mutation, you first call `useIsGameExistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIsGameExistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [isGameExistMutation, { data, loading, error }] = useIsGameExistMutation({
 *   variables: {
 *      cg_category: // value for 'cg_category'
 *   },
 * });
 */
export function useIsGameExistMutation(baseOptions?: Apollo.MutationHookOptions<IsGameExistMutation, IsGameExistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IsGameExistMutation, IsGameExistMutationVariables>(IsGameExistDocument, options);
      }
export type IsGameExistMutationHookResult = ReturnType<typeof useIsGameExistMutation>;
export type IsGameExistMutationResult = Apollo.MutationResult<IsGameExistMutation>;
export type IsGameExistMutationOptions = Apollo.BaseMutationOptions<IsGameExistMutation, IsGameExistMutationVariables>;
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