"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const app = Vue.createApp({
    data() {
        return {
            info: [],
        };
    },
    mounted() {
        axios_1.default
            .defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        axios_1.default
            .get('https://new.vyatsu.ru/', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
            // eslint-disable-next-line no-return-assign
            .then((response) => (this.info = response.data))
            .catch((error) => console.log(error));
    },
}).mount('#vyatsu');
