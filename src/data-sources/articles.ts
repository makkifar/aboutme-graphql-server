import { RESTDataSource } from 'apollo-datasource-rest';
import config from 'config';

export class ArticlesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.get('articlesAPI.url');
  }

  async getArticle(articleId: string) {
    return await this.get(`articles/${articleId}`);
  }

  async getArticles() {
    return await this.get(`articles`);
  }
}
