import Vue from 'vue'
import * as types from './../types'

function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        }, 1000)
    })
}

const actions = {
    async testAction({
        commit,
        state,
        rootState,
    }) {
        await sleep();
        return Vue.axios.get('package.json')
            .then(function (res) {
                console.log(res);
                commit(types.CHANGE_TEXT)
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}

export default actions