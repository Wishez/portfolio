import { 
 	REGISTER,
 	REQUEST_REGISTER
 	
} from './../constants/actionTypes.js';
import customAjaxRequest from './../constants/ajax.js';

// Показывает обработку регистрации.
// 
const registering = () => ({
	type: REQUEST_REGISTER
});

const register = (
	registered,
	registerMessage
) => ({
	type: REGISTER,
	registered: registered,
	registerMessage: registerMessage
});



export const tryRegister = (site, data) => dispatch => {
	
	dispatch(registering());

	data.site = site;

	customAjaxRequest({
		url: '/register/',
		data: data,
		type: 'POST',
		processData: true,
		cache: true
	});

    return $.ajax({
		success: (registerMessage) => {
		
			// Сервер возвращает Вы успешно прошли регистрацию, если пользователь успешно зарегистрировался.
			// В остальных случаях он возвращает другое сообщение.
			if (registerMessage === 'Вы успешно прошли регистрацию') {
				dispatch(register(true, registerMessage));
			} else {
				dispatch(register(false, registerMessage));
			}
		},
		error: (xhr, errmsg, err) => {
			dispatch(register(false, 'Внутренняя ошибка сервера'));
		}
	});
}