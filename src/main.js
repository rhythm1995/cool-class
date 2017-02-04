import Vue from 'vue'
import Vonic from 'vonic'

// Page Components
import Index from './components/Index.vue'
import About from './components/Me.vue'
import Search from './components/Search.vue'

import aboutMe from './components/Me-aboutMe.vue'
// Routes
const routes = {
    '/': {
      component:Index
    },

    '/me': {
      component:About
    },

    '/search':{
      component:Search
    },
    //about-route
    '/about-me':{
      component:aboutMe
    }
};

Vue.use(Vonic.app, {routes: routes, defaultRouteUrl: '/'});
