module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "max-len": ["error", { ignoreComments: true }],
    "no-console": "off",
    "no-alert": "off",
    "no-plusplus": "off",
    "no-use-before-define": "off",
    "no-param-reassign": "off",
    "no-unused-expressions": "off",
    "no-useless-escape": "off",
  },
  plugins: ["jest"],
};
