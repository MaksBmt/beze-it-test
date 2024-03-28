<template>
  <div class="form organization">
    <div class="form__box">
      <h1 class="form__title">Организация</h1>
      <AppButton class="button--return organization__button">
        <svg class="form__svg form__svg--organization" width="16" height="16">
          <use xlink:href="@/assets/img/sprite.svg#edit"></use>
        </svg>
        Редактировать
      </AppButton>
    </div>
    <div class="form__wrap">
      <p class="organization__text">Тип</p>
      <AppLabel :name="typeLabelInput" class="form__label"
        >{{ formStore.select }}
      </AppLabel>
    </div>
    <div class="form__wrap">
      <p class="organization__text">Название организации</p>
      <AppLabel :name="nameLabelInput" class="form__label"
        >{{ formStore.text }}
      </AppLabel>
    </div>
    <div class="form__wrap">
      <p class="organization__text">Описание</p>
      <AppLabel :name="descriptionLabelInput" class="form__label"
        >{{ formStore.textarea }}
      </AppLabel>
    </div>
    <div class="form__wrap">
      <p class="organization__text organization__text--logo">Логотип</p>
      <div class="organization__img-box">
        <img
          width="165"
          :src="formStore.file"
          height="165"
          class="organization__img"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from "@/components/AppButton.vue";
import AppLabel from "@/components/AppLabel.vue";
import { useFormStore } from "@/stores/form";
import { computed } from "vue";

const nameLabelInput = "name";
const descriptionLabelInput = "description";
const typeLabelInput = "type";

const formStore = computed(() => {
  return useFormStore().get();
});
</script>

<style lang="scss" scoped>
@import "@/views/form/style/style.scss";

.organization {
  &__text {
    font-family: "Roboto-Regular";
    font-size: 14px;
    line-height: 20px;
    color: #656565;

    &--logo {
      font-family: "Roboto-Medium";
      color: #0a0a0a;
    }
  }

  &__img-box {
    width: 165px;
    margin-top: 2px;
    padding: 8px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #ededed;
  }

  &__img {
    object-fit: cover;
  }

  &__button {
    display: flex;
  }
}
</style>
