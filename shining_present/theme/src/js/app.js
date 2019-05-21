import $ from 'jquery';
import lozad from 'lozad';
import Siema from 'siema';
import moment from 'moment';
import request from './lib/ajax';

const CORKCREW  = (function() {
  const that = {};

  that.showLoading = function(
    $node,
    classLoader,
    color,
    maxWidth
  ) {
    const $loader =  $(`<svg class=${classLoader} viewBox="0 0 100 100">
         <path fill="${color}" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
          c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
              <animateTransform
                 attributeName="transform"
                 attributeType="XML"
                 type="rotate"
                 dur="2s"
                 from="0 50 50"
                 to="360 50 50"
                 repeatCount="indefinite" />
          </path>
         <path fill="${color}" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
          c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
              <animateTransform
                 attributeName="transform"
                 attributeType="XML"
                 type="rotate"
                 dur="1s"
                 from="0 50 50"
                 to="-360 50 50"
                 repeatCount="indefinite" />
          </path>
         <path fill="${color}" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
          L82,35.7z">
              <animateTransform
                 attributeName="transform"
                 attributeType="XML"
                 type="rotate"
                 dur="2s"
                 from="0 50 50"
                 to="360 50 50"
                 repeatCount="indefinite" />
          </path>
        </svg>`).appendTo($node);

    if (maxWidth) $loader.css('maxWidth', maxWidth);

    return () => $loader.remove();
  }; // end showLoading

  that.screwed = (selector, callback, event='click') => $(document).on(event, selector, callback);

  return that;
}());

(function(_) {
  $(function() {
    const $skip = $('.skip');
    $skip.focus();

    const $out = $('.out');
    $(document).on('click', '.slideTo', function() {
      const anchor =  $(this).attr('href');
      $out.animate({
        scrollTop: $(anchor).offset().top + 42
      }, 250);
    });
    

    let isSkipButtonFocused = true;
    $out.on('scroll', function() {
      const fromTop = $out.scrollTop();
      const isUserInMainContent = fromTop > 550;
      const isHideSkipButton = isUserInMainContent && isSkipButtonFocused;

      if (isHideSkipButton) {
        $skip.blur();
        isSkipButtonFocused = false;
      } else if (!isUserInMainContent && !isSkipButtonFocused) {
        $skip.focus();
        isSkipButtonFocused = true;
      }
    });

    lozad('.lozad', {
      load: function(el) {
        el.src = el.dataset.src;
        el.onload = function() {
          el.classList.add('in');
          el.style.minHeight = '375px';
        };
      }
    }).observe();

    new Siema();
  
    _.screwed('.not-follow', function(e) {
      const url = $(this).attr('href');

      window.open(url);
      e.preventDefault();
    }); // end click

    const $centeredMenuButton = $('#centeredMenuButton');
    let lastShadow  = '';

    _.screwed('.navListItem', function() {
      const $this = $(this);
      const shadowPosition = `shadow_position-${$this.data('position')}`;

      $centeredMenuButton.addClass(shadowPosition);

      lastShadow = shadowPosition;
    }, 'mouseover');

    _.screwed(
      '.navListItem',
      () => $centeredMenuButton.removeClass(lastShadow),
      'mouseout'
    );
  }());

}(CORKCREW));

(function(_) {
  const _apiUrl  = 'https://filipp-zhuravlev.ru/api/v1';

  const _getArticles = ($articles) => {
    const url  = _apiUrl + '/article/';

    return fetch(url)
      .then(data => data.json())
      .then(articles => {
        const finalHtml = articles
          .map(article => (
            `<li class="article">
                <h1 class='articlePreview__title'>
                   <a class='articlePreview' href='/article/${article.slug}/'>${article.title}</a>
                </h1>
                <div class='articleMeta'>
                    <time datetime="${moment(article.created_at).format('YYYY-MM-DD')}">${moment(article.created_at).format('YYYY/MM/DD')}</time>
                    <p class='articlePreview__paragraph'> ${article.announce_text}</p>
                </div>
            </li>`
          ))
          .join('');

        $articles.html(finalHtml);
      })
      .catch(err => $articles.html(err));
  };

  const _getArticle = ($article, slug) => {
    const url  = `${_apiUrl}/article/${slug}/`;
    return fetch(url)
      .then(data => data.json())
      .then(article => {
        const finalHtml =
            `<h1 class='articlePreview__title'>
                ${article.title}
             </h1>
            <div class='articleMeta'>
                    <time datetime="${moment(article.created_at).format('YYYY-MM-DD')}}">${moment(article.created_at).format('YYYY/MM/DD')}</time>
            </div>
            <div class='articleText'> ${article.text.replace(new RegExp('<h5', 'g'), '<h2').replace(new RegExp('</h5>', 'g'), '</h2>')}</div>`;

        $article.html(finalHtml);
      })
      .catch(err => $article.html(err));
  };

  $(function() {
    const $articles = $('#articles');
    if ($articles.length) _getArticles($articles);

    const articleID = $('#articleID').text();
    if (articleID) _getArticle($('#article'), articleID);
  });
}(CORKCREW));

(function(_) {
  $(function() {
    _.screwed('#connectForm', function(e) {
      e.preventDefault();

      const removeLoader = _.showLoading($('#formWrapper'), 'formLoader', '#8C4B65');      
      $(this).hide('fast');
      _sendEmail(removeLoader);
    }, 'submit'); // end submit
  });

  function _sendEmail(removeLoader) {
    const data = {
      'full_name': $('#id_full_name').val(),
      'email': $('#id_email').val(),
      'phone': $('#id_phone').val(),
      'message': $('#id_message').val()
    };

    const $formWrapper = $('#formWrapper');
    request({
      url: '/connectMe/',
      type: 'POST',
      success: (response) => $formWrapper.html(response),
      failure: () => {
        $('#connectForm').show('fast');
        $formWrapper.find('.formLoader').hide('fast');
        removeLoader();
      },
      data,
    });
  }
}(CORKCREW));
