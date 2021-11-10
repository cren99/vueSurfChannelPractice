<template>
  <div class="wrapper">
    <div class="surfers">
      <div class="surfer" v-for="surfer in surfers" :key="surfer.id">
        <div class="info"></div>
        <h1>{{ surfer.name }}</h1>
        <h2>#{{ surfer.numberrange }}</h2>
        <p>{{ surfer.country }}</p>
        <p>{{ surfer.email }}</p>

        <div class="image">
          <img :src="'/images/surfers/' + surfer.image" />
        </div>
        <div class="rank">
          <button @click="addToFavs(surfer)" class="auto">
            Add to Favorties
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SurferList",
  props: {
    surfers: Array,
  },
  methods: {
    addToFavs(surfer) {
      this.$root.$data.favorites.push(surfer);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 40px;
}
button:hover {
  background-color: rgb(57, 146, 197);
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.surfers {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: white;
  border-radius: 25px;
}

.surfer {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.surfer img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
  background: white;
}

.surfer .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

/* .info {
  background: #f2921d;
  color: #000;
  padding: 10px 30px;
  height: 80px;
} */

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
h1 {
  color: black;
  font-size: 150%;
}
</style>