import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    allCharacters: [],
    books:[],
    spells:[]
}
const mutations = {
  setCharacters(state, allCharacters) {
    state.allCharacters = allCharacters
  },
  setBooks(state, books) {
    state.books = books
  },
  setSpells(state, spells) {
    state.spells = spells
  },
}

const actions = {
  fetchCharacters(store) {
    fetch('https://fedeperin-harry-potter-api-en.herokuapp.com/characters')
      .then(response => response.json())
      .then(result => { 
        store.commit('setCharacters', result )
    })
  },
  fetchBooks(store) {
    fetch('https://fedeperin-harry-potter-api-en.herokuapp.com/books')
      .then(response => response.json())
      .then(result => { 
        store.commit('setBooks', result )
    })
  },
  fetchSpells(store) {
    fetch('https://fedeperin-harry-potter-api-en.herokuapp.com/spells')
      .then(response => response.json())
      .then(result => { 
        store.commit('setSpells', result )
    })
  }
  
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
