 import {
	LOGIN,
 	LOGOUT,
 	REQUEST_LOGIN_IN,
 	SET_USER_TO_COOKIES
 } from './../constants/accountTypes.js';
import { cookiesHandler } from './../constants/pureFunctions.js';

export const initAccountState = {
	username: '',
	password: '',
	isLogged: false,
	userData: {},
	// Обычное message для формы входа.
	message: '',
	isLogining: false,
};


const account = (
	state = {},
	action
) => {
	switch (action.type) {
		case REQUEST_LOGIN_IN:
			return {
				...state,
				isLogining: true
			};
		case LOGIN:
			return {
				...state,
				isLogged: action.isLogged,
				password: action.password,
				username: action.username,
				userData: {
					...action.userData
				},
				message: action.message,
				registered: action.registered,
				registerMessage: action.registerMessage,
				isLogining: false
			};
		case LOGOUT:
			cookiesHandler.clearCookies(action.site);

			return {
				...initAccountState
			};
		case SET_USER_TO_COOKIES:
			/* Если пользователь удачно залогинился, то 
			 * пароль и логин кэшируются.
			 * В action указан {
			 * 		username: string,
			 * 		password: string,
			 * 		site: string
			 * }
			 * action.type не принимается внутри функции, но также передаётся
			 * в спецификацию объекта.
			 */
			cookiesHandler.setUsernameAndPasswordToCookies({...action});

			return {
				...state
			};
		default:
			return state;
	}
};

export default account;


/* Take additional actions if you need.
case REQUEST_IN_PERSONAL_ROOM:
	return { 
		...state,
		isChanging: true
	};
case RECOVER_PASSWORD:
	return {
		...state,
		recoverPasswordMessage: action.recoverPasswordMessage,
		isChanging: false
	};
case CHANGE_EMAIL:
	return {
		...state,
		userData: {
			...state.userData,
			email: action.email
		},
		changeEmailMessage: action.changeEmailMessage,
		isChanging: false

	};
case CHANGE_PASSWORD:
	return {
		...state,
		password: action.password,
		changePasswordMessage: action.changePasswordMessage,
		isChanging: false
	};
case SUBSCRIBE:
	return {
		...state,
		subscribeMessage: action.subscribeMessage,
		isChanging: false,
		userData: {
			...state.userData,
			...action.userData
		}

	};
case REPLANISH_BALANCE:
	return {
		...state,
		replanishBalanceMessage: action.replanishBalanceMessage
	};
case CHANGE_USER_AVATAR: 
	return {
		...state,
		userData: {
			...state.userData,
			...action.userData
		}
};
 */