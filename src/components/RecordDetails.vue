<template>
  <div>
    {{record}}
    THIS WILL BE A DETAIL VIEW
    {{this.$store.state.releases}}
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  name: "record-details",
  computed: {
    ...mapGetters(["releases"]),
    record() {
        /*for(let i=0;i<this.$store.state.releases.length;i++){
            if(this.$store.state.releases[i].id===this.$route.params.id){
                return this.$store.state.releases[i];
            }
        }*/
        return "nothing";
    }
  },
  components: {
  },
  methods:{
    ...mapActions(["fetchAllReleases"]),},

    created() {
    this.fetchAllReleases();
  },
}
</script>

<style>

</style>