<template>
  <div>
    <div class="pure-menu pure-menu-horizontal">
      <div class="grow">
        <ul class="pure-menu-list">
          <li class="pure-menu-item">
            <a @click="select('Brazil')" href="#" class="pure-menu-link"
              >Brazil
            </a>
          </li>
          <li class="pure-menu-item">
            <a @click="select('United States')" href="#" class="pure-menu-link">
              United States
            </a>
          </li>
          <li class="pure-menu-item">
            <a @click="select('Peru')" href="#" class="pure-menu-link">
              Peru
            </a>
          </li>
          <li class="pure-menu-item">
            <a @click="select('UK')" href="#" class="pure-menu-link">UK </a>
          </li>
          <li class="pure-menu-item">
            <a @click="select('Spain')" href="#" class="pure-menu-link"
              >Spain
            </a>
          </li>
          <li class="pure-menu-item">
            <a @click="select('Portugal')" href="#" class="pure-menu-link"
              >Portugal
            </a>
          </li>
          <li class="pure-menu-item">
            <a @click="select('Australia')" href="#" class="pure-menu-link"
              >Australia</a
            >
          </li>
        </ul>
      </div>
    </div>
    <SurferList :surfers="surfers" />
  </div>
</template>

<script>
import SurferList from "../components/SurferList.vue";
export default {
  name: "BrowseSurfers",
  components: {
    SurferList,
  },
  data() {
    return {
      country: "",
    };
  },
  computed: {
    surfers() {
      return this.$root.$data.surfers.filter(
        (surfer) => surfer.country === this.country
      );
    },
  },
  methods: {
    select(country) {
      this.country = country;
    },
  },
};
</script>
<style scoped>
/* .pure-menu-list {
  
} */
li {
  list-style-type: none;
}
.pure-menu-list {
  font-size: 140%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 175px;
  background-color: white;
}

text {
  color: white;
}
.grow li {
  transition: 1s ease;
}

.grow li:hover {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
  transition: 1s ease;
}
</style>