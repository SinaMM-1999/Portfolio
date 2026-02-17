<template>
    <div>
        <div class="container-fluid font-nn">
            <div class="navbar mx-3 my-3">
                <button @click="$router.push('/skills')" class="btn btn-outline-success px-4 fs-6">Skills</button>
                <h2>Projects</h2>
                <button @click="$router.push('/contact')" class="btn btn-outline-success px-4 fs-6">Contact Me</button>
            </div>
        </div>
        <hr>
        <section class="py-md-3">
            <div class="container">
                <div class="carousel slide carousel-fade" id="carouselexample" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button data-bs-target="#carouselexample" type="button" data-bs-slide-to="0"
                            class="active bg-success"></button>
                        <button data-bs-target="#carouselexample" type="button" data-bs-slide-to="1"
                            class="bg-success"></button>
                        <button data-bs-target="#carouselexample" type="button" data-bs-slide-to="2"
                            class="bg-success"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="/src/assets/images/carousel 1.png" class="img-fluid w-100 d-block" alt="">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Educational assistance course site</h5>
                                <p>This Website uses Flex & Css</p>
                                <a class="btn btn-success mb-4 rounded-4 py-2 px-4"
                                    href="https://sinamm-1999.github.io/collage-courses/">See Website</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/src/assets/images/carousel 2.png" class="img-fluid w-100 d-block" alt="">
                            <div class="carousel-caption d-none d-md-block">
                                <div class="text-dark">
                                    <h5>Sample site for educational packages</h5>
                                    <p>This Website is coded using Bootstrap.</p>
                                </div>
                                <a class="btn btn-success mb-4 rounded-4 py-2 px-4"
                                    href="https://sinamm-1999.github.io/educational-packages/">See Website</a>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselexample"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselexample"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </section>
        <section class="py-3">
            <div class="container">
                <div class="row justify-content-center d-md-none">
                    <div class="list-group text-center">
                        <a href="https://sinamm-1999.github.io/collage-courses/"
                            class="list-group-item list-group-item-action list-group-item-success active"
                            aria-current="true">Educational assistance course site</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-success">Sample site
                            for educational packages</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style></style>