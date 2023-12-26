<template>
  <Header />
  <h1>Hello {{ name }}, Welcome to Home Page</h1>
  <table border="2">
    <tr>
      <td>Id</td>
      <td>Restaurant Name</td>
      <td>Place</td>
      <td>Contact</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.place }}</td>
      <td>{{ item.contact }}</td>
      <td><router-link to="/update-restaurant">Update</router-link></td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "HomePage",

  components: {
    Header,
  },
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  async created() {
    const userInfo = localStorage.getItem("user-info");
    if (!userInfo) {
      this.$router.push("/sign-up");
    }
    this.name = JSON.parse(userInfo).name;

    let result = await axios.get("http://localhost:3000/restaurants");
    this.restaurant = result.data;
  },
};
</script>

<style>
td {
  padding: 1rem;
}
</style>
