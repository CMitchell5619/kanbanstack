<template>
  <div class="comment">
    <div class="col-12 p-3">
      <div class="card text-center" style="width: 18rem; height: 25rem;">
        {{ comment.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    comment: Object
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
