<template>
  <div class="">
    <div class="flex justify-center items-center mt-10">
      <button @click="onClickFirst" class="">
        <span class="material-icons text-lightGreen flex duration-300 hover:opacity-80">
          keyboard_double_arrow_left
        </span>
      </button><!-- /.double arrows -->

      <button @click="onClickPrev" class="ml-4">
        <span class="material-icons text-lightGreen flex duration-300 hover:opacity-80">
          keyboard_arrow_left
        </span>
      </button><!-- /.single arrow -->

      <div class="ml-6">...</div>

      <button
      v-if="pagination.page - 1 > 0"
      @click="onClickPrev"
      class="border border-lightGray rounded-lg ml-6 text-sm w-30 h-30 flex justify-center items-center duration-300 hover:bg-lightGray">
        {{pagination.page - 1 }}
      </button>
      <button
        class="border border-lightGray rounded-lg bg-lightGreen text-white ml-4 text-sm w-30 h-30 flex justify-center items-center duration-300 hover:opacity-80">
        {{pagination.page}}
      </button>
      <button
      v-if="pagination.page + 1 <= pagination.lastPage"
      @click="onClickNext"
      class="border border-lightGray rounded-lg ml-4 text-sm w-30 h-30 flex justify-center items-center duration-300 hover:bg-lightGray">
        {{pagination.page + 1}}
      </button>

      <div class="ml-6">...</div>

      <button @click="onClickNext" class="ml-6">
        <span class="material-icons text-lightGreen flex duration-300 hover:opacity-80">
          keyboard_arrow_right
        </span>
      </button><!-- /.single arrow -->

      <button @click="onClickLast" class="ml-4">
        <span class="material-icons text-lightGreen flex duration-300 hover:opacity-80">
          keyboard_double_arrow_right
        </span>
      </button><!-- /.double arrows -->
    </div><!-- /.news pagination inner -->
  </div><!-- /.news pagination -->
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator'
import { Common } from '~/types'
@Component({})
export default class extends Vue {
  @Prop({ type: Object, required: false, default: () => {} })
  pagination!: Common.Pagination
  @Emit('click:first')
  onClickFirst(): number {
    return 1
  }
  @Emit('click:last')
  onClickLast(): number {
    return this.pagination.lastPage
  }
  @Emit('click:next')
  onClickNext(): number {
    return this.pagination.page < this.pagination.lastPage ? this.pagination.page + 1 : this.pagination.page
  }
  @Emit('click:prev')
  onClickPrev(): number {
    return this.pagination.page > 1 ? this.pagination.page - 1 : this.pagination.page
  }
}
</script>
