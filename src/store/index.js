import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import todos from './modules/todos'

Vue.use(Vuex)

const storeData = {
    modules: {
        todos
    }
}

const store = new Vuex.Store(storeData)

export default store