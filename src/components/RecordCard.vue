<template>
  <div class="card">
    <h2 class="record-title">{{ record.basic_information.title }}</h2>
    <img class="record-image" v-bind:src="record.basic_information.cover_image">
    <h3 class="record-artist">{{record.basic_information.artists[0].name}} - {{record.basic_information.year}}</h3>
  </div>
</template>

<script>
export default {
    name: 'record-card',
    props: {
        record: Object,
        enableAdd: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style>
.card {
    border: 2px solid black;
    border-radius: 10px;
    width: 250px;
    height: 350px;
    margin: 5px;
}

.card .record-title {
    font-size: 1.5rem;
}

.record-image {
    width: 80%;
}

.card .record-artist {
    font-size: 1rem;
}
</style>