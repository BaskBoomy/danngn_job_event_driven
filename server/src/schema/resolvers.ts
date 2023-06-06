import { pubsub } from "../kafka/kafka.js";
let currentNumber = 0;

export const resolvers = {
  Query: {
    currentNumber() {
      return currentNumber;
    },
  },
  Mutation: {
    createUser(parent, args, { userController }) {
      pubsub.publish("USER_CREATED", { userCreated: args });
      return userController.create(args);
    },
  },
  Subscription: {
    userCreated: {
      subscribe: () => pubsub.asyncIterator(["USER_CREATED"]),
    },
  },
};
