import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  Long: any,
};

export type AggregateKeyResult = {
   __typename?: 'AggregateKeyResult',
  count: Scalars['Int'],
};

export type AggregateObjective = {
   __typename?: 'AggregateObjective',
  count: Scalars['Int'],
};

export type AggregateUser = {
   __typename?: 'AggregateUser',
  count: Scalars['Int'],
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  count: Scalars['Long'],
};

export enum Confidence {
  AWESOME = 'AWESOME',
  SOSO = 'SOSO',
  BAD = 'BAD',
  ABORT = 'ABORT'
}


export type KeyResult = {
   __typename?: 'KeyResult',
  id: Scalars['ID'],
  target: Scalars['String'],
  current?: Maybe<Scalars['String']>,
  confidence?: Maybe<Confidence>,
  objective: Objective,
};

export type KeyResultConnection = {
   __typename?: 'KeyResultConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<KeyResultEdge>>,
  aggregate: AggregateKeyResult,
};

export type KeyResultCreateInput = {
  id?: Maybe<Scalars['ID']>,
  target: Scalars['String'],
  current?: Maybe<Scalars['String']>,
  confidence?: Maybe<Confidence>,
  objective: ObjectiveCreateOneWithoutKeyResultsInput,
};

export type KeyResultCreateManyWithoutObjectiveInput = {
  create?: Maybe<Array<KeyResultCreateWithoutObjectiveInput>>,
  connect?: Maybe<Array<KeyResultWhereUniqueInput>>,
};

export type KeyResultCreateWithoutObjectiveInput = {
  id?: Maybe<Scalars['ID']>,
  target: Scalars['String'],
  current?: Maybe<Scalars['String']>,
  confidence?: Maybe<Confidence>,
};

export type KeyResultEdge = {
   __typename?: 'KeyResultEdge',
  node: KeyResult,
  cursor: Scalars['String'],
};

export enum KeyResultOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  target_ASC = 'target_ASC',
  target_DESC = 'target_DESC',
  current_ASC = 'current_ASC',
  current_DESC = 'current_DESC',
  confidence_ASC = 'confidence_ASC',
  confidence_DESC = 'confidence_DESC'
}

export type KeyResultPreviousValues = {
   __typename?: 'KeyResultPreviousValues',
  id: Scalars['ID'],
  target: Scalars['String'],
  current?: Maybe<Scalars['String']>,
  confidence?: Maybe<Confidence>,
};

export type KeyResultScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  target?: Maybe<Scalars['String']>,
  target_not?: Maybe<Scalars['String']>,
  target_in?: Maybe<Array<Scalars['String']>>,
  target_not_in?: Maybe<Array<Scalars['String']>>,
  target_lt?: Maybe<Scalars['String']>,
  target_lte?: Maybe<Scalars['String']>,
  target_gt?: Maybe<Scalars['String']>,
  target_gte?: Maybe<Scalars['String']>,
  target_contains?: Maybe<Scalars['String']>,
  target_not_contains?: Maybe<Scalars['String']>,
  target_starts_with?: Maybe<Scalars['String']>,
  target_not_starts_with?: Maybe<Scalars['String']>,
  target_ends_with?: Maybe<Scalars['String']>,
  target_not_ends_with?: Maybe<Scalars['String']>,
  current?: Maybe<Scalars['String']>,
  current_not?: Maybe<Scalars['String']>,
  current_in?: Maybe<Array<Scalars['String']>>,
  current_not_in?: Maybe<Array<Scalars['String']>>,
  current_lt?: Maybe<Scalars['String']>,
  current_lte?: Maybe<Scalars['String']>,
  current_gt?: Maybe<Scalars['String']>,
  current_gte?: Maybe<Scalars['String']>,
  current_contains?: Maybe<Scalars['String']>,
  current_not_contains?: Maybe<Scalars['String']>,
  current_starts_with?: Maybe<Scalars['String']>,
  current_not_starts_with?: Maybe<Scalars['String']>,
  current_ends_with?: Maybe<Scalars['String']>,
  current_not_ends_with?: Maybe<Scalars['String']>,
  confidence?: Maybe<Confidence>,
  confidence_not?: Maybe<Confidence>,
  confidence_in?: Maybe<Array<Confidence>>,
  confidence_not_in?: Maybe<Array<Confidence>>,
  AND?: Maybe<Array<KeyResultScalarWhereInput>>,
  OR?: Maybe<Array<KeyResultScalarWhereInput>>,
  NOT?: Maybe<Array<KeyResultScalarWhereInput>>,
};

