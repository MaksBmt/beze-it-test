<template>
  <AppModal class="modal__form">
    <FormAdd />
  </AppModal>
</template>

<script setup>
import AppModal from "@/components/AppModal.vue";
import FormAdd from "./views/FormAdd.vue";
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";

#app {
  display: flex;
  justify-content: center;
  padding: 50px;

  font-family: "Roboto", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.test {
  margin-top: 50px;

  input {
    padding: 10px 20px;
    border: 1px solid gray;
  }
}
</style>
