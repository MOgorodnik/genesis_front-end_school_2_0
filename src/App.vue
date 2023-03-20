<template>
  <header>
    <NavBar />
  </header>

  <div class="container py-3">
    <main>
      <router-view></router-view>
    </main>
  </div>

  <Footer />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>