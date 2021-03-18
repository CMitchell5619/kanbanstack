<template>
  <div class="home img-fluid flex-grow-1 d-flex flex-column align-items-start justify-content-center">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h1>
            Cello is the world's worst project management site
          </h1>
          <h4>Sign up today</h4>
        </div>
      </div>
    </div>
    <!-- image splash -->
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
  background-image: url("https://st2.depositphotos.com/1177973/7906/i/950/depositphotos_79064874-stock-photo-cello-on-wall-background.jpg");
  background-size: cover;
}
</style>
