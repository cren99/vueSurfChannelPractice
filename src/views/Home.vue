<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/homeSurf.jpg" /> -->
    <HelloWorld msg="Surf Channel" msg2="World's Surf Rankings" />
    <div class="wrapper">
      <div class="search">
        <form class="pure-form">
          <i class="fas fa-search"></i
          ><input
            v-model="searchText"
            placeholder="Search Surfers"
            id="searchBar"
          />
        </form>
      </div>
    </div>
    <h2>World's Surf Rankings</h2>
    <SurferList :surfers="surfers" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import SurferList from "../components/SurferList.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    SurferList,
  },
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    surfers() {
      return this.$root.$data.surfers.filter(
        (surfer) =>
          surfer.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0
      );
    },
  },
};
</script>

<style scoped>
/* h1 {
  color: white;
  padding-top: 150px;
  font-size: 10rem;
} */
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
#controlsub {
  color: #000;
}

.search {
  /* border: 1px solid #ccc; */
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}
h2 {
  color: white;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
#searchBar {
  height: 50px;
  background-image: url(https://cdn2.hubspot.net/hubfs/4004166/bioticresearch_website_assets/images/search_icon.png);
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 40px;
  background-color: #fff;
  border: 1px solid #000;
  box-shadow: none;
  -webkit-appearance: none;
}
</style>