<template>
  <div class="modal createTaskModal" :id="'createTaskModal' + list.id" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <form action="submit">
            <input type="text"
                   name="taskBody"
                   class="form-control"
                   placeholder="Enter Task!"
                   aria-describedby="helpId"
                   v-model="state.newTask.body"
            />
            <button type="button" class="btn btn-danger" @click="createTask()">
              Create
            </button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { tasksService } from '../services/TasksServices'
import { AppState } from '../AppState'
import $ from 'jquery'

export default {
  name: 'CreateTaskModal',
  props: {
    list: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      newTask: {},
      tasks: computed(() => AppState.tasks)
    })

    return {
      state,
      async createTask() {
        state.newTask.listId = props.list.id
        await tasksService.createTask(state.newTask)
        $('#createTaskModal' + `${state.newTask.id}`).modal('toggle')
        state.newTask = {}
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
