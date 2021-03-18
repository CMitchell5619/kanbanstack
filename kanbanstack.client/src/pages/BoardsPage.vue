<template>
  <div class="boards-page flex-grow-1 d-flex flex-column align-items-center">
    <div class="container">
      <div class="row">
        <form class="form-inline" @submit.prevent="createBoard()">
          <input
            type="text"
            name="title"
            id="title"
            class="form-control"
            placeholder="Board"
            aria-describedby="helpId"
            v-model="state.newBoard.title"
          />
          <button class="btn btn-secondary" type="submit">
            Create Board
          </button>
        </form>
      </div>
      <div class="row">
        <Board v-for="boardData in state.boards" :key="boardData.id" :board="boardData" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
// import { useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { boardService } from '../services/BoardService'
import Board from '../components/Board'
import { logger } from '../utils/Logger'

export default {
  name: 'BoardsPage',
  setup() {
    // const router = useRouter()
    const state = reactive({
      boards: computed(() => AppState.boards),
      newBoard: {}
    })
    onMounted(() => {
      boardService.getAllBoards()
    })
    return {
      state,
      async createBoard() {
        try {
          await boardService.createBoard(state.newBoard)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  },
  components: {
    Board
  }
}
</script>

<style lang="scss" scoped>

</style>
