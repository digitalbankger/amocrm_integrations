<template>
  <div class="create-ad">
    <h1>Создать объявление</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">Название</label>
        <input type="text" v-model="title" id="title" maxlength="200" required>
      </div>

      <div class="form-group">
        <label for="description">Описание</label>
        <textarea v-model="description" id="description" maxlength="1000"></textarea>
      </div>

      <div class="form-group">
        <label for="price">Цена</label>
        <input type="number" v-model="price" id="price" required>
      </div>

      <div class="form-group">
        <label for="photos">Ссылки на фото (не более 3)</label>
        <div v-for="(photo, index) in photos" :key="index">
          <input type="text" v-model="photos[index]" placeholder="Ссылка на фото">
        </div>
        <button @click.prevent="addPhotoField" :disabled="photos.length >= 3">Добавить фото</button>
      </div>

      <button type="submit">Создать</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useApi } from '../../services/api/api';

export default {
  setup() {
    const title = ref('');
    const description = ref('');
    const price = ref(0);
    const photos = ref(['']);

    const addPhotoField = () => {
      if (photos.value.length < 3) {
        photos.value.push('');
      }
    };

    const clearForm = () => {
      title.value = '';
      description.value = '';
      price.value = 0;
      photos.value = [''];
    };

    const submitForm = async () => {
      const item = {
        title: title.value,
        description: description.value,
        price: price.value,
        photos: photos.value.filter(photo => photo.trim() !== ''),
      };

      try {
        const api = useApi();
        const response = await api.addAnnouncement(item);
        alert(`Объявление создано с ID: ${response.id}`);
        clearForm();
      } catch (error) {
        console.error('Ошибка создания объявления:', error);
      }
    };

    return {
      title,
      description,
      price,
      photos,
      addPhotoField,
      submitForm,
    };
  },
};
</script>
