import { createStore } from 'vuex'
import { tokenizeSentence } from '../utils'

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
      }
    ],
    currentTestSet: {},
    testItems: [
      {
        id: 1,
        source: 'This car drives easily.',
        target: {
          prefix: '+/-',
          rule: 'regex'
        }
      },
      {
        id: 2,
        source: 'This car drives easily.',
        target: {
          prefix: '+/-',
          rule: 'regex'
        }
      },
      {
        id: 3,
        source: 'This car drives easily.',
        target: {
          prefix: '+/-',
          rule: 'regex'
        }
      }
    ],
    currentTestItem: {},
    currentSentenceTemplate: [],
    buckets: [
      {
        id: 1,
        name: 'ADJ_color',
        items: ['red', 'blue', 'green'],
        is_selected: false
      },
      {
        id: 2,
        name: 'NN_four_wheels',
        items: ['bus', 'lorry', 'van'],
        is_selected: false
      },
      {
        id: 3,
        name: 'ADV_modal',
        items: ['smoothly', 'nicely', 'safely'],
        is_selected: false
      }
    ],
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
  getTemplateFromCurrentTestItem: (state) => {
    return tokenizeSentence(state.currentTestItem.source)
  }
}

const mutations = {
  setTestSets: (state, testSets) => {
    state.testSets = testSets
  },
  
  setCurrentTestSet: (state, testSet) => {
      Object.assign(state.currentTestSet, testSet)
  },

  setCurrentTestItem: (state, testItem) => {
      state.currentTestItem = testItem
  },

  setTestItems: (state, testItems) => {
    state.testItems = testItems
  },

  setCurrentSentenceTemplate: (state, sentenceTemplate) => {
    state.currentSentenceTemplate = sentenceTemplate
  },

  setGeneratedSentences: (state, generatedSentences) => {
    state.generatedSentences = generatedSentences
  },

  setCurrentBucket: (state, bucket) => {
    Object.assign(state.currentBucket, bucket);
  },

  clearCurrentBucket: (state) => {
    Object.assign(state.currentBucket, { id: null,
      name: '',
      items: [],
      is_selected: false});
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