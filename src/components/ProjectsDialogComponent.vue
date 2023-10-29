<template>
  <v-card
    class="dialog d-flex flex-column"
    :color="actualTheme === 'light' ? 'card' : 'backgroundColor'"
  >
    <v-icon
      icon="fa-solid fa-xmark"
      class="close_icon"
      @click="closeDialog"
    ></v-icon>
    <a
      :href="project.link"
      target="_blank"
      v-for="(project, index) in projects_list"
      :key="project.title"
    >
      <div
        class="dialog__row d-flex align-center justify-center"
        :class="index === projects_list.length - 1 ? 'last_one' : ''"
      >
        <img
          v-if="project.image"
          class="dialog__row__image"
          :src="project.image"
          :alt="`logo of ${project.title}`"
        />
        <div
          class="dialog__row__icon d-flex align-center justify-center"
          v-else
        >
          <v-icon :icon="project.icon"></v-icon>
        </div>
        <div class="dialog__row__content">
          <p class="dialog__row__content__title">{{ project.title }}</p>
          <p class="dialog__row__content__description">
            {{ project.description }}
          </p>
          <p class="dialog__row__content__stack">
            <b class="bold">Stack:</b> {{ project.tech_stack }}
          </p>
        </div>
      </div>
    </a>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import my_routine_app from "../assets/my_routine_app.png";
import kanban from "../assets/kanban.png";
import { useTheme } from "vuetify";

const theme = useTheme();
const actualTheme = theme.global.name.value;

const props = defineProps({
  closeDialog: Function,
});

const projects_list = ref([
  {
    title: "MyRoutineApp",
    image: my_routine_app,
    description: `My personalized exercise app: record routines, create exercises, track progress, all made by me.`,
    tech_stack: `Node.js, Express.js, Postgresql, Vue.js, Vuetify, Redis`,
    link: "https://my-routine-app-frontend.vercel.app/",
  },
  {
    title: "Kanban",
    image: kanban,
    description: `Kanban simplifies workflow management with visual cards for tasks. I created this app entirely and plan to add more features.`,
    tech_stack: `Node.js, Express.js, MongoDB, Vue.js, Vuetify`,
    link: "https://kanban.maximilianoborrajoprojects.com.ar/",
  },
  {
    title: "User Management API",
    description: `This is one of the first API I created. The purpose of this projects is to show 
    my skills in management, authentication and authorization of users. I made the 100% of this project.`,
    icon: "fa-solid fa-users-gear",
    tech_stack: `Node.js, Express.js, MongoDB`,
    link: "https://github.com/MaxiBorrajo/User_Management_API.git",
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
    padding: 20px;
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
          margin-bottom: 5px;
        }
        &__description {
          font-size: 20px;
        }
        &__stack {
          margin-top: 10px;
          .bold {
            font-family: $primary-font;
            font-size: 20px;
          }
          font-family: $secondary-font;
          font-size: 17px;
        }
      }
    }
  }
}

@media only screen and (max-width: 780px) {
  .dialog {
    width: 100%;
    &__row {
      &__icon {
        font-size: 15px;
      }
    }
  }
}

@media only screen and (min-width: 781px) and (max-width: 1024px) {
  .dialog {
    &__row {
      &__icon {
        font-size: 15px;
      }
    }
  }
}
</style>
