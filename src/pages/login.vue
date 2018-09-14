<template>
 <q-layout>
   <div class="register-page regist_s">
     <div class="window-height window-width row justify-center items-center">
       <div class="col-md-12 right window-height items-center justify-center">
         <div class="row window-height items-center justify-center">
           <q-card flat class="bigger qcard_s" style = "padding-top: 65px;">
             <q-card-title>
               <div class="row" align="center">
                 <img srcset="statics/myntraLogo.png 3x" alt="…" style="width: 240px;height: 130px;">
               </div>
             </q-card-title>
             <q-card-main v-if="sendOtpDiv">
               <q-field>
                 <p class="caption cap_s">Enter UserId</p>
                 <q-input class="input-field mobile_s" type="text" onfocus="this.value=''; this.style.color='#fff'" v-on:keyup="ezoIdEvent()" v-model="userId"/>
                 <div v-if="exoIdErrorMsg" class="mobile_is">
                   Please enter the valid userName.
                 </div>
               </q-field>
               <q-field>
                 <p class="caption cap_s">Enter password</p>
                 <q-input class="input-field mobile_s" type="password" onfocus="this.value=''; this.style.color='#fff'" v-on:keyup="pwdEvent()" v-model="pwd"/>
                 <div v-if="otpErrorMsg" class="mobile_is">
                   Please enter the valid password.
                 </div>
               </q-field>
               <div class="div_s"></div>
               <q-btn class="full-width otp_send" :disabled="btnLoading" @click="submitOtp()">
                 <q-spinner-hourglass v-if="btnLoading" class="on-left" />
                 <span class="otp_fs">SUBMIT</span>
               </q-btn>
             </q-card-main>
           </q-card>
         </div>
       </div>
     </div>
   </div>
 </q-layout>
</template>

<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-database.js"></script>
<script>
import axios from 'axios'
import { Notify } from 'quasar'

import {
  QSelect,
  QField,
  QBtn,
  QInput,
  QCard,
  QCardTitle,
  QCardMain,
  QCardActions,
  QLayout,
  QCheckbox,
  QSpinnerHourglass
} from 'quasar'

export default {
  components: {
    QSelect,
    QField,
    QBtn,
    QInput,
    QCard,
    QCardTitle,
    QCardMain,
    QCardActions,
    QLayout,
    QCheckbox,
    QSpinnerHourglass
  },
  data () {
    return {
      userId: '',
      pwd:'',
      otp: '',
      btnLoading: false,
      userDetails: '',
      staySignIn: true,
      exoIdErrorMsg: false,
      otpErrorMsg: false,
      submitOtpDiv: false,
      sendOtpDiv: true,
      LDBbind: {},
      country: '',
      verificationId: '',
      trailMobileNo: '',
      loggedUser: '',
      errorCode: '',
      totalGrpId: '',
      userIsActive: '',
      flag: true,
      url: '/admin/primarySort'
    }
  },
  methods: {
    submitOtp: function () {
      let that = this
      that.btnLoading = true
      if (that.pwd !== '' || that.userId !== '') {
        firebase.auth().signInWithEmailAndPassword(that.userId, that.pwd).catch(function(error) {
          that.errorCode = error.code;
          let errorMessage = error.message;
          that.showNotify(error.message)
          that.btnLoading = false
        });
        firebase.auth().onAuthStateChanged((user) => {
          if(user) {
            that.$router.push('/admin/Usermanagement')
          } else {
            that.$router.push('/')
          }
        });
      } else {
        that.showNotify('Please enter your valid credentials')
        that.btnLoading = false
      }
    },
    showNotify (msg) {
      let that = this
      that.$q.notify({
        color: 'black',
        textColor: 'white',
        message: msg,
        position: 'bottom-left',
        timeout: 1700
      })
    }
  }
}
</script>

<style>
</style>
