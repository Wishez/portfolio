import React from 'react';
import Title from './Title';
import RegisterForm from './RegisterForm';

const Register = ({
	registered,
	...rest
}) => (
	<section className='registration'>
		<Title block='registration'
			text='Регистрация' 
		/>
		{registered ?
			<p className='registration__message registration__message--succes'>
				{rest.registerMessage}
			</p> :
 			<RegisterForm
 				{...rest} />
		}
	</section>
);

export default Register;