import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import SimpleVueValidation from "simple-vue-validator";
import store from "./store";
import $axios from "./requests";

Vue.use(SimpleVueValidation, { mode: "manual" });
store.$axios = $axios;

new Vue({
    el: "#app-root",
    router,
    store,
    render: h => h(App),
});
