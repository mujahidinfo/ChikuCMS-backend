"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
const load_1 = require("@graphql-tools/load");
const schema_1 = require("@graphql-tools/schema");
const graphql_scalars_1 = require("graphql-scalars");
const typeDefs = (0, load_1.loadDocumentsSync)("src/graphql/**/*.graphql", {
    loaders: [new graphql_file_loader_1.GraphQLFileLoader()],
});
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: [...graphql_scalars_1.typeDefs, typeDefs],
    resolvers: {
        Query: {
            hello: () => "Hello World!",
        },
    },
});
exports.default = schema;
