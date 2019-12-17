import React from "react";
import { withApollo, ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
// import { Link } from "react-router-dom";

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    searchProducts(filter: $filter) {
      _id
      name
    }
  }
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filter: "",
      empty: true
    }
  }

  _executeSearch = async (val, client) => {
    this.setState({ filter: val });
    if (val.length === 0) {
      this.setState({ empty: true, products: [] })
      return null;
    } else {
      this.setState({ empty: false });
      const data = await client.query({ query: FEED_SEARCH_QUERY, variables: { filter: val } });
      this.setState({ products: data.data.searchProducts.map(product => {
        return product
      }) });
    }
    // console.log(this.state.products);
    // return data;
  }

  getProducts() {
    if (this.state.products.length > 0) {
      return this.state.products.map(product => {
        return (
          <li className="results" key={product._id}>
            <p>{product.name}</p>
          </li>
        )
      })
    } else if (this.state.empty !== true) {
      return <p className="results">No products found</p>
    }
  }

  render() {
    return (
      <ApolloConsumer>
        {(client) => {
          return <div className="outer-search-div">
            <div className="nav-search-div">
              <input className="nav-search" type="search" onChange={e => this._executeSearch(e.target.value, client)} placeholder="Search for planets, stars, etc.." />
              <button className="search-btn"><img className="search-img" src="https://img.icons8.com/ios-filled/50/000000/search.png" alt=""/></button>
            </div>
            <div>
              <ul className="results-ul">
                {this.getProducts()}
              </ul>
            </div>
          </div>
        }}
      </ApolloConsumer>
    )
  }
}

export default withApollo(Search);