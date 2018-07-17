<template>
  <div class="error-page">
    <h1>Oops, something went wrong!</h1>
    <p>Back to <a href="/">safety</a>!</p>
    <!-- 注意這裡是a而非nuxt-link，因為出錯可能會有重新渲染的必要 -->
  </div>
</template>

<style scoped>
  .error-page {
    text-align: center;
  }

  .error-page a {
    text-decoration: none;
    color: red;
  }

  .error-page a:hover,
  .error-page a:active {
    color: salmon;
  }
</style>