module.exports = {
  env: { node: true, jest: true },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
  rules: {
    "vue/match-component-file-name": ["error"],
  },
};
