function genericImport (page) {
  return import('pages/' + page + '.vue')
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/flat_layout'),
    children: [
      { path: '', component: () => genericImport('login') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/MyLayout'),
    children: [
      { path: 'Usermanagement', component: () => genericImport('Usermanagement') },
      { path: 'transactions', component: () => genericImport('transactions') }
      // { path: 'Usermanagement', component: () => genericImport('Usermanagement') },
      // { path: 'primarySort', component: () => genericImport('primarySort') },
      // { path: 'createCartons', component: () => genericImport('createCartons') },
      // { path: 'secondarySort', component: () => genericImport('secondrySort') },
      // { path: 'putAway', component: () => genericImport('putaway') },
      // { path: 'settings', component: () => genericImport('settings') },
      // { path: 'rto', component: () => genericImport('rto') },
      // { path: 'picking', component: () => genericImport('picking') },
      // { path: 'flushCarton', component: () => genericImport('flushCarton') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
