const getters = {
    strJoin: (state, getters, rootState) => {
        return `This is ${state.token}`
    }
}

export default getters