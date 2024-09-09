<template>
  <div class="section animate">
    <div class="general d-flex jc-center">
      <div class="container d-flex m-col first-screen m-jc-center fd-row ai-end jc-center mp-tb-3">
        <ArchiveItems />
      </div>
    </div>

    <!-- Каталог -->
    <section class="d-flex fd-column ai-center jc-center p-1 p-relative">
      <div class="container d-flex fd-column p-1 pm-0">
        <div class="d-flex fd-column jc-space ai-center z-index-1">
          <StatisticsForm />
        </div>
      </div>
    </section>

    <!-- Лайтбокс с созданием элемента -->
    <section class="d-flex fd-column ai-center jc-center p-1 p-relative">

      <div class="d-flex fd-column p-1 ai-center z-index-1">
        <!-- <AddItem @open-lightbox="openLightbox"/> -->
      </div>
    </section>

  </div>
</template>

<script>
import { ref } from 'vue';
import ArchiveItems from '@/components/ui/ArchiveItems.vue';
// import AddItem from '@/components/AddItem.vue';

export default {
  components: {
    // AddItem,
    ArchiveItems,
  },
  setup() {

    const isLightboxOpen = ref(false);
    const lightboxImageSrc = ref('');

    const openLightbox = (imageSrc) => {
      isLightboxOpen.value = true;
      lightboxImageSrc.value = imageSrc;
    };

    const closeLightbox = () => {
      isLightboxOpen.value = false;
      lightboxImageSrc.value = '';
    };

    return { 
      isLightboxOpen,
      lightboxImageSrc,
      openLightbox,
      closeLightbox
    };
  },
};
</script>

<style>
</style>