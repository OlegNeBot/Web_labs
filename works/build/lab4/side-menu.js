"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const sideMenu = (0, vue_1.createApp)({});
sideMenu.component('sidemenu', {
    template: '<div>'
        + '<aside>'
        + '<img href="./img/Logo.png"/>'
        + '<div>'
        + '<img href="./img/Home.png">'
        + '<p>Dashboard</p>'
        + '</div>'
        + '<div>'
        + '<img href="./img/Swap.png">'
        + '<p>Exchange</p>'
        + '</div>'
        + '<div>'
        + '<img href="./img/Wallet.png">'
        + '<p>Wallet</p>'
        + '</div>'
        + '<div>'
        + '<img href="./img/Activity.png">'
        + '<p>Statistics</p>'
        + '</div>'
        + '<div>'
        + '<img href="./img/Profile.png">'
        + '<p>Profile</p>'
        + '</div>'
        + '<div>'
        + '<img href="./img/Setting.png">'
        + '<p>Profile</p>'
        + '</div>'
        + '<div>'
        + '<img href="./img/Logout.png.png">'
        + '<p>Logout</p>'
        + '</div>'
        + '</aside>'
        + '</div>',
});
sideMenu.mount('#part');
