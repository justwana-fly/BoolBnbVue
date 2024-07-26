<template>
    <div class="">
        <footer class="p-3 ls-footer-glass">
          <div id="footer-top" class="text-center d-flex justify-content-between container">
            <div>
              <h5>Assistenza</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="footer-links p-0">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="footer-links p-0">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="footer-links p-0">Policy</a></li>
                <li class="nav-item mb-2"><a href="#" class="footer-links p-0">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="footer-links p-0">Help</a></li>
              </ul>
            </div>
      
            <div>
              <h5>Ospitare</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="footer-links p-0">Apri un B&B</a></li>
                <li class="nav-item mb-2"><a href="#" class="footer-links p-0">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="footer-links p-0">Pricing</a></li>
                <li class="nav-item mb-2"><a href="#" class="footer-links p-0">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="footer-links p-0">About</a></li>
              </ul>
            </div>
      
            <div>
              <h5>Bool'n Bubbles</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="footer-links p-0">About us</a></li>
                <li class="nav-item mb-2"><a href="#" class="footer-links p-0">Team</a></li>
                <li class="nav-item mb-2"><a href="#" class="footer-links p-0">Our story</a></li>
                <li class="nav-item mb-2"><a href="#" class="footer-links p-0">Review</a></li>
                <li class="nav-item mb-2"><a href="#" class="footer-links 6p-0">Contact</a></li>
              </ul>
            </div>
          </div>
      
          <div class="ls-line"></div>
          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
            <p>© 2024 Team 3 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li><h5>Segui Bool'n Bubbles</h5></li>
              <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-twitter text-light"></i></a></li>
              <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-instagram text-light"></i></a></li>
              <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-facebook text-light"></i></a></li>
              <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-linkedin text-light"></i></a></li>
            </ul>
          </div>
        </footer>
      </div>
</template>

<script>
    export default {
        name: 'FooterComponent',
    }
</script>

<style lang="scss" scoped>

footer  {
  background-color: hsl(0, 0%, 19%);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
        color: lightgray;
}

.footer-links {
    text-decoration: none;
    color: lightgray;
}

#footer-top {
  padding: 20px;
  margin: 0 auto;
}

.ls-line {
    border-top: 1px solid lightgray;
}


</style>