import $ from 'jquery';
import lozad from 'lozad';
import URI from 'urijs';
import * as Cookies from 'js-cookie';
import 'magnific-popup';
import { Loader } from './components/Loader';
import { CORKCREW as _ } from './components/Corkcrew';
import { MovingNav } from './components/MovingNav';
import { useScrollDirection } from './components/ScrollDirection';
import { Blog } from './services/Blog';
import { Article } from './views/Article';
import { Articles } from './views/Articles';

const initLazyLoading = () => {
  lozad('.lozad', {
    load: function(el) {
      console.log(el);
      el.src = el.dataset.src;
      el.onload = () => el.classList.add('in');
    }
  }).observe();
};

(function() {
  $(function() {
    const currentLocation = new URI(window.location.href);
    const isMainPage = currentLocation.path() === '/';
    const contentScrollPosition = isMainPage ? 731 + 143 : 143;
    new MovingNav({ selector: '.navigation', minThrottle: contentScrollPosition });

    $('.poppy-image').magnificPopup({ type:'image' });

    const $skip = $('.skip');
    $skip.focus();

    useScrollDirection({ minThrottle: contentScrollPosition })
      .subscribe(direction => {
        if (direction === 'throttle') $skip.focus();
        else $skip.blur();
      });

    initLazyLoading();

    _.screwed('.not-follow', function(e) {
      const url = $(this).attr('href');

      window.open(url);
      e.preventDefault();
    });

    const blogService = new Blog();
    const articlesView = new Articles({ selector: '#articles' });
    if (articlesView.$container) {
      blogService.getArticles()
        .then(articles => {
          articlesView.render(articles);
          setTimeout(initLazyLoading, 1000);
        })
        .catch((err) => articlesView.$container.innerHTML = err);
    }

    const articleView = new Article({ selector: '#article' });
    const slug = $('#articleID').text();
    if (articleView.$container && slug) {
      blogService.getArticle(slug)
        .then(article => {
          articleView.render(article);
        })
        .catch((err) => articleView.$container.innerHTML = err);
    }
  }());

}());

(function() {
  $(function() {
    _.screwed('#connectForm', function(e) {
      e.preventDefault();

      const removeLoader = Loader.showLoading($('#formWrapper'), 'formLoader', '#8C4B65');      
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
    fetch('/data/connectMe/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.status !== 200) throw Error();

        return response.text();
      })
      .then((text) => {
        $formWrapper.html(text);
      })
      .catch(() => {
        $('#connectForm').show('fast');
        $formWrapper.find('.formLoader').hide('fast');
        removeLoader();
      });
  }
}());
