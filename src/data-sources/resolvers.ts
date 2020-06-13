export const ARTICLES_RESOLVERS = {
  Query: {
    articles: async (_source, _args, { dataSources }) => {
      return await dataSources.articlesAPI.getArticles();
    },
    article: async (_source, { articleId }, { dataSources }) => {
      return await dataSources.articlesAPI.getArticle(articleId);
    }
  }
};
