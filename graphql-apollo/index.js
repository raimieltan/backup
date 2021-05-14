const { ApolloServer, gql } = require('apollo-server');

const knex = require('knex')({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "admin"
  }
});

const typeDefs = gql`
  type Doctor {
    id: Int!
    fname: String!
    lname: String!
    is_verified: Int!

  }

  type Query {
    doctors: [Doctor]
    getVerified: [Doctor]
  }

  type Mutation {
    createDoctor(
      fname: String!,
      lname: String,
      is_verified: Int!,
    ): Doctor
  }

`;

const resolvers = {
  Mutation: {
    createDoctor: 
      async (_, { fname, lname, is_verified }) => {
        const [doctor] = await knex("doctor")
        .insert({fname,lname, is_verified })
        .returning("*")
        
        return(doctor);
      }
  },

  Query: {
    doctors: () => knex("doctors").select("*"),
    getVerified: () => knex("doctors").where("is_verified", 0).select("*")
  }
}

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: ({ req, res }) => ({ req, res }) 
});

server.listen().then(({ url }) => console.log(`server started at ${url}`));