export type KeyResultSubscriptionPayload = {
   __typename?: 'KeyResultSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<KeyResult>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<KeyResultPreviousValues>,
};

export type KeyResultSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<KeyResultWhereInput>,
  AND?: Maybe<Array<KeyResultSubscriptionWhereInput>>,
  OR?: Maybe<Array<KeyResultSubscriptionWhereInput>>,
  NOT?: Maybe<Array<KeyResultSubscriptionWhereInput>>,
};

export type KeyResultUpdateInput = {
  target?: Maybe<Scalars['String']>,
  current?: Maybe<Scalars['String']>,
  confidence?: Maybe<Confidence>,
  objective?: Maybe<ObjectiveUpdateOneRequiredWithoutKeyResultsInput>,
};

export type KeyResultUpdateManyDataInput = {
  target?: Maybe<Scalars['String']>,
  current?: Maybe<Scalars['String']>,
  confidence?: Maybe<Confidence>,
};

export type KeyResultUpdateManyMutationInput = {
  target?: Maybe<Scalars['String']>,
  current?: Maybe<Scalars['String']>,
  confidence?: Maybe<Confidence>,
};

export type KeyResultUpdateManyWithoutObjectiveInput = {
  create?: Maybe<Array<KeyResultCreateWithoutObjectiveInput>>,
  delete?: Maybe<Array<KeyResultWhereUniqueInput>>,
  connect?: Maybe<Array<KeyResultWhereUniqueInput>>,
  set?: Maybe<Array<KeyResultWhereUniqueInput>>,
  disconnect?: Maybe<Array<KeyResultWhereUniqueInput>>,
  update?: Maybe<Array<KeyResultUpdateWithWhereUniqueWithoutObjectiveInput>>,
  upsert?: Maybe<Array<KeyResultUpsertWithWhereUniqueWithoutObjectiveInput>>,
  deleteMany?: Maybe<Array<KeyResultScalarWhereInput>>,
  updateMany?: Maybe<Array<KeyResultUpdateManyWithWhereNestedInput>>,
};

export type KeyResultUpdateManyWithWhereNestedInput = {
  where: KeyResultScalarWhereInput,
  data: KeyResultUpdateManyDataInput,
};

export type KeyResultUpdateWithoutObjectiveDataInput = {
  target?: Maybe<Scalars['String']>,
  current?: Maybe<Scalars['String']>,
  confidence?: Maybe<Confidence>,
};

export type KeyResultUpdateWithWhereUniqueWithoutObjectiveInput = {
  where: KeyResultWhereUniqueInput,
  data: KeyResultUpdateWithoutObjectiveDataInput,
};

export type KeyResultUpsertWithWhereUniqueWithoutObjectiveInput = {
  where: KeyResultWhereUniqueInput,
  update: KeyResultUpdateWithoutObjectiveDataInput,
  create: KeyResultCreateWithoutObjectiveInput,
};

export type KeyResultWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  target?: Maybe<Scalars['String']>,
  target_not?: Maybe<Scalars['String']>,
  target_in?: Maybe<Array<Scalars['String']>>,
  target_not_in?: Maybe<Array<Scalars['String']>>,
  target_lt?: Maybe<Scalars['String']>,
  target_lte?: Maybe<Scalars['String']>,
  target_gt?: Maybe<Scalars['String']>,
  target_gte?: Maybe<Scalars['String']>,
  target_contains?: Maybe<Scalars['String']>,
  target_not_contains?: Maybe<Scalars['String']>,
  target_starts_with?: Maybe<Scalars['String']>,
  target_not_starts_with?: Maybe<Scalars['String']>,
  target_ends_with?: Maybe<Scalars['String']>,
  target_not_ends_with?: Maybe<Scalars['String']>,
  current?: Maybe<Scalars['String']>,
  current_not?: Maybe<Scalars['String']>,
  current_in?: Maybe<Array<Scalars['String']>>,
  current_not_in?: Maybe<Array<Scalars['String']>>,
  current_lt?: Maybe<Scalars['String']>,
  current_lte?: Maybe<Scalars['String']>,
  current_gt?: Maybe<Scalars['String']>,
  current_gte?: Maybe<Scalars['String']>,
  current_contains?: Maybe<Scalars['String']>,
  current_not_contains?: Maybe<Scalars['String']>,
  current_starts_with?: Maybe<Scalars['String']>,
  current_not_starts_with?: Maybe<Scalars['String']>,
  current_ends_with?: Maybe<Scalars['String']>,
  current_not_ends_with?: Maybe<Scalars['String']>,
  confidence?: Maybe<Confidence>,
  confidence_not?: Maybe<Confidence>,
  confidence_in?: Maybe<Array<Confidence>>,
  confidence_not_in?: Maybe<Array<Confidence>>,
  objective?: Maybe<ObjectiveWhereInput>,
  AND?: Maybe<Array<KeyResultWhereInput>>,
  OR?: Maybe<Array<KeyResultWhereInput>>,
  NOT?: Maybe<Array<KeyResultWhereInput>>,
};

