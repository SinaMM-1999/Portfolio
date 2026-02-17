<template>
  <div>
    <div class="navbar navbar-expand-lg pt-3 pb-md-0">
      <div class="container">
        <a href="#" class="navbar-brand fs-2">
          <i class="fa-brands fa-codepen fa-lg" style="color: #00c878;"></i>
          <span class="ms-2" style="color: #73bc9a;">Portofoilo</span>
        </a>
        <button class="navbar-toggler" style="background-color: #00c878; color: #05f092;" type="button"
          data-bs-toggle="collapse" data-bs-target="#navcontent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center" id="navcontent">
          <ul class="navbar-nav mb-lg-0 mb-2 m-auto">
            <li class="nav-item"><router-link style="color: #73bc9a;" to="/"
                class="nav-link fs-6 active">About</router-link>
            </li>
            <li class="nav-item"><router-link style="color: #73bc9a;" to="/skills"
                class="nav-link fs-6">Skills</router-link>
            </li>
            <li class="nav-item"><router-link style="color: #73bc9a;" to="/projects"
                class="nav-link fs-6">Projects</router-link></li>
            <li class="nav-item"><router-link style="color: #73bc9a;" to="/contact"
                class="nav-link fs-6">Contact</router-link>
            </li>
          </ul>
          <hr>
          <button class="btn btn-outline-success rounded-pill px-3 py-2 mt-3" type="button"><a class="nav-link"
              href="https://github.com/SinaMM-1999?tab=repositories">Github
              Profile</a></button>
        </div>
      </div>
    </div>

    <section class="container pt-5">
      <div class="row d-flex">
        <div class="col-12 col-md-6 order-1 order-md-2 text-center ">
          <img src="/src/assets/images/image 1.png" class="img-fluid h-75 rounded-pill" alt="">
        </div>
        <div class="col-12 col-md-6 order-2 order-md-1 mt-5 mb-5">
          <h1>Hi, I'm <br> Sina Mohammadi</h1>
          <h4> <span style="color: #00c878;">Web</span> | <span style="color: #00c878;">front</span>-end
            Developer</h4>
          <p v-if="!isShow" class="my-5 font-nn fs-5">
            Hi! I'm Sina Mohammadi, a passionate front-end developer with a strong eye for design and user
            experience. Ever since I wrote my first line of HTML, I’ve been fascinated by the magic of turning
            ideas into interactive digital experiences. <br>
            I’m always eager to learn new tools, explore creative solutions, and collaborate with others to
            bring great ideas to life. Whether it's a landing page, a web app, or a personal project, I put both
            heart and logic into everything I build.
          </p>
          <p v-if="isShow" class="my-5 fw-bold lh-lg fs-4 text-end">
            سلام! من سینا محمدی هستم، یک توسعه‌دهنده‌ی فرانت‌اند پرشور با نگاهی قوی به طراحی و تجربه‌ی کاربری. از زمانی
            که اولین خط  خود را نوشتم، مجذوب جادوی تبدیل ایده‌ها به تجربیات دیجیتال تعاملی شده‌ام.
            من همیشه مشتاق یادگیری ابزارهای جدید، کشف راه‌حل‌های خلاقانه و همکاری با دیگران برای تحقق ایده‌های عالی
            هستم. چه یک صفحه فرود، یک برنامه‌ی وب یا یک پروژه‌ی شخصی باشد، من هم قلب و هم منطق را در هر چیزی که می‌سازم،
            قرار می‌دهم. </p>

          <button class="btn btn-success rounded-5 px-3" type="button"><a @click="$router.push('/skills')"
              class="nav-link">Check
              Resume</a></button>
          <button @click="show" class="btn btn-primary rounded-5 px-3 ms-4" type="button">
            <span v-if="!isShow">Fa</span>
            <span v-if="isShow">En</span>
          </button>
        </div>
      </div>
    </section>
    <footer class="fixed-bottom">
      <section class="container">
        <div class="row">
          <div class="col text-center mb-2">
            All rights reserved. <i class="fa-brands fa-critical-role"></i>

          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(false)

function show() {
  isShow.value = !isShow.value;
}
</script>

<style></style>