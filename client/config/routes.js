import App from '../views/todo/todo.vue'
import login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: App
  },
  {
    path: '/login',
    component: login
  }
]
