import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Logo = ({}) => (
  <div className='brand'>
    <Link to='/'
       className='brand__refer'>
      <h1 className='brand__name'>  
        強く、なりたい
      </h1>
    </Link>
  </div>
);

export default Logo;