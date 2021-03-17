<template>
  <div class="list">
    <div class="col-3 p-3">
      <div class="card text-center" style="width: 18rem; height: 25rem;">
        {{ list.title }}
        {{ list.id }}
        <div class="row">
          <Task v-for="task in state.tasks" :key="task.id" :task="task" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import Task from '../components/Task'
import { AppState } from '../AppState'
import { tasksService } from '../services/TasksServices'

export default {
  name: 'List',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    list: Object
  },
  setup(props) {
    const state = reactive({
      tasks: computed(() => AppState.tasks[props.list.id])
    })
    onMounted(() => {
      tasksService.getAllTasksById(props.list.id)
    })
    return {
      state
    }
  },
  components: {
    Task
  }
}
</script>

<style lang="scss" scoped>

</style>
