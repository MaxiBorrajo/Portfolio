<template>
  <div
    class="card d-flex align-center justify-center flex-column"
    :style="
      cardBackgroundColor
        ? `--color: ${cardBackgroundColor};`
        : `--color: rgb(var(--v-theme-card));`
    "
  >
    <v-icon :icon="cardIcon" class="card__icon"></v-icon>
    <p class="card__text">{{ cardText }}</p>
    <v-icon icon="fa-solid fa-arrow-right" class="new_tab"></v-icon>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  cardBackgroundColor: String,
  cardIcon: String,
  cardText: String,
});
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 200px;
  color: rgb(var(--v-theme-text));
  border-radius: 20px;
  background-color: var(--color);
  font-family: $primary-font;
  font-weight: 500;
  color: rgb(var(--v-theme-text));
  cursor: pointer;
  position: relative;
  transition: 0.5s;
  gap: 10px;
  &__icon {
    font-size: 55px;
    transition: 0.5s;
  }
  &__text {
    font-size: 25px;
    transition: 0.5s;
  }
}

.card:hover {
  margin: 5px 0 0 5px;
  width: calc(100% - 10px);
  height: 190px;
  transition: 0.5s;
  .card__icon {
    font-size: 50px;
    transition: 0.5s;
  }
  .card__text {
    font-size: 23px;
    transition: 0.5s;
  }
  .new_tab {
    opacity: 100%;
    transition: 0.5s;
  }
}
.new_tab {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: rgb(var(--v-theme-text));
  opacity: 50%;
  transition: 0.5s;
}
</style>
