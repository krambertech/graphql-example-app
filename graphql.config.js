// eslint-disable-next-line
require('dotenv').config();

module.exports = {
  overwrite: true,
  schema: 'schema.graphql',
  documents: './src/**/*.graphql',
  extensions: {
    codegen: {
      generates: {
        'src/': {
          config: {
            dedupeOperationSuffix: true,
            documentMode: 'documentNodeImportFragments',
            nonOptionalTypename: true,
            omitOperationSuffix: true,
            preResolveTypes: true,
            reactApolloVersion: 3,
            withComponent: false,
            withHOC: false,
            withHooks: true,
          },
          plugins: ['typescript-operations', 'typescript-react-apollo'],
          preset: 'near-operation-file',
          presetConfig: {
            baseTypesPath: '__generated__/types.ts',
            extension: '.ts',
            folder: '__generated__',
          },
        },
        'src/__generated__/types.ts': {
          config: {
            namingConvention: 'keep',
          },
          plugins: ['typescript'],
        },
        './schema.graphql': {
          schema: process.env.REACT_APP_API_URL,
          plugins: ['schema-ast'],
        },
        // 'src/__generated__/typeDefs.ts': {
        //   plugins: ['dev/printTypeDefs.js'],
        // },
      },
    },
    endpoints: {
      default: process.env.REACT_APP_API_URL,
    },
  },
};
