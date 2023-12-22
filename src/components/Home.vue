<template>
  <h1>Hello users, Welcome to Home Page</h1>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push("/sign-up");
    }
  },
};
</script>
