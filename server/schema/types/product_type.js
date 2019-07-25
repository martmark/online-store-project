const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;

const User = mongoose.model("users");
const Category = mongoose.model("categories");

const ProductType = new GraphQLObjectType({
  name: "ProductType",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    weight: { type: GraphQLInt },
    cost: { type: GraphQLInt },
    user: {
      type: require("./user_type"),
      resolve(parentValue) {
        return User.findById(parentValue.user);
      }
    },
    category: {
      type: require("./category_type"),
      resolve(parentValue) {
        return Category.findById(parentValue.category);
      }
    }
  })
});

module.exports = ProductType;