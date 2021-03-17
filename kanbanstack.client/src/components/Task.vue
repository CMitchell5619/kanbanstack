<template>
  <div class="task">
    <div class="col-12 p-3">
      <div class="card text-center" style="width: 18rem; height: 25rem;">
        {{ task.body }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'

export default {
  props: {
    task: { type: Object, required: true }
  },
  setup() {
    const state = reactive({

    })
    onMounted(() => {
      // commentService.getAllCommentsById(route.params.id)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
