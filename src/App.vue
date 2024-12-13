<template>
  <img src="@/assets/Eric_Pineda_Photo.jpg" alt="Eric Pineda Photo" class="profile-photo" />
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/Portfolio">Portfolio</router-link>
    <router-link to="/Contactme">Contact Me</router-link>
  </nav>
  <router-view/>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: black;
  text-align: center;
  background: url('..\\public\\Site_Background.jpg') no-repeat center center fixed;
  background-size: cover;
}



nav a {
  font-weight: bold;
  color: #e8dff5;
  background-color: #3a3939;
  padding: 10px;
  border-radius: 10px;
}

nav a.router-link-exact-active {
  color: #daeaf6;
  background-color: #686666;
}
.profile-photo {
  position: absolute;
  top: 30px;
  left: 30px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>