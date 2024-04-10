module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          tests: ['./tests/'],
        },
      },
    ],
  ],
};
