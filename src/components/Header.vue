<template>
  <header>
    <h1 class="logo">Restaurant</h1>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/add-restaurant">Add Restaurant</router-link></li>
        <li>
          <router-link to="/update-restaurant">Update Restaurant</router-link>
        </li>
      </ul>
    </nav>
    <button v-if="isLoggedIn" @click="logout" class="logout-btn">Logout</button>
    <router-link v-else to="/log-in" class="login-btn">Login</router-link>
  </header>
</template>

<script>
export default {
  name: "NavbarHeader",
  computed: {
    isLoggedIn() {
      return localStorage.getItem("user-info") !== null;
    },
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/log-in");
    },
  },
};
</script>

<style scoped>
/* Add your styling here if needed */
header {
  background-color: #333;
  color: #fff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  margin: 0;
}

nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #e44d26;
}

.logout-btn,
.login-btn {
  background-color: #36c2ec;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.logout-btn:hover {
  background-color: #fff;
  color: #e44d26;
}

.login-btn:hover {
  background-color: #36c2ec;
  color: #e44d26;
}
</style>
