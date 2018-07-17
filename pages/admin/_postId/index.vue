<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
  import AdminPostForm from '~/components/Admin/AdminPostForm'

  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    data(){
      return {
        loadedPost: {
          author: 'Maximilian',
          title: 'My awesome Post',
          content: 'Super amazing, thanks for that!',
          thumbnailLink: 'http://static1.everypixel.com/ep-libreshot/0449/5796/3246/31891/4495796324631891115-binary_code_background.jpg'
        }
      }
    }
  }
</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }
  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
</style>
