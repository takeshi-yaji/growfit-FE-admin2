<template>
  <div class="flex-1">
    <div class="p-4">

      <div class="ml-2">
        <div class="flex justify-between items-center">
          <p class="text-xl font-normal">ニュース一覧</p>
          <button class="flex items-center px-4 py-2 rounded-lg hover:bg-lightGray duration-300">
            <p class="">ログアウト</p>
            <span class="material-icons">logout</span>
          </button>
        </div>
      </div><!-- /.page header -->

      <div class="flex justify-end items-center mt-10">
        <button class="flex items-center px-4 py-2 bg-lightGreen text-white rounded-lg hover:opacity-80 duration-300">
          <span class="material-icons">add</span>
          <p class="">新規追加</p>
        </button>
      </div><!-- /.add content -->

      <div class="mt-8">
        <div class="border-b border-lightGray pb-4">
          <div class="text-sm pl-4 grid grid-cols-12">
            <span class="col-span-1">ステータス</span>
            <span class="col-span-1">ID</span>
            <span class="col-span-3">タイトル</span>
            <span class="col-span-3">本文</span>
            <span class="col-span-2">作成日時</span>
            <span class="col-span-2">更新日時</span>
          </div>
        </div><!-- /.news header -->

        <ul class="">
          <li class="border-b border-lightGray py-2 pl-4 cursor-pointer">
            <div class="text-xs grid gap-2 grid-cols-12 items-center">
              <div class="flex col-span-1">
                <span class="text-white py-2 px-4 bg-orange rounded-lg truncate">公開中</span>
              </div>
              <span class="col-span-1 truncate">1</span>
              <span class="col-span-3 truncate">テストタイトル1</span>
              <span class="col-span-3 truncate">テスト本文1</span>
              <span class="col-span-2 truncate">2021/12/24 16:00:00</span>
              <span class="col-span-2 truncate">2021/12/24 16:00:00</span>
            </div>
          </li><!-- /.news item -->

          <li class="border-b border-lightGray py-2 pl-4 cursor-pointer">
            <div class="text-xs grid gap-2 grid-cols-12 items-center">
              <div class="flex col-span-1">
                <span class="text-white py-2 px-4 bg-blue rounded-lg truncate">下書き</span>
              </div>
              <span class="col-span-1 truncate">2</span>
              <span class="col-span-3 truncate">テストタイトル2</span>
              <span class="col-span-3 truncate">テスト本文2</span>
              <span class="col-span-2 truncate">2021/12/24 16:00:00</span>
              <span class="col-span-2 truncate">2021/12/24 16:00:00</span>
            </div>
          </li><!-- /.news item -->
        </ul><!-- /.news list -->

        <div class="">
          <div class="flex justify-center items-center mt-10">
            <button class="">
              <span class="material-icons text-lightGreen flex duration-300 hover:opacity-80">
                keyboard_double_arrow_left
              </span>
            </button><!-- /.double arrows -->

            <button class="ml-4">
              <span class="material-icons text-lightGreen flex duration-300 hover:opacity-80">
                keyboard_arrow_left
              </span>
            </button><!-- /.single arrow -->

            <div class="ml-6">...</div>

            <button class="border border-lightGray rounded-lg ml-6 text-sm w-30 h-30 flex justify-center items-center duration-300 hover:bg-lightGray">3</button>
            <button class="border border-lightGray rounded-lg bg-lightGreen text-white ml-4 text-sm w-30 h-30 flex justify-center items-center duration-300 hover:opacity-80">4</button>
            <button class="border border-lightGray rounded-lg ml-4 text-sm w-30 h-30 flex justify-center items-center duration-300 hover:bg-lightGray">5</button>

            <div class="ml-6">...</div>

            <button class="ml-6">
              <span class="material-icons text-lightGreen flex duration-300 hover:opacity-80">
                keyboard_arrow_right
              </span>
            </button><!-- /.single arrow -->

            <button class="ml-4">
              <span class="material-icons text-lightGreen flex duration-300 hover:opacity-80">
                keyboard_double_arrow_right
              </span>
            </button><!-- /.double arrows -->
          </div><!-- /.news pagination inner -->
        </div><!-- /.news pagination -->
      </div><!-- /.news body -->

    </div><!-- /.inner -->
  </div><!-- /.outer -->
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  async created() {
    const res = await this.$axios.get('http://127.0.0.1:8000/api/news')
    console.log(res)
  }
}
</script>
