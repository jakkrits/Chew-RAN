/* eslint-disable */
import React from 'react';
import {
  Hero,
  HeroHeader,
  HeroBody,
  HeroFooter,
  Nav,
  NavLeft,
  NavItem,
  NavCenter,
  Icon,
  NavRight,
  Container,
  Title,
  Tab,
  Tabs,
  TabLink,
  TabList
} from 'bloomer';

class NavHeader extends React.Component {
  render() {
    return (
      <Hero isColor="info" isSize="medium">
        <HeroHeader>
          <Nav>
            <NavLeft>
              <NavItem isBrand>Bloomer</NavItem>
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
            </NavRight>
          </Nav>
        </HeroHeader>

        <HeroBody>
          <Container hasTextAlign="centered">
            <Title>Title</Title>
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
