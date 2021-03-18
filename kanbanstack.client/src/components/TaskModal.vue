<template>
  <!-- modal connects to task component -->
  <div class="modal taskModal" :id="'taskModal' + task.id" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ task.body }}
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createComment()">
            <input type="text"
                   v-model="state.newComment.description"
                   name="description"
                   id="description"
                   class="form-control"
                   placeholder="Make Excuses."
                   aria-describedby="helpId"
            />
            <button type="submit" class="btn btn-success">
              Creort
            </button>
          </form>
          <Comment v-for="comment in state.comments" :key="comment.id" :comment="comment" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="deleteTask()">
            Delort
          </button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--// import $ from 'jquery'
  // NOTE make sure to import if using npm to install jquery as a library - otherwise make sure script tags are in the index.html -->
</template>

<script>

import { tasksService } from '../services/TasksServices'
import { logger } from '../utils/Logger'
import $ from 'jquery'
import { reactive, computed, onMounted } from 'vue'
import { commentsService } from '../services/CommentsService'
import { AppState } from '../AppState'
export default {
  name: 'TaskModal',
  props: {
    task: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      newComment: {},
      comments: computed(() => AppState.comments[props.task.id])
    })
    onMounted(() => {
      commentsService.getAllCommentsById(props.task.id)
    })
    return {
      state,
      async createComment() {
        try {
          state.newComment.taskId = props.task.id
          await commentsService.createComment(state.newComment)
          state.newComment = {}
        } catch (error) {
          logger.error(error)
        }
      },
      async deleteTask() {
        try {
          await tasksService.deleteTask(props.task)
          $('#taskModal' + `${props.task.id}`).modal('toggle')
        } catch (error) {
          logger.error(error)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
