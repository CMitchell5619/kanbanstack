<template>
  <!-- modal connects to task component -->
  <div class="modal taskModal" :id="'taskModal' + task.id" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Task.body
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Comments
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
  // import $ from 'jquery'
  // NOTE make sure to import if using npm to install jquery as a library - otherwise make sure script tags are in the index.html
</template>

<script>
export default {
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
