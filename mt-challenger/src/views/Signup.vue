<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="user.firstName" required />
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="user.lastName" required />
    </div>
    <div>
      <label for="email">Your Email:</label>
      <input type="email" id="email" v-model="user.email" required />
    </div>
    <div>
      <label for="affiliation">Affiliation (Organisation):</label>
      <input type="text" id="affiliation" v-model="user.affiliation" required />
    </div>
    <div>
      <label for="occupation">Occupation:</label>
      <select id="occupation" v-model="user.occupation" required>
        <option value="">Select an occupation</option>
        <option value="Student">Student</option>
        <option value="Professional">Professional</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div>
      <label for="reason">Why would you like to use the tool?</label>
      <input type="text" id="reason" v-model="user.reason" required />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      api: "http://127.0.0.1:8000",
      user: {
        firstName: "",
        lastName: "",
        email: "",
        affiliation: "",
        occupation: "",
        reason: "",
      },
    };
  },
  methods: {
    submitForm(e1) {
      e1.preventDefault();
      // Send the form data to the backend API endpoint
      axios
        .post(
          this.api + "/user/",
          {
            first_name: this.user.firstName,
            last_name: this.user.lastName,
            email: this.user.email,
            affiliation: this.user.affiliation,
            occupation: this.user.occupation,
            reason: this.user.reason,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          // this.user = {}; // Handle the response
        })
        .catch((error) => {
          console.error(error); // Handle any errors
        });
      // console.log(this.api + "/user/", this.user);
    },
  },
};
</script>
