import { createApp } from "vue";
import Test from "./test.vue";
import "uno.css";
// import PotatoUI from "../dist/potato-ui.esm";

const app = createApp(Test);

// app.use(PotatoUI);

app.mount("#app");
