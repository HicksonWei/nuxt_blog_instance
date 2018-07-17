<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
  import PostList from '~/components/Posts/PostList';

  export default{
    components: {
      PostList
    },
    asyncData(context){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            loadedPosts: [
              {
                id: '1',
                title: 'First Post',
                previewText: 'This is our first post!',
                thumbnail: 'http://static1.everypixel.com/ep-libreshot/0449/5796/3246/31891/4495796324631891115-binary_code_background.jpg'
              },
              {
                id: '2',
                title: 'Second Post',
                previewText: 'This is our second post!',
                thumbnail: 'http://static1.everypixel.com/ep-libreshot/0449/5796/3246/31891/4495796324631891115-binary_code_background.jpg'
              },
              {
                id: '3',
                title: 'Third Post',
                previewText: 'This is our third post!',
                thumbnail: 'http://static1.everypixel.com/ep-libreshot/0449/5796/3246/31891/4495796324631891115-binary_code_background.jpg'
              }
            ]
          });
        }, 1500);
        // reject(new Error());
      })
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(e => {
        console.log(e);
        context.error(e);
      })
    },
    created(){
      this.$store.dispatch('setPosts', this.loadedPosts);
    }
  }
</script>

<style scoped>
  .posts-page{
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
