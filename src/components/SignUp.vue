<!-- SignUp.vue -->

<template>
  <Header />
  <div class="signup-container">
    <img
      src="https://img.freepik.com/premium-vector/restaurant-logo-with-fork-spoon-illustration_337180-722.jpg?w=740"
      alt="Restaurant Theme"
      class="restaurant-image"
    />
    <h1>Sign up</h1>
    <form @submit.prevent="submitForm" class="signup-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    <p>Already have an account?<router-link to="/log-in">Login</router-link></p>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "SignUp",
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      const res = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(res);
      if (res.status === 201) {
        alert("User successfully signed up.");
      }
    },
  },
  created() {
    const userInfo = localStorage.getItem("user-info");
    if (userInfo) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.signup-form {
  display: flex;
  flex-direction: column;
}

.restaurant-image {
  width: 100px; /* Set your preferred width */
  height: 100px; /* Set your preferred height */
  border-radius: 50%; /* Make the image rounded */
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 5px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}
</style>
