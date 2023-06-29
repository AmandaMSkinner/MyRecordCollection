<template>
<section>
  <h2>Amanda's Record Collection</h2>
  <h3>A selection of 100 favorites from my collection!</h3>
  <div>Powered By <a href="https://www.discogs.com/">Discogs</a></div>
  <div class="record-collection-list">
    <record-card v-bind:record="record" v-for="record in $store.state.releases.releases" v-bind:key="record.id"></record-card>
  </div>
  </section>
</template>

<script>
import RecordCard from "../components/RecordCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "record-collection-list",
  computed: {
    ...mapGetters(["releases"]),
  },
  components: {
    RecordCard,
  },
  methods:{
    ...mapActions(["fetchAllReleases"]),},

    created() {
    this.fetchAllReleases();
  },
}
</script>

<style>
.record-collection-list {
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>