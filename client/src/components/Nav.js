import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Query, ApolloConsumer } from "react-apollo";

import Queries from "../graphql/queries";
const { IS_LOGGED_IN } = Queries;

const Nav = props => {
  return (
    <ApolloConsumer>
      {client => (
        <Query query={IS_LOGGED_IN}>
          {({ data }) => {
            // if we have some one logged in we show them a logout button
            if (data.isLoggedIn) {
              return (
                <div>
                  <Link to='/'>Product Index</Link>
                  <br/>
                  <Link to='/create'>Create a Product</Link>
                  <br/>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      localStorage.removeItem("auth-token");
                      client.writeData({ data: { isLoggedIn: false } });
                      props.history.push("/");
                    }}
                  >
                    Logout
                  </button>
                </div>
              )
            } else {
              return (
                <div>
                  <Link to='/'>Product Index</Link>
                  <br/>
                  <Link to="/login">Login</Link>
                  <br/>
                  <Link to="/register">Register</Link>
                </div>
              );
            }
          }}
        </Query>
      )}
    </ApolloConsumer>
  );
};

export default withRouter(Nav);