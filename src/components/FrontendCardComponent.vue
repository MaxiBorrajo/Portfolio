<template>
  <div
    class="card d-flex align-center justify-center"
    :style="`background-image: url(${frontend})`"
  >
    <p class="card__text">
      I know some things <br />
      of frontend too
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import frontend from "../assets/frontend.jpg";
</script>

<style scoped lang="scss">
.card {
  position: relative;
  border-radius: 20px;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &__text {
    position: absolute;
    top: 40px;
    right: 15px;
    color: rgb(var(--v-theme-text));
    font-family: $secondary-font;
    font-size: 15px;
    transform: rotateZ(25deg);
  }
}

@media only screen and (max-width: 600px) {
  .card {
    width: 100%;
    &__text {
      top: 30px;
      right: 5px;
    }
  }
}

@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .card {
    width: 60%;
    &__text {
      top: 30px;
      right: 5px;
    }
  }
}
</style>
