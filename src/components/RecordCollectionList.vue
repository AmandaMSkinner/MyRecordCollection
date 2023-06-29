<template>
<section>
  <h2>Record Collection List</h2>
  <div class="record-collection-list">
    <div>{{$store.state}}</div>
    <div>{{this.$store.state.releases}}</div>
    <record-card v-bind:record="record" v-for="record in $store.state.releases" v-bind:key="record.id"></record-card>
  </div>
  </section>
</template>

<script>
import RecordCard from "../components/RecordCard.vue";

export default {
  name: "record-collection-list",
  computed: {
    records() {
      return this.$store.state.releases;
  },
  components: {
    RecordCard,
  },
}
}
</script>

<style>
.new-releases-list {
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>