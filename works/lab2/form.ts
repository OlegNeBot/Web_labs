declare let Vue:any;

const formapp = Vue.createApp({});
// eslint-disable-next-line vue/multi-word-component-names
formapp.component('auth', {
  template: '<div>'
  + '<img src="./img/cat.png"/>'
  + '<form> '
  + '<p>Авторизация</p>'
  + '<label id="login-label">Логин</label>'
  + '<input type="text" placeholder="Логин" id="login" />'
  + '<label id="pass-label">Пароль</label>'
  + '<input type="password" placeholder="Пароль" id="password"/>'
  + '<label id="checkbox">'
  + '<input type="checkbox" value="Сохранить пароль"/>'
  + '<span>Сохранить пароль</span>'
  + '</label>'
  + '<input type="submit" id="btn"/>'
  + '</form>'
  + '</div>',
});
formapp.mount('#app');
