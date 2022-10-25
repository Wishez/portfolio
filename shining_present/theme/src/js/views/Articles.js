import format from 'date-fns/format';

export class Articles {
  constructor({ selector }) {
    this.$container = document.querySelector(selector);
  }

  render(articles) {
    this.$container.innerHTML = articles
      .reduce((result, { slug, title, created_at, announce_text, preview }) => (
        `${result}
        <article class="article-preview">
          <h1 class='article-preview__title'>
            <a class='article-preview__link' href='/article/${slug}/'>${title}</a>
          </h1>
          <div class='article-preview-meta'>
            <time datetime="${format(Date.parse(created_at), 'yyyy-MM-dd')}">${format(Date.parse(created_at), 'yyyy/MM/dd')}</time>
            <p class='article-preview-meta__paragraph'> ${announce_text}</p>
          </div>
          ${preview ? `<img class="lozad fade article-preview__image" data-src="${preview.image}" alt="${preview.alt}" />` : ''}
        </article>`
      ), '');
  }
}
