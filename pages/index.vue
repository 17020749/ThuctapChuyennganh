<template>
	<div class="content">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/banner_1.jpg" class="d-block w-100" alt="">
          </div>
          <div class="carousel-item">
            <img src="/images/banner_2.jpg" class="d-block w-100" alt="">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="games">
        <div class="categories">
          <button type="button" class="btn btn-danger login-btn --medium-btn">Tất cả</button>
        </div>
        <div class="d-flex services">
          <NuxtLink to="Topup" class="service_item">
            <img src="/images/napvxu.jpg" alt="">
            <p class="pt-2">Nạp Vxu</p>
          </NuxtLink>
          <a href="#" class="service_item">
            <img src="/images/cumong.png" alt="">
            <p class="pt-2">Cửu Mộng TIên Vực</p>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
import Topup from "./topup"
export default {
  components: {Topup},
  name: 'IndexPage',
}
</script>
