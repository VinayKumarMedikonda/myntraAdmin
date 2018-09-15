(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"7D5r":function(e,a,t){"use strict";var s=t("smmD"),i=t.n(s);i.a},"8D9g":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"ABOUT"},[t("q-card",{staticClass:"bg-white"},[e.spinner?t("div",{staticClass:"loader"}):e._e(),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12",attrs:{align:"right"}},[t("q-btn",{attrs:{slot:"right"},on:{click:function(a){e.addUser()}},slot:"right"},[e._v("ADD SPEAKERS")])],1)]),t("q-table",{attrs:{data:e.tableData,title:"Speakers",columns:e.columns,color:"black",filter:e.filter,separator:e.separator,"row-key":"name",loading:e.loading},scopedSlots:e._u([{key:"top-right",fn:function(a){return[t("q-search",{staticClass:"col-12",model:{value:e.filter,callback:function(a){e.filter=a},expression:"filter"}})]}},{key:"body",fn:function(a){return t("q-tr",{staticClass:"cursor-pointer",attrs:{props:a}},[e._l(a.cols,function(s){return t("q-td",{key:s.name,attrs:{props:a}},[e._v("\n         "+e._s(s.value)+"\n       ")])}),t("q-td",[t("q-btn",{staticClass:"q-mr-xs",attrs:{color:"green",icon:"edit"},on:{click:function(t){e.editUserData(a.row)}}})],1)],2)}}])}),t("q-modal",{attrs:{"no-backdrop-dismiss":"","content-css":{minWidth:"70vw",minHeight:"40vh"}},model:{value:e.userModalAdd,callback:function(a){e.userModalAdd=a},expression:"userModalAdd"}},[t("q-modal-layout",[t("q-toolbar",{staticClass:"bg-secondary",attrs:{slot:"header"},slot:"header"},[e.addUserDiv?t("q-toolbar-title",[e._v("\n            Add New Speaker\n          ")]):e._e(),e.editUserDiv?t("q-toolbar-title",[e._v("\n            Edit Speaker\n          ")]):e._e(),t("q-btn",{staticStyle:{float:"right"},attrs:{flat:"",round:"",dense:"",icon:"close"},on:{click:function(a){e.closePopUp()}}})],1),t("div",{staticClass:"layout-padding",attrs:{align:"center"}},[t("div",{staticClass:"row",staticStyle:{"padding-top":"20px","font-size":"15px"}},[t("div",{staticClass:"col-md-3 col-sm-5 col-xs-5",attrs:{align:"right"}},[e._v("\n             First Name\n             ")]),t("div",{staticClass:"col-md-1 col-sm-1 col-xs-1"}),e._v(":\n             "),t("div",{staticClass:"col-md-1 col-sm-1 col-xs-1"}),t("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"},[t("q-input",{attrs:{min:"0","border-line":"green"},model:{value:e.firstNameSpeaker,callback:function(a){e.firstNameSpeaker=a},expression:"firstNameSpeaker"}}),e.firstNameSpeakerErrMsg?t("div",{staticClass:"msg",staticStyle:{color:"red","font-size":"14px","padding-top":"10px"}},[e._v("\n               * Please Enter The Last Name.\n             ")]):e._e()],1)]),t("div",{staticClass:"row",staticStyle:{"padding-top":"20px","font-size":"15px"}},[t("div",{staticClass:"col-md-3 col-sm-5 col-xs-5",attrs:{align:"right"}},[e._v("\n             Last Name\n             ")]),t("div",{staticClass:"col-md-1 col-sm-1 col-xs-1"}),e._v(":\n             "),t("div",{staticClass:"col-md-1 col-sm-1 col-xs-1"}),t("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"},[t("q-input",{attrs:{min:"0","border-line":"green"},model:{value:e.lastNameSpeaker,callback:function(a){e.lastNameSpeaker=a},expression:"lastNameSpeaker"}}),e.lastNameSpeakerErrMsg?t("div",{staticClass:"msg",staticStyle:{color:"red","font-size":"14px","padding-top":"10px"}},[e._v("\n               * Please Enter The Last Name.\n             ")]):e._e()],1)]),t("div",{staticClass:"row",staticStyle:{"padding-top":"20px","font-size":"15px"}},[t("div",{staticClass:"col-md-3 col-sm-5 col-xs-5",attrs:{align:"right"}},[e._v("\n             Email Address\n             ")]),t("div",{staticClass:"col-md-1 col-sm-1 col-xs-1"}),e._v(":\n             "),t("div",{staticClass:"col-md-1 col-sm-1 col-xs-1"}),t("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"},[t("q-input",{attrs:{min:"0","border-line":"green"},model:{value:e.emailIdSpeaker,callback:function(a){e.emailIdSpeaker=a},expression:"emailIdSpeaker"}}),e.emailIdSpeakerErrMsg?t("div",{staticClass:"msg",staticStyle:{color:"red","font-size":"14px","padding-top":"10px"}},[e._v("\n               * Please Enter The Email Id.\n              ")]):e._e()],1)]),t("div",{staticClass:"row",staticStyle:{"padding-top":"20px","font-size":"15px"}},[t("div",{staticClass:"col-md-3 col-sm-5 col-xs-5",attrs:{align:"right"}},[e._v("\n               Mobile Number\n             ")]),t("div",{staticClass:"col-md-1 col-sm-1 col-xs-1"}),e._v(":\n             "),t("div",{staticClass:"col-md-1 col-sm-1 col-xs-1"}),t("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"},[t("q-input",{attrs:{min:"0",type:"text","border-line":"green",readonly:e.readonly},model:{value:e.mobileNoSpeaker,callback:function(a){e.mobileNoSpeaker=a},expression:"mobileNoSpeaker"}})],1)]),t("div",{staticClass:"row",staticStyle:{"padding-top":"20px","font-size":"15px"}},[t("div",{staticClass:"col-md-3 col-sm-5 col-xs-5",attrs:{align:"right"}},[e._v("\n               Speaker Image\n             ")]),t("div",{staticClass:"col-md-1 col-sm-1 col-xs-1"}),e._v(":\n             "),t("div",{staticClass:"col-md-1 col-sm-1 col-xs-1"}),e.image?t("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-10 col-md-10 col-sm-10 col-xs-10",attrs:{align:"right"}},[t("i",{staticClass:"material-icons",staticStyle:{cursor:"pointer","padding-top":"6px","font-size":"25px"},attrs:{onclick:"document.getElementById('file').click()"}},[e._v("\n                  edit\n                  ")])]),t("input",{ref:"file",staticClass:"full-width",staticStyle:{display:"none"},attrs:{type:"file",align:"right",id:"file",label:"Upload excel file"},on:{change:function(a){e.onFileChange(a)}}}),t("div",{staticClass:"desktop-only"},[t("img",{staticClass:"avatar",attrs:{src:e.image,alt:"profile"}})])])]):t("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"},[t("div",{staticClass:"desktop-only"},[t("img",{staticClass:"avatar",attrs:{src:"statics/avatar.png",alt:"profile"}}),t("input",{ref:"file",attrs:{type:"file"},on:{change:e.onFileChange}})]),t("div",{staticClass:"mobile-only",attrs:{align:"center"}},[t("img",{staticClass:"mobile-avatar",attrs:{src:"statics/avatar.png",alt:"profile"}})]),e.mobileNoSpeakerErrMsg?t("div",{staticClass:"msg",staticStyle:{color:"red","font-size":"14px","padding-top":"10px"}},[e._v("\n              * Please Enter The Mobile No.\n              ")]):e._e()])]),t("div",{staticClass:"row",staticStyle:{"padding-top":"20px","font-size":"15px"}},[t("div",{staticClass:"col-md-3 col-sm-5 col-xs-5",attrs:{align:"right"}},[e._v("\n             Description\n             ")]),t("div",{staticClass:"col-md-1 col-sm-1 col-xs-1"}),e._v(":\n             "),t("div",{staticClass:"col-md-1 col-sm-1 col-xs-1"}),t("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"},[t("q-input",{attrs:{min:"0",type:"textarea",rows:"3","float-label":"Speaker Description"},model:{value:e.eventDescSpeaker,callback:function(a){e.eventDescSpeaker=a},expression:"eventDescSpeaker"}}),e.eventDescSpeakerErrorMsg?t("div",{staticClass:"msg",staticStyle:{color:"red","font-size":"14px","padding-top":"10px"}},[e._v("\n               * Please Enter The Event Description.\n               ")]):e._e()],1)]),e.checkStatusForSpeaker?t("div",{staticClass:"row",staticStyle:{"padding-top":"20px","font-size":"15px"}},[t("div",{staticClass:"col-md-3 col-sm-5 col-xs-5",attrs:{align:"right"}},[e._v("\n             Status\n             ")]),t("div",{staticClass:"col-md-1 col-sm-1 col-xs-1"}),e._v(":\n             "),t("div",{staticClass:"col-md-1 col-sm-1 col-xs-1"}),t("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"},[t("q-toggle",{attrs:{color:"green",label:"Inactive","left-label":""},model:{value:e.checkStatus,callback:function(a){e.checkStatus=a},expression:"checkStatus"}})],1)]):e._e(),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"}),t("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"}),t("div",{staticClass:"col-md-4 col-sm-12 col-xs-12",staticStyle:{"padding-top":"20px"},attrs:{align:"right"}},[t("q-card-main",[t("q-btn",{staticClass:"full-width fin_s",attrs:{disabled:e.disableSbtn},on:{click:function(a){e.submitUserData()}}},[t("span",{staticClass:"otp_fs"},[e._v("SUBMIT")])])],1)],1),t("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"})])])],1)],1)],1)],1)},i=[];s._withStripped=!0;t("f3/d"),t("a1Th"),t("rGqo");var l=t("xgT5"),r=t("YqlJ"),o=t("Ztd7"),n=t("ezih"),c=t("U/5N"),d=t("CVJq"),p=t("dkar"),m=t("ZYCo"),u=t("WTFv"),g=t("L0iJ"),f=t("YYYh"),v=t("cFFF"),b=t("KnAT"),h=t("vJud"),k={components:{QTable:l["a"],QTh:r["a"],QTr:o["a"],QTd:n["a"],QTableColumns:c["a"],QModal:d["a"],QCard:p["a"],QCardTitle:m["a"],QSelect:u["a"],QUploader:g["a"],QSearch:f["a"],QLayout:v["a"],QModalLayout:b["a"],QToggle:h["a"]},data:function(){return{tableData:[],loading:!1,separator:"cell",filter:"",userModalAdd:!1,firstNameSpeaker:"",lastNameSpeaker:"",emailIdSpeaker:"",mobileNoSpeaker:"",eventDescSpeaker:"",firstNameSpeakerErrMsg:!1,lastNameSpeakerErrMsg:!1,emailIdSpeakerErrMsg:!1,mobileNoSpeakerErrMsg:!1,eventDescSpeakerErrorMsg:!1,disableSbtn:!1,addUserDiv:!1,editUserDiv:!1,number:"",userId:"",checkStatusForSpeaker:!1,checkStatus:"",readonly:!1,image:"",eventImg:"",uploadedImg:"",spinner:!1,columns:[{name:"speakerName",required:!0,label:"Speaker Name",align:"center",field:"speakerName",sortable:!0,descending:!1},{name:"speakerEmail",label:"Email ID",align:"center",field:"speakerEmail",sortable:!0},{name:"mobileNo",label:"Mobile No",align:"center",field:"mobileNo",sortable:!0},{name:"speakerBio",label:"Speaker Bio",align:"center",field:"speakerBio",sortable:!0}]}},created:function(){var e=this;firebase.auth().onAuthStateChanged(function(a){e.userId=a.uid}),e.updateDataTable()},methods:{updateDataTable:function(){var e=this;e.loading=!0,setTimeout(function(){e.loading=!1},2e3),e.getUsersData()},getUsersData:function(){var e=this;e.tableData=[],firebase.database().ref("speakersDetails").orderByChild("userid/uid").once("value",function(a){a.forEach(function(a){""!==a.val().firstName&&e.tableData.push({speakerName:a.val().firstName+" "+a.val().lastName,speakerEmail:a.val().emailId,mobileNo:a.val().mobileNo,speakerBio:a.val().DescSpeaker})})})},addUser:function(){var e=this;e.addUserDiv=!0,e.userModalAdd=!0},editUserData:function(e){var a=this;a.readonly=!0,a.editUserDiv=!0,a.userModalAdd=!0,a.checkStatusForSpeaker=!0,firebase.database().ref("speakersDetails").orderByChild("userid/uid").once("value",function(t){t.forEach(function(t){t.val().mobileNo===e.mobileNo&&(a.firstNameSpeaker=t.val().firstName,a.lastNameSpeaker=t.val().lastName,a.mobileNoSpeaker=t.val().mobileNo,a.emailIdSpeaker=t.val().emailId,a.eventDescSpeaker=t.val().DescSpeaker,a.checkStatus=t.val().status,a.image=t.val().speaker_image)})})},submitUserData:function(){var e=this;!0===e.addUserDiv&&e.addUserFunction(),!0===e.editUserDiv&&e.editUserFunction()},editUserFunction:function(){var e=this;if(e.disableSbtn=!0,e.validationForUserData()){var a=(new Date).getTime();e.number="+91"+e.mobileNo;var t=0;firebase.database().ref("speakersDetails").orderByChild("userid/uid").once("value",function(s){s.forEach(function(s){if(e.mobileNoSpeaker.toString()===s.val().mobileNo.toString()&&t<1){console.log("ok");var i={firstName:e.firstNameSpeaker,lastName:e.lastNameSpeaker,emailId:e.emailIdSpeaker,mobileNo:e.mobileNoSpeaker,DescSpeaker:e.eventDescSpeaker,createdAt:s.val().createdAt,updatedAt:a,status:e.checkStatus,createdBy:e.userId};console.log(i),t+=1,firebase.database().ref("speakersDetails").child(s.key).set(i).then(function(){console.log("User's data updated"),e.userModalAdd=!1,e.$q.notify({color:"green",textColor:"white",message:"Speaker Deatials has been updated succussfully",position:"bottom-left",timeout:3e3}),e.updateDataTable(),e.emtpyAllFields(),e.disableSbtn=!1}).catch(function(a){console.log(a),e.$q.notify({color:"black",textColor:"white",message:"Speaker Deatials couldn't be saved.Please try again later.",position:"bottom-left",timeout:3e3}),e.emtpyAllFields(),e.disableSbtn=!1})}}),t=0})}e.disableSbtn=!1},addUserFunction:function(){var e=this;if(e.disableSbtn=!0,e.validationForSpeakersData()){var a=(new Date).getTime();e.number="+91"+e.mobileNoSpeaker;var t={firstName:e.firstNameSpeaker,lastName:e.lastNameSpeaker,emailId:e.emailIdSpeaker,mobileNo:e.number,DescSpeaker:e.eventDescSpeaker,createdAt:a,updatedAt:a,status:!0,speaker_image:e.uploadedImg,createdBy:e.userId},s=0;firebase.database().ref("speakersDetails").orderByChild("userid/uid").once("value",function(a){a.numChildren()>=1?(a.forEach(function(a){e.number!==a.val().mobileNo?s<1&&(s+=1,firebase.database().ref("speakersDetails").push(t).then(function(){console.log("User's data inserted"),e.userModalAdd=!1,e.$q.notify({color:"green",textColor:"white",message:"Speaker has been succussfully",position:"bottom-left",timeout:3e3}),e.updateDataTable(),e.emtpyAllFields(),e.disableSbtn=!1}).catch(function(a){console.log(a),e.$q.notify({color:"black",textColor:"white",message:"Data couldn't be saved.Please try again later.",position:"bottom-left",timeout:3e3}),e.emtpyAllFields(),e.disableSbtn=!1})):s<1&&(e.$q.notify({color:"black",textColor:"white",message:number+" , already exist.Please provide another number",position:"bottom-left",timeout:3e3}),e.disableSbtn=!1)}),s=0):firebase.database().ref("speakersDetails").push(t).then(function(){console.log("Speakers data inserted"),e.userModalAdd=!1,e.$q.notify({color:"green",textColor:"white",message:"Data has been entered succussfully",position:"bottom-left",timeout:3e3}),e.updateDataTable(),e.emtpyAllFields(),e.disableSbtn=!1})})}e.disableSbtn=!1},validationForSpeakersData:function(){return""===this.firstNameSpeaker?(this.firstNameSpeakerErrMsg=!0,!1):(this.firstNameSpeakerErrMsg=!1,""===this.lastNameSpeaker?(this.lastNameSpeakerErrMsg=!0,!1):(this.lastNameSpeakerErrMsg=!1,""===this.emailIdSpeaker?(this.emailIdSpeakerErrMsg=!0,!1):(this.emailIdSpeakerErrMsg=!1,""===this.mobileNoSpeaker?(this.mobileNoSpeakerErrMsg=!0,!1):(this.mobileNoSpeakerErrMsg=!1,""===this.eventDescSpeaker?(this.eventDescSpeakerErrorMsg=!0,!1):(this.eventDescSpeakerErrorMsg=!1,!0)))))},closePopUp:function(){var e=this;e.emtpyAllFields(),e.userModalAdd=!1},emtpyAllFields:function(){var e=this;e.firstNameSpeaker="",e.lastNameSpeaker="",e.emailIdSpeaker="",e.mobileNoSpeaker="",e.eventDescSpeaker="",e.firstNameSpeakerErrMsg=!1,e.lastNameSpeakerErrMsg=!1,e.emailIdSpeakerErrMsg=!1,e.mobileNoSpeakerErrMsg=!1,e.eventDescSpeakerErrorMsg=!1,e.disableSbtn=!1,e.addUserDiv=!1,e.editUserDiv=!1,e.checkStatusForSpeaker=!1,e.readonly=!1,e.image=""},onFileChange:function(e){var a=this;a.spinner=!0,a.eventImg=event.target.files,a.imagesUpload(),setTimeout(function(){a.spinner=!1},2e3)},imagesUpload:function(){var e=this,a=e.eventImg,t=firebase.storage().ref("All_Image_Uploads"),s=+new Date+"-"+a[0].name,i={contentType:a[0].type},l=t.child(s).put(a[0],i);l.on("state_changed",function(a){e.spinner=!0;var t=a.bytesTransferred/a.totalBytes*100;switch(console.log("Upload is "+t+"% done"),a.state){case firebase.storage.TaskState.PAUSED:console.log("Upload is paused");break;case firebase.storage.TaskState.RUNNING:console.log("Upload is running");break}},function(a){console.log(a),e.spinner=!1},function(){l.snapshot.ref.getDownloadURL().then(function(a){e.image=a,e.uploadedImg=a})})},validationForUserData:function(){if(""===this.firstName)return this.firstNameErrorMsg=!0,!1;if(this.firstNameErrorMsg=!1,""===this.lastName)return this.lastNameErrorMsg=!0,!1;if(this.lastNameErrorMsg=!1,""===this.emailId)return this.emailIdErrorMsg=!0,!1;if(this.emailIdErrorMsg=!1,""===this.mobileNo)return this.mobileNoErrorMsg=!0,!1;if(this.mobileNoErrorMsg=!1,""===this.dropDownRole)return this.roleErrorMsg=!0,!1;if(this.roleErrorMsg=!1,"Doctor"===this.dropDownRole){if(""===this.experinceType)return this.experinceTypeErrorMsg=!0,!1;if(this.experinceTypeErrorMsg=!1,""===this.doctorType)return this.doctorTypeErrorMsg=!0,!1;this.doctorTypeErrorMsg=!1}if("General Pathology"===this.doctorType){if(""===this.GeneralPathology)return this.GeneralPathologyErrorMsg=!0,!1;this.GeneralPathologyErrorMsg=!1}if("Oncopathology"===this.doctorType){if(""===this.Oncopathology)return this.OncopathologyErrorMsg=!0,!1;this.OncopathologyErrorMsg=!1}return!0}}},S=k,N=(t("7D5r"),t("KHd+")),C=Object(N["a"])(S,s,i,!1,null,null,null);a["default"]=C.exports},smmD:function(e,a,t){}}]);