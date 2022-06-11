<template>
  <div class="ml-2">
    <div class="flex justify-between items-center">
      <p class="text-xl font-normal">{{ title }}</p>
      
      <BaseButton append-icon="logout" @click='onClickLogout'>ログアウト</BaseButton>
    </div>
  </div><!-- /.page header -->
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator'
@Component({})
export default class extends Vue {
  @Prop({ type: String, required: false, default: '' })
  title!: string
  @Emit('click:logout')
  onClickLogout() {}
}
</script>
