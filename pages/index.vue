<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
  import PostList from '~/components/Posts/PostList';

  export default{
    components: {
      PostList
    },
    asyncData(context, callback){
      console.log('async data is executed!');
      setTimeout(() => {
        callback(null, {
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
    }
  }
</script>

<style scoped>
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-image: url('~assets/images/main-page-background.jpg');
    background-position: center;
    background-size: cover;
  }

  .intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: black;
    background-color: rgb(211, 211, 211);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    box-sizing: border-box;
    border: 1px solid black;
  }

  @media (min-width: 768px) {
    .intro h1 {
      font-size: 2rem;
    }
  }

  
</style>
