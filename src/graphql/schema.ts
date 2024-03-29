import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadDocumentsSync } from "@graphql-tools/load";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs as scalarTypeDefs } from "graphql-scalars";

const typeDefs = loadDocumentsSync("src/graphql/**/*.graphql", {
  loaders: [new GraphQLFileLoader()],
});

const schema = makeExecutableSchema({
  typeDefs: [...scalarTypeDefs, typeDefs],
  resolvers: {
    Query: {
      hello: () => "Hello World!",
    },
  },
});

export default schema;
