import {lazy} from 'react'
/**
 * 全局路由
 */
const routers = [

  {
    path: '/home',
    component: lazy(() => import('../pages/Home')),
  },
  {
    path: '/login',
    component: lazy(() => import('../pages/User/Login')),
    // children: [
    //     {
    //       path: '/demo',
    //       component: lazy(() => import('../pages/User/Demo')),
    //     },
    //     {
    //       path: '/demo2',
    //       component: lazy(() => import('../pages/User/Demo2')),
    //     },
    //     {
    //       path: '/',
    //       redirect: '/demo'
    //     }
    // ]
  },
  {
    path: '/register',
    component: lazy(() => import('../pages/User/Register'))
  },
  {
    path: '/count',
    component: lazy(() => import('../components/context/Count'))
  },
  {
    path: '/customer',
    component: lazy(() => import('../pages/Customer'))
  },
  {
    path: '/',
    redirect: '/home'
  },
]
export default routers