import { createStore } from 'vuex'
import { PLUS_TEMPLATE_ITEM } from '../utils/constants'

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
    buckets: [
      {
        id: 1,
        name: 'ADJ_color',
        items: ['red', 'blue', 'green']
      },
      {
        id: 2,
        name: 'NN_four_wheels',
        items: ['bus', 'lorry', 'van']
      },
      {
        id: 3,
        name: 'ADV_modal',
        items: ['smoothly', 'nicely', 'safely']
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
  getTemplateFromCurrentTestItem: () => {
    // TO DO
    return [
      PLUS_TEMPLATE_ITEM,
      {
        label: 'This',
        bucket: ['This']
      },
      PLUS_TEMPLATE_ITEM,
      {
        label: 'car',
        bucket: ['car']
      },
      PLUS_TEMPLATE_ITEM,
      {
        label: 'drives',
        bucket: ['drives']
      },
      PLUS_TEMPLATE_ITEM,
      {
        label: 'easily',
        bucket: ['easily']
      },
      PLUS_TEMPLATE_ITEM
    ]
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