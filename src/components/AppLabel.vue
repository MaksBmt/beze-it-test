<template>
  <div class="label">
    <span v-if="isRequired" class="label__required">*</span>
    <label :for="name">
      <slot />
    </label>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.label {
  position: relative;
  font-family: "Roboto-Medium";
  font-size: 14px;
  line-height: 20px;
  color: $color-title;

  &__required {
    color: rgba(217, 29, 11, 1);
  }
}
</style>
