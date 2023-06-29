<template>
  <div class="card">
    <h2 class="record-title">{{record.basic_information.title}}</h2>
    <h3 class="record-artist">{{record.basic_information.artists[0].name}}</h3>
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
    height: 550px;
    margin: 20px;
}

.card.read {
    background-color: lightgray;
}

.card .record-title {
    font-size: 1.5rem;
}

.card .record-artist {
    font-size: 1rem;
}
</style>