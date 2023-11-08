<template>
  <div class="card d-flex align-center justify-center">
    <div class="card__left d-flex justify-center flex-column">
      <p class="card__left__title">Maximiliano Borrajo</p>
      <p class="card__left__subtitle">Full-stack developer, but more back than front </p>
      <ButtonComponent
        button-type="button"
        button-label="download cv"
        @click="downloadCV"
        class="button-download"
      />
    </div>
    <div class="card__right d-flex align-center justify-center">
      <img
        :src="src"
        alt="Fake pixelart of myself"
        class="card__right__image"
        @mouseenter="activateAnimation"
        @mouseleave="deactivateAnimation"
      />
      <p class="card__right__text">me (not really)</p>
      <img
        :src="flecha"
        alt="Arrow poiting to a fake pixelart of myself"
        class="card__right__icon"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import yo3 from "../assets/yo3.png";
import yo2 from "../assets/yo2.gif";
import flecha from "../assets/flecha.png";
import sound_shield from "../assets/sound_shield.mp3";
import cv from "../assets/cv.pdf";

const audio = new Audio(sound_shield);
const src = ref(yo3);

function activateAnimation() {
  audio.currentTime = 0.4;
  audio.play();
  src.value = yo2;
}

function deactivateAnimation() {
  audio.pause();
  src.value = yo3;
}

function downloadCV() {
  const link = document.createElement("a");
  link.href = cv;
  link.target = "_blank";
  link.download = "Maximiliano Borrajo cv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>

<style scoped lang="scss">
.card {
  height: 200px;
  border-radius: 20px;
  background-color: rgb(var(--v-theme-card));
  color: white;

  .button-download {
    margin-top: 10px;
    width: 120px;
    font-weight: 700;
  }

  &__left,
  &__right {
    height: 100%;
  }

  &__left {
    width: 70%;
    padding: 40px;
    &__title {
      font-size: 40px;
      font-family: $primary-font;
      font-weight: 700;
    }
    &__subtitle {
      font-size: 17px;
      font-family: $secondary-font;
      font-weight: 400;
    }
  }

  &__right {
    position: relative;
    width: 30%;
    padding: 30px 35px;
    &__image {
      width: 100%;
      height: 100%;
    }
    &__text {
      position: absolute;
      top: 20px;
      left: 0px;
      transform: rotateZ(-25deg);
      font-size: 13px;
      font-family: $secondary-font;
    }
    &__icon {
      position: absolute;
      top: 50px;
      left: -13px;
      width: 50px;
    }
  }
}

@media only screen and (max-width: 600px) {
  .card {
    width: 100% !important;
    height: 100% !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 30px !important;
    gap: 50px;
    &__left,
    &__right {
      height: 50% !important;
    }

    &__left {
      width: 100% !important;
      padding: 0px !important;
      align-items: center;
    }

    &__right {
      width: 100% !important;
      padding: 0 !important;
      &__text {
        top: 15px !important;
        left: -15px !important;
      }
      &__icon {
        top: 45px !important;
        left: -30px !important;
      }
    }
  }
}

@media only screen and (min-width: 601px) and (max-width: 780px) {
  .card {
    flex-grow: 1;
    &__left {
      width: 50%;
      &__title {
        font-size: 30px;
      }
      &__subtitle {
        font-size: 15px;
      }
    }

    &__right {
      width: 50%;
    }
  }
}

@media only screen and (min-width: 781px) and (max-width: 1024px) {
  .card {
    flex-grow: 1;
    &__left {
      width: 60%;
      &__title {
        font-size: 30px;
      }
      &__subtitle {
        font-size: 15px;
      }
    }

    &__right {
      width: 40%;
    }
  }
}
</style>
