import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeVieww from '../views/HomeVieww.vue'
import PersonalCenter from '../views/PersonalCenter'
import MyWork from '../views/MyWork'
import PerUplode from '../views/PerUplode'
import WordLibrary from '../views/WordLibrary'
import ArticleOne from '../views/ArticleOne'
import SignIn from '../views/SignIn'
import RegisTer from '../views/RegisTer'
import DesignCenter from '../views/DesignCenter'
import ShowWork from '../views/ShowWork'
import LoginRegister from '../views/LoginRegister'
import AdminSystem from '../views/AdminSystem'
import AdminList from '../views/AdminList'
import UserList from '../views/UserList'
import CssTest from '../views/CssTest'
// import JsTest from '../views/JsTest'
import CssTesttow from '../views/CssTesttow'
import ArticleCollect from '../views/ArticleCollect'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Mywork',
    name: 'MyWork',
    component: MyWork
  },
  {
    path: '/PerUplode',
    name: 'PerUplode',
    component: PerUplode
  },
  {
    path: '/WordLibrary',
    name: 'WordLibrary',
    component: WordLibrary
  },
  {
    path: '/ArticleOne',
    name: 'ArticleOne',
    component: ArticleOne
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/HomeVieww',
    name: 'HomeVieww',
    component: HomeVieww
  },
  {
    path: '/RegisTer',
    name: 'RegisTer',
    component: RegisTer
  },
  {
    path: '/DesignCenter',
    name: 'DesignCenter',
    component: DesignCenter
  },
  {
    path: '/ShowWork',
    name: 'ShowWork',
    component: ShowWork
  },
  {
    path: '/LoginRegister',
    name: 'LoginRegister',
    component: LoginRegister
  },
  {
    path: '/CssTest',
    name: '/CssTest',
    component: CssTest
  },
  {
    path: '/CssTesttow',
    name: '/CssTesttow',
    component: CssTesttow
  },
  // {
  //   path: '/JsTest',
  //   name: '/JsTest',
  //   component: JsTest
  // },
  {
    path: '/AdminSystem',
    name: 'AdminSystem',
    component: AdminSystem,
    children: [
      {
        path: '/AdminList',
        name: 'AdminList',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: AdminList
      },
      {
        path: '/UserList',
        name: 'UserList',
        component: UserList
      }
    ]
  },
  {
    path: '/PersonalCenter',
    name: 'PersonalCenter',
    component: PersonalCenter,
    children: [
      {
        path: '/ArticleCollect',
        name: '/ArticleCollect',
        component: ArticleCollect
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
