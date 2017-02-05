import Vue from 'vue'
import Vonic from 'vonic'

// Page Components
import Index from './components/Index.vue'
import About from './components/Me.vue'
import Search from './components/Search.vue'
import Issue from './components/Issue.vue'

import me_aboutMe from './components/Me-aboutMe.vue'
import me_information from './components/Me-information.vue'
import me_information_change from './components/Me-information-change.vue'
import me_help from './components/Me-help.vue'
import me_feedback from './components/Me-feedback.vue'

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
    //issue-route
    '/issue':{
        component:Issue
    },

    //about-route
    '/me-about':{
        component:me_aboutMe
    },

    '/me-help':{
        component:me_help
    },

    '/me-feedback':{
        component:me_feedback
    },

    '/me-information':{
        component:me_information
    },

    '/me-information-change':{
        component:me_information_change
    }
};

Vue.use(Vonic.app, {routes: routes, defaultRouteUrl: '/'});
