<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Portfolio">Portfolio</router-link>
    <router-link to="/Site_Background.jpg"</router-link>
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
}

nav a.router-link-exact-active {
  color: #daeaf6;
}
</style>