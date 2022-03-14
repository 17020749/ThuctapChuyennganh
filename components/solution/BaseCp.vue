<template>
     <div :id="'carouselExampleControls_' + name" class="carousel slide" data-bs-ride="carousel">
              <div style="background-color: #e5e5e5;height: 30px;padding:5px;margin-bottom: 20px;padding-bottom: 10px;width: 100%;">
                    <span><b>{{title}}</b></span>
                </div>
                <p >{{titleDetail}}</p>     
              <div class="carousel-inner">
                  <div  class="carousel-item" v-for="i in 5" :key="i" :class="i=== 1 ? 'active' : ''">
                         <img :src="linkImg + i + '.png'" class="d-block w-100" alt="...">
                  </div>
              </div>
                  <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleControls_' + name" data-bs-slide="prev" style="filter: brightness(0.2);">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleControls_' + name" data-bs-slide="next" style="filter: brightness(0.2);">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
            </div>
</template>
<script>
   export default {
        props: [
        "title", "name", "link-img", "titleDetail"
    ]
   }
</script>