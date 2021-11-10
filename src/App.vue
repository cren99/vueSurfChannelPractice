<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/surfers">Surfers</router-link> |
      <router-link to="/favs">Favorites</router-link>
    </div>
    <router-view />
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  background-image: url("assets/homeSurf.jpg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

#nav {
  padding: 30px;
  font-size: 1.3rem;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: rgb(61, 159, 240);
}

button:hover {
  background-color: blue;
}
</style>
