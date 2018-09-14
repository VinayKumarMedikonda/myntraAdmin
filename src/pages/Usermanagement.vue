<template>
  <div class="About">
    <q-card class="bg-white card-styl">
     <!-- <div class="loader" v-if="spinner"></div> -->
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" align="right">
            <q-btn @click="addUser()" slot="right">ADD USER</q-btn>
        </div>
      </div>
       <q-table
         :data="tableData"
         title="User Details"
         :columns="columns"
         color="black"
         :filter="filter"
         :separator="separator"
         row-key="name"
         :loading="loading"
         >
       <template slot="top-right" slot-scope="props">
         <q-search class="col-12" v-model="filter" />
       </template>

       <q-tr slot="body" slot-scope="props" :props="props" class="cursor-pointer">
         <q-td v-for="col in props.cols" :key="col.name" :props="props">
           {{ col.value }}
         </q-td>
         <!-- <q-td>
            <q-toggle
              v-model=""
              color="secondary"
              true-value="yes"
              false-value="no"
            />
         </q-td> -->
         <q-td>
           <q-btn color="green" icon="edit" @click="editUserData(props.row)" class="q-mr-xs" />
         </q-td>
       </q-tr>
      </q-table>

      <q-modal v-model="userModalAdd" no-backdrop-dismiss :content-css="{minWidth: '70vw'}">
        <q-modal-layout>
          <q-toolbar slot="header" class="bg-secondary">
            <q-toolbar-title v-if="addUserDiv">
              Add New User
            </q-toolbar-title>
            <q-toolbar-title v-if="editUserDiv">
              Edit User
            </q-toolbar-title>
            <q-btn
              flat
              round
              dense
              @click="closePopUp()"
              icon="close"
              style="float:right"
            />
          </q-toolbar>
          <div class="q-pa-lg">
            <div class="row gutter-sm q-mb-md">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                   <q-field>
                     <q-input  type="text" v-model="fullName" float-label="Full Name *"/>
                     <div v-if="fullNameErrorMsg" class="first_s">
                            Please Enter the Full Name.
                      </div>
                  </q-field>
                 </div>
                 <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                   <q-field>
                     <q-input class="input-field inline_s" type="text" :readonly="readonly" v-model="user_id" float-label="EmailId *" />
                     <div v-if="userIdErrorMsg" class="first_s">
                       Please Enter the Email Id.
                     </div>
                   </q-field>
                 </div>
                 <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                   <q-field>
                       <q-input class="input-field inline_s" type="text" v-model="password" float-label="Password *"/>
                      <div v-if="userPwdErrorMsg" class="first_s">
                         Please Enter Password.
                      </div>
                    </q-field>
                 </div>
            </div>
            <div class="row gutter-sm q-mb-md">
                 <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                   <q-field>
                       <q-input class="input-field inline_s" type="number" v-model="phnNum" float-label="PhoneNo"/>
                      <div v-if="phnNumErrorMsg" class="first_s">
                         Please Enter Phone Number.
                      </div>
                    </q-field>
                 </div>
                 <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <q-select
                    class="col-xs-12 col-sm-12"
                    filter
                    v-model="location"
                    :options="enterSelectOptions"
                    stack-label="Location *"
                  />
                  <div v-if="locErrorMsg" class="first_s">
                    Please Select Location.
                  </div>
                 </div>
                 <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
            </div>
            <div class="row justify-end q-mt-md">
              <!-- <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6" v-if="checkStatusForAdmin && emailId != $store.state.example.userEmail">
                <q-toggle v-model="checkStatus" color="green" label="Active" left-label />
              </div> -->
               <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                   <q-btn class="full-width" :disabled="disableSbtn" @click="submitUserData()">
                     SUBMIT
                   </q-btn>
            </div>
             </div>
          </div>
        </q-modal-layout>
      </q-modal>
    </q-card>
  </div>
</template>

