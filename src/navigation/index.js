import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';

import Drawer from './Drawer';

import util from '../util';
import {logout} from '../redux/actions/Login';
import {OverlayLoader} from '../components';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {user: null, isLoading: false};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      prevState.login?.data?.id !== nextProps.login?.data?.id &&
      nextProps?.login?.data?.data?.isActive
    ) {
      return {user: nextProps.login, isLoading: false};
    } else if (
      nextProps.login?.data?.id &&
      !nextProps?.login?.data?.data?.isActive
    ) {
      util.showAlertWithDelay(
        'Error',
        'Your account is deleted by admin.',
        1000,
      );
      nextProps.logout();
      return {user: null, isLoading: false};
    } else {
      return {user: null, isLoading: false};
    }
  }

  render() {
    const {isLoading} = this.state;

    return (
      <NavigationContainer>
        <OverlayLoader isLoading={isLoading} />
        <Drawer />
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => ({login: state.login});

const actions = {logout};

export default connect(mapStateToProps, actions)(Navigation);
