declare let Vue:any;

const regapp = Vue.createApp({});
// eslint-disable-next-line vue/multi-word-component-names
regapp.component('reg', {
  template: '<div>'
  + '<form id="regform"> '
  + '<p>Регистрация</p>'
  + '<label id="email-label" for="email">Email</label>'
  + '<input type="email" placeholder="user@gmail.com" id="email" name="email"/>'
  + '<div v-if="auth">'
  + '<label id="pass-label" for="password">Password</label>'
  + '<input type="password" placeholder="Password" id="pass" v-model="pass"/>'
  + '<label id="conf-label" for="password">Confirm password</label>'
  + '<input type="password" placeholder="Confirm password" id="conf-pass" v-model="confpass"/>'
  + '</div>'
  + '<button type="button" id="btn" v-on:click="nextStep">Отправить</button>'
  + '</form>'
  + '</div>',
  data() {
    return {
      pass: null,
      confpass: null,
      auth: false,
    };
  },
  methods: {
    nextStep() {
      if (!this.auth) {
        alert('Письмо отправлено на указанную почту');
        this.auth = true;
      } else {
        if (this.pass !== this.confpass) {
          alert('Пароли не совпадают!');
        } else {
          alert('Регистрация прошла успешно!');
        }
      } 
    },
  },
});
regapp.mount('#app');
