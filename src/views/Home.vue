<template>
  <div class="about-box">
    <h1>About Me</h1>
    <p>
      Hello! My name is Eric Pineda and I'm currently pursuing an associate's degree in Software Development online at CCC in Nebraska, expecting to graduate in 2026.
      I'm passionate about coding and constantly eager to learn new technologies. I have experience with Vue.js, C#, Java, and more.
    </p>
    <h2>My Aspirations</h2>
    <p>
      I aspire to become a proficient software developer, creating impactful applications and tools that solve real-world problems.
      My goal is to work in a dynamic environment that challenges me to grow and innovate.
    </p>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.about-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  padding: 20px;
}

.about-box {
  background-color: #ddedea;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.about-box h1 {
  margin-top: 0;
  font-size: 2rem;
  color: #333;
}

.about-box h2 {
  font-size: 1.5rem;
  color: #444;
}

.about-box p {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}
</style>
