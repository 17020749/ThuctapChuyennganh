import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            appToken: {}
        },
        mutations: {
            setAppToken(state,appToken) {
                state.appToken = appToken
            }
        },
        actions: {
            setAppToken(vuexContext, appToken) {
                vuexContext.commit('setAppToken', appToken)
            }
        },
        getters: {
            getAppToken(state) {
                return state.appToken
            }
        }
    })
}

export default createStore