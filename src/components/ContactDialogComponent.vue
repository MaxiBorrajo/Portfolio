<template>
  <v-card
    class="dialog flex-row"
    :color="actualTheme === 'light' ? 'card' : 'backgroundColor'"
  >
    <v-icon
      icon="fa-solid fa-xmark"
      class="close_icon"
      @click="closeDialog"
    ></v-icon>
    <div
      class="card__container"
      v-for="(contact, index) in contact_list"
      :key="index"
    >
      <CardComponent
        :card-background-color="contact.color"
        :card-icon="contact.icon"
        :card-link="contact.link"
      />
    </div>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import CardComponent from "./CardComponent.vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const actualTheme = theme.global.name.value;

const props = defineProps({
  closeDialog: Function,
});

const contact_list = ref([
  {
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/maximiliano-borrajo/",
    color: "#0072b1",
  },
  {
    icon: "fa-solid fa-envelope",
    link: "mailto:maximilianoborrajoprojects@gmail.com",
    color: "#00aae4",
  },
]);
</script>

<style scoped lang="scss">
.dialog {
  position: relative;
  height: 100vh;
  width: 60vw;
  border-radius: 20px !important;
  border: 3px solid rgb(var(--v-theme-attention));
  background-color: rgb(var(--v-theme-backgroundColor));
  padding: 30px;
  gap: 30px;
  color: rgb(var(--v-theme-text));
  .close_icon {
    position: fixed;
    top: 13px;
    right: 13px;
    color: rgb(var(--v-theme-text));
    font-size: 25px;
    cursor: pointer;
  }

  .card__container {
    width: 150px;
    height: 150px;
  }
}

.dialog::-webkit-scrollbar {
  display: none;
}

@media only screen and (max-width: 600px) {
  .dialog {
    align-items: center;
    flex-direction: column !important;

    height: 100%;
    width: 100%;

    padding: 60px 100px;
  }
}

@media only screen and (min-width: 601px) and (max-width: 1024px){
  .dialog {
    height: 100%;
    width: 100%;

    padding: 40px 80px;
  }
}
</style>
