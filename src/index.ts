import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { todoResolvers, todoTypeDefs } from "./models/todo/index.js";

const server = new ApolloServer({
  typeDefs: todoTypeDefs,
  resolvers: todoResolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
  context: async ({ req }) => ({ token: "hello" }),
});

console.log(`🚀  Server ready at: ${url}`);
