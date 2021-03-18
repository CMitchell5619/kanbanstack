<template>
  <div class="list">
    <div class="col-3 p-3">
      <div class="card" style="width: 18rem; height: 25rem;">
        <div class="card-body">
          <h4 class="card-title">
            <div class="row">
              <div class="col-8">
                {{ list.title }}
              </div>
              <div class="col-2">
                <button type="button" class="close" data-toggle="modal" :data-target="'#taskModal' + task.id" aria-label="Close">
                  <span aria-hidden="true">&plus;</span>
                </button>
              </div>
              <div class="col-2">
                <button type="button" class="close" @click="deleteList" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          </h4>
          {{ list.id }}

          <div class="list-group list-group-flush">
            <Task v-for="task in state.tasks" :key="task.id" :task="task" />
          </div>
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
