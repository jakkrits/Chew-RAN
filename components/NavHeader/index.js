/* eslint-disable */
import React from 'react';
import {
  Hero,
  HeroHeader,
  HeroBody,
  HeroFooter,
  Field,
  Control,
  Button,
  Nav,
  NavLeft,
  NavItem,
  NavbarItem,
  NavCenter,
  Icon,
  NavRight,
  Container,
  Tab,
  Title,
  Tabs,
  TabLink,
  TabList
} from 'bloomer';

class NavHeader extends React.Component {
  render() {
    return (
      <Hero isColor="primary" isSize="small">
        <HeroHeader>
          <Nav>
            <NavLeft>
              <NavItem isBrand>Chew Lounge</NavItem>
            </NavLeft>
            <NavCenter>
              <NavItem>
                <Icon>
                  <span className="fa fa-github" aria-hidden="true" />
                </Icon>
              </NavItem>
              <NavItem>
                <Icon>
                  <span className="fa fa-twitter" aria-hidden="true" />
                </Icon>
              </NavItem>
            </NavCenter>
            <NavRight isMenu>
              <NavItem>Home</NavItem>
              <NavItem>Documentation</NavItem>
              <NavbarItem>
            <Field isGrouped>
                <Control>
                    <Button id="twitter" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://bloomer.js.org" target="_blank" href="https://twitter.com/intent/tweet?text=bloomer: a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                        <Icon>
                            <span className="fa fa-sign-in" aria-hidden="true" />
                        </Icon>
                        <span>Login</span>
                    </Button>
                </Control>
            </Field>
        </NavbarItem>
            </NavRight>
          </Nav>
        </HeroHeader>

        <HeroBody>
          <Container hasTextAlign="centered">
            <Title>ชิวเล๊าจ์ ไทม์ชีท</Title>
          </Container>
        </HeroBody>
        <HeroFooter>
          <Tabs isBoxed isFullWidth>
            <Container>
              <TabList>
                <Tab isActive>
                  <TabLink>Overview</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Grid</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Element</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Components</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Layout</TabLink>
                </Tab>
              </TabList>
            </Container>
          </Tabs>
        </HeroFooter>
      </Hero>
    );
  }
}

export default NavHeader;
