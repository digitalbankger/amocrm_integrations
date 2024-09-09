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

export default {
  setup() {
    const deals = ref([]);

    const fetchItems = async () => {
      deals.value = [
        { id: 1, name: "Тестовая сделка 1", price: 1000 },
        { id: 2, name: "Тестовая сделка 2", price: 2000 },
        { id: 3, name: "Тестовая сделка 3", price: 3000 }
      ];
      console.log("Сделки:", deals.value); 
    };

    onMounted(fetchItems);

    return {
      deals
    };
  }
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
