import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
import "github-markdown-css/github-markdown.css";

Vue.config.productionTip = false;
// elementUI调用
Vue.use(ElementUI, {
    size: "small",
    zindex: 3000,
});

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");
