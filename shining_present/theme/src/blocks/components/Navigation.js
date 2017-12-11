import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Navigation = ({
    firstNavItem,
    secondNavItem,
    thirdNavItem,
    fourthNavItem,
    fifthNavItem,
    openMenu,
    changeActiveNavigationItem,
    closeMenu,
    getActiveClasses
}) => (
    <nav className={`navigaton`}>
      <button id='openMenuButton'
        className='navigation__openMenuButton visible-xs'
        onClick={openMenu}>
        <Icon name='bars' size='big' />

      </button>
      <ul className='navList'
          id='navList'>
        <Icon id='closeMenuButton'
          className='navigation__closeMenuButton'
          name='close'
          size='big'
          onClick={closeMenu} />
        
        <li className={getActiveClasses(firstNavItem.active)}>
          <Link to='/'
            className='navItem__refer'
            onClick={() => {
              changeActiveNavigationItem('firstNavItem');
            }}>
            {firstNavItem.name}
          </Link>
        </li>
        <li className={getActiveClasses(secondNavItem.active)}>
          <Link to='/registration'
            className='navItem__refer'
            onClick={() => {
              changeActiveNavigationItem('secondNavItem');
            }}>
            {secondNavItem.name}
          </Link>
        </li>
        <li className={getActiveClasses(thirdNavItem.active)}>
          <Link to='/contacts' 
            className='navItem__refer'
            onClick={() => {
              changeActiveNavigationItem('thirdNavItem');
            }}>
            {thirdNavItem.name}
          </Link>
        </li>
        <li className={getActiveClasses(fourthNavItem.active)}>
          <Link to='/rules'
            className='navItem__refer'
            onClick={() => {
              changeActiveNavigationItem('fourthNavItem');
            }}>
            {fourthNavItem.name}
          </Link>
        </li>
        <li className={getActiveClasses(fifthNavItem.active)}>
          <Link to='/another_one'
            className='navItem__refer'
            onClick={() => {
              changeActiveNavigationItem('fifthNavItem');
            }}>
            {fourthNavItem.name}
          </Link>
        </li>
      </ul>
    </nav>
);

export default Navigation;