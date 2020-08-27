module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module"
    },
    rules: {
        "brace-style": ["error", "allman", { "allowSingleLine": true }]
    }
};