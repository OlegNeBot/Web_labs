<template>
<div class="cont">
    <table>
        <tr>
            <th>ID</th>
            <th>ФИО</th>
            <th>Возраст</th>
            <th>Email</th>
        </tr>
        <tr v-on:click="ShowById(item.id, item.fio, item.age, item.email)" 
        v-for="(item) in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.fio }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.email }}</td>
        </tr>
    </table>
    <div class="btns">
        <button v-on:click="ShowOne()" type="button" class="show">Показать 1</button>
        <button v-on:click="ShowAll()" type="button" class="show">Показать всех</button>
    </div>

</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      clicked: false,
      list: [],
      stud: {
        id: 0,
        fio: '',
        age: 0,
        email: '',
      },
    };
  },
  methods: {
    ShowOne() {
      const url = 'https://538674f2-1ffe-4c16-b3bb-27e83a5dc3f7.mock.pstmn.io/getstud';
      axios.get(url)
        .then((response) => {
          this.list = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ShowAll() {
      const url = 'https://538674f2-1ffe-4c16-b3bb-27e83a5dc3f7.mock.pstmn.io/getall';
      axios.get(url)
        .then((response) => {
          this.list = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ShowById(id, fio, age, email) {
      this.stud.id = id;
      this.stud.fio = fio;
      this.stud.age = age;
      this.stud.email = email;
      alert(`Id: ${this.stud.id}, FIO: ${this.stud.fio}, age: ${this.stud.age}, email: ${this.stud.email}`);
      this.clicked = true;
    },
    Close() {
      this.clicked = false;
    },
  },
};

</script>

<style>
table{
  border: 2px solid black;
  margin: 0 auto;
}
.btns{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
.show{
  width: 100px;
  height: 60px;;
}
th {
  border: 1px solid grey;
  font-size: 30px;
}
td {
  border: 1px solid grey;
  font-size: 30px;
}
</style>
