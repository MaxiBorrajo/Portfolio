<template>
  <v-card class="dialog d-flex flex-column" :color="actualTheme === 'light' ? 'card' : 'backgroundColor'">
    <v-icon
      icon="fa-solid fa-xmark"
      class="close_icon"
      @click="closeDialog"
    ></v-icon>
    <a
      :href="studie.link"
      target="_blank"
      v-for="(studie, index) in studies_list"
      :key="studie.title"
    >
      <div
        class="dialog__row d-flex align-center justify-center"
        :class="index === studies_list.length - 1 ? 'last_one' : ''"
      >
        <img
          v-if="studie.image"
          class="dialog__row__image"
          :src="studie.image"
          :alt="`logo of ${studie.title}`"
        />
        <div
          class="dialog__row__icon d-flex align-center justify-center"
          v-else
        >
          <v-icon :icon="studie.icon"></v-icon>
        </div>
        <div class="dialog__row__content">
          <p class="dialog__row__content__title">{{ studie.title }}</p>
          <p class="dialog__row__content__description">
            {{ studie.description }}
          </p>
        </div>
      </div>
    </a>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import logo_unq from "../assets/logo_unq.png";
import logo_quilmes from "../assets/logo_quilmes.png";
import logo_argentina_programa from "../assets/logo_argentina_programa.png";
import { useTheme } from "vuetify";

const theme = useTheme();
const actualTheme = theme.global.name.value;

const props = defineProps({
  closeDialog: Function,
});

const studies_list = ref([
  {
    title: "Degree in computer science",
    image: logo_unq,
    description: `2022 - present`,
    link: "https://www.unq.edu.ar/",
  },
  {
    title: "Technician in Computer Programming",
    image: logo_unq,
    description: `2022 - present`,
    link: "https://www.unq.edu.ar/",
  },
  {
    title: "Quilmes Programa Course",
    description: `October 2021 - December 2021`,
    image: logo_quilmes,
    link: "https://drive.google.com/file/d/1VQUW5zRSweBXh1Pn8eOyEdNVOjWcyx4r/view?usp=sharing",
  },
  {
    title: "Argentina Programa Course",
    description: `July 2022 - January 2023`,
    image: logo_argentina_programa,
    link: "https://drive.google.com/file/d/15C7a-AcuLGm0n-Meb2lRJHcghvSo6zUm/view?usp=sharing",
  },
]);
</script>

<style scoped lang="scss">
.dialog {
  position: relative;
  height: 100%;
  width: 60vw;
  border-radius: 20px !important;
  border: 3px solid rgb(var(--v-theme-attention));
  background-color: rgb(var(--v-theme-backgroundColor));
  padding: 0 30px;

  color: rgb(var(--v-theme-text));
  .close_icon {
    position: fixed;
    top: 13px;
    right: 13px;
    color: rgb(var(--v-theme-text));
    font-size: 25px;
    cursor: pointer;
  }
  .last_one {
    border-bottom: 0px solid rgb(var(--v-theme-attention));
  }
  &__row {
    width: 100%;
    min-height: 100px;

    border-bottom: 1px solid rgb(var(--v-theme-attention));
    gap: 20px;
    padding: 20px 20px 20px 20px;
    &__image {
      width: 15%;
      height: 70%;
      padding: 15px;
      background-color: white;
      border-radius: 20px;
    }
    &__icon {
      height: 70%;
      width: 15%;
      background-color: white;
      border-radius: 20px;
      font-size: 30px;
      padding: 25px;
      color: rgb(var(--v-theme-attention));
    }
    &__content {
      width: 85%;
      height: 70%;
      &__title {
        font-family: $primary-font;
        font-size: 30px;
        font-weight: 500;
      }
      &__description {
        font-family: $secondary-font;
        font-size: 13px;
      }
      &__stack {
        margin-top: 10px;
        .bold {
          font-family: $primary-font;
          font-size: 17px;
        }
        font-family: $secondary-font;
        font-size: 13px;
      }
    }
  }
}

.dialog::-webkit-scrollbar {
  display: none;
}

@media only screen and (max-width: 600px) {
  .dialog {
    height: 100%;
    width: 100%;
    padding: 10px 0 0 0;
    text-align: center;
    &__row {
      flex-direction: column;
      padding: 50px 0;
      
      &__image {
        width: 30%;
      }
      &__icon {
        width: 30%;
      }
      &__content {
        &__title {
          margin-bottom: 10px;

        }
        &__description {
          font-size: 20px;
        }
      }
    }
  }
}

@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .dialog {
    width: 100%;
    &__row {
      &__icon {
        font-size: 15px;
      }
    }
  }
}
</style>
