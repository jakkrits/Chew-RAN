const Footer = () =>
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <strong>ChewLounge Timesheet</strong> by{' '}
          <a href="www.appillustrator.com">App Illustrator</a>
        </p>
        <p>
          <a className="icon" href="https://facebook.com/appillustrator">
            <i className="fa fa-facebook" />
          </a>
        </p>
      </div>
    </div>
  </footer>;

export default Footer;

/* eslint-disable */
/*
import React from 'react';
import { Footer, Container, Columns, Content, Column, Icon } from 'bloomer';

class AppFooter extends React.Component {
  render() {
    return <Footer id="footer">
    <Container>
      <Content>
        <Columns>
          <Column isFull>
            <p>
              Made with{' '}
              <Icon hasTextColor="danger">
                <span className="fa fa-heart" aria-hidden="true" />
              </Icon>{' '}
              by <a>Algus Dark</a>
            </p>
          </Column>
        </Columns>
        <Content isSize="small">
          <p>
            The source code is licensed under <a target="_blank">MIT</a>.
          </p>
          <p>
            The website content is licensed under{' '}
            <a target="_blank">CC ANS 4.0</a>.
          </p>
        </Content>
      </Content>
    </Container>
  </Footer>;
  }
}

export default AppFooter;
*/