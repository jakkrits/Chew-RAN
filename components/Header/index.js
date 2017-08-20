/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';
import Auth0Lock from 'auth0-lock';
import LinkList from '../../components/LinkList';
import { Header as StyledHeader } from './styles';
import connect from './store';

class Header extends React.Component {
  componentDidMount() {
    const lock = new Auth0Lock(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN, {
      auth: {
        redirectUrl: `${location.origin}/login?r=${this.props.pathname}`,
        responseType: 'token',
      },
      allowSignUp: false,
      theme: {
        logo: 'https://image.flaticon.com/icons/svg/325/325559.svg',
      },
      languageDictionary: {
        title: 'ชิวเล้าจ์ล็อกอิน',
      },
    });
    this.lock = lock;

    lock.on('authenticated', (result) => {
      lock.getUserInfo(result.accessToken, (error, profile) => {
        if (error) {
          console.error('getUserInfo error', error);
          return;
        }
        console.error(JSON.stringify(profile, null, 4));
        this.signinOrCreateUser(result.idToken, profile);
      });
    });

    Router.onRouteChangeStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    Router.onRouteChangeComplete = () => NProgress.done();
    Router.onRouteChangeError = () => NProgress.done();
  }

  triggerLogin = (e) => {
    e.preventDefault();
    this.lock.show();
  };

  toggleBurger = () => {
    // document.querySelector('.nav-menu').classList.toggle('is-active');
    const nav = document.getElementById('navMenuTransparent');
    nav.classList.toggle('is-active');
  }

  renderLoggedIn = currentUser => (
    <div>
      <div className="field is-grouped">
        <p className="control">
          <Link prefetch href="/userProfile">
            <a className="button is-primary" >
              <span className="icon">
                <i className="fa fa-user-circle" />
              </span>
              <span>{currentUser.nickName}</span>
            </a>
          </Link>
        </p>
        <p className="control">
          <a className="button" href="/logout" >
            <span className="icon">
              <i className="fa fa-sign-out" />
            </span>
          </a>
        </p>
      </div>
    </div>
  )

  renderLoggedOut = () => (
    <div className="field is-grouped">
      <p className="control">
        <a className="button is-primary" onClick={this.triggerLogin} tabIndex="0" role="button" >
          <span className="icon">
            <i className="fa fa-sign-in" />
          </span>
          <span>Login</span>
        </a>
      </p>
    </div>
  )

  render() {
    const { currentUser, pathname, authenticated, actions: { logout } } = this.props;
    return (
      <StyledHeader>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        </Head>
        <nav className="navbar is-transparent">
          <Head>
            <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          </Head>
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="/static/ChewloungeLogo.png" alt="Logo" width="112" height="28" />
            </a>

            <a className="navbar-item is-hidden-desktop" href="https://facebook.com/chewlounge">
              <span className="icon" style={{ color: '#333' }}>
                <i className="fa fa-facebook" />
              </span>
            </a>

            <a className="navbar-item is-hidden-desktop" href="https://twitter.com/chewlounge">
              <span className="icon" style={{ color: '#55acee' }}>
                <i className="fa fa-twitter" />
              </span>
            </a>

            <div
              className="navbar-burger burger"
              data-target="navMenuTransparent"
              onClick={this.toggleBurger}
              role="presentation"
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div id="navMenuTransparent" className="navbar-menu">
            <div className="navbar-start">
              <Link prefetch href="/">
                <a className={pathname === '/' && 'nav-item is-active' ? 'nav-item  is-active' : 'nav-item'}>
                  หน้าแรก
              </a>
              </Link>

              <Link prefetch href="/about">
                <a className={pathname === '/about' && 'nav-item is-active' ? 'nav-item  is-active' : 'nav-item'}>วิธีใช้งาน</a>
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="/">
                  พนักงาน
              </a>
                <div className="navbar-dropdown is-boxed">
                  <a className="navbar-item " href="/employees">
                    ทั้งหมด
                </a>
                  <a className="navbar-item is-active" href="/allemployees">
                    เสิร์ฟ
                </a>
                  <a className="navbar-item " href="/employees">
                    ล้างจาน
                </a>
                  <a className="navbar-item " href="/employees">
                    แคชเชียร์
                </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div>พาร์ทไทม์ <p className="has-text-info is-size-6-desktop">ฟูลไทม์</p></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                {currentUser ? this.renderLoggedIn(currentUser) : this.renderLoggedOut()}
              </div>
            </div>
          </div>
        </nav>
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
