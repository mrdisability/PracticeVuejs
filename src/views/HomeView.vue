<template>
   <div class="container-fluid">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <h1 class="pageTitle">PracticeVuejs</h1>
        
        <!-- <div class="alert alert-dark homeAlert" role="alert">
          Learning, practicing, and keeping up to date with Vuejs.
        </div> -->

        <div class="row">
          <!-- <div class="col-md-4"> -->

            <div class="card col-md-4">
              <div class="card-body">
                <h5 class="card-title">VueTodos</h5>
                <p class="card-text">
                  <ol class="list-group list-group-numbered">
                    <li class="list-group-item">CRUD Todos</li>
                    <li class="list-group-item">Backend: Ruby on Rails</li>
                    <li class="list-group-item">Backend: Laravel</li>
                  </ol>
                </p>
                <a href="https://github.com/thesamoanppprogrammer/VueTodos" class="btn btn-success">GitHub</a>
              </div>
            </div>

            <div class="card col-md-4">
              <div class="card-body">
                <h5 class="card-title">VueFirebase</h5>
                <p class="card-text">
                  <ol class="list-group list-group-numbered">
                    <li class="list-group-item">Firebase (firestore)</li>
                    <li class="list-group-item">CRUD Todos</li>
                    <li class="list-group-item">Deploy to firebase hosting (later)</li>
                  </ol>
                </p>
                <a href="https://github.com/thesamoanppprogrammer/VueTodos" class="btn btn-success">GitHub</a>
              </div>
            </div>

          <!-- </div> -->
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
