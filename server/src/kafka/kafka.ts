import { KafkaPubSub } from "graphql-kafka-subscriptions";

export const pubsub = new KafkaPubSub({
  topic: "USER",
  host: "localhost",
  port: "9092",
  globalConfig: {}, // options passed directly to the consumer and producer
});
