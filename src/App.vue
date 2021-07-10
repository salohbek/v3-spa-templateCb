<template>
<header>
            <h1 class="site-heading text-center text-faded d-none d-lg-block">
                <span class="site-heading-upper text-primary mb-3">Business Theme </span>
                <span class="site-heading-lower"> Business Casual</span>
            </h1>
        </header>
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item px-lg-4"><router-link class="nav-link text-uppercase" to="/home">Home</router-link></li>
                        <li class="nav-item px-lg-4"><router-link class="nav-link text-uppercase" to="/about">About</router-link></li>
                        <li class="nav-item px-lg-4"><router-link class="nav-link text-uppercase" to="/products">Products</router-link></li>
                        <li class="nav-item px-lg-4"><router-link class="nav-link text-uppercase" to="/store">Store</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view></router-view>
        <footer class="footer text-faded text-center py-5">
            <div class="container"><p class="m-0 small">Copyright &copy; Your Website 2021</p></div>
        </footer>
</template>

<script>

export default {
  name: 'App',

}
</script>


