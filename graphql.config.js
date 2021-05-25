// eslint-disable-next-line
require('dotenv').config();

const apiUrl = process.env.REACT_APP_API_URL || 'https://countries.trevorblades.com/';

module.exports = {
  overwrite: true,

  // We use local schema for generation since it speeds up the process
  schema: 'schema.graphql',
  documents: './src/**/*.graphql',
  extensions: {
    codegen: {
      generates: {
        // Generates typescript definitions and code for apollo hooks near
        // the operation in __generated__ folder
        'src/': {
          config: {
            dedupeOperationSuffix: true,
            documentMode: 'documentNodeImportFragments',
            nonOptionalTypename: true,
            omitOperationSuffix: true,
            preResolveTypes: true,
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

        // All global types from schema get generated in src/__generated__/types.ts
        // file, these types are used in operation types as well
        'src/__generated__/types.ts': {
          config: {
            namingConvention: 'keep',
          },
          plugins: ['typescript'],
        },

        // In order to keep local schema up-to-date with remote one, here we
        // fetch remove schema and save it locally
        './schema.graphql': {
          schema: apiUrl,
          plugins: ['schema-ast'],
        },
      },
    },
    // This endpoint configuration needed for VScode and other plugins to work, then you
    // have an ability to run requests right in IDE
    endpoints: {
      default: apiUrl,
    },
  },
};
