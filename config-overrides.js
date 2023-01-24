const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@assets": "src/assets",
    "@components": "src/components",
    "@views": "src/views",
    "@utils": "src/utils",
  })(config);

  return config;
};
