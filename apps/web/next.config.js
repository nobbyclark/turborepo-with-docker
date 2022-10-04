const withTM = require("next-transpile-modules")(["ui"]);
const path = require("path");

module.exports = withTM({
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
  },
});
