# Apollo Example App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This project uses TypeScript, Apollo, Chakra UI and graphql-tools.

## Running locally

First, create `.env` file to provide remote API URL:

```
REACT_APP_API_URL=https://countries-274616.ew.r.appspot.com/
```

Then install dependencies `yarn install` and you are ready to go.

In the project directory, these are the main scripts you can run:

- `yarn dev` - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits automatically. In parallel, runs code generation for queries and mutations you have

- `yarn test` - Launches the test runner in the interactive watch mode.

- `yarn build` - Builds the app for production to the `build` folder.

- `yarn run graphql:generate` - Runs GraphQL code generation based on schema and queries you have

All the rest upi can find in `scripts` section of `package.json`
