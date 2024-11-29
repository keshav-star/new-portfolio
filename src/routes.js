import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: lazy(() => import('./views/home/Home')),
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: lazy(() => import('./views/blog/Blog')),
  },
  {
    path: '/about',
    name: 'About',
    component: lazy(() => import('./views/about/About')),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: lazy(() => import('./views/contact/Contact')),
  },
]
