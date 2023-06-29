import Vue from 'vue';
import VueRouter from 'vue-router';
import RecordCollectionList from "../components/RecordCollectionList.vue";

Vue.use(VueRouter);

const routes = [
 {path: '/',
  name: 'record-list',
  components: {
    default: RecordCollectionList,
  }
 }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
