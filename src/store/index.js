import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
  },
  getters: {
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload;
    }
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        commit('setCharacters', data.results);
        commit('setCharactersFilter', data.results);
      } catch (error) {
        console.error(error);
      }
    },

    filterByStatus({ commit, state }, status) {
      const results = state.characters.filter(c => c.status.includes(status));
      commit('setCharactersFilter', results);
    },

    filterByName({ commit, state }, name) {
      const formatName = name.toLowerCase();
      const results = state.characters.filter(c => {
        const cName = c.name.toLowerCase();
        if (cName.includes(formatName))
          return c;
      });
      commit('setCharactersFilter', results);
    }
  },
  modules: {
  }
})
