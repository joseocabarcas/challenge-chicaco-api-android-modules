module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src',
          '@components': './src/components',
          tests: ['./tests/'],
        },
      },
    ],
    // it needs to be the last in the list
    'react-native-reanimated/plugin',
  ],
}
