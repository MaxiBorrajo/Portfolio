<template>
  <section class="main_section d-flex flex-column">
    <v-icon
      :icon="actualTheme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"
      class="change_theme"
      :class="actualTheme === 'light' ? 'sun' : 'moon'"
      @click="changeTheme()"
    ></v-icon>
    <div class="row row1">
      <HeroCardComponent />
      <CardComponent
        :card-image="FlagArgentina"
        card-link="https://youtu.be/i4t1bGD-j9M?si=L4OB065sdEVQ2QcD"
      />
    </div>
    <div class="row row2">
      <GitHubCardComponent />
      <FrontendCardComponent />
    </div>
    <TechStackComponent />
    <div class="row row3">
      <CardOpenDialog
        card-background-color="#C61D6B"
        card-icon="fa-solid fa-laptop-code"
        card-text="Projects"
        @click="projects = true"
      />
      <CardOpenDialog
        card-background-color="#0377fc"
        card-icon="fa-solid fa-graduation-cap"
        card-text="Studies"
        @click="studies = true"
      />
      <CardOpenDialog
        card-background-color="#1ABC9A"
        card-icon="fa-solid fa-envelope"
        card-text="Contact"
        @click="contact = true"
      />
    </div>
    <QuoteComponent />
    <v-dialog v-model="projects" width="auto" height="auto">
      <ProjectsDialogComponent
        :close-dialog="
          () => {
            projects = false;
          }
        "
      />
    </v-dialog>
    <v-dialog v-model="studies" width="auto" height="auto">
      <StudiesDialogComponent
        :close-dialog="
          () => {
            studies = false;
          }
        "
      />
    </v-dialog>
    <v-dialog v-model="contact" width="auto" height="auto">
      <ContactDialogComponent
        :close-dialog="
          () => {
            contact = false;
          }
        "
      />
    </v-dialog>
  </section>
</template>

<script setup>
import { onBeforeMount, ref, onMounted, computed } from "vue";
import { RouterView } from "vue-router";
import { useTheme } from "vuetify";
import CardComponent from "@/components/CardComponent.vue";
import HeroCardComponent from "@/components/HeroCardComponent.vue";
import FrontendCardComponent from "@/components/FrontendCardComponent.vue";
import TechStackComponent from "@/components/TechStackComponent.vue";
import GitHubCardComponent from "./components/GitHubCardComponent.vue";
import CardOpenDialog from "./components/CardOpenDialog.vue";
import QuoteComponent from "./components/QuoteComponent.vue";
import ProjectsDialogComponent from "./components/ProjectsDialogComponent.vue";
import StudiesDialogComponent from "./components/StudiesDialogComponent.vue";
import ContactDialogComponent from "./components/ContactDialogComponent.vue";
import FlagArgentina from "./assets/flag-of-argentina.webp";

const theme = useTheme();
const actualTheme = ref("dark");
const projects = ref(false);
const studies = ref(false);
const contact = ref(false);

function changeTheme() {
  actualTheme.value = actualTheme.value === "light" ? "dark" : "light";
  theme.global.name.value = actualTheme.value;
}

onMounted(() => {
  theme.global.name.value = actualTheme.value;
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main_section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: rgb(var(--v-theme-backgroundColor));
  padding: 50px 150px;
  gap: 30px;
  .row {
    max-width: 100%;
    display: grid;
    gap: 30px;
  }
  .row1 {
    height: 200px;
    grid-template-columns: 4fr 1fr;
  }
  .row2 {
    height: 300px;
    grid-template-columns: 1fr 3fr;
  }
  .row3 {
    height: 200px;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.change_theme {
  position: absolute !important;
  top: 20px;
  right: 35px;
  font-size: 30px !important;
}
.sun {
  color: #ffb700 !important;
  border-radius: 50%;
  box-shadow: inset 0 0 50px 0px rgba($color: #ffb700, $alpha: 0.3),
    0 0 20px 10px rgba($color: #ffb700, $alpha: 0.3);
}

.moon {
  color: #f6f1d5 !important;
  border-radius: 50%;
  box-shadow: inset 0 0 50px 0px rgba($color: #f6f1d5, $alpha: 0.3),
    0 0 20px 10px rgba($color: #f6f1d5, $alpha: 0.3);
}

@media only screen and (max-width: 600px) {
  .main_section {
    padding: 80px 30px;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .row {
      width: 100%;
      height: 100%;
      display: flex;
      gap: 30px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .row1 {
      height: 100%;
    }
    .row2 {
      height: 100%;
    }
    .row3 {
      height: 100%;
    }
  }

  .change_theme {
    top: 25px;
    right: 35px;
  }
}

@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .main_section {
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: rgb(var(--v-theme-backgroundColor));
    padding: 80px 30px;
    flex-wrap: wrap;
    .row {
      width: 100%;
      display: flex;
      gap: 30px;
    }
    .row1 {
      height: 100%;
    }
    .row2 {
      height: 100%;
    }
    .row3 {
      height: 100%;
    }
  }
}
</style>
