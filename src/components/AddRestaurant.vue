<template>
  <div>
    <Header />
    <div class="page-container">
      <h1 class="page-title">Hello users, Welcome to Add Restaurant Page</h1>
      <form class="restaurant-form" @submit.prevent="addRestaurant">
        <label for="restaurantName">Restaurant Name:</label>
        <input
          type="text"
          id="restaurantName"
          v-model="restaurantName"
          placeholder="Restaurant Name"
          required
        />

        <label for="place">Place:</label>
        <input
          type="text"
          id="place"
          placeholder="Place"
          v-model="place"
          required
        />

        <label for="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          placeholder="Contact"
          v-model="contact"
          required
        />

        <button type="submit">Add New Restaurant</button>
      </form>

      <div v-if="showSuccessMessage" class="success-message">
        Successfully added!
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "AddRestaurantPage",
  components: {
    Header,
  },
  data() {
    return {
      restaurantName: "",
      place: "",
      contact: "",
      showSuccessMessage: false,
    };
  },
  methods: {
    async addRestaurant() {
      try {
        const newRestaurant = {
          name: this.restaurantName,
          place: this.place,
          contact: this.contact,
        };

        const response = await axios.post(
          "http://localhost:3000/restaurants",
          newRestaurant
        );

        console.log("Restaurant added:", response.data);
        if (response.status === 201) {
          this.restaurantName = "";
          this.place = "";
          this.contact = "";
          this.showSuccessMessage = true;

          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 10000);
        }
      } catch (error) {
        console.error("Error adding restaurant:", error.message);
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

.success-message {
  margin-top: 16px;
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
}
</style>
