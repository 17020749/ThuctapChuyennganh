<template>
    <div class="container">
        <div class="row">
          <div class="click" style="padding-bottom: 40px;text-align: center;margin-top: 20px;">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group" >
                    <button @click="show('momo')" class="btn btn-outline-info" ><img src="https://nap.vplay.vn/images/momo.jpg" alt="momo" width="40px" value="napmomo"><br><span>Nạp momo</span></button>
                    <button @click="show('thegame')" class="btn btn-outline-info"><img src="https://nap.vplay.vn/images/thegame.png" alt="thegame" width="40px" value="napthegame"><br><span>Thẻ game</span></button>
                    <button @click="show('nganhang')" class="btn btn-outline-info"><img src="https://nap.vplay.vn/images/bank.png" alt="nganhang" width="40px" value="napnganhang"><br><span>Ngân hàng</span></button>
                </div>
            </div>
            <div >
                    
            <div id="carouselExampleControls_momo" class="carousel slide" data-bs-ride="carousel" v-show="current=='momo'">
              <div style="background-color: #e5e5e5;height: 30px;padding:5px;margin-bottom: 20px;padding-bottom: 10px;width: 100%;">
                    <span><b>Hướng dẫn nạp Momo</b></span>
                </div>
                <p >HƯỚNG DẪN NẠP GAME QUA MOMO</p>     
              <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://nap.vplay.vn/images/guide/momo_guide/1.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="https://nap.vplay.vn/images/guide/momo_guide/2.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="https://nap.vplay.vn/images/guide/momo_guide/3.png" class="d-block w-100" alt="...">
                  </div>
                   <div class="carousel-item">
                    <img src="https://nap.vplay.vn/images/guide/momo_guide/4.png" class="d-block w-100" alt="...">
                  </div>
                   <div class="carousel-item">
                    <img src="https://nap.vplay.vn/images/guide/momo_guide/5.png" class="d-block w-100" alt="...">
                  </div>
              </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls_momo" data-bs-slide="prev" style="filter: brightness(0.2);">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls_momo" data-bs-slide="next" style="filter: brightness(0.2);">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
            </div>
            <div id="carouselExampleControls_card" class="carousel slide" data-bs-ride="carousel" v-show="current=='thegame'">
              <div style="background-color: #e5e5e5;height: 30px;padding:5px;margin-bottom: 20px;padding-bottom: 10px;width: 100%;">
                    <span><b>Hướng dẫn nạp Thẻ game</b></span>
                </div>
                <p >HƯỚNG DẪN NẠP GAME BẰNG THẺ GAME</p>     
              <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://nap.vplay.vn/images/guide/card_guid/1.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="https://nap.vplay.vn/images/guide/card_guid/2.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="https://nap.vplay.vn/images/guide/card_guid/3.png" class="d-block w-100" alt="...">
                  </div>
                   <div class="carousel-item">
                    <img src="https://nap.vplay.vn/images/guide/card_guid/4.png" class="d-block w-100" alt="...">
                  </div>
                   <div class="carousel-item">
                    <img src="https://nap.vplay.vn/images/guide/card_guid/5.png" class="d-block w-100" alt="...">
                  </div>
              </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls_card" data-bs-slide="prev" style="filter: brightness(0.2);">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls_card" data-bs-slide="next" style="filter: brightness(0.2);">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
            </div>
            <div id="carouselExampleControls_bank" class="carousel slide" data-bs-ride="carousel" v-show="current=='nganhang'">
              <div style="background-color: #e5e5e5;height: 30px;padding:5px;margin-bottom: 20px;padding-bottom: 10px;width: 100%;">
                    <span><b>Hướng dẫn nạp Ngân hàng</b></span>
                </div>
                <p >HƯỚNG DẪN NẠP GAME QUA NGÂN HÀNG BẰNG THẺ ATM/VISA</p>     
              <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://nap.vplay.vn/images/guide/bank_guide/1.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="https://nap.vplay.vn/images/guide/bank_guide/2.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="https://nap.vplay.vn/images/guide/bank_guide/3.png" class="d-block w-100" alt="...">
                  </div>
                   <div class="carousel-item">
                    <img src="https://nap.vplay.vn/images/guide/bank_guide/4.png" class="d-block w-100" alt="...">
                  </div>
                   <div class="carousel-item">
                    <img src="https://nap.vplay.vn/images/guide/bank_guide/5.png" class="d-block w-100" alt="...">
                  </div>
              </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls_bank" data-bs-slide="prev" style="filter: brightness(0.2);">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls_bank" data-bs-slide="next" style="filter: brightness(0.2);">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
            </div>
        </div>
    </div>

    </div>
</template>
<style>
     button {
           width: 162px;
           height: 86px;
           text-align: center;
           margin-right: 20px;       
        }
        .carousel-control-prev,.carousel-control-next{
          margin-top: 200px;
        }
        .carousel-inner{
          border-radius: 1px;
          border: 1px solid grey;
        }

</style>
<script>
 export default{
    data(){
      return {
        current:'momo'
      }
    },
    methods: {
      show (type) {
        this.current = type;
      }
    }
 }
</script>

