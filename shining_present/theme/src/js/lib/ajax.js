import * as Cookies from 'js-cookie';

const csrfSafeMethod = (method) => (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));

const crossDomainRequest = (xhr, settings, that) => {		
  /* Заметка:
	 * csrftoken не всегда устанавливается сервером.
	 * Оно закэшированно, если пользователь находится в своём аккаунте
	 * Если даже csrftoken нет в кукАХ, то сервер в любом случае позволяет зарегистрироваться 
	 * используя декоратор @csrf_exempt для функции регистрации.
	 */
  const csrftoken = Cookies.get('csrftoken');
  if (!csrfSafeMethod(settings.type) && !that.crossDomain) {
 		xhr.setRequestHeader('X-CSRFToken', csrftoken);
  }
};

const request = ({
  url,
  data,
  type,
  success,
  failure
}) => {
  $.ajaxSetup({
    url,
    type,
    data,
    cache: true,
    beforeSend: (xhr, settings) => crossDomainRequest(xhr, settings, this),
  });

  return $.ajax(success, failure);
};

export default request;
