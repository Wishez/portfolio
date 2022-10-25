export class Blog {
  constructor() {

    this.baseUrl = 'https://blog.shining-present.ru/api/v1';
  }

  getArticles() {
    return fetch(`${this.baseUrl}/article/`)
      .then(data => data.json());
  }

  getArticle(slug) {
    return fetch(`${this.baseUrl}/article/${slug}/`)
      .then(data => data.json());
  }
}
