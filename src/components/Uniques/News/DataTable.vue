<template>
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
      <li
      v-for="item in data"
      :key="item.id"
      class="border-b border-lightGray py-2 pl-4 cursor-pointer"
      >
        <div class="text-xs grid gap-2 grid-cols-12 items-center">
          <div class="flex col-span-1">
            <span class="text-white py-2 px-4 bg-orange rounded-lg truncate">公開中</span>
          </div>
          <span class="col-span-1 truncate">{{item.id}}</span>
          <span class="col-span-3 truncate">{{item.title}}</span>
          <span class="col-span-3 truncate">{{item.text_contents}}</span>
          <span class="col-span-2 truncate">{{item.created_at}}</span>
          <span class="col-span-2 truncate">{{item.update_at}}</span>
        </div>
      </li><!-- /.news item -->
    </ul><!-- /.news list -->
  </div><!-- /.news body -->
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { News } from '~/types'
@Component({})
export default class extends Vue {
  @Prop({ type: Array, required: false, default: () => [] })
  data!: News.GetData[]
}
</script>
