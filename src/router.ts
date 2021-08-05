import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/Home'
import Paint from './views/Paint'
import Scatter from './views/Scatter'
import Svg from './views/Svg'

const routes: RouteRecordRaw[] = [
  { path: '/home', component: Home },
  { path: '/paint', component: Paint },
  { path: '/svg', component: Svg },
  { path: '/scatter', component: Scatter }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export { router }
export default router