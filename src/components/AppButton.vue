<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.button {
  position: relative;
  @include button();
  padding: 4px 8px;
  font-family: "Roboto-Medium";
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: $color-primary;
  border-radius: 8px;

  &--return {
    background-color: rgba(237, 237, 237, 1);
  }

  &--upload {
    background-color: rgba(232, 242, 254, 1);
    color: $color-blue;
  }

  &--submit {
    background-color: rgba(21, 136, 201, 1);
    color: white;
  }

  &--icon {
    padding-left: 24px;
  }
}
</style>
