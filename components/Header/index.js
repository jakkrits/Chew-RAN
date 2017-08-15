/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Head from 'next/head';
import Router from 'next/router';
import LinkList from '../../components/LinkList';
import { Header as StyledHeader } from './styles';
import connect from './store';

class Header extends React.Component {
  componentDidMount() {
    Router.onRouteChangeStart = url => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    Router.onRouteChangeComplete = () => NProgress.done();
    Router.onRouteChangeError = () => NProgress.done();
  }

  render() {
    const { pathname, authenticated, actions: { logout } } = this.props;
    return (
      <StyledHeader>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        </Head>
        <LinkList
          pathname={pathname}
          authenticated={authenticated}
          logout={logout}
        />
      </StyledHeader>
    );
  }
}
Header.defaultProps = {
  authenticated: false
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  authenticated: PropTypes.bool,
  actions: PropTypes.shape({
    logout: PropTypes.func.isRequired
  }).isRequired
};

export default connect(Header);
