import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    // 用來改變 state
    // 同步行為，需要 commit 才會觸發
    mutations: {
      setPosts(state, posts){
        state.loadedPosts = posts;
      }
    },
    // 異步行為，需要 dispatch 才會觸發
    // vuexContent 是一個和 store 實例具有相同方法和屬性的對象，而不是 store 本身
    // 送出 commit 給 mutations
    actions: {
      setPosts(vuexContext, posts){
        vuexContext.commit('setPosts', posts);
      }
    },
    // 近似於 computed，對 state 做運算後回傳值(state 有改變才啟動)
    getters: {
      loadedPosts(state){
        return state.loadedPosts;
      }
    }
  });
}

export default createStore