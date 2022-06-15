<template>
  <div class="">
    <input class="border border-gray rounded-lg w-full h-12 px-3 outline-none" type="text" :value="value" @input="onInput" name="" id="">
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  @Prop({ type: String, required: false, default: '' })
  value!: string

  @Emit('input')
  onInput(event: InputEvent) {
    return (event.target as HTMLInputElement).value
  }
}
</script>
