<template>
  <div class="boards-page flex-grow-1 d-flex flex-column align-items-center">
    <div class="container">
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
      state
    }
  },
  components: {
    Board
  }
}
</script>

<style lang="scss" scoped>

</style>
