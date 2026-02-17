<template>
    <div>
        <div class="container-fluid font-nn">
            <div class="navbar mx-3 my-3">
                <button @click="$router.push('/')" class="btn btn-outline-success px-4 fs-6">About</button>
                <h2>Skills</h2>
                <button @click="$router.push('/projects')" class="btn btn-outline-success px-4 fs-6">Projects</button>
            </div>
        </div>
        <hr>
        <div id="skills" class="py-5 overflow-hidden">
            <div class="container">
                <div class="row g-4">
                    <div class="col-6 col-md-3">
                        <div class="card bg-dark text-white text-center border-0 rounded-4 shadow-lg">
                            <div class="card-img">
                                <img src="/src/assets/images/image skill 1.png" class="img-fluid rounded-4" alt="">
                            </div>
                            <div class="card-body d-flex flex-column justify-content-center align-items-center"
                                style="background-color: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px); height: 100%;">
                                <h3 class="fw-bold text-info mb-3">Frontend</h3>
                                <ul class="list-unstyled" style="width: 200px;">
                                    <li class="py-3">HTML</li>
                                    <div class="progress" role="progressbar">
                                        <div class="progress-bar bg-success" style="width: 100%">100%</div>
                                    </div>
                                    <li class="py-3">CSS</li>
                                    <div class="progress" role="progressbar">
                                        <div class="progress-bar bg-success" style="width: 100%">100%</div>
                                    </div>
                                    <li class="py-3">JavaScript</li>
                                    <div class="progress" role="progressbar">
                                        <div class="progress-bar bg-success" style="width: 100%">100%</div>
                                    </div>
                                    <li class="py-3">VueJs</li>
                                    <div class="progress" role="progressbar">
                                        <div class="progress-bar bg-success" style="width: 100%">100%</div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="card bg-dark text-white text-center border-0 rounded-4 shadow-lg">
                            <div class="card-img">
                                <img src="/src/assets/images/image skill 3.jpg" class="img-fluid rounded-4" alt="">
                            </div>
                            <div class="card-body d-flex flex-column justify-content-center align-items-center"
                                style="background-color: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px); height: 100%;">
                                <h3 class="fw-bold text-info mb-3">Dsign & UI</h3>
                                <ul class="list-unstyled" style="width: 200px;">
                                    <li class="py-3">Bootstrap</li>
                                    <div class="progress" role="progressbar">
                                        <div class="progress-bar bg-success" style="width: 100%">100%</div>
                                    </div>
                                    <li class="py-3">Figma</li>
                                    <div class="progress" role="progressbar">
                                    </div>
                                    <li class="py-3">UI principles</li>
                                    <div class="progress" role="progressbar">
                                        <div class="progress-bar bg-success" style="width: 80%">80%</div>
                                    </div>
                                    <li class="py-3">Tailwind</li>
                                    <div class="progress" role="progressbar">
                                        <div class="progress-bar bg-success" style="width: 50%">50%</div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="card bg-dark text-white text-center border-0 rounded-4 shadow-lg">
                            <div class="card-img">
                                <img src="/src/assets/images/image skill 4.jpg" class="img-fluid rounded-4" alt="">
                            </div>
                            <div class="card-body d-flex flex-column justify-content-center align-items-center"
                                style="background-color: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px); height: 100%;">
                                <h3 class="fw-bold text-info mb-3">Tools & Workflow</h3>
                                <ul class="list-unstyled" style="width: 200px;">
                                    <li class="py-3">VS Code</li>
                                    <div class="progress" role="progressbar">
                                        <div class="progress-bar bg-success" style="width: 100%">100%</div>
                                    </div>
                                    <li class="py-3">Git</li>
                                    <div class="progress" role="progressbar">
                                        <div class="progress-bar bg-success" style="width: 100%">100%</div>
                                    </div>
                                    <li class="py-3">Chrome DevTools</li>
                                    <div class="progress" role="progressbar">
                                        <div class="progress-bar bg-success" style="width: 100%">100%</div>
                                    </div>
                                    <li class="py-3">NuxtJs </li>
                                    <div class="progress" role="progressbar">
                                        <div class="progress-bar bg-success" style="width: 100%">100%</div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="card bg-dark text-white text-center border-0 rounded-4 shadow-lg h-100">
                            <div class="card-img">
                                <img src="/src/assets/images/image skill 5.jpg" class="img-fluid rounded-4" alt="">
                            </div>
                            <div class="card-body d-flex flex-column justify-content-center align-items-center"
                                style="background-color: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px); height: 100%;">
                                <h3 class="fw-bold text-info mb-3">Tools & Workflow</h3>
                                <ul class="d-flex flex-column text-start" style="width: 200px;">
                                    <li class="py-2">VS Code</li>
                                    <li class="py-2">Git</li>
                                    <li class="py-2">TypeScript</li>
                                    <li class="py-2">Teamwork spirit </li>
                                    <li class="py-2">Creative Ideas </li>
                                    <li class="py-2">َAlways be Active </li>
                                    <li class="py-2">Always updating </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style></style>