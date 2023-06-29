import Vue from 'vue';
import VueRouter from 'vue-router';
import BestSellerList from '../components/BestSellerList.vue';
import NewReleasesList from '../components/NewReleasesList.vue';
import ReadingList from '../components/ReadingList.vue'
import NewBookForm from '../components/NewBookForm.vue'
import AddBookLink from '../components/AddBookLink.vue'
import BookDetails from '../components/BookDetails.vue'

Vue.use(VueRouter);

const routes = [
 {path: '/MyRecordCollection/',
  name: 'best-and-new',
  components: {
    default: BestSellerList,
    extra: NewReleasesList}
},
{path: '/MyRecordCollection/myBooks',
  name: 'my-books',
  components: {
    default: ReadingList,
    extra: AddBookLink}
},
{path: '/MyRecordCollection/addBook',
  name: 'add-book',
  components: {
    default: NewBookForm,
    }
},
{path: '/MyRecordCollection/book/:isbn',
  name: 'book-details',
    component: BookDetails,
  }

];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
