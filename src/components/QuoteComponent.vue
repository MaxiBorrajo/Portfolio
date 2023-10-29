<template>
  <a href="https://youtu.be/CdLy0ijDkvk?si=gdnrpxXZYMRVQ1-6" target="_blank">
    <video autoplay muted loop class="background">
      <source :src="snowing" type="video/mp4" />
    </video>
    <div class="card d-flex align-center justify-space-around">
      <img :src="gow_before" alt="Logo god of war greek saga" />
      <p class="quote">"We must be better" - Kratos</p>
      <img :src="gow_now" alt="Logo god of war norse saga" />
    </div>
  </a>
</template>

<script setup>
import { ref } from "vue";
import gow_now from "../assets/gow_now.png";
import gow_before from "../assets/gow_before.png";
import snowing from "../assets/snowing.mp4";
</script>

<style scoped lang="scss">
a {
  position: relative;
  text-decoration: none;
  overflow: hidden;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  pointer-events: none;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.card {
  position: relative;
  width: 100%;
  border-radius: 20px;
  height: 100px;
  gap: 10px;
  padding: 0 10px;
  .quote {
    color: rgb(var(--v-theme-text));
    font-size: 40px;
    gap: 30px;
    font-family: "Cinzel", serif;
  }
  img {
    width: 100px;
  }
}

@media only screen and (max-width: 600px) {
  a {
    width: 100%;
    padding: 30px 0;
  }
  .card {
    flex-direction: column;
    height: 100%;
    .quote {
      text-align: center;
    }
  }
}

@media only screen and (min-width: 601px) and (max-width: 1024px) {
  a {
    width: 100%;
    overflow: hidden;
  }
  .card {
    .quote {
      font-size: 25px;
      text-align: center;
    }
    img {
      width: 70px;
    }
  }
}
</style>
