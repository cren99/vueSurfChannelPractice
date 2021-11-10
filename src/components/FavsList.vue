<template>
  <div class="wrapper">
    <div class="surfers">
      <div class="surfer" v-for="surfer in surfers" :key="surfer.id">
        <div class="info">
          <h1>{{ surfer.name }}</h1>
          <h2>#{{ surfer.numberrange }}</h2>
          <p>{{ surfer.country }}</p>

          <div class="color">
            <div class="image">
              <img :src="'/images/surfers/' + surfer.image" />
            </div>
            <div class="rank">
              <button @click="RemoveFromFavs(surfer)" class="auto">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavsList",
  props: {
    surfers: Array,
  },
  methods: {
    RemoveFromFavs(surfer) {
      this.$root.$data.favorites = this.$root.$data.favorites.filter(
        (object) => surfer != object
      );
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 80px;
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

.color img {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -webkit-transition: all 0.5s ease;
}

.color img:hover {
  filter: grayscale(0%);
  filter: gray;
  -webkit-filter: grayscale(0%);
  filter: none;
  transition: 1s ease;
}

.info h1 {
  font-size: 32px;
}

.info h2 {
  font-size: 25px;
}

.info p {
  margin: 0px;
  font-size: 20px;
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
  font-size: 50%;
  /* padding-top: 500px; */
}
button:hover {
  background-color: rgb(57, 146, 197);
}
</style>