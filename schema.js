const axios = require('axios');
const { GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLBoolean} = require('graphql'); 

// Product Listing Page: List of available rockets
const PLP_Type = new GraphQLObjectType({
    name: 'PLP', 
    fields: () => ({ 
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString }, 
        rocket_type: { type: GraphQLString },
        description: { type: GraphQLString },
        cost_per_launch: { type: GraphQLInt },
        country: { type: GraphQLString },
        company: { type: GraphQLString },
        active: { type: GraphQLBoolean },
    })
});

// Product Details Page: Rocket
const PDP_Type = new GraphQLObjectType({
    name: 'PDP', 
    fields: () => ({ 
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        description: { type: GraphQLString },
        cost_per_launch: { type: GraphQLInt },
        country: { type: GraphQLString },
        company: { type: GraphQLString },
        success_rate_pct: { type: GraphQLInt }, 
        active: { type: GraphQLBoolean },
    })
});


// Used third party api from spaceX
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType', 
    fields:  {
        product_list: {
            type: new GraphQLList(PLP_Type),
            resolve(parent, args) { 
                return axios.get('https://api.spacexdata.com/v3/rockets').then(res => res.data);
            }
        },
        product: {
            type: PDP_Type,
            args: {
                rocket_id: {type: GraphQLString}
            },
            resolve(parents, args) {
                return axios.get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`).then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({ 
    query: RootQuery,
});
