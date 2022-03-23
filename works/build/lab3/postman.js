"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// eslint-disable-next-line no-lone-blocks
let Vue;
const app = Vue.createApp({
    data() {
        return {
            login: 'Somelogin',
            password: '123',
            info: null,
        };
    },
    methods: {
        checkForm() {
            console.log('Hooray!');
            axios_1.default.get('https://dec34827-7275-4ab4-abb3-34388682f919.mock.pstmn.io/id?name=oleg')
                // eslint-disable-next-line no-alert
                .then((response) => (alert(response)));
        },
    },
});
app.mount('#app');
