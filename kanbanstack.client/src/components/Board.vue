<template>
  <div class="board col-6">
    <p>{{ board.title }}</p>

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
