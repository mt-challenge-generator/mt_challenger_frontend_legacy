import { createStore } from "vuex";
import { tokenizeSentence } from "@/utils";
import { TestSet } from "@/interfaces/test-set.interface";
import { TestItem } from "@/interfaces/test-item.interface";
import { Bucket } from "@/interfaces/bucket.interface";
import { TemplateItem } from "@/interfaces/template-item.interface";
import { Alert } from "@/interfaces/alert.interface";
import { Commit } from "vuex";
import { State } from "@/interfaces/state.interface";

const defaultState = () => {
  return {
    testSets: [
      {
        id: 1,
        name: "Test Set 1",
        description: "Test set for middle voice challenge",
      },
      {
        id: 2,
        name: "Test Set 2",
        description: "Test set for middle voice challenge",
      },
      {
        id: 3,
        name: "Test Set 3",
        description: "Test set for middle voice challenge",
      },
      {
        id: 4,
        name: "Test Set 4",
        description: "Test set for middle voice challenge",
      },
    ] as TestSet[],
    currentTestSet: {} as TestSet,
    testItems: [
      {
        id: 1,
        source: "This car drives easily.",
        target: {
          prefix: "+/-",
          rule: "regex",
        },
      },
      {
        id: 2,
        source: "This car drives easily.",
        target: {
          prefix: "+/-",
          rule: "regex",
        },
      },
      {
        id: 3,
        source: "This car drives easily.",
        target: {
          prefix: "+/-",
          rule: "regex",
        },
      },
    ] as TestItem[],
    currentTestItem: {} as TestItem,
    currentSentenceTemplate: [] as TemplateItem[],
    buckets: [
      {
        id: 1,
        name: "ADJ_color",
        items: ["red", "blue", "green"],
        is_selected: false,
      },
      {
        id: 2,
        name: "NN_four_wheels",
        items: ["bus", "lorry", "van"],
        is_selected: false,
      },
      {
        id: 3,
        name: "ADV_modal",
        items: ["smoothly", "nicely", "safely"],
        is_selected: false,
      },
    ] as Bucket[],
    currentBucket: {} as Bucket,
    generatedSentences: [] as { source: string }[],
    alert: {
      show: false,
      type: "",
      message: "",
    } as Alert,
  };
};

const state = defaultState();

const getters = {
  getTemplateFromCurrentTestItem: (state: State): TemplateItem[] => {
    return tokenizeSentence(state.currentTestItem.source);
  },
};

const mutations = {
  setTestSets: (state: State, testSets: TestSet[]) => {
    state.testSets = testSets;
  },

  setCurrentTestSet: (state: State, testSet: TestSet) => {
    Object.assign(state.currentTestSet, testSet);
  },

  setCurrentTestItem: (state: State, testItem: TestItem) => {
    state.currentTestItem = testItem;
  },

  setTestItems: (state: State, testItems: TestItem[]) => {
    state.testItems = testItems;
  },

  setCurrentSentenceTemplate: (
    state: State,
    sentenceTemplate: TemplateItem[]
  ) => {
    state.currentSentenceTemplate = sentenceTemplate;
  },

  setGeneratedSentences: (
    state: State,
    generatedSentences: { source: string }[]
  ) => {
    state.generatedSentences = generatedSentences;
  },

  setCurrentBucket: (state: State, bucket: Bucket) => {
    Object.assign(state.currentBucket, bucket);
  },

  clearCurrentBucket: (state: State) => {
    Object.assign(state.currentBucket, {
      id: null,
      name: "",
      items: [],
      is_selected: false,
    });
  },

  setAlert: (state: State, alert: Alert) => {
    Object.assign(state.alert, alert);
  },

  resetState: (state: State) => {
    Object.assign(state, defaultState());
  },
};

const actions = {
  showInfo({ commit }: { commit: Commit }, message: string) {
    commit("setAlert", {
      show: true,
      type: "info",
      message: message,
    });
  },

  showSuccess({ commit }: { commit: Commit }, message: string) {
    commit("setAlert", {
      show: true,
      type: "success",
      message: message,
    });
  },

  showWarning({ commit }: { commit: Commit }, message: string) {
    commit("setAlert", {
      show: true,
      type: "warning",
      message: message,
    });
  },

  showError({ commit }: { commit: Commit }, message: string) {
    commit("setAlert", {
      show: true,
      type: "error",
      message: message,
    });
  },
};

export const store = createStore({
  state,
  getters,
  mutations,
  actions,
});
