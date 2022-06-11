<template>
  <button
    class="flex items-center px-4 py-2 rounded-lg hover:opacity-80 duration-300"
    :class="{'bg-lightGreen text-white' :color === 'lightGreen'}"
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
