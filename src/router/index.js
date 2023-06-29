import Vue from 'vue';
import VueRouter from 'vue-router';
import RecordCollectionList from "../components/RecordCollectionList.vue";
import RecordDetails from "../components/RecordDetails.vue"

Vue.use(VueRouter);

const routes = [
 {path: '/',
  name: 'record-list',
  components: {
    default: RecordCollectionList,
  }
 },{
 path: '/record/:id',
  name: 'record-details',
    component: RecordDetails,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
