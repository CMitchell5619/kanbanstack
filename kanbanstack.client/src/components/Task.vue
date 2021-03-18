<template>
  <div class="task">
    <li class="d-flex list-group-item justify-content-between align-items-center shadow">
      {{ task.body }}
      <button class="btn btn-primary" data-toggle="modal" :data-target="'#taskModal' + task.id">
        <!-- onclick link instead -->
        Task Modal
      </button>
      <button type="button" class="close" aria-label="Close">
        <span @click="deleteTask()" aria-hidden="true">&times;</span>
      </button>
      <label for="lists">Choose a list:</label>

      <select @change="changeListIdForTask" id="lists" v-model="state.newListId">
        <option v-for="list in state.lists" :key="list.id" :value="list.id">
          {{ list.title }}
        </option>
      </select>

      <!-- <span><div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
        >
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

          <div v-for="list in state.lists" :key="list.id ">
            {{ list }}
          </div>
        </div>

      </div></span> -->
    </li>
    <TaskModal :task="task" />
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { tasksService } from '../services/TasksServices'
import { logger } from '../utils/Logger'
import { commentsService } from '../services/CommentsService'
import { AppState } from '../AppState'
// import TaskModal from '../components/TaskModule'

export default {
  props: {
    task: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      newListId: '',
      activeTask: {},
      lists: computed(() => AppState.lists)
    })
    return {
      state,
      async changeListIdForTask() {
        try {
          await tasksService.changeListIdForTask(props.task, state.newListId)
        } catch (error) {
          logger.error(error)
        }
      },

      async getAllCommentsById(activeTask) {
        try {
          AppState.activeTask = props.task
          await commentsService.getAllCommentsById(activeTask)
        } catch (error) {
          logger.error(error)
        }
      },

      async deleteTask() {
        try {
          await tasksService.deleteTask(props.task)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  },
  components: {
    // TaskModal
  }
}
</script>

<style lang="scss" scoped>

</style>
