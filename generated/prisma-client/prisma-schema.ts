// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateKeyResult {
  count: Int!
}

type AggregateObjective {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

enum Confidence {
  AWESOME
  SOSO
  BAD
  ABORT
}

scalar DateTime

type KeyResult {
  id: ID!
  target: String!
  current: String
  confidence: Confidence
  objective: Objective!
}

type KeyResultConnection {
  pageInfo: PageInfo!
  edges: [KeyResultEdge]!
  aggregate: AggregateKeyResult!
}

input KeyResultCreateInput {
  id: ID
  target: String!
  current: String
  confidence: Confidence
  objective: ObjectiveCreateOneWithoutKeyResultsInput!
}

input KeyResultCreateManyWithoutObjectiveInput {
  create: [KeyResultCreateWithoutObjectiveInput!]
  connect: [KeyResultWhereUniqueInput!]
}

input KeyResultCreateWithoutObjectiveInput {
  id: ID
  target: String!
  current: String
  confidence: Confidence
}

type KeyResultEdge {
  node: KeyResult!
  cursor: String!
}

enum KeyResultOrderByInput {
  id_ASC
  id_DESC
  target_ASC
  target_DESC
  current_ASC
  current_DESC
  confidence_ASC
  confidence_DESC
}

type KeyResultPreviousValues {
  id: ID!
  target: String!
  current: String
  confidence: Confidence
}

input KeyResultScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  target: String
  target_not: String
  target_in: [String!]
  target_not_in: [String!]
  target_lt: String
  target_lte: String
  target_gt: String
  target_gte: String
  target_contains: String
  target_not_contains: String
  target_starts_with: String
  target_not_starts_with: String
  target_ends_with: String
  target_not_ends_with: String
  current: String
  current_not: String
  current_in: [String!]
  current_not_in: [String!]
  current_lt: String
  current_lte: String
  current_gt: String
  current_gte: String
  current_contains: String
  current_not_contains: String
  current_starts_with: String
  current_not_starts_with: String
  current_ends_with: String
  current_not_ends_with: String
  confidence: Confidence
  confidence_not: Confidence
  confidence_in: [Confidence!]
  confidence_not_in: [Confidence!]
  AND: [KeyResultScalarWhereInput!]
  OR: [KeyResultScalarWhereInput!]
  NOT: [KeyResultScalarWhereInput!]
}

type KeyResultSubscriptionPayload {
  mutation: MutationType!
  node: KeyResult
  updatedFields: [String!]
  previousValues: KeyResultPreviousValues
}

input KeyResultSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: KeyResultWhereInput
  AND: [KeyResultSubscriptionWhereInput!]
  OR: [KeyResultSubscriptionWhereInput!]
  NOT: [KeyResultSubscriptionWhereInput!]
}

input KeyResultUpdateInput {
  target: String
  current: String
  confidence: Confidence
  objective: ObjectiveUpdateOneRequiredWithoutKeyResultsInput
}

input KeyResultUpdateManyDataInput {
  target: String
  current: String
  confidence: Confidence
}

input KeyResultUpdateManyMutationInput {
  target: String
  current: String
  confidence: Confidence
}

input KeyResultUpdateManyWithoutObjectiveInput {
  create: [KeyResultCreateWithoutObjectiveInput!]
  delete: [KeyResultWhereUniqueInput!]
  connect: [KeyResultWhereUniqueInput!]
  set: [KeyResultWhereUniqueInput!]
  disconnect: [KeyResultWhereUniqueInput!]
  update: [KeyResultUpdateWithWhereUniqueWithoutObjectiveInput!]
  upsert: [KeyResultUpsertWithWhereUniqueWithoutObjectiveInput!]
  deleteMany: [KeyResultScalarWhereInput!]
  updateMany: [KeyResultUpdateManyWithWhereNestedInput!]
}

input KeyResultUpdateManyWithWhereNestedInput {
  where: KeyResultScalarWhereInput!
  data: KeyResultUpdateManyDataInput!
}

input KeyResultUpdateWithoutObjectiveDataInput {
  target: String
  current: String
  confidence: Confidence
}

input KeyResultUpdateWithWhereUniqueWithoutObjectiveInput {
  where: KeyResultWhereUniqueInput!
  data: KeyResultUpdateWithoutObjectiveDataInput!
}

input KeyResultUpsertWithWhereUniqueWithoutObjectiveInput {
  where: KeyResultWhereUniqueInput!
  update: KeyResultUpdateWithoutObjectiveDataInput!
  create: KeyResultCreateWithoutObjectiveInput!
}

input KeyResultWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  target: String
  target_not: String
  target_in: [String!]
  target_not_in: [String!]
  target_lt: String
  target_lte: String
  target_gt: String
  target_gte: String
  target_contains: String
  target_not_contains: String
  target_starts_with: String
  target_not_starts_with: String
  target_ends_with: String
  target_not_ends_with: String
  current: String
  current_not: String
  current_in: [String!]
  current_not_in: [String!]
  current_lt: String
  current_lte: String
  current_gt: String
  current_gte: String
  current_contains: String
  current_not_contains: String
  current_starts_with: String
  current_not_starts_with: String
  current_ends_with: String
  current_not_ends_with: String
  confidence: Confidence
  confidence_not: Confidence
  confidence_in: [Confidence!]
  confidence_not_in: [Confidence!]
  objective: ObjectiveWhereInput
  AND: [KeyResultWhereInput!]
  OR: [KeyResultWhereInput!]
  NOT: [KeyResultWhereInput!]
}

input KeyResultWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createKeyResult(data: KeyResultCreateInput!): KeyResult!
  updateKeyResult(data: KeyResultUpdateInput!, where: KeyResultWhereUniqueInput!): KeyResult
  updateManyKeyResults(data: KeyResultUpdateManyMutationInput!, where: KeyResultWhereInput): BatchPayload!
  upsertKeyResult(where: KeyResultWhereUniqueInput!, create: KeyResultCreateInput!, update: KeyResultUpdateInput!): KeyResult!
  deleteKeyResult(where: KeyResultWhereUniqueInput!): KeyResult
  deleteManyKeyResults(where: KeyResultWhereInput): BatchPayload!
  createObjective(data: ObjectiveCreateInput!): Objective!
  updateObjective(data: ObjectiveUpdateInput!, where: ObjectiveWhereUniqueInput!): Objective
  updateManyObjectives(data: ObjectiveUpdateManyMutationInput!, where: ObjectiveWhereInput): BatchPayload!
  upsertObjective(where: ObjectiveWhereUniqueInput!, create: ObjectiveCreateInput!, update: ObjectiveUpdateInput!): Objective!
  deleteObjective(where: ObjectiveWhereUniqueInput!): Objective
  deleteManyObjectives(where: ObjectiveWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Objective {
  id: ID!
  text: String!
  keyResults(where: KeyResultWhereInput, orderBy: KeyResultOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [KeyResult!]
  type: ObjectiveType!
  owner: User
  createdAt: DateTime!
}

type ObjectiveConnection {
  pageInfo: PageInfo!
  edges: [ObjectiveEdge]!
  aggregate: AggregateObjective!
}

input ObjectiveCreateInput {
  id: ID
  text: String!
  keyResults: KeyResultCreateManyWithoutObjectiveInput
  type: ObjectiveType!
  owner: UserCreateOneInput
}

input ObjectiveCreateOneWithoutKeyResultsInput {
  create: ObjectiveCreateWithoutKeyResultsInput
  connect: ObjectiveWhereUniqueInput
}

input ObjectiveCreateWithoutKeyResultsInput {
  id: ID
  text: String!
  type: ObjectiveType!
  owner: UserCreateOneInput
}

type ObjectiveEdge {
  node: Objective!
  cursor: String!
}

enum ObjectiveOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
}

type ObjectivePreviousValues {
  id: ID!
  text: String!
  type: ObjectiveType!
  createdAt: DateTime!
}

type ObjectiveSubscriptionPayload {
  mutation: MutationType!
  node: Objective
  updatedFields: [String!]
  previousValues: ObjectivePreviousValues
}

input ObjectiveSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ObjectiveWhereInput
  AND: [ObjectiveSubscriptionWhereInput!]
  OR: [ObjectiveSubscriptionWhereInput!]
  NOT: [ObjectiveSubscriptionWhereInput!]
}

enum ObjectiveType {
  COMPANY
  TEAM
  INDIVIDUAL
}

input ObjectiveUpdateInput {
  text: String
  keyResults: KeyResultUpdateManyWithoutObjectiveInput
  type: ObjectiveType
  owner: UserUpdateOneInput
}

input ObjectiveUpdateManyMutationInput {
  text: String
  type: ObjectiveType
}

input ObjectiveUpdateOneRequiredWithoutKeyResultsInput {
  create: ObjectiveCreateWithoutKeyResultsInput
  update: ObjectiveUpdateWithoutKeyResultsDataInput
  upsert: ObjectiveUpsertWithoutKeyResultsInput
  connect: ObjectiveWhereUniqueInput
}

input ObjectiveUpdateWithoutKeyResultsDataInput {
  text: String
  type: ObjectiveType
  owner: UserUpdateOneInput
}

input ObjectiveUpsertWithoutKeyResultsInput {
  update: ObjectiveUpdateWithoutKeyResultsDataInput!
  create: ObjectiveCreateWithoutKeyResultsInput!
}

input ObjectiveWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  keyResults_every: KeyResultWhereInput
  keyResults_some: KeyResultWhereInput
  keyResults_none: KeyResultWhereInput
  type: ObjectiveType
  type_not: ObjectiveType
  type_in: [ObjectiveType!]
  type_not_in: [ObjectiveType!]
  owner: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ObjectiveWhereInput!]
  OR: [ObjectiveWhereInput!]
  NOT: [ObjectiveWhereInput!]
}

input ObjectiveWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  keyResult(where: KeyResultWhereUniqueInput!): KeyResult
  keyResults(where: KeyResultWhereInput, orderBy: KeyResultOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [KeyResult]!
  keyResultsConnection(where: KeyResultWhereInput, orderBy: KeyResultOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): KeyResultConnection!
  objective(where: ObjectiveWhereUniqueInput!): Objective
  objectives(where: ObjectiveWhereInput, orderBy: ObjectiveOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Objective]!
  objectivesConnection(where: ObjectiveWhereInput, orderBy: ObjectiveOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ObjectiveConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  keyResult(where: KeyResultSubscriptionWhereInput): KeyResultSubscriptionPayload
  objective(where: ObjectiveSubscriptionWhereInput): ObjectiveSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
}

input UserUpdateInput {
  name: String
  email: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`