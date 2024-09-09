<template>
  <div class="catalog">
    <h1 class="m-b-2">Сделки компании</h1>

    <div class="ads-list">
      <div v-if="deals.length === 0">Нет доступных сделок</div>
      <div v-for="deal in deals" :key="deal.id" class="ad-item">
        <img :src="'https://via.placeholder.com/150'" alt="Фото сделки" class="ad-photo" />
        <div class="ad-details">
          <h3>{{ deal.name }}</h3>
          <p>Бюджет: {{ deal.price }} ₽</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useApi } from '@/services/api/api.js';

export default {
  setup() {
    const deals = ref([]);
    const { fetchDeals } = useApi();

    const fetchItems = async () => {
      try {
        const response = await fetchDeals();
        if (response._embedded && response._embedded.leads) {
          deals.value = response._embedded.leads;
          console.log("Сделки:", deals.value);
        } else {
          console.error("Сделки не найдены в ответе API");
        }
      } catch (error) {
        console.error('Ошибка загрузки сделок:', error);
      }
    };

    onMounted(fetchItems); 

    return {
      deals, 
    };
  },
};
</script>

<style scoped>
.catalog {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
}

.ads-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.ad-item {
  border: 1px solid #ccc;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.ad-photo {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.ad-details {
  margin-top: 10px;
}
</style>
