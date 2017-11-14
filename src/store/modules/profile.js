import * as types from '../types'

// initial state
const state = {
    all: []
}

// getters
const getters = {
    getLength: state => state.all.length
}

// actions
const actions = {
    
}

// mutations
const mutations = {
    [types.PROFILE_CHANGE_TEXT] (store) {
        store.all.push({now: Date.now()})
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}