<template>
  <div>
    <Header />
    <div class="page-container">
      <h1 class="page-title">Hello users, Welcome to Update Restaurant Page</h1>
      <form class="restaurant-form" @submit.prevent="updateRestaurant">
        <label for="restaurantId">Restaurant ID:</label>
        <input type="text" id="restaurantId" v-model="restaurantId" required />

        <label for="restaurantName">Updated Restaurant Name:</label>
        <input
          type="text"
          id="restaurantName"
          v-model="restaurantName"
          required
        />

        <label for="updatedPlace">Updated Place:</label>
        <input type="text" id="updatedPlace" v-model="updatedPlace" required />

        <label for="updatedContact">Updated Contact:</label>
        <input
          type="text"
          id="updatedContact"
          v-model="updatedContact"
          required
        />

        <button type="submit">Update Restaurant</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "UpdateRestaurantPage",
  components: {
    Header,
  },
  data() {
    return {
      restaurantId: "", // Assume you have a restaurant ID
      restaurantName: "",
      updatedPlace: "",
      updatedContact: "",
    };
  },
  methods: {
    async updateRestaurant() {
      try {
        // Create an object with the updated restaurant information
        const updatedRestaurant = {
          name: this.restaurantName,
          place: this.updatedPlace,
          contact: this.updatedContact,
        };

        // Send a PUT request to the API endpoint for updating a specific restaurant
        const response = await axios.put(
          `http://localhost:3000/restaurants/${this.restaurantId}`,
          updatedRestaurant
        );

        console.log("Restaurant updated:", response.data);
        // Optionally, you can redirect the user or perform other actions
      } catch (error) {
        console.error("Error updating restaurant:", error.message);
        // Optionally, you can show a user-friendly error message
      }
    },
  },
  created() {
    const userInfo = localStorage.getItem("user-info");
    if (!userInfo) {
      this.$router.push("/sign-up");
    }
  },
};
</script>

<style scoped>
/* Add your styling here if needed */
.page-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.restaurant-form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
}

input {
  padding: 8px;
  margin-bottom: 16px;
}

button {
  background-color: #36c2ec;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover {
  background-color: #007bb5;
}
</style>
