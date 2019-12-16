import React from 'react';
import { Query } from "react-apollo";
import { IS_LOGGED_IN } from '../../graphql/queries';
import { ApolloConsumer } from "react-apollo";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Nav = props => {
  return (
    <div className="nav-div">
      <header className="nav-header">
        <div className="nav-logo">
          <h2 className="exo">Exo</h2>
        </div>
        <div className="nav-search-div">
          <input className="nav-search" type="search" placeholder="Search for planets, stars, etc.."></input>
        </div>
        <div className="nav-options">
          <button className="option"><img className="favorites" src="https://img.icons8.com/pastel-glyph/64/000000/hearts.png"/></button>
          <button className="option"><img className="you" src="https://img.icons8.com/ios/50/000000/user-female-circle.png"/></button>
          <button className="option"><img className="cart" src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v1.png"/></button>
        </div>
      </header>
    </div>
  );
};

export default withRouter(Nav);