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
            <NavRight isMenu>
              <NavbarItem>
                <Field isGrouped>
                  <Control>
                    <Button>
                      <Icon>
                        <span className="fa fa-sign-in" aria-hidden="true"/>
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
            <Icon><i className="fa fa-free-code-camp"/></Icon>
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
