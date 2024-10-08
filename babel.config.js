module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver", {
          "root": ["./src"],
          "alias": {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@storage": "./src/storage",
            "@styles": "./src/styles",
            "@state": "./src/state",
            "@utils": "./src/utils",
            '@__tests__': './__tests__',
          }
        }
      ], 'react-native-reanimated/plugin',
    ],
  };
};