export type KeyResultWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type Mutation = {
   __typename?: 'Mutation',
  createKeyResult: KeyResult,
  updateKeyResult?: Maybe<KeyResult>,
  updateManyKeyResults: BatchPayload,
  upsertKeyResult: KeyResult,
  deleteKeyResult?: Maybe<KeyResult>,
  deleteManyKeyResults: BatchPayload,
  createObjective: Objective,
  updateObjective?: Maybe<Objective>,
  updateManyObjectives: BatchPayload,
  upsertObjective: Objective,
  deleteObjective?: Maybe<Objective>,
  deleteManyObjectives: BatchPayload,
  createUser: User,
  updateUser?: Maybe<User>,
  updateManyUsers: BatchPayload,
  upsertUser: User,
  deleteUser?: Maybe<User>,
  deleteManyUsers: BatchPayload,
};


export type MutationcreateKeyResultArgs = {
  data: KeyResultCreateInput
};


export type MutationupdateKeyResultArgs = {
  data: KeyResultUpdateInput,
  where: KeyResultWhereUniqueInput
};


export type MutationupdateManyKeyResultsArgs = {
  data: KeyResultUpdateManyMutationInput,
  where?: Maybe<KeyResultWhereInput>
};


export type MutationupsertKeyResultArgs = {
  where: KeyResultWhereUniqueInput,
  create: KeyResultCreateInput,
  update: KeyResultUpdateInput
};


export type MutationdeleteKeyResultArgs = {
  where: KeyResultWhereUniqueInput
};


export type MutationdeleteManyKeyResultsArgs = {
  where?: Maybe<KeyResultWhereInput>
};


export type MutationcreateObjectiveArgs = {
  data: ObjectiveCreateInput
};


export type MutationupdateObjectiveArgs = {
  data: ObjectiveUpdateInput,
  where: ObjectiveWhereUniqueInput
};


export type MutationupdateManyObjectivesArgs = {
  data: ObjectiveUpdateManyMutationInput,
  where?: Maybe<ObjectiveWhereInput>
};


export type MutationupsertObjectiveArgs = {
  where: ObjectiveWhereUniqueInput,
  create: ObjectiveCreateInput,
  update: ObjectiveUpdateInput
};


export type MutationdeleteObjectiveArgs = {
  where: ObjectiveWhereUniqueInput
};


export type MutationdeleteManyObjectivesArgs = {
  where?: Maybe<ObjectiveWhereInput>
};


export type MutationcreateUserArgs = {
  data: UserCreateInput
};


export type MutationupdateUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationupdateManyUsersArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationupsertUserArgs = {
  where: UserWhereUniqueInput,
  create: UserCreateInput,
  update: UserUpdateInput
};


export type MutationdeleteUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationdeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
};

export enum MutationType {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED'
}

export type Node = {
  id: Scalars['ID'],
};

export type Objective = {
   __typename?: 'Objective',
  id: Scalars['ID'],
  text: Scalars['String'],
  keyResults?: Maybe<Array<KeyResult>>,
  type: ObjectiveType,
  owner?: Maybe<User>,
  createdAt: Scalars['DateTime'],
};


