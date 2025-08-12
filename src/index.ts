import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
  type Query {
    hello: String
  }
`;
// The schema defines the types and structure of the GraphQL API.
// In this case, we define a single query type `hello` that returns a string.

// Resolvers define the technique for fetching the types defined in the schema.
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    },
};

// The resolvers object maps the schema's fields to functions that return the data.
// Here, the `hello` field is resolved to return the string "Hello world!".
// The ApolloServer instance is created with the type definitions and resolvers.
// This sets up the server to handle GraphQL requests based on the defined schema and resolvers
async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀 Server ready at: ${url}`);
}

startServer();