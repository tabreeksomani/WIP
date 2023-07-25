<template>
  <v-app>
    <v-footer class="footer" style="background-color: #A30B37; color:antiquewhite">
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <h2 class="logo-text">Company Name</h2>
        </v-col>
        <v-col cols="auto">
          <h4 class="text-center">Company</h4>
          <v-list style="background-color: #A30B37; color:antiquewhite">
            <v-list-item v-for="(item, index) in companyLinks" :key="index" link>
              <v-list-item-title class="link-text">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="auto">
          <h4 class="text-center">About</h4>
          <v-list style="background-color: #A30B37; color:antiquewhite">
            <v-list-item v-for="(item, index) in aboutLinks" :key="index" link>
              <v-list-item-title class="link-text">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="auto">
          <h4 class="text-center">Get Involved</h4>
          <v-list style="background-color: #A30B37; color:antiquewhite">
            <v-list-item v-for="(item, index) in involvedLinks" :key="index" link>
              <v-list-item-title class="link-text">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="auto">
          <h4 class="text-center">Connect</h4>
          <v-list style="background-color: #A30B37; color:antiquewhite">
            <v-list-item link>
              <v-list-item-title class="link-text" @click="goToFAQ">FAQ</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title class="link-text" @click="goToContact">Contact Us</v-list-item-title>
            </v-list-item>
            <div class="social-icons">
              <v-btn v-for="(item, index) in connectLinks" :key="index" :href="item.url" icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-btn>
            </div>
          </v-list>
        </v-col>
      </v-row>
      <v-row class="footer-bottom" justify="center" align="center">
        <v-col cols="auto">
          <div class="text-center copyright">
            &copy; {{ currentYear }} Company Name. All rights reserved.
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style>
.link-text {
  background-color: transparent !important;
}

.logo-text {
  font-weight: bold;
  font-size: 24px;
}

.footer {
  height: 10%;
}

.footer-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: 10px;
  /* Adjust the margin as per your preference */
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icons v-btn {
  margin-right: 8px;
}

/* Additional styles for the copyright notice */
.copyright {
  margin-top: -250px;
  font-size: 12px;
  color: antiquewhite;
}
</style>

<script>
export default {
  name: 'PageFooter',
  data() {
    return {
      companyLinks: [
        { title: 'Home', url: '/home' },
        { title: 'Services', url: '/services' },
        { title: 'Careers', url: '/careers' },
      ],
      aboutLinks: [
        { title: 'About Us', url: '/about' },
        { title: 'Our Team', url: '/team' },
        { title: 'Testimonials', url: '/testimonials' },
      ],
      involvedLinks: [
        { title: 'Volunteer', url: '/volunteer' },
        { title: 'Donate', url: '/donate' },
        { title: 'Events', url: '/events' },
      ],
      connectLinks: [
        { icon: 'mdi-facebook', url: 'https://www.facebook.com' },
        { icon: 'mdi-twitter', url: 'https://www.twitter.com' },
        { icon: 'mdi-instagram', url: 'https://www.instagram.com' },
      ],
      currentYear: new Date().getFullYear(),
    }
  },
  methods: {
    goToFAQ() {
      // Implement your FAQ page navigation logic here
    },
    goToContact() {
      // Implement your Contact Us page navigation logic here
    },
  },
}
</script>
