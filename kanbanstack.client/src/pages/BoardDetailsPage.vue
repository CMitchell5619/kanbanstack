<template>
  <div class="boardDetailsPage container">
    <div class="row">
      <div class="col-12">
        <h3 class="text-center">
          {{ state.board.title }}
        </h3>
        <span v-if="state.board.creator">
          <button type="button"
                  class="btn btn-danger"
                  @click="deleteBoard"
                  v-if="state.board.creator.email == state.user.email"
          >
            Delete Board
          </button>
        </span>
        <span v-if="state.board.imgUrl">
          <img class="img-fluid" :src="state.board.imgUrl" alt="">
        </span>
        <p class="p-4">
          {{ state.board.body }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <form class="form-inline" @submit.prevent="createList(event)">
          <input
            type="text"
            name="title"
            id="title"
            class="form-control"
            placeholder="List Name"
            aria-describedby="helpId"
            v-model="state.newList.title"
          />
          <button class="btn btn-secondary" type="submit">
            Create List
          </button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-12 p-3">
        <List v-for="listData in state.lists" :key="listData.id" :list="listData" />
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, reactive } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { boardService } from '../services/BoardService'
import { listsService } from '../services/ListsService'
import List from '../components/List'

export default {
  name: 'BoardDetailsPage',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      newList: {},
      board: computed(() => AppState.activeBoard),
      lists: computed(() => AppState.lists),
      user: computed(() => AppState.user)
    })
    onMounted(() => {
      // boardService.getAllBoards(route.params.id)
      listsService.getAllLists(route.params.id)
      boardService.getBoardById(route.params.id)
    })
    onBeforeRouteLeave((to, from, next) => {
      AppState.activeBoard = {}
      next()
    })
    return {
      route,
      state,
      async createList() {
        state.newList.boardId = AppState.activeBoard.id
        await listsService.createList(state.newList)
        state.newList = {}
      },
      async deleteBoard() {
        await boardService.deleteBoard(state.board.id)
        router.push({ name: 'Home' })
      }
    }
  },
  components: {
    List
  }
}
</script>
<style lang="scss" scoped>
</style>
