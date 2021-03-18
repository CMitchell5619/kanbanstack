<template>
  <div class="comment">
    <div class="col-12 p-1">
      <div class="card text-center">
        <div class="row">
          <div class="col-12">
            <span>{{ comment.description }}</span>
            <button type="button btn-danger" class="close" aria-label="Close">
              <span @click="deleteComment" aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { commentsService } from '../services/CommentsService'
import { logger } from '../utils/Logger'
import { reactive } from 'vue'
export default {
  name: 'Comment',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    comment: Object

  },
  setup(props) {
    const state = reactive({
    })
    return {
      state,
      async deleteComment() {
        try {
          await commentsService.deleteComments(props.comment)
        } catch (error) {
          logger.log(error)
        }
      }
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>

</style>
