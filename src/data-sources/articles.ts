import { RESTDataSource } from 'apollo-datasource-rest';

export class ArticlesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://35.159.24.76:1337/';
  }

  async getArticle(articleId: string) {
    return await this.get(`articles/${articleId}`);
  }

  async getArticles() {
    return await this.get(`articles`);
  }
}
