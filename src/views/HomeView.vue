<template>
   <div class="container-fluid">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <h1 class="pageTitle">PracticeVuejs</h1>
        
        <div class="alert alert-dark homeAlert" role="alert">
          Learning, practicing, and keeping up to date with Vuejs.
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<style scoped>
  .pageTitle {
    text-align: center;
    margin-top: 20px;
    font-size: 100px;
  }

  .homeAlert {
    font-size: 30px;
    padding: 50px;
  }
</style>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView'
}
</script>
