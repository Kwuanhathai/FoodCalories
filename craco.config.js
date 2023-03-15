const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@atomic": path.resolve(__dirname, "src/components/atomic"),
    },
  },
};
