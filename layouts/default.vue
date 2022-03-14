<template>
    <div class="wrapper" id="dkLogin">
        <Header />
        <section class="content">
            <Nuxt />
        </section>
        <Footer />
    </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import HuongDanNap from '../pages/huongdannap.vue'
import Test from '../pages/test.vue'
export default {
    components: { Header, Footer, HuongDanNap,Test}
}
</script>