import { ApolloServer } from 'apollo-server';

import { ArticlesAPI } from './data-sources/articles';
import { ARTICLES_TYPE_DEF } from './data-sources/types';
import { ARTICLES_RESOLVERS } from './data-sources/resolvers';

const server = new ApolloServer({
  typeDefs: ARTICLES_TYPE_DEF,
  resolvers: ARTICLES_RESOLVERS,
  dataSources: () => ({
    articlesAPI: new ArticlesAPI()
  })
});

server.listen();
