<template>
  <div id="app">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <router-link to="/cars" class="nav-link">Cars</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>  
<router-view />
</div>
</template>

<script>
//http://localhost:3000/explorer


export default {
  name: 'app',
  components: {
  }
}
</script>

<style>

</style>
