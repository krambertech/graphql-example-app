// This config is need for Apollo VSCode extension to work
// https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo
module.exports = {
  client: {
    service: {
      name: 'countries-grapi',
      service: 'graphql-example-app',
      url: 'https://graphcountries.herokuapp.com/',
    },
  },
};
