import axios from 'axios';

declare let Vue:any;

const app = Vue.createApp({
  data() {
    return {
      info: [],
    };
  },
  mounted() {
    axios
      .defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    axios
      .get('https://new.vyatsu.ru/', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      // eslint-disable-next-line no-return-assign
      .then((response: any) => (this.info = response.data))
      .catch((error) => console.log(error));
  },
}).mount('#vyatsu');
