import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ContentWrapperContainer from './ContentWrapperContainer';
import Register from './../components/Register';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { tryRegister } from './../actions/accountActions.js';
import { changeSiteIfNeeded } from './../actions/selectedSiteActions.js';
import { selectNavigationItem } from './../actions/navigationActions.js';


class RegisterContainer extends Component {
	static PropTypes = {
		registered: PropTypes.bool.isRequired,
		isRegistering: PropTypes.bool.isRequired,
		dispatch: PropTypes.func.isRequired,
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired
	}
	// Переменная для чек-бокса.
	state = {
		knowRules: false
	}

	customViewComponent = () => {
		const { dispatch, location } = this.props;
		dispatch(selectNavigationItem('firstNavItem'));
		changeSiteIfNeeded(this.props);
        changeHeightAwesomeBorder('/registration', location.pathname);
	}

	componentDidMount() {
		this.customViewComponent();
    }

    componentDidUpdate() {
    	this.customViewComponent();
    }

	submitRegisterForm = (values, dispatch) => {

		// Change it, if you need.
		values.site = 'main';
		
		dispatch(tryRegister('main', values));
		
	}

	allowRegister = e => {
		this.setState({
			knowRules: !this.state.knowRules
		});
	}

	render() {
		return (
			<ContentWrapperContainer>
				<Register {...this.props}
					{...this.state}
					submitRegisterForm={this.submitRegisterForm} 
					allowRegister={this.allowRegister}
				/>
			</ContentWrapperContainer>
		);
	}
}

const mapStateToProps = state => {
	const { 
		registration
	} = state;
		
	const { 
		isRegistering,
		registered,
		registerMessage
	} = registration;


	return {
		isRegistering,
		registered,
		message: registerMessage
	};
}

export default withRouter(connect(mapStateToProps)(RegisterContainer));