export type ObjectivekeyResultsArgs = {
  where?: Maybe<KeyResultWhereInput>,
  orderBy?: Maybe<KeyResultOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ObjectiveConnection = {
   __typename?: 'ObjectiveConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ObjectiveEdge>>,
  aggregate: AggregateObjective,
};

export type ObjectiveCreateInput = {
  id?: Maybe<Scalars['ID']>,
  text: Scalars['String'],
  keyResults?: Maybe<KeyResultCreateManyWithoutObjectiveInput>,
  type: ObjectiveType,
  owner?: Maybe<UserCreateOneInput>,
};

export type ObjectiveCreateOneWithoutKeyResultsInput = {
  create?: Maybe<ObjectiveCreateWithoutKeyResultsInput>,
  connect?: Maybe<ObjectiveWhereUniqueInput>,
};

export type ObjectiveCreateWithoutKeyResultsInput = {
  id?: Maybe<Scalars['ID']>,
  text: Scalars['String'],
  type: ObjectiveType,
  owner?: Maybe<UserCreateOneInput>,
};

export type ObjectiveEdge = {
   __typename?: 'ObjectiveEdge',
  node: Objective,
  cursor: Scalars['String'],
};

export enum ObjectiveOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  text_ASC = 'text_ASC',
  text_DESC = 'text_DESC',
  type_ASC = 'type_ASC',
  type_DESC = 'type_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC'
}

export type ObjectivePreviousValues = {
   __typename?: 'ObjectivePreviousValues',
  id: Scalars['ID'],
  text: Scalars['String'],
  type: ObjectiveType,
  createdAt: Scalars['DateTime'],
};

export type ObjectiveSubscriptionPayload = {
   __typename?: 'ObjectiveSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Objective>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ObjectivePreviousValues>,
};

export type ObjectiveSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ObjectiveWhereInput>,
  AND?: Maybe<Array<ObjectiveSubscriptionWhereInput>>,
  OR?: Maybe<Array<ObjectiveSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ObjectiveSubscriptionWhereInput>>,
};

export enum ObjectiveType {
  COMPANY = 'COMPANY',
  TEAM = 'TEAM',
  INDIVIDUAL = 'INDIVIDUAL'
}

export type ObjectiveUpdateInput = {
  text?: Maybe<Scalars['String']>,
  keyResults?: Maybe<KeyResultUpdateManyWithoutObjectiveInput>,
  type?: Maybe<ObjectiveType>,
  owner?: Maybe<UserUpdateOneInput>,
};

export type ObjectiveUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>,
  type?: Maybe<ObjectiveType>,
};

export type ObjectiveUpdateOneRequiredWithoutKeyResultsInput = {
  create?: Maybe<ObjectiveCreateWithoutKeyResultsInput>,
  update?: Maybe<ObjectiveUpdateWithoutKeyResultsDataInput>,
  upsert?: Maybe<ObjectiveUpsertWithoutKeyResultsInput>,
  connect?: Maybe<ObjectiveWhereUniqueInput>,
};

export type ObjectiveUpdateWithoutKeyResultsDataInput = {
  text?: Maybe<Scalars['String']>,
  type?: Maybe<ObjectiveType>,
  owner?: Maybe<UserUpdateOneInput>,
};

export type ObjectiveUpsertWithoutKeyResultsInput = {
  update: ObjectiveUpdateWithoutKeyResultsDataInput,
  create: ObjectiveCreateWithoutKeyResultsInput,
};

export type ObjectiveWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  text?: Maybe<Scalars['String']>,
  text_not?: Maybe<Scalars['String']>,
  text_in?: Maybe<Array<Scalars['String']>>,
  text_not_in?: Maybe<Array<Scalars['String']>>,
  text_lt?: Maybe<Scalars['String']>,
  text_lte?: Maybe<Scalars['String']>,
  text_gt?: Maybe<Scalars['String']>,
  text_gte?: Maybe<Scalars['String']>,
  text_contains?: Maybe<Scalars['String']>,
  text_not_contains?: Maybe<Scalars['String']>,
  text_starts_with?: Maybe<Scalars['String']>,
  text_not_starts_with?: Maybe<Scalars['String']>,
  text_ends_with?: Maybe<Scalars['String']>,
  text_not_ends_with?: Maybe<Scalars['String']>,
  keyResults_every?: Maybe<KeyResultWhereInput>,
  keyResults_some?: Maybe<KeyResultWhereInput>,
  keyResults_none?: Maybe<KeyResultWhereInput>,
  type?: Maybe<ObjectiveType>,
  type_not?: Maybe<ObjectiveType>,
  type_in?: Maybe<Array<ObjectiveType>>,
  type_not_in?: Maybe<Array<ObjectiveType>>,
  owner?: Maybe<UserWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<ObjectiveWhereInput>>,
  OR?: Maybe<Array<ObjectiveWhereInput>>,
  NOT?: Maybe<Array<ObjectiveWhereInput>>,
};

