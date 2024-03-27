<template>
  <div class="modal">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.modal {
  box-sizing: border-box;
  padding: 24px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);

  &__form {
    width: 770px;
  }
}
</style>
