<template>
  <div class="card d-flex align-center justify-center">
    <p class="card__text">Technologies and tools <br> that I know</p>
    <v-window v-model="window" show-arrows>
      <v-window-item v-for="tech in techList" :key="tech.title">
        <div class="tech d-flex align-center flex-column">
          <p class="tech__title" :style="`margin-bottom:${tech.margin}px`">
            {{ tech.title }}
          </p>
          <div class="tech__image d-flex align-center justify-center">
            <img
              :src="tech.image"
              :alt="tech.title"
              :style="`width:${tech.width}px`"
            />
          </div>
        </div>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import css from "../assets/css.png";
import express from "../assets/express.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import postgresql from "../assets/postgresql.png";
import vue from "../assets/vue.png";
const window = ref(0);

const techList = ref([
  {
    title: "Javascript",
    image: js,
    width: 100,
  },
  {
    title: "Node.js",
    image: node,
    width: 200,
  },

  {
    title: "Express.js",
    image: express,
    width: 100,
  },
  {
    title: "PostgreSQL",
    image: postgresql,
    width: 100,
  },
  {
    title: "MongoDB",
    image: mongo,
    width: 250,
  },
  {
    title: "Git",
    image: git,
    width: 100,
  },
  {
    title: "HTML5",
    image: html,
    width: 100,
  },
  {
    title: "CSS3",
    image: css,
    width: 100,
  },
  {
    title: "Vue.js",
    image: vue,
    width: 100,
  },
]);

onMounted(() => {
  setInterval(() => {
    if (window.value + 1 < techList.value.length) {
      window.value++;
    } else {
      window.value = 0;
    }
  }, 6000);
});
</script>

<style scoped lang="scss">
.card {
  border-radius: 20px;
  width: 100%;
  height: 200px;
  background-color: rgb(var(--v-theme-card));
  color: rgb(var(--v-theme-text));
  font-size: 20px;
  font-family: $primary-font;
  font-weight: 500;
  position: relative;
  &__text {
    position: absolute;
    text-align: center;
    top: 15px;
    left: 8px;
    color: rgb(var(--v-theme-text));
    font-family: $secondary-font;
    font-size: 10px;
    transform: rotateZ(-15deg);
  }
  .v-window {
    height: 100%;
    width: 100%;
    .v-window-item {
      height: 100%;
      width: 100%;
      .tech {
        width: 100%;
        height: 100%;
        padding: 15px 0;
        &__image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .card {
  &__text {
    top: -5px;
    left: -8px;
    font-size: 13px;
  }
}
}
</style>
