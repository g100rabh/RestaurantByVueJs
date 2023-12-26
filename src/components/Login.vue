<template>
  <Header />
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="submitForm" class="login-form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Log In</button>
    </form>
    <p>
      Don't have an account?<router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "LoginPage",
  components: {
    Header,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const res = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );

        if (res.status === 200 && res.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(res.data[0]));
          this.$router.push("/");
        } else {
          alert("Login failed. Please check your credentials.");
        }
      } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please check your credentials.");
      }
    },
  },
  created() {
    // Check if the user is already logged in using information from localStorage
    const userInfo = localStorage.getItem("user-info");
    if (userInfo) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
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
