<template>
  <button
    class="flex justify-center items-center px-4 py-2 rounded-lg hover:opacity-80 duration-300"
    :class="{
      'hover:bg-gray-100': color === '',
      'bg-lightGreen text-white hover:opacity-80' :color === 'lightGreen',
      'bg-red text-white hover:opacity-80' :color === 'red',
      'bg-blue text-white hover:opacity-80' :color === 'blue',
      'bg-orange text-white hover:opacity-80' :color === 'orange',
      }"
    @click="onClick"
    >
    <span v-if="prependIcon" class="material-icons">{{ prependIcon }}</span>
    <slot></slot>
    <span v-if="appendIcon" class="material-icons">{{ appendIcon }}</span>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop} from 'nuxt-property-decorator'

@Component({})
export default class extends Vue{
  @Prop ({ type: String, required: false, default: '' })
  appendIcon!: string

  @Prop ({ type: String, required: false, default: '' })
  color!: string

  @Prop ({ type: String, required: false, default: '' })
  prependIcon!: string

  @Emit('click')
  onClick() {}
}
</script>
