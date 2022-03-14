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
export default {
    components: {Header, Footer}
}
</script>