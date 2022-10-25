import format from 'date-fns/format';

export class Article {
  constructor({ selector }) {
    this.$container = document.querySelector(selector);
  }

  render(article) {
    const { created_at, text, title } = article;
    const createdAt = Date.parse(created_at);

    this.$container.innerHTML = `
      <h1 class='articlePreview__title'>
        ${title}
      </h1>
      <div class='articleMeta'>
        <time datetime="${format(createdAt, 'yyyy-MM-dd')}}">${format(createdAt, 'yyyy/MM/dd')}</time>
      </div>
      <div class='articleText'> ${text.replace(new RegExp('<h5', 'g'), '<h2').replace(new RegExp('</h5>', 'g'), '</h2>')}</div>
    `;
  }
}
