<template>
    <div class="contact-page" style="background-image: url('Site_Background.jpg');">
      <div class="contact-box">
        <h1>Contact Me</h1>
        <p>(Work in Progress)</p>
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" placeholder="Enter your name" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" placeholder="Enter your email" required />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" v-model="formData.message" rows="5" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" class="submit-button">Send</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactPage",
    data() {
      return {
        formData: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        console.log("Form submitted:", this.formData);
        alert(`Thank you, ${this.formData.name}! Your message has been sent!`);
        // Reset the form
        this.formData.name = "";
        this.formData.email = "";
        this.formData.message = "";
      },
    },
  };
  </script>
  
  <style scoped>
  
  .contact-box {
    background-color: #E8DFF5;
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  .contact-box h1 {
    margin-top: 0;
    font-size: 2rem;
    color: #333;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  
  .form-group label {
    margin-bottom: 5px;
    font-size: 1rem;
    color: #444;
  }
  
  .form-group input,
  .form-group textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    color: #333;
  }
  
  .submit-button {
    padding: 10px 20px;
    background-color: #aca6b6;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #56535a;
  }
  </style>
  