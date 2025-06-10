import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`

  type User {
    id: ID
    name: String
    age: Int
    vip: Boolean
    salary: Float
  }

  type Query {
    ola: String
    users: User
  }
`

const resolvers = {
  User: {
    salary(user) {
      return user.salario_bruto
    }
  },
  Query: {
    ola() {
      return 'Hello World!'
    },
    users() {
      return {
        id: '1',
        name: 'John Doe',
        age: 30,
        vip: true,
        salario_bruto: 1000
      }
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(5000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})