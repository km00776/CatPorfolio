module.exports = {
  presets: [
    'module:@react-native/babel-preset', // This is the default preset for React Native
    'nativewind/babel',
  ],
  plugins: [['module:react-native-dotenv']],
};
