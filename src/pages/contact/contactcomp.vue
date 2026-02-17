<template>
    <div>
        <div class="container-fluid font-nn">
            <div class="navbar mx-3 my-3">
                <button @click="$router.push('projects')" class="btn btn-outline-success px-4 fs-6">Projects</button>
                <h2 class="mx-auto">Contact Me</h2>
                <button @click="$router.push('/')" class="btn btn-outline-success px-4 fs-6">First
                    Page</button>
            </div>
        </div>
        <hr>

        <div class="container-fluid contact-section">
            <div class="row justify-content-center">
                <div class="col-lg-10 p-4 rounded-5 shadow-lg" style="background-color: #002127;">
                    <div class="row">
                        <!-- Contact Info -->
                        <div class="col-md-5 contact-info border border-info p-4 rounded-4">
                            <h4>Contact Info</h4>
                            <p class="fs-5"><strong>Email :</strong> Sina.mohammadi30.sm@gmail.com</p>
                            <p class="fs-5"><strong>Phone :</strong> +98 9361600968</p>
                            <p class="fs-5"><strong>Location :</strong> Karaj, Iran</p>
                            <div class="social-icons mt-3">
                                <a href="https://github.com/SinaMM-1999"><i
                                        class="bi bi-github fs-3 text-success"></i></a>
                                <a href="#"><i class="bi bi-linkedin fs-3 text-success"></i></a>
                                <a href="#"><i class="bi bi-telegram fs-3 text-success"></i></a>
                            </div>
                        </div>

                        <!-- Contact Form -->
                        <div class="col-md-7">
                            <h4 class="my-3 my-md-0">Send me a message</h4>
                            <form action="https://formspree.io/f/mgvkdbdy" method="post">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email *</label>
                                    <input type="email" class="form-control bg-secondary" id="email" required>
                                </div>
                                <div class="mb-3">
                                    <label for="subject" class="form-label">Subject</label>
                                    <input type="text" class="form-control bg-secondary" id="subject">
                                </div>
                                <div class="mb-3">
                                    <label for="message" class="form-label">Send massage inclouds : (Name , subject)
                                        etc.
                                        *</label>
                                    <textarea name="massage" class="form-control bg-secondary" id="message" rows="3"
                                        required></textarea>
                                </div>
                                <button type="submit" class="btn btn-success mt-4">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.contact-section {
    padding: 60px 0;
}

.form-control,
.btn {
    border-radius: 0.75rem;
}

.contact-info h4 {
    margin-bottom: 20px;
}

.social-icons a {
    margin-right: 10px;
    font-size: 1.25rem;
    color: #333;
}
</style>