<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header style="left: 0px;">
      <q-toolbar
        style="height: 57px;"
        color="primary"
        :inverted="$q.theme === 'ios'"
        class="backgroung_color"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          <img src="statics/myntraLogo.png" class="img_logo">
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      class ="backgroung_color"
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'backgroung_color' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item v-if="$store.state.example.userType == 'Admin'" class="navlink" :to="{ path: '/admin/Usermanagement'}">
           <img src="statics/user.png" class="link-img">
           <div class="q-pl-lg navigation-text header_font header_text">User Management</div>
         </q-item>
        <q-item v-if="$store.state.example.userType == 'Admin'" class="navlink" :to="{ path: '/admin/Transactions'}">
           <img src="statics/carton.png" class="link-img">
           <div class="q-pl-lg navigation-text header_font header_text">Transactions</div>
         </q-item>

         <q-item v-if="$store.state.example.userType == 'Admin'" class="navlink" :to="{ path: '/admin/ProductDetails'}">
           <img src="statics/stock.png" class="link-img">
           <div class="q-pl-lg navigation-text header_font header_text">Product Details</div>
         </q-item>

          <q-item class="navlink" @click.native="logout('logout')">
            <a href="#">
              <img src="statics/logout.png" class="link-img">
              <div class="q-pl-lg navigation-text header_font header_text" style="display: inline;">Logout</div>
            </a>
          </q-item>
        </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-database.js"></script>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  mounted () {
    var that = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (!user) {
        that.$router.push('/')
      } else {
        firebase.database().ref('users').child(user.uid).once('value', function(response){
          if (!that.$store.state.example.userId && !that.$store.state.example.userPwd) {
            that.$store.dispatch('example/fetchUserType', response.val().role)
            that.$store.dispatch('example/fetchUserId', response.val().user_id)
            that.$store.dispatch('example/fetchUserPwd', response.val().pwd)
          }
          console.log('User Role is: ' + that.$store.state.example.userType)
          console.log('User ID is: ' + that.$store.state.example.userId)
          console.log('User Password is: ' + that.$store.state.example.userPwd)
        })
      }
    })
  },
  methods: {
    logout (pageName) {
      var that = this
      console.log(pageName)
      if (pageName === 'logout') {
        firebase.auth().signOut().then(function() {
          that.$store.state.example.userType = ''
          that.$store.state.example.userId = ''
          that.$router.push('/')
        }).catch(function(error) {
          console.log(error)
        })
      } else {
        that.collapseNav()
        this.$router.push(pageName)
      }
    }
  }
}
</script>

<style>
</style>
