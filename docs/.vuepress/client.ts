import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(Antd);
  },
  setup() {},
  layouts: {},
  rootComponents: [],
});
