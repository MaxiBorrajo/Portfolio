<template>
  <a
    :href="cardLink ? cardLink : '#'"
    :class="cardLink ? 'clickable' : ''"
    target="_blank"
    :style="
      cardBackgroundColor
        ? `--color: ${cardBackgroundColor};`
        : `--color: rgb(var(--v-theme-card));`
    "
  >
    <v-icon
      icon="fa-solid fa-arrow-right"
      v-if="cardLink"
      class="new_tab"
    ></v-icon>
    <div
      class="card backgroundConfig"
      v-if="cardImage"
      :style="`background-image: url(${cardImage})`"
    ></div>
    <div class="card videoConfig" v-if="cardVideo">
      <video autoplay muted loop>
        <source :src="cardVideo" type="video/mp4" />
      </video>
    </div>
    <div
      class="card iconConfig d-flex align-center justify-center"
      v-if="cardIcon"
    >
      <v-icon :icon="cardIcon"></v-icon>
    </div>
    <div
      class="card textConfig d-flex align-center justify-center"
      v-if="cardText"
    >
      {{ cardText }}
    </div>
  </a>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  cardBackgroundColor: String,
  cardVideo: String,
  cardIcon: String,
  cardImage: String,
  cardLink: String,
  cardText: String,
});
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 100%;
  color: rgb(var(--v-theme-text));
  border-radius: 20px;
}

.backgroundConfig {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.videoConfig {
  video {
    width: 100%;
    height: 100%;
    object-fit: cover !important;
    border-radius: 20px;
  }
}

.iconConfig {
  background-color: var(--color);
  .v-icon {
    font-size: 70px;
    color: rgb(var(--v-theme-text));
  }
}

.textConfig {
  background-color: var(--color);
  font-size: 70px;
  color: rgb(var(--v-theme-text));
}

a {
  cursor: default !important;
  text-decoration: none;
  color: rgb(var(--v-theme-text));
  width: 200px;
  height: 200px;
}

.clickable {
  position: relative;
  cursor: pointer !important;
  transition: 0.5s;
}

.clickable:hover {
  margin: 5px 0 0 5px;
  width: 190px;
  height: 190px;
  transition: 0.5s;
  .new_tab {
    opacity: 100%;
    transition: 0.5s;
  }
}
.new_tab {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 15px;
  color: rgb(var(--v-theme-text));
  opacity: 50%;
  transition: 0.5s;
}

@media only screen and (max-width: 600px) {
  a {
    width: 100%;
    height: 250px;
  }

  .clickable:hover {
    margin: 5px 0 0 5px;
    width: calc(100% - 10px);
    height: 240px;
  }
}
</style>
