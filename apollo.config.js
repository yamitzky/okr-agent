module.exports = {
  client: {
    name: 'app',
    includes: ['components/**/*.tsx', 'pages/**/*.tsx', 'lib/**/*.tsx', 'graphql/**/*.ts'],
    service: {
      localSchemaFile: './graphql/schema.graphql'
    }
  }
}