<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-database.js"></script>
<script>
import {
  QTable,
  QTh,
  QTr,
  QTd,
  QTableColumns,
  QModal,
  QCard,
  QCardTitle,
  QSelect,
  QUploader,
  QSearch,
  QLayout,
  QModalLayout,
  QToggle
} from 'quasar'
export default {
  components: {
    QTable,
    QTh,
    QTr,
    QTd,
    QTableColumns,
    QModal,
    QCard,
    QCardTitle,
    QSelect,
    QUploader,
    QSearch,
    QLayout,
    QModalLayout,
    QToggle
  },
  data () {
    return {
      enterSelectOptions: [{'label': 'BLRL1', 'value': 'BLRL1'}, {'label': 'BLRL2', 'value': 'BLRL2'},
                           {'label': 'MUML1', 'value': 'MUML1'}, {'label': 'MUML2', 'value': 'MUML2'},
                           {'label': 'DELL1', 'value': 'DELL1'}, {'label': 'DELL2', 'value': 'DELL2'}],
      fullName: '',
      password: '',
      phnNum: '',
      user_id: '',
      location: '',
      filter: '',
      fullNameErrorMsg: false,
      userPwdErrorMsg: false,
      userIdErrorMsg: false,
      phnNumErrorMsg: false,
      locErrorMsg: false,
      btnDisabled: false,
      userModalAdd: false,
      disableSbtn: false,
      readonly: false,
      editUserDiv: false,
      addUserDiv: false,
      separator: 'cell',
      tableData: [],
      columns: [
        {name: 'userName', required: true, label: 'User Name', align: 'center', field: 'userName', sortable: true, descending: false},
        {name: 'emailIdDb', label: 'Email ID', align: 'center', field: 'emailIdDb', sortable: true},
        {name: 'mobileNo', label: 'Mobile No', align: 'center', field: 'mobileNo', sortable: true}
      ]
    }
  },
   mounted () {
    var that = this
  },
  created () {
    var that = this
    that.updateDataTable()
  },
  methods: {
    updateDataTable () {
      var that = this
      that.loading = true
      setTimeout(function () {
        that.loading = false
      }, 2000)
      that.getUsersData()
    },
    getUsersData () {
      var that = this
      that.tableData.length = 0
      firebase.database().ref('UserDetails').orderByChild('created_at').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          if (childSnapshot.val().firstName !== '') {
            that.tableData.push({
              'userName': childSnapshot.val().firstname + ' ' + childSnapshot.val().lastname,
              'emailIdDb': childSnapshot.val().email,
              'mobileNo': childSnapshot.val().phone_number,
              'user_id' : childSnapshot.val().user_id
            })
          }
        })
        that.tableData.reverse()
      })
    },
    addUser () {
      var that = this
      that.addUserDiv = true
      that.userModalAdd = true
    },
    editUserData (row) {
      var that = this
      // that.getLocationID ()
      that.readonly = true
      that.editUserDiv = true
      that.userModalAdd = true
        var date = new Date().getTime()
      firebase.database().ref('users').orderByChild('userid/uid').once('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
          // if (row.emailIdDb === childSnapshot.val().email) {
          //   that.checkStatusForAdmin = true
          //   that.firstName = childSnapshot.val().firstname
          //   that.lastName = childSnapshot.val().lastname
          //   that.emailId = childSnapshot.val().email
          //   that.Password = childSnapshot.val().password
          //   that.GroupId = childSnapshot.val().group_id
          //   that.WarehouseId = childSnapshot.val().warehouse_id
          //   that.getLocation = childSnapshot.val().location_id
          //   that.phoneno = childSnapshot.val().phone_number
          //   that.created_at = childSnapshot.val().created_at
          //   that.userKey = childSnapshot.key
          //   that.checkStatus = childSnapshot.val().is_active
          // }
        })
      })
    },
    submitUserData () {
      var that = this
      if (that.addUserDiv === true) {
        that.addUserFunction()
      }
      if (that.editUserDiv === true) {
        that.editUserFunction()
      }
    },
    editUserFunction () {
      var that = this
      that.disableSbtn = true
      if (that.validationForUserData()) {
        var date = new Date().getTime()
        firebase.database().ref("UserDetails").orderByChild("email").equalTo(that.emailId).on("child_added", function(data) {
            var userDataToInsert = {
              "name" : that.fullName,
              "pwd" : that.password,
              "mobile" : that.phnNum,
              "user_id" : that.user_id,
              "role" : 'User',
              "status" : 1,
              "warehouse_loc" : that.location,
              "createdAt" : new Date().getTime(),
              "updatedAt" : new Date().getTime()
            }
            firebase.database().ref('UserDetails').child(data.key).set(userDataToInsert).then(function (){
              console.log("User's data updated")
              that.userModalAdd = false
              that.$q.notify({
                color: 'green',
                textColor: 'white',
                message: "Data has been updated succussfully",
                position: 'bottom-right',
                timeout: 3000
              })
              that.updateDataTable()
              that.emtpyAllFields()
              that.disableSbtn = false
            }).catch(function (err){
              console.log(err)
              that.$q.notify({
                color: 'black',
                textColor: 'white',
                message: "Data couldn't be saved.Please try again later.",
                position: 'bottom-left',
                timeout: 3000
              })
              that.emtpyAllFields()
              that.disableSbtn = false
            })
        })
      }
      that.disableSbtn = false
    },
    addUserFunction() {
      var that = this
      that.disableSbtn = true
      that.savedUId = ''
      if (that.validationForUserData()) {
        var user_obj = {
          "name" : that.fullName,
          "pwd" : that.password,
          "mobile" : that.phnNum,
          "user_id" : that.user_id,
          "warehouse_loc" : that.location,
          "role" : 'User',
          "status" : 1,
          "createdAt" : new Date().getTime(),
          "updatedAt" : new Date().getTime()
        }
        firebase.auth().createUserWithEmailAndPassword(user_obj.user_id, user_obj.pwd).then(function(user) {
          that.savedUId = user.user.uid
          if (that.savedUId) {
            firebase.database().ref('users').child(that.savedUId).set(user_obj).then(function(response){
              that.showNotify("User added successfully.")
              that.updateDataTable()
              that.closePopUp()
            })
          }
          firebase.auth().signInWithEmailAndPassword(that.$store.state.example.userId, that.$store.state.example.userPwd).catch(function(error) {
            that.errorCode = error.code;
            let errorMessage = error.message;
            that.showNotify(error.message)
            that.btnLoading = false
          });
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          that.showNotify(error.message)
        });
      }
    },
    closePopUp () {
      var that = this
      that.emtpyAllFields()
      that.userModalAdd = false
    },
    emtpyAllFields () {
      var that = this
      that.fullName, that.password, that.phnNum, that.user_id, that.location = ''

      that.fullNameErrorMsg = false
      that.userPwdErrorMsg = false
      that.phnNumErrorMsg = false
      that.locErrorMsg = false
      that.userIdErrorMsg = false
      that.btnDisabled = false
    },
    validationForUserData () {
      let that = this;
      if (that.fullName === '') {
        that.fullNameErrorMsg = true
        return false
      } else {
        that.fullNameErrorMsg = false
        return true
      }
      if (that.password === '') {
        that.userPwdErrorMsg = true
        return false
      } else {
        that.userPwdErrorMsg = false
        return true
      }
      if (that.phnNum === '' ) {
        that.phnNumErrorMsg = true
        return false
      } else {
        that.phnNumErrorMsg = false
        return true
      }
      if (that.location === '' ) {
        that.locErrorMsg = true
        return false
      } else {
        that.locErrorMsg = false
        return true
      }
      if (that.user_id === '' ) {
        that.userIdErrorMsg = true
        return false
      } else {
        that.userIdErrorMsg = false
        return true
      }
    },
    showNotify (msg) {
      let that = this
      that.$q.notify({
        color: 'green',
        textColor: 'white',
        message: msg,
        position: 'bottom-right',
        timeout: 3000
      })
    }
  }
}
</script>

<style>
</style>
