import { SubscriptionResolvers } from '../generated/graphqlgen';

export const Subscription: SubscriptionResolvers.Type = {
  ...SubscriptionResolvers.defaultResolvers,

  posts: {
    subscribe: async (parent, args, context) => {
      return context.prisma.$subscribe.post({
        mutation_in: ['CREATED', 'UPDATED', 'DELETED']
      });
    },
    resolve: payload => {
      return payload;
    }
  }
};
