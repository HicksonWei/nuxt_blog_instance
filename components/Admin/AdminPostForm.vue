<template>
  <form @submit.prevent="onSave">
    <AppControlInput :value="editedPost.author" @input="val => editedPost.author = val">Author Name</AppControlInput>
    <!-- v-model 拆開等同於上述寫法 -->
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.content">Content</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.previewText">Preview Text</AppControlInput>
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
  import AppControlInput from '~/components/UI/AppControlInput'
  import AppButton from '~/components/UI/AppButton'

  export default {
    components: {
      AppControlInput,
      AppButton
    },
    props: {
      post: {
        type: Object,
        required: false
      }
    },
    data(){
      return {
        editedPost: this.post ? {...this.post} : {
          author: "",
          title: "",
          thumbnail: "",
          content: "",
          previewText: ""
        }
      }
    },
    methods: {
      onSave(){
        // Save the post
        this.$emit('submit', this.editedPost);
      },
      onCancel(){
        // Navigate back
        this.$router.push('/admin');
      }
    }
  }
</script>