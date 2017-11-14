import * as types from './../types'

const mutations = {
    [types.CHANGE_TEXT](state) {
        state.token = Date.now();
    },
    [types.SUBMIT_NAME](state, name) {
        state.name = name
    },
}

export default mutations