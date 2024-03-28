<template>
  <form enctype="multipart/form-data" class="form" @submit.prevent="submitForm">
    <div class="form__box">
      <h1 class="form__title">Организация</h1>
      <AppButton class="form__button button--return">
        <svg class="form__svg" width="12" height="12">
          <use xlink:href="@/assets/img/sprite.svg#close"></use>
        </svg>
        Отменить
      </AppButton>
    </div>
    <div class="form__wrap">
      <AppLabel
        :is-required="isRequiredType"
        :name="nameLabelDropDown"
        class="form__label"
        >Тип</AppLabel
      >
      <AppDropdown v-model="formData.select"></AppDropdown>
    </div>
    <div class="form__wrap">
      <AppLabel
        :name="nameLabelInput"
        class="form__label"
        :is-required="isRequiredType"
        >Название организации
      </AppLabel>
      <AppInput
        :id="nameLabelInput"
        v-model="formData.text"
        :required="isRequiredType"
        :placeholder="placeholderInput"
        :name="nameLabelInput"
      />
    </div>
    <div class="form__wrap">
      <AppLabel :name="nameLabeltextarea" class="form__label"
        >Описание</AppLabel
      >
      <AppTextarea
        :id="nameLabeltextarea"
        v-model="formData.textarea"
        :name="nameLabeltextarea"
        :placeholder="placeholderTextarea"
      >
        >
      </AppTextarea>
    </div>
    <div class="form__wrap">
      <AppLabel
        :name="nameLabelFile"
        class="form__label form__label--file"
        :is-required="isRequiredType"
        >Логотип
        <div class="form__wrap-file">
          <p class="form__note form__note--strong">
            Загрузите изображение или перетащите файл сюда
          </p>
          <p class="form__note">Максимальный размер изображения 10 Мб.</p>
          <p class="form__note">Допустимые форматы: .jpeg .png .webp .svg</p>
          <span class="form__button-upload">
            <svg class="form__svg form__svg--btn" width="12" height="12">
              <use xlink:href="@/assets/img/sprite.svg#plus"></use>
            </svg>
            Загрузить</span
          >
        </div>
        <input
          id="file"
          type="file"
          required
          name="file"
          class="visually-hidden"
          @change="(file) => (formData.file = file.target.files[0])"
        />
      </AppLabel>
    </div>
    <AppButton class="button--submit form__btn" type="submit"
      >Сохранить</AppButton
    >
  </form>
</template>

<script setup>
import AppButton from "@/components/AppButton.vue";
import AppLabel from "@/components/AppLabel.vue";
import AppDropdown from "@/components/AppDropdown.vue";
import AppInput from "@/components/AppInput.vue";
import AppTextarea from "@/components/AppTextarea.vue";
import { useFormStore } from "@/stores/form";
import { ref } from "vue";

const isRequiredType = true;
const nameLabelDropDown = "category";
const nameLabelInput = "name";
const nameLabeltextarea = "description";
const placeholderInput = 'Санаторий "Огонёк"';
const placeholderTextarea = "Описание";
const nameLabelFile = "file";

const formStote = useFormStore();

const formData = ref({
  file: null,
  text: "",
  textarea: "",
  select: "",
});

const submitForm = async () => {
  const payload = new FormData();
  payload.append("text", formData.value.text);
  payload.append("file", formData.value.file);
  payload.append("textarea", formData.value.textarea);
  payload.append("option", formData.value.select);

  formData.value.file = URL.createObjectURL(formData.value.file);

  formStote.set(formData.value);

  try {
    const response = await fetch("https://your-test-resource.com/submit", {
      method: "POST",
      body: payload,
    });
    if (!response.ok) throw new Error("Network response was not ok.");
    // Обработка успешного ответа
    console.log("Data submitted successfully:", await response.json());
  } catch (error) {
    // Обработка ошибок при отправке данных
    console.error("Error submitting form data:", error);
  }
};
</script>

<style lang="scss" scoped>
@import "@/views/form/style/style.scss";
</style>
