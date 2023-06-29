<template>
  <div class="card">
    <h2 class="book-title">Record Name</h2>
    <h3 class="book-author">Record Artist</h3>
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

.card .book-title {
    font-size: 1.5rem;
}

.card .book-author {
    font-size: 1rem;
}
</style>