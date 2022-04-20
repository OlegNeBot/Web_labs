"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const dashboard = (0, vue_1.createApp)({});
dashboard.component('dashboard', {
    template: '<div id="part">'
        + '<sidemenu></sidemenu>'
        + '<mainpart></mainpart>'
        + '<rightpart></rightpart>'
        + '</div>',
});
dashboard.mount('#app');
