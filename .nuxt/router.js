'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _65df6890 = () => import('/Users/jharmonious/iCloud Drive (Archive)/Documents/Code/nuxt/nuxt_async_example/pages/index.vue')

const _e2ce24f6 = () => import('/Users/jharmonious/iCloud Drive (Archive)/Documents/Code/nuxt/nuxt_async_example/pages/comics/index.vue')

const _cafcb922 = () => import('/Users/jharmonious/iCloud Drive (Archive)/Documents/Code/nuxt/nuxt_async_example/pages/comics/description.vue')

const _27c2e5a6 = () => import('/Users/jharmonious/iCloud Drive (Archive)/Documents/Code/nuxt/nuxt_async_example/pages/comics/_id.vue')



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _65df6890,
			name: "index"
		},
		{
			path: "/comics",
			component: _e2ce24f6,
			name: "comics"
		},
		{
			path: "/comics/description",
			component: _cafcb922,
			name: "comics-description"
		},
		{
			path: "/comics/:id",
			component: _27c2e5a6,
			name: "comics-id"
		}
  ]
})
