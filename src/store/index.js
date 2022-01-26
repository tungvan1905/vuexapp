import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import todos from './modules/todos'
import auth from './modules/auth'


Vue.use(Vuex)

const storeData = {
    modules: {
        todos,
        auth
    }
}

const store = new Vuex.Store(storeData)

export default store