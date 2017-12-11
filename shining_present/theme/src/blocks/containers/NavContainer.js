import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Navigation from './../components/Navigation';
import { selectNavigationItem } from './../actions/navigationActions.js';

class NavContainer extends Component {
  static PropTypes = { 
      firstNavItem: PropTypes.object.isRequired,
      secondNavItem: PropTypes.object.isRequired,
      thirdNavItem: PropTypes.object.isRequired,
      fourthNavItem: PropTypes.object.isRequired,
      fifthNavItem: PropTypes.object.isRequired,
      dispatch: PropTypes.func.isRequired
  }

  state = {
      isOpen: false
  };

  openMenu = () => {
    let $navList = $('#navList');
    let $closeButton = $('#closeMenuButton');
    if (!this.state.isOpen) {
      this.setState({isOpen: true});
      $closeButton.show();
      $navList.show('fast');
    } else {
      this.setState({isOpen: false});
      $navList.hide('fast');
      $closeButton.hide();
    }
  };

  changeActiveNavigationItem = navigationItem => {
      const { dispatch } = this.props;

      dispatch(selectNavigationItem(navigationItem));
      // Меню закрывается.
      if (this.state.isOpen)
          this.closeMenu();
  };

  getActiveClasses = state => ( 
    classNames({
      'navItem': true,
      'navItem--active': state
    })
  );
   
  closeMenu = () => {
    let $navList = $('#navList');
    if (window.innerWidth < 767) $navList.hide('fast');
  }

  render() {
    return (
        <Navigation {...this.props}
            getActiveClasses={this.getActiveClasses}
            openMenu={this.openMenu}
            closeMenu={this.closeMenu}
            changeActiveNavigationItem={this.changeActiveNavigationItem}
        />
    );
  }
}


const mapStateToProps = state => {
  const { navigation } = state;

  const {
    firstNavItem,
    secondNavItem,
    thirdNavItem,
    fourthNavItem,
    fifthNavItem
  } = navigation;

  return {
    firstNavItem,
    secondNavItem,
    thirdNavItem,
    fourthNavItem,
    fifthNavItem
  }
}

export default connect(mapStateToProps)(NavContainer);