import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import App from '../components/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';

const Default = props =>
  <App>
    <Helmet>
      <title>
        {props.title !== ''
          ? `${props.title} :: ChewLounge Timesheet`
          : 'ChewLounge Timesheet'}
      </title>
    </Helmet>
    <NavHeader />
    <Header pathname={props.url.pathname} />
    {props.children}
    <Footer />
  </App>;

Default.propTypes = {
  title: PropTypes.string,
  url: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

Default.defaultProps = {
  title: ''
};

export default Default;
