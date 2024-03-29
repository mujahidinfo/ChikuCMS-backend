"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type Query {
    users: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
  type User {
    id: ID!
    name: String!
    email: String!
  }
`;
exports.typeDefs = typeDefs;
//# sourceMappingURL=schema.js.map