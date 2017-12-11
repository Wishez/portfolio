import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ site }) => (	
	<div className='notFound'>
		<h1 className='text-center notFound'>
			В разработке&hellip;
		</h1>
		<Link to='/'>На главную</Link>
	</div>
);

export default NotFound;