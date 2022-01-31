
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/details',
    component: () => import('layouts/SecondaryLayout.vue'),
    children: [
      { path: 'payment', meta: { title: 'Payment', fullHeight: true }, component: () => import('src/pages/Payment.vue') },
      { path: 'services', meta: { title: 'Services', fullHeight: true }, component: () => import('src/pages/Services.vue') },
      { path: 'cashback', meta: { title: 'Cashback', fullHeight: true }, component: () => import('src/pages/Cashback.vue') },
      { path: 'personal-offer', meta: { title: 'Personal Offer', fullHeight: true }, component: () => import('src/pages/PersonalOffer.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
