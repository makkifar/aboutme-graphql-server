import { ApolloServer, gql } from 'apollo-server';
import { ArticlesAPI } from './data-sources/articles';

const typeDefs = gql`
  type Article {
    articleId: String
    title: String
    content: String
  }

  type Query {
    articles: [Article]
    article(articleId: String): Article
  }
`;

const resolvers = {
  Query: {
    articles: async (_source, _args, { dataSources }) => {
      return await dataSources.articlesAPI.getArticles();
    },
    article: async (_source, { articleId }, { dataSources }) => {
      return await dataSources.articlesAPI.getArticle(articleId);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    articlesAPI: new ArticlesAPI()
  })
});

server.listen();
