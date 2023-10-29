<template>
  <a href="https://github.com/MaxiBorrajo" target="_blank">
    <v-icon icon="fa-solid fa-arrow-right" class="new_tab"></v-icon>
    <v-icon icon="fa-brands fa-github" class="icon"></v-icon>
    <div class="card videoConfig">
      <video autoplay muted loop>
        <source :src="code" type="video/mp4" />
      </video>
    </div>
    <div class="text d-flex flex-column">
      <p class="text_title">Let's see some code</p>
      <p class="text_subtitle">
        Here you will find the code of all my projects
      </p>
    </div>
  </a>
</template>

<script setup>
import { ref } from "vue";
import code from "../assets/code.mp4";
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 100%;
  color: rgb(var(--v-theme-text));
  border-radius: 20px;
}

.videoConfig {
  video {
    width: 100%;
    height: 100%;
    object-fit: cover !important;
    border-radius: 20px;
  }
}

a {
  width: 300px;
  height: 300px;
  position: relative;
  text-decoration: none;
  color: rgb(var(--v-theme-text));
  transition: 0.5s;
}

a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  transition: 0.5s;
  border-radius: 20px;
  background-color: rgba($color: #000000, $alpha: 0.4);
}

a:hover::before {
  width: 290px;
  height: 290px;
}

a:hover {
  margin: 5px 0 0 5px;
  width: 290px;
  height: 290px;
  transition: 0.5s;
  .new_tab {
    transition: 0.5s;
    opacity: 100%;
  }

  .icon {
    transition: 0.5s;
  }
}

.text {
  position: absolute;
  color: rgb(var(--v-theme-text));
  bottom: 30px;
  padding: 0 20px;
  &_title {
    font-size: 24px;
    font-family: $primary-font;
    font-weight: 700;
  }
  &_subtitle {
    font-size: 13px;
    font-family: $secondary-font;
  }
}

.new_tab,
.icon {
  position: absolute;

  color: rgb(var(--v-theme-text));

  transition: 0.5s;
  top: 15px;
}

.icon {
  left: 15px;
}

.new_tab {
  right: 15px;
  opacity: 70%;
  font-size: 20px;
}

@media only screen and (max-width: 600px) {
  a {
    height: 350px;
    width: 100%;
  }

  a::before {
    width: 100%;
    height: 350px;
  }

  a:hover::before {
    width:calc(100% - 10px);
    height: 340px;
  }

  a:hover {
    width:calc(100% - 10px);
    height: 340px;
  }
}

@media only screen and (min-width: 601px) and (max-width: 1024px) {
  a {
    height: 300px;
    width: 40%;
  }

  a::before {
    width: 100%;
    height: 300px;
  }

  a:hover::before {
    width:calc(100% - 10px);
    height: 290px;
  }

  a:hover {
    width:calc(100% - 10px);
    height: 290px;
  }
}
</style>
