import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { dispatchers } from '../AuthFields/store';
import currentUser from './userQuery.gql';

const withUserQuery = graphql(currentUser, {
  props: ({ data }) => ({
    currentUser: data.user
  })
});

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = dispatch => ({
  actions: {
    logout: () => dispatch(dispatchers.signOut())
  }
});

export default comp => {
  const compWithUserQuery = withUserQuery(comp);
  return connect(mapStateToProps, mapDispatchToProps)(compWithUserQuery);
};
