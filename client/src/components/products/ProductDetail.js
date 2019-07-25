import React from 'react';
import { Query } from "react-apollo";

import Queries from './../../graphql/queries';
const { FETCH_PRODUCT } = Queries;

const ProductDetail = props => {
  return (
    <Query query={FETCH_PRODUCT} variables={{ id: props.match.params.id }}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <div>
            <h2>{data.product.name}</h2>
            <p>{data.product.description}</p>
            <span>Weight: {data.product.weight}</span>
            <br/>
            <span>Cost: {data.product.cost}</span>
          </div>
        );
      }}
    </Query>
  );
}

export default ProductDetail;