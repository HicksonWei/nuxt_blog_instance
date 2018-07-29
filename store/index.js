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
      },
      addPost(state, post){
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost){
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    // 異步行為，需要 dispatch 才會觸發
    // vuexContent 是一個和 store 實例具有相同方法和屬性的對象，而不是 store 本身
    // 送出 commit 給 mutations
    actions: {
      nuxtServerInit(vuexContext, context){
        return context.app.$axios.$get(process.env.baseUrl + '/posts.json')
          .then(data => {
            const postsArray = [];
            for(const key in data){
              postsArray.push({...data[key], id: key});
            }
            vuexContext.commit('setPosts', postsArray);
          })
          .catch(e => context.error(e))
      },
      addPost(vuexContext, post){
        const createdPost = {...post, updatedDate: new Date()};
        return this.$axios.$post('/posts.json', createdPost)
          .then(data => {
            vuexContext.commit('addPost', {...createdPost, id: data.name});
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost){
        return this.$axios.$put(process.env.baseUrl + '/posts/' + editedPost.id + '.json', editedPost)
          .then(data => {
            vuexContext.commit('editPost', editedPost);
          })
          .catch(e => console.log(e));
      },
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
};

export default createStore