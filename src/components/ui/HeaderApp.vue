<template>
  <header class="header d-flex jc-center">
    <div class="container d-flex fd-row ai-center w-100 jc-space p-tb-1">
      <router-link to="/"><img src="@/assets/svg/logo.svg" width="200" class="logo-img"></router-link>
    </div>
  </header>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  components: {
  },
  props: {
    currentUser: Object,
  },
  setup() {

    const isMobile = ref(false);



    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768;
    };


    onMounted(() => {
      handleResize(); 
      window.addEventListener('resize', handleResize);

    });




    return { isMobile };
  },
};
</script>

<style scoped>
.header {
  transition: background-color 0.4s ease;
  position: fixed;
  width: 100%;
}

.header-scrolled {
  background-color: #152b31;
  -webkit-box-shadow: 0px 4px 5px 0px rgba(16, 18, 21, 0.536);
  -moz-box-shadow: 0px 4px 5px 0px rgba(16, 18, 21, 0.536);
  box-shadow: 0px 4px 5px 0px rgba(16, 18, 21, 0.536);
}
.header {
  position: fixed;
  width: 100%;
}

.btn-gen {
  padding: 8px 12px;
  font-size: 16px;
  /* background-color: black; */
  border: none;
}
.btn-head {
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 6px 16px;
}
.btn-sec {
  padding: 8px;
  font-size: 16px;
  border: none;
}
.phone-text {
  font-size: 12px;
  font-weight: 200;
}
.phone-img {
  margin-right: 10px;
}

/* Стили для корзины */

.cart-icon {
  cursor: pointer;
}

.cart-items-count {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #07A697;
  color: #fff;
  padding: 2px 6px;
  border-radius: 50%;
}
.donation-btn {
  background-color: #fff;
  padding: 8px;
  border-radius: 6px;
}

.marquee {
  width: 100%;
  overflow: hidden;
}

.text-container {
  white-space: nowrap;
  animation: marquee 20s linear infinite; /* Начальное значение для анимации */
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>