export type ObjectiveWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  keyResult?: Maybe<KeyResult>,
  keyResults: Array<Maybe<KeyResult>>,
  keyResultsConnection: KeyResultConnection,
  objective?: Maybe<Objective>,
  objectives: Array<Maybe<Objective>>,
  objectivesConnection: ObjectiveConnection,
  user?: Maybe<User>,
  users: Array<Maybe<User>>,
  usersConnection: UserConnection,
  node?: Maybe<Node>,
};


export type QuerykeyResultArgs = {
  where: KeyResultWhereUniqueInput
};


export type QuerykeyResultsArgs = {
  where?: Maybe<KeyResultWhereInput>,
  orderBy?: Maybe<KeyResultOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerykeyResultsConnectionArgs = {
  where?: Maybe<KeyResultWhereInput>,
  orderBy?: Maybe<KeyResultOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryobjectiveArgs = {
  where: ObjectiveWhereUniqueInput
};


export type QueryobjectivesArgs = {
  where?: Maybe<ObjectiveWhereInput>,
  orderBy?: Maybe<ObjectiveOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryobjectivesConnectionArgs = {
  where?: Maybe<ObjectiveWhereInput>,
  orderBy?: Maybe<ObjectiveOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryuserArgs = {
  where: UserWhereUniqueInput
};


export type QueryusersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryusersConnectionArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerynodeArgs = {
  id: Scalars['ID']
};

export type Subscription = {
   __typename?: 'Subscription',
  keyResult?: Maybe<KeyResultSubscriptionPayload>,
  objective?: Maybe<ObjectiveSubscriptionPayload>,
  user?: Maybe<UserSubscriptionPayload>,
};


export type SubscriptionkeyResultArgs = {
  where?: Maybe<KeyResultSubscriptionWhereInput>
};


export type SubscriptionobjectiveArgs = {
  where?: Maybe<ObjectiveSubscriptionWhereInput>
};


export type SubscriptionuserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  email: Scalars['String'],
};

export type UserConnection = {
   __typename?: 'UserConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<UserEdge>>,
  aggregate: AggregateUser,
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  email: Scalars['String'],
};

export type UserCreateOneInput = {
  create?: Maybe<UserCreateInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserEdge = {
   __typename?: 'UserEdge',
  node: User,
  cursor: Scalars['String'],
};

export enum UserOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC'
}

export type UserPreviousValues = {
   __typename?: 'UserPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
  email: Scalars['String'],
};

export type UserSubscriptionPayload = {
   __typename?: 'UserSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<User>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserPreviousValues>,
};

export type UserSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserWhereInput>,
  AND?: Maybe<Array<UserSubscriptionWhereInput>>,
  OR?: Maybe<Array<UserSubscriptionWhereInput>>,
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>,
};

export type UserUpdateDataInput = {
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
};

export type UserUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
};

export type UserUpdateOneInput = {
  create?: Maybe<UserCreateInput>,
  update?: Maybe<UserUpdateDataInput>,
  upsert?: Maybe<UserUpsertNestedInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpsertNestedInput = {
  update: UserUpdateDataInput,
  create: UserCreateInput,
};

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
};

export type GetOKRsQueryVariables = {};


export type GetOKRsQuery = { __typename?: 'Query', objectives: Array<Maybe<{ __typename?: 'Objective', id: string, text: string, keyResults: Maybe<Array<{ __typename?: 'KeyResult', id: string, target: string, current: Maybe<string>, confidence: Maybe<Confidence> }>> }>> };

export type GetUsersQueryVariables = {};


export type GetUsersQuery = { __typename?: 'Query', users: Array<Maybe<{ __typename?: 'User', id: string, name: string, email: string }>> };

export type AddObjectiveMutationVariables = {
  data: ObjectiveCreateInput
};


export type AddObjectiveMutation = { __typename?: 'Mutation', createObjective: { __typename?: 'Objective', id: string, text: string, keyResults: Maybe<Array<{ __typename?: 'KeyResult', id: string, target: string, current: Maybe<string>, confidence: Maybe<Confidence> }>> } };

export type DeleteObjectiveMutationVariables = {
  id: Scalars['ID']
};


export type DeleteObjectiveMutation = { __typename?: 'Mutation', deleteManyKeyResults: { __typename?: 'BatchPayload', count: any }, deleteObjective: Maybe<{ __typename?: 'Objective', id: string }> };

export type DeleteKeyResultMutationVariables = {
  id: Scalars['ID']
};


export type DeleteKeyResultMutation = { __typename?: 'Mutation', deleteKeyResult: Maybe<{ __typename?: 'KeyResult', objective: { __typename?: 'Objective', id: string } }> };

export type UpdateObjectiveMutationVariables = {
  id: Scalars['ID'],
  data: ObjectiveUpdateInput
};


export type UpdateObjectiveMutation = { __typename?: 'Mutation', updateObjective: Maybe<{ __typename?: 'Objective', id: string, text: string, keyResults: Maybe<Array<{ __typename?: 'KeyResult', id: string, target: string, current: Maybe<string>, confidence: Maybe<Confidence> }>> }> };

export type UpdateKeyResultMutationVariables = {
  id: Scalars['ID'],
  data: KeyResultUpdateInput
};


export type UpdateKeyResultMutation = { __typename?: 'Mutation', updateKeyResult: Maybe<{ __typename?: 'KeyResult', id: string, target: string, current: Maybe<string>, confidence: Maybe<Confidence> }> };

export const KeyResultFieldsFragmentDoc = gql`
    fragment KeyResultFields on KeyResult {
  id
  target
  current
  confidence
}
    `;
export const ObjectiveFieldsFragmentDoc = gql`
    fragment ObjectiveFields on Objective {
  id
  text
  keyResults {
    ...KeyResultFields
  }
}
    ${KeyResultFieldsFragmentDoc}`;
export const GetOKRsDocument = gql`
    query GetOKRs {
  objectives(orderBy: createdAt_DESC) {
    ...ObjectiveFields
  }
}
    ${ObjectiveFieldsFragmentDoc}`;

/**
 * __useGetOKRsQuery__
 *
 * To run a query within a React component, call `useGetOKRsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOKRsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOKRsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOKRsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetOKRsQuery, GetOKRsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetOKRsQuery, GetOKRsQueryVariables>(GetOKRsDocument, baseOptions);
      }
export function useGetOKRsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOKRsQuery, GetOKRsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetOKRsQuery, GetOKRsQueryVariables>(GetOKRsDocument, baseOptions);
        }
export type GetOKRsQueryHookResult = ReturnType<typeof useGetOKRsQuery>;
export type GetOKRsLazyQueryHookResult = ReturnType<typeof useGetOKRsLazyQuery>;
export type GetOKRsQueryResult = ApolloReactCommon.QueryResult<GetOKRsQuery, GetOKRsQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users(orderBy: name_DESC) {
    id
    name
    email
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const AddObjectiveDocument = gql`
    mutation AddObjective($data: ObjectiveCreateInput!) {
  createObjective(data: $data) {
    ...ObjectiveFields
  }
}
    ${ObjectiveFieldsFragmentDoc}`;
export type AddObjectiveMutationFn = ApolloReactCommon.MutationFunction<AddObjectiveMutation, AddObjectiveMutationVariables>;

/**
 * __useAddObjectiveMutation__
 *
 * To run a mutation, you first call `useAddObjectiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddObjectiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addObjectiveMutation, { data, loading, error }] = useAddObjectiveMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddObjectiveMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddObjectiveMutation, AddObjectiveMutationVariables>) {
        return ApolloReactHooks.useMutation<AddObjectiveMutation, AddObjectiveMutationVariables>(AddObjectiveDocument, baseOptions);
      }
export type AddObjectiveMutationHookResult = ReturnType<typeof useAddObjectiveMutation>;
export type AddObjectiveMutationResult = ApolloReactCommon.MutationResult<AddObjectiveMutation>;
export type AddObjectiveMutationOptions = ApolloReactCommon.BaseMutationOptions<AddObjectiveMutation, AddObjectiveMutationVariables>;
export const DeleteObjectiveDocument = gql`
    mutation DeleteObjective($id: ID!) {
  deleteManyKeyResults(where: {objective: {id: $id}}) {
    count
  }
  deleteObjective(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteObjectiveMutationFn = ApolloReactCommon.MutationFunction<DeleteObjectiveMutation, DeleteObjectiveMutationVariables>;

/**
 * __useDeleteObjectiveMutation__
 *
 * To run a mutation, you first call `useDeleteObjectiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteObjectiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteObjectiveMutation, { data, loading, error }] = useDeleteObjectiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteObjectiveMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteObjectiveMutation, DeleteObjectiveMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteObjectiveMutation, DeleteObjectiveMutationVariables>(DeleteObjectiveDocument, baseOptions);
      }
export type DeleteObjectiveMutationHookResult = ReturnType<typeof useDeleteObjectiveMutation>;
export type DeleteObjectiveMutationResult = ApolloReactCommon.MutationResult<DeleteObjectiveMutation>;
export type DeleteObjectiveMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteObjectiveMutation, DeleteObjectiveMutationVariables>;
export const DeleteKeyResultDocument = gql`
    mutation DeleteKeyResult($id: ID!) {
  deleteKeyResult(where: {id: $id}) {
    objective {
      id
    }
  }
}
    `;
export type DeleteKeyResultMutationFn = ApolloReactCommon.MutationFunction<DeleteKeyResultMutation, DeleteKeyResultMutationVariables>;

/**
 * __useDeleteKeyResultMutation__
 *
 * To run a mutation, you first call `useDeleteKeyResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteKeyResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteKeyResultMutation, { data, loading, error }] = useDeleteKeyResultMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteKeyResultMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteKeyResultMutation, DeleteKeyResultMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteKeyResultMutation, DeleteKeyResultMutationVariables>(DeleteKeyResultDocument, baseOptions);
      }
export type DeleteKeyResultMutationHookResult = ReturnType<typeof useDeleteKeyResultMutation>;
export type DeleteKeyResultMutationResult = ApolloReactCommon.MutationResult<DeleteKeyResultMutation>;
export type DeleteKeyResultMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteKeyResultMutation, DeleteKeyResultMutationVariables>;
export const UpdateObjectiveDocument = gql`
    mutation UpdateObjective($id: ID!, $data: ObjectiveUpdateInput!) {
  updateObjective(data: $data, where: {id: $id}) {
    ...ObjectiveFields
  }
}
    ${ObjectiveFieldsFragmentDoc}`;
export type UpdateObjectiveMutationFn = ApolloReactCommon.MutationFunction<UpdateObjectiveMutation, UpdateObjectiveMutationVariables>;

/**
 * __useUpdateObjectiveMutation__
 *
 * To run a mutation, you first call `useUpdateObjectiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateObjectiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateObjectiveMutation, { data, loading, error }] = useUpdateObjectiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateObjectiveMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateObjectiveMutation, UpdateObjectiveMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateObjectiveMutation, UpdateObjectiveMutationVariables>(UpdateObjectiveDocument, baseOptions);
      }
export type UpdateObjectiveMutationHookResult = ReturnType<typeof useUpdateObjectiveMutation>;
export type UpdateObjectiveMutationResult = ApolloReactCommon.MutationResult<UpdateObjectiveMutation>;
export type UpdateObjectiveMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateObjectiveMutation, UpdateObjectiveMutationVariables>;
export const UpdateKeyResultDocument = gql`
    mutation UpdateKeyResult($id: ID!, $data: KeyResultUpdateInput!) {
  updateKeyResult(data: $data, where: {id: $id}) {
    ...KeyResultFields
  }
}
    ${KeyResultFieldsFragmentDoc}`;
export type UpdateKeyResultMutationFn = ApolloReactCommon.MutationFunction<UpdateKeyResultMutation, UpdateKeyResultMutationVariables>;

/**
 * __useUpdateKeyResultMutation__
 *
 * To run a mutation, you first call `useUpdateKeyResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateKeyResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateKeyResultMutation, { data, loading, error }] = useUpdateKeyResultMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateKeyResultMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateKeyResultMutation, UpdateKeyResultMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateKeyResultMutation, UpdateKeyResultMutationVariables>(UpdateKeyResultDocument, baseOptions);
      }
export type UpdateKeyResultMutationHookResult = ReturnType<typeof useUpdateKeyResultMutation>;
export type UpdateKeyResultMutationResult = ApolloReactCommon.MutationResult<UpdateKeyResultMutation>;
export type UpdateKeyResultMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateKeyResultMutation, UpdateKeyResultMutationVariables>;