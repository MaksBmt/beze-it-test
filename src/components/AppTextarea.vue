<template>
  <textarea
    :id="id"
    :value="modelValue"
    :name="name"
    class="textarea"
    :placeholder="placeholder"
    :required="required"
    rows="4"
    @input="$emit('update:modelValue', $event.target.value)"
  >
  </textarea>
  <p class="textarea__note">Описание в модуле на сайте не показывается</p>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },

  placeholder: {
    type: String,
    default: "",
  },

  required: {
    type: Boolean,
    default: false,
  },
});

</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.textarea {
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

  &__note {
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    font-family: "Roboto-Regular";
    color: $color-secondary;
  }
}
</style>
