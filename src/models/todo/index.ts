export const todoTypeDefs = `#graphql
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo!],
  }

`;

export const todoResolvers = {
  Query: {
    todos: (parent, args, ctx, info) => {
      return [
        {
          id: "1",
          title: "Todo 1",
          completed: false,
        },
        {
          id: "2",
          title: "Todo 2",
          completed: true,
        },
      ];
    },
  },
  Todo: {
    id: (parent, args, ctx, info) => {
      return "meow";
    },
  },
};
