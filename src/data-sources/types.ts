import { gql } from 'apollo-server';

export const ARTICLES_TYPE_DEF = gql`
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
