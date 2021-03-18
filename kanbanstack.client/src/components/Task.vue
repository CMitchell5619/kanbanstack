<template>
  <div class="task">
    <li class="d-flex list-group-item justify-content-between align-items-center shadow">
      {{ task.body }}
      <button class="btn btn-primary" data-toggle="modal" :data-target="'#taskModal' + task.id">
        <!-- onclick link instead -->
        Task Modal
      </button>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
    <!-- <TaskModal :task="task" /> -->
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
// import TaskModal from '../components/TaskModule'

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
  components: {
    // TaskModal
  }
}
</script>

<style lang="scss" scoped>

</style>
