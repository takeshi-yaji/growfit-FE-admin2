<template>
  <div class="bg-white rounded-lg h-400 w-400 px-8 py-16">
    <span class="flex justify-center text-lightGreen text-xl">Login Form</span>
    <BaseTextField class="mt-8" placeholder="ユーザー名"></BaseTextField>
    <BaseTextField class="mt-6" placeholder="パスワード"></BaseTextField>
    <!-- loginミスがあった場合のエラーメッセージ -->
    <span v-if="isError" class="flex justify-center items-center mt-6 text-red">ユーザー名またはパスワードが違います</span>

    <div class="flex justify-center items-center">
      <BaseButton class="mt-8" color="lightGreen" style="width: 200px" @click="onClickLogin">Login</BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  layout: 'background'
})
export default class extends Vue {
  LoginRepository = this.$repositories.login
  // エラー状態のフラグ
  isError: boolean = false
  email: string = ''
  password: string = ''

  async onClickLogin() {
    const params = {
      email: this.email,
      password: this.password,
    }

    const res = await this.LoginRepository.post(params).catch(() => {
      this.isError = true
    })

    if (res?.access_token) {
      localStorage.setItem('access_token', res.access_token)
      this.$router.push('/')
    }
  }
}
</script>
