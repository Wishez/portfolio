import { createStore, combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter.js';
import { reducer as formReducer } from 'redux-form';
import navigation from './navigation.js';
import registration from './registration.js';
import account from './account.js';

const rootReducer = combineReducers({
	form: formReducer,
	visibilityFilter,
	navigation,
	registration,
	account
});


export default rootReducer;