<template>
  <div>
    {{this.$route.params.id}}<br>
    {{this.$store.state.releases.releases.length}}
    THIS WILL BE A DETAIL VIEW<br>
    {{this.$store.state.releases.releases[2].basic_information.id}}<br>
    {{record}}
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  name: "record-details",
  computed: {
    ...mapGetters(["releases"]),
    record() {
        for(let i=0;i<this.$store.state.releases.releases.length;i++){
            if(this.$store.state.releases.releases[i].basic_information.id==this.$route.params.id){
                return this.$store.state.releases.releases[i];
            }
        }
        return this.$store.state.releases.releases[0];
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