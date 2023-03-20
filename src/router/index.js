import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
const About = { template: '<div>About</div>' }
const CourseDetails = () => import(/*webpackChunkName: "course"*/'@/views/Course.vue')
const CourseDetailsPromise = () =>
  Promise.resolve({
    template: '<div>Courses from Promise.resolve </div>' 
  })

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/course', name: 'Course', component: CourseDetailsPromise },
  { path: '/core/preview-courses/:id', name: 'Course', component: CourseDetails },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
