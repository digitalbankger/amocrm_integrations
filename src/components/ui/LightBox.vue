<template>
  <div>
    <div class="lightbox" v-if="lightboxVisible">
      <div class="lightbox-content">
        <img :src="lightboxImageSrc" alt="Увеличенное изображение" />
        <button @click="closeLightbox">Закрыть</button>
      </div>
    </div>

    <!-- Ваша таблица с изображениями -->
    <table>
      <tr v-for="trade in trades" :key="trade.ID">
        <td>
          <a @click="openLightbox(trade.ImagePath)">
            <img :src="'http://localhost:8080/' + trade.ImagePath" alt="Изображение сделки" width="50" height="50" />
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  setup() {
    const lightboxVisible = ref(false);
    const lightboxImageSrc = ref("");
    const trades = ref([]);

    const openLightbox = (imageSrc) => {
      lightboxImageSrc.value = imageSrc;
      lightboxVisible.value = true;
    };

    const closeLightbox = () => {
      lightboxVisible.value = false;
    };

    const loadImages = async () => {

    };

    onMounted(() => {
      loadImages();
    });

    return {
      lightboxVisible,
      lightboxImageSrc,
      trades,
      openLightbox,
      closeLightbox,
    };
  },
};
</script>

<style scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.lightbox-content {
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

</style>
