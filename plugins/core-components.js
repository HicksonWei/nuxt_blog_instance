import Vue from 'vue'
// 'vue' 必須是小寫，否則會報錯

import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
import PostList from '@/components/Posts/PostList'

Vue.component('AppControlInput', AppControlInput);
Vue.component('AppButton', AppButton);
Vue.component('PostList', PostList);