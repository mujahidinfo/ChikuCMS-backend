import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

async function init() {
  const app = express();
  const PORT = process.env.PORT || 4000;

  app.use(express.json());

  // create GraphQL server
  const gqlServer = new ApolloServer({
    typeDefs: `type Query { hello: String }`,
    resolvers: {
      Query: {
        hello: () => "Hello World!",
      },
    },
  });

  // Start the server
  await gqlServer.start();

  app.get("/", (req, res) => {
    res.send(`
      <h1>GraphQL Server</h1>
      <p>Go to <a href="/api/graphql">/api/graphql</a> to access the GraphQL server</p>
    `);
  });

  app.use("/api/graphql", expressMiddleware(gqlServer));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
  });
}

init();
