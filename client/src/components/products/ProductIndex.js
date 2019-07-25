import React from 'react';
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';

import Queries from './../../graphql/queries';
const { FETCH_PRODUCTS } = Queries;

function ProductIndex() {
  return (
    <Query query={FETCH_PRODUCTS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <ul>
            {data.products.map(product => (
              <li key={product._id}>
                <Link to={`/products/${product._id}`}><h2>{product.name}</h2></Link>
                <p>{product.description}</p>
              </li>
            ))}
          </ul>
        );
      }}
    </Query>
  );
}

export default ProductIndex;
