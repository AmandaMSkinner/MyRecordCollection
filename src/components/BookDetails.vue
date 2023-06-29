<template>
  <div>
    <h2 class="book-title">{{ book.title }}</h2>
    <h3 class="book-author">{{ book.author }}</h3>
    <img v-if="book.isbn" v-bind:src="'http://covers.openlibrary.org/b/isbn/' + book.isbn + '-M.jpg'" />
  </div>
</template>

<script>
export default {
  name: 'book-details',
  computed: {
    book() {
        for(let i=0;i<this.$store.state.books.length;i++){
            if(this.$store.state.books[i].isbn===this.$route.params.isbn){
                return this.$store.state.books[i];
            }
        }
        for(let i=0;i<this.$store.state.popularBooks.length;i++){
            if(this.$store.state.popularBooks[i].isbn===this.$route.params.isbn){
                return this.$store.state.popularBooks[i];
            }
        }
        return null;
    }
  }
};
</script>

<style>

</style>