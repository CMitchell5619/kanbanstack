<template>
  <div class="board col-4 mt-4">
    <div class="card text-center" style="width: 18rem; height: 25rem;">
      <button type="button" class="close" @click="deleteBoard" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="card-body">
        <router-link :to="{name: 'BoardDetailsPage', params: {id: board.id}}">
          <h5 class="card-title bg-secondary">
            {{ board.title }}
          </h5>
        </router-link>
        <p class="card-text"></p>
      </div>
    </div>
  <!--collaborators on bottom of board card?-->
  </div>
</template>

<script>

import boardService from '../services/BoardService'
import { AppState } from '../AppState'
import { reactive, computed } from 'vue'

export default {
  name: 'Board',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    board: Object
  },
  setup() {
    const state = reactive({
      board: computed(() => AppState.boards)
    })
    return {
      async deleteBoard() {
        await boardService.deleteBoard(state.board.id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
