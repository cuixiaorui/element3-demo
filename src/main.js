import "element3/lib/theme-chalk/index.css";
import { createApp } from "vue";
import { Element3 } from "./element3";
import App from "./App.vue";

const app = createApp(App);
app.use(Element3);

app.mount("#app");
