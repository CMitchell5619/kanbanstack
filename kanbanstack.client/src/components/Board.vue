<template>
  <div class="board col-6 mt-4">
    <router-link :to="{name: 'BoardDetailsPage', params: {id: board.id}}">
      <div class="card text-center" style="width: 18rem; height: 25rem;">
        <div class="card-body">
          <h5 class="card-title bg-secondary">
            {{ board.title }}
          </h5>
          <p class="card-text"></p>
        </div>
      </div>
    </router-link>
  <!--collaborators on bottom of board card?-->
  </div>
</template>

<script>
export default {
  name: 'Board',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    board: Object
  },
  setup() {
    return {
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
