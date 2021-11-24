import { createStore } from 'vuex'

const defaultState = () => {
  return {
    testsets: [
      {
          id: 1,
          name: 'Test Set 1',
          description: "Test set for middle voice challenge"
      },
      {
          id: 2,
          name: 'Test Set 2',
          description: "Test set for middle voice challenge"
      },
      {
          id: 3,
          name: 'Test Set 3',
          description: "Test set for middle voice challenge"
      },
      {
          id: 4,
          name: 'Test Set 4',
          description: "Test set for middle voice challenge"
      },{
          id: 5,
          name: 'Test Set 5',
          description: "Test set for middle voice challenge"
      },
      {
          id: 6,
          name: 'Test Set 6',
          description: "Test set for middle voice challenge"
      },
      {
          id: 7,
          name: 'Test Set 7',
          description: "Test set for middle voice challenge"
      },
      {
          id: 8,
          name: 'Test Set 8',
          description: "Test set for middle voice challenge"
      }
    ],
    currentTestSet: {},
    testItems: [
      {
        id: 1,
        source: 'This car drives easily',
        target: {
          prefix: '+/-',
          rule: 'regex'
        }
      },
      {
        id: 2,
        source: 'This car drives easily',
        target: {
          prefix: '+/-',
          rule: 'regex'
        }
      },
      {
        id: 3,
        source: 'This car drives easily',
        target: {
          prefix: '+/-',
          rule: 'regex'
        }
      }
    ],
    currentTestItem: {},
    currentSentenceTemplate: [],
    buckets: [],
    newBucket: {},
    currentBucket: {},
    generatedSentences: [],
    alert: {
        show: false,
        type: '',
        message: ''
    }
  }
}

const state = defaultState()

const getters = {
  
}

const mutations = {
  setTestSets: (state, testSets) => {
    state.testSets = testSets
  },
  
  setCurrentTestSet: (state, currentTestSet) => {
      Object.assign(state.currentTestSet, currentTestSet)
  },

  setCurrentTestItem: (state, currentTestItem) => {
      state.currentTestItem = currentTestItem
  },

  setTestItems: (state, testItems) => {
    state.testItems = testItems
  },

  setAlert: (state, alert) => {
    Object.assign(state.alert, alert);
  },

  resetState: (state) => {
      Object.assign(state, defaultState())
  }
}

const actions = {
  showInfo ({commit}, message) {
      commit('setAlert', {
          show: true,
          type: 'info',
          message: message
      })
  },

  showSuccess ({commit}, message) {
      commit('setAlert', {
          show: true,
          type: 'success',
          message: message
      })
  },

  showWarning ({commit}, message) {
      commit('setAlert', {
          show: true,
          type: 'warning',
          message: message
      })
  },

  showError ({commit}, message) {
      commit('setAlert', {
          show: true,
          type: 'error',
          message: message
      })
  },

}

export const store = createStore({
    state,
    getters,
    mutations,
    actions
})