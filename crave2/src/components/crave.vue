<script setup>
import { ref } from 'vue'
const showPassword = ref(false)
</script>
<template>
  <section id="center">
    <div class="container">
      <div class="icon">
        <img src="/logo.jpeg" alt="Crave Bakery Logo" />
      </div>

      <h1>Member Login</h1>

      <input type="text" placeholder="Username" class="input-field" />

      <div class="password-wrapper">
        <input 
          :type="showPassword ? 'text' : 'password'" 
          placeholder="••••••••" 
        />
        <button @click="showPassword = !showPassword">
          {{ showPassword ? '🙈' : '🙉' }}
        </button>
      </div>

      <button class="login-button">Login</button>
    </div>
  </section>
</template>