import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Members from "../views/Members.vue";
import Points from "../views/Points.vue";
import Overview from "../views/Overview.vue";
import ActivityLog from "../views/ActivityLog.vue";
import InnerPoints from "../views/InnerPoints.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    redirect:"/members"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/members",
    name: "Members",
    component: Members,
    redirect:"/members/overview",
    
    children:
      [
        {
          path: "/members/overview",
          name: "Overview",
          component: Overview,
          props: true
        },
        {
          path: "/members/activity_log",
          name: "ActivityLog",
          component: ActivityLog,
        },
        {
          path: "/members/inner_points",
          name: "InnerPoints",
          component: InnerPoints,
        }
      ]  
  },
  {
    path: "/points",
    name: "Points",
    component: Points,
  },
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
