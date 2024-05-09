module.exports = function (api) {
  api.cache(false);

  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [
    'module:react-native-dotenv',
    ['@babel/plugin-transform-private-methods', {loose: true}],
  ];

  return {
    presets,
    plugins,
  };
};
