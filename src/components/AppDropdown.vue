<template>
  <div class="dropdown">
    <select
      :value="modelValue"
      class="dropdown__select"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option disabled value="">Санаторий</option>
      <option>Опция 1</option>
      <option>Опция 2</option>
      <option>Опция 3</option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: null,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.dropdown {
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 16px;
    height: 16px;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.3s ease;
    background-image: url(@/assets/img/angle.svg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    cursor: pointer;
  }

  &__select {
    display: block;

    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    background-color: white;
    font-family: "Roboto-Regular";
    font-size: 16px;
    line-height: 24px;
    color: $color-secondary;
    border-radius: 8px;
    border: 1px solid $gray;
    appearance: none;
    cursor: pointer;
  }
}
</style>
