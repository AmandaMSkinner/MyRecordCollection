import Vue from 'vue';
import VueRouter from 'vue-router';
import RecordCollectionList from "../components/RecordCollectionList.vue";
import RecordDetails from "../components/RecordDetails.vue"

//import { createRouter, createWebHistory } from 'vue-router'

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
  mode: 'hash',
  routes
});

export default router;
