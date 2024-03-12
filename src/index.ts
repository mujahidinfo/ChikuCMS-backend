import express from 'express';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from '../schema/schema';

const app = express();
const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  context: {
    prisma,
  },
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);



