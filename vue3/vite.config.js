const path = require("path");
module.exports = {
  // 设置别名
  alias: {
    // import vuets from "/comps/vuets.vue";
    "/@/": path.resolve(__dirname, "src"),
  },
  //   设置代理，同以前
  proxy: {
    "/api": {
      target: "www.aa.com",
    },
  },
  plugins: [],
};
