import axios from 'axios';

declare let Vue:any;

const formapp = Vue.createApp({
  
});

// eslint-disable-next-line vue/multi-word-component-names
formapp.component('auth', {
  template: '<div>'
  + '<img src="./lab2/img/cat.png"/>'
  + '<form> '
  + '<p>Авторизация</p>'
  + '<label id="login-label">Логин</label>'
  + '<input type="text" placeholder="Логин" id="login" v-model="login"/>'
  + '<label id="pass-label">Пароль</label>'
  + '<input type="password" placeholder="Пароль" id="password" v-model="password"/>'
  + '<label id="checkbox">'
  + '<input type="checkbox" value="Сохранить пароль"/>'
  + '<span>Сохранить пароль</span>'
  + '</label>'
  + '<button type="button" id="btn" v-on:click="checkForm">Авторизоваться</button>'
  + '</form>'
  + '</div>',
  data() {
    return {
      login: null,
      password: null,
    };
  },
  methods: {
    checkForm() {
      const url = 'https://dec34827-7275-4ab4-abb3-34388682f919.mock.pstmn.io/auth';
      const usrdata = {
        login: this.login,
        password: this.password,
      };
      console.log(`${usrdata.login}, ${usrdata.password}`);
      axios.post(url, usrdata, { headers: { 'x-mock-match-request-body': true } })
        .then((response) => {
          if (response.data.authorised) { 
            alert('Успешно!'); 
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-alert
          alert('Что-то пошло не так!');
        });
    },
  },
});
formapp.mount('#app');
