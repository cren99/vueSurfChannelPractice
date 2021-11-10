<template>
  <div>
    <h1>Favorites</h1>
    <FavsList :surfers="favs" />
    <h2>{{ favorites }}</h2>

    <!-- <h2>Hello its me</h2> -->
  </div>
</template>

<script>
import FavsList from "../components/FavsList.vue";
export default {
  name: "BrowseSurfers",
  components: {
    FavsList,
  },
  computed: {
    favs() {
      return this.$root.$data.favorites;
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 690%;
  color: white;
  padding-top: 160px;
}
</style>