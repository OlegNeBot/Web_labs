"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const main = (0, vue_1.createApp)({});
main.component('mainpart', {
    template: '<div>'
        + '<img href="./img/Search.png">'
        // Text field
        + '<div>'
        + '<div>'
        + '<p>Assign expert to</p>'
        + '<p>Manage Portfolio</p>'
        + '<button>Find expert</button>'
        + '</div>'
        + '<img href="./img/nft-owner-4418547-3664058 1.png">'
        + '</div>'
        + '<div>'
        + '<p>My Portfolio</p>'
        + '<div>'
        + '<div>'
        + '<img href="./img/bi_currency-bitcoin.png">'
        + '<p>BTC/USDT</p>'
        + '<p>$135,25</p>'
        + '<p>Bitcoin</p>'
        + '<img href="./img/Arrow - Down 2.png">'
        + '<p>$32 (2%)</p>'
        + '</div>'
        + '<div>'
        + '<img href="./img/ph_currency-eth.png">'
        + '<p>ETH/USDT</p>'
        + '<p>$215,00</p>'
        + '<p>Ethereum</p>'
        + '<img href="./img/Arrow - Up 2.png">'
        + '<p>$32 (2%)</p>'
        + '</div>'
        + '<div>'
        + '<img href="./img/">'
        + '<p>BTC/USDT</p>'
        + '<p>$135,25</p>'
        + '<p>Bitcoin</p>'
        + '<img href="./img/Arrow - Down 2.png">'
        + '<p>$32 (2%)</p>'
        + '</div>'
        + '</div>'
        + '<img href="./img/Group 7.png">'
        + '</div>'
        + '</div>',
});
main.mount('#part');
