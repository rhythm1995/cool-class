import Vue from 'vue'
import Vonic from 'vonic'

// Page Components
import Index from './components/Index.vue'
import About from './components/Me.vue'
import Search from './components/Search.vue'

import aboutMe from './components/Me-aboutMe.vue'
import about_information from './components/Me-information.vue'
import about_information_change from './components/Me-information-change.vue'

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
    },

    '/about-information':{
        component:about_information
    },

    '/about-information-change':{
        component:about_information_change
    }
};

Vue.use(Vonic.app, {routes: routes, defaultRouteUrl: '/'});
