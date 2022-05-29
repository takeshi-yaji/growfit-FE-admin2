<!-- templateタグは <!DOCTYPE html> ~ <div id="__layout">を出力 -->
<template>
  <div class="p-6 flex-1">
    <div class="flex">
      <!-- v-modelでnewMessage変数とフォームの値を紐付けている -->
      <input v-model="newMessage" class="py-1 px-2 rounded border-2" type="text">
      <!-- @clickはメソッドでクリックしたらonClickAddButton関数を呼び出すといった意味 -->
      <button class="ml-1 py-1 px-2 bg-gray-200 rounded border-2" @click="onClickAddButton">add</button>
    </div>
    <div class="mt-4">
      <!-- massageList配列の値をmessage変数でそれぞれ取り出す -->
      <p v-for="(message, index) in messageList" :key="index" class="mt-1 text-gray-400">{{ message }}</p>
      <!-- messageList配列が空なら"no messages"を表示 -->
      <p v-if="!messageList.length" class="mt-1 text-gray-400">no messages</p>
    </div>
  </div>
</template>
<!-- templateタグは <!DOCTYPE html> ~ <div id="__layout">を出力 -->

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

// 以下のクラスがvueのスクリプトであることを表す記述
@Component({})
// vueクラスの継承(無いとエラーになる)
export default class extends Vue {
  // inputタグのテキスト内容と紐づいている
  newMessage: string = ''
  // pushされた値が格納される
  messageList: string[] = []

  onClickAddButton() {
    // messageList配列にnewMessageの値を格納
    this.messageList.push(this.newMessage)
    // newMessage変数を空にする
    this.newMessage = ''
  }
}
</script>
