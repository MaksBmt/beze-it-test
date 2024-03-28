<template>
  <AppModal class="modal__form">
    <FormAdd />
  </AppModal>
  <AppModal class="modal__form">
    <FormOrganization />
  </AppModal>
</template>

<script setup>
import AppModal from "@/components/AppModal.vue";
import FormAdd from "@/views/form/FormAdd.vue";
import FormOrganization from "@/views/form/FormOrganization.vue";
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  gap: 24px;
  background-color: #e4e2e2;

  font-family: "Roboto", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
