const { gql } = require("apollo-server")

const typeDefs = gql`
  type Repo {
    id: ID!
    name: String!
    size: Int!
    owner: Owner!
  }


  type Query {
    repoList: [Repo!]!
    repoDetails: [RepoDetails!]!
  }

  type RepoDetails {
    id: ID!
    name: String!
    size: Int!
    owner: Owner!
    visibility: String!
    ymlContent: String
    NoOfFile: Int!
  }

  type Owner {
        login: String
        id: ID!
        node_id: String
        avatar_url: String
        gravatar_id: String
        url: String
        html_url: String
        followers_url: String
        following_url: String
        gists_url: String
        starred_url: String
        subscriptions_url: String
        organizations_url: String
        repos_url: String
        events_url: String
        received_events_url: String
        type: String
        site_admin: Boolean
    }
`

module.exports = { typeDefs }