<script setup>
</script>
  
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Gen.tech EDU</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Courses</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/course" class="nav-link">Course single</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link disabled">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
  
<style scoped></style>
  