<template>
    <div class="container">
        <div class="row">
          <div class="click" style="padding-bottom: 40px;text-align: center;margin-top: 20px;">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group" >
                    <button @click="show('momo')" class="btn btn-outline-info" ><img src="https://nap.vplay.vn/images/momo.jpg" alt="momo" width="40px" value="napmomo"><br><span>Nạp momo</span></button>
                    <button @click="show('game')" class="btn btn-outline-info"><img src="https://nap.vplay.vn/images/thegame.png" alt="thegame" width="40px" value="napthegame"><br><span>Thẻ game</span></button>
                    <button @click="show('bank')" class="btn btn-outline-info"><img src="https://nap.vplay.vn/images/bank.png" alt="nganhang" width="40px" value="napnganhang"><br><span>Ngân hàng</span></button>
                </div>
            </div>
          <BaseCp 
            v-if="current=='momo'" 
            title="Hướng dẫn nạp Momo"
            name="momo"
            link-img="https://nap.vplay.vn/images/guide/momo_guide/"
            title-detail="HƯỚNG DẪN NẠP GAME QUA MOMO"/>
          <BaseCp 
            v-if="current=='game'"
            title="Hướng dẫn nạp Thẻ game"
            name="card"
            link-img="https://nap.vplay.vn/images/guide/card_guid/"
            title-detail="HƯỚNG DẪN NẠP GAME BẰNG THẺ GAME" />
          <BaseCp 
            v-if="current=='bank'" 
            title="Hướng dẫn nạp Ngân hàng"
            name="bank"
            link-img="https://nap.vplay.vn/images/guide/bank_guide/"
            title-detail="HƯỚNG DẪN NẠP GAME QUA NGÂN HÀNG BẰNG THẺ ATM/VISA"/>
    </div>
    </div>
</template>

<script>
</script>
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
import BaseCp from "~/components/solution/BaseCp.vue";
 export default{
     components: {
    BaseCp
},
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

