declare let vue:any;

const app = vue.createApp({
// eslint-disable-next-line vue/multi-word-component-names
  data() {
    return {
      lastName: 'Голованов',
      firstName: 'Олег',
      patronimyc: 'Алексеевич',
    };
  },
}).mount('#fio');
