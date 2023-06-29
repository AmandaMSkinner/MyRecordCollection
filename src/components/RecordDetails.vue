<template>
  <div class="detail-view"><div>
    <router-link to="/">Return to Collection</router-link>
    <h2 class="record-title">{{ record.basic_information.title }}</h2>
    <img class="record-image" v-bind:src="record.basic_information.cover_image">
    <h3 class="record-artist">{{record.basic_information.artists[0].name}} - {{record.basic_information.year}}</h3></div>
    <div>Record Label: {{record.basic_information.labels[0].name}}</div><br>
    <div>Catalog Number: {{record.basic_information.labels[0].catno}}</div>
    <ul>Genres:
        <li v-for="item in record.basic_information.genres" v-bind:key=item>{{item}}</li>
    </ul>
    <ul>Styles:
        <li v-for="item in record.basic_information.styles" v-bind:key=item>{{item}}</li>
    </ul>
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
.detail-view{
    display:flex;
}
.card .record-title {
    font-size: 1.5rem;
}

.record-image {
    width: 35%;
}

.card .record-artist {
    font-size: 1rem;
}
ul {  
list-style-type: none;  
}  
</style>