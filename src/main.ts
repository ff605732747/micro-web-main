import { createApp, VNode } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import startQiankun from "./qiankun/init"

let app: VNode | null = null;
// let router = null;
let instance = null;
async function render({ appContent="", loading="" } = {}) {
  if (!app) {
    // await ReadConfig(Vue)//加载配置文件
    createApp(App)
      .use(store)
      .use(router)
      .mount("#main-app");
  } else {
    console.error(appContent, loading);
  }
}

render();
startQiankun();
