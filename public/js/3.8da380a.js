(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{Sw7Y:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-layout",[s("div",{staticClass:"register-page regist_s"},[s("div",{staticClass:"window-height window-width row justify-center items-center"},[s("div",{staticClass:"col-md-6 right window-height items-center justify-center"},[s("div",{staticClass:"row window-height items-center justify-center"},[s("q-card",{staticClass:"bigger qcard_s",attrs:{flat:""}},[s("div",{attrs:{id:"recaptcha-container"}}),s("q-card-title",[s("div",{staticClass:"row",attrs:{align:"center"}},[s("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"}),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("img",{staticClass:"img_s",attrs:{srcset:"statics/germ.png 5x, ",alt:"…"}}),s("img",{attrs:{srcset:"statics/l2.png 5x, ",alt:"…"}})]),s("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"})])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-sm-12 col-xs-12"},[s("q-card-main",[s("q-field",[s("p",{staticClass:"caption cap_rs"},[t._v("First Name")]),s("q-input",{staticClass:"input-field inline_s",attrs:{type:"text"},model:{value:t.firstName,callback:function(a){t.firstName=a},expression:"firstName"}}),t.firstNameErrorMsg?s("div",{staticClass:"first_s"},[t._v("\n                  Please Enter the First Name.\n                ")]):t._e()],1)],1)],1),s("div",{staticClass:"col-md-6 col-sm-12 col-xs-12"},[s("q-card-main",[s("q-field",[s("p",{staticClass:"caption cap_rs"},[t._v("Last Name")]),s("q-input",{staticClass:"input-field inline_s",attrs:{type:"text"},model:{value:t.lastName,callback:function(a){t.lastName=a},expression:"lastName"}}),t.lastNameErrorMsg?s("div",{staticClass:"first_s"},[t._v("\n                  Please Enter the Last Name.\n                ")]):t._e()],1)],1)],1),s("div",{staticClass:"col-md-6 col-sm-12 col-xs-12"},[s("q-card-main",[s("q-field",[s("p",{staticClass:"caption cap_rs"},[t._v("Email Address")]),s("q-input",{staticClass:"input-field inline_s",attrs:{type:"text"},model:{value:t.emailId,callback:function(a){t.emailId=a},expression:"emailId"}}),t.emailIdErrorMsg?s("div",{staticClass:"first_s"},[t._v("\n                  Please Enter the Email Id.\n                ")]):t._e()],1)],1)],1),s("div",{staticClass:"col-md-6 col-sm-12 col-xs-12"},[s("q-card-main",[s("q-field",[s("p",{staticClass:"caption cap_rs"},[t._v("Mobile Number")]),s("q-input",{staticClass:"input-field inline_s",attrs:{type:"number"},model:{value:t.mobileNo,callback:function(a){t.mobileNo=a},expression:"mobileNo"}}),t.mobileNoErrorMsg?s("div",{staticClass:"first_s"},[t._v("\n                  Please Enter the Mobile Number.\n                ")]):t._e()],1)],1)],1),s("div",{staticClass:"col-md-6 col-sm-12 col-xs-12"},[s("q-card-main",[s("q-field",[s("p",{staticClass:"caption cap_rs"},[t._v("Role")]),s("q-select",{attrs:{options:t.roleDataOptions},on:{input:function(a){t.roleChangeEvent(a)}},model:{value:t.dropDownRole,callback:function(a){t.dropDownRole=a},expression:"dropDownRole"}}),t.roleErrorMsg?s("div",{staticClass:"first_s"},[t._v("\n                  Please Select the Role.\n                ")]):t._e()],1)],1)],1),s("div",{staticClass:"col-md-6 col-sm-12 col-xs-12"},[t.doctorsDiv?s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-sm-6 col-xs-6"},[s("q-card-main",[s("q-field",[s("p",{staticClass:"caption cap_rs"},[t._v("General Pathology")]),s("q-select",{attrs:{options:t.GeneralPathologyOptions},model:{value:t.GeneralPathology,callback:function(a){t.GeneralPathology=a},expression:"GeneralPathology"}}),t.GeneralPathologyErrorMsg?s("div",{staticClass:"first_s"},[t._v("\n                      Please Select.\n                    ")]):t._e()],1)],1)],1),s("div",{staticClass:"col-md-6 col-sm-6 col-xs-6"},[s("q-card-main",[s("q-field",[s("p",{staticClass:"caption cap_rs"},[t._v("Oncopathology")]),s("q-select",{attrs:{options:t.OncopathologyOptions},model:{value:t.Oncopathology,callback:function(a){t.Oncopathology=a},expression:"Oncopathology"}}),t.OncopathologyErrorMsg?s("div",{staticClass:"first_s"},[t._v("\n                      Please Select.\n                    ")]):t._e()],1)],1)],1)])]):t._e()])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"}),s("div",{staticClass:"col-md-4 col-sm-12 col-xs-12"},[s("q-card-main",[s("q-btn",{staticClass:"full-width fin_s",on:{click:function(a){t.submitUserData()}}},[t.btnLoading?s("q-spinner-hourglass",{staticClass:"on-left"}):t._e(),s("span",{staticClass:"otp_fs"},[t._v("SUBMIT")])],1)],1)],1),s("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"})])],1)],1)])])])])},o=[];e._withStripped=!0;var i=s("WTFv"),l=s("eelU"),r=s("SC7v"),n=s("XYut"),c=s("dkar"),d=s("ZYCo"),m=s("OggR"),u=s("bduK"),p=s("cFFF"),h=s("UlvI"),g=s("o2AP"),f={components:{QSelect:i["a"],QField:l["a"],QBtn:r["a"],QInput:n["a"],QCard:c["a"],QCardTitle:d["a"],QCardMain:m["a"],QCardActions:u["a"],QLayout:p["a"],QCheckbox:h["a"],QSpinnerHourglass:g["a"]},data:function(){return{doctorsDiv:!1,firstName:"",firstNameErrorMsg:!1,emailId:"",emailIdErrorMsg:!1,lastName:"",lastNameErrorMsg:!1,mobileNo:"",mobileNoErrorMsg:!1,roleErrorMsg:!1,btnLoading:!1,dropDownRole:"",roleDataOptions:[{name:"Admin",value:"Admin",label:"Admin"},{name:"Doctor",value:"Doctor",label:"Doctor"},{name:"Student",value:"Student",label:"Student"}],GeneralPathology:"",GeneralPathologyErrorMsg:!1,GeneralPathologyOptions:[{name:"Haematopathology",value:"Haematopathology",label:"Haematopathology"},{name:"Histopathology",value:"Histopathology",label:"Histopathology"},{name:"Clinical pathology",value:"Clinical pathology",label:"Clinical pathology"},{name:"Molecular pathology",value:"Molecular pathology",label:"Molecular pathology"}],Oncopathology:"",OncopathologyErrorMsg:!1,OncopathologyOptions:[{name:"Hemato Oncopathology",value:"Hemato Oncopathology",label:"Hemato Oncopathology"},{name:"Histo Oncopathology",value:"Histo Oncopathology",label:"Histo Oncopathology"}]}},created:function(){firebase.auth().onAuthStateChanged(function(t){t&&console.log("Already logged in user")})},methods:{roleChangeEvent:function(t){var a=this;"Doctor"===t?a.doctorsDiv=!0:(a.doctorsDiv=!1,a.Oncopathology="",a.GeneralPathology="")},submitUserData:function(){var t=this;if(t.validationForUserData()){var a=(new Date).getTime();if("Doctor"===t.dropDownRole)var s={firstName:t.firstName,lastName:t.lastName,emailId:t.emailId,mobileNo:t.mobileNo,role:t.dropDownRole,generalPathology:t.GeneralPathology,oncopathology:t.Oncopathology,is_active:!0,createdAt:a,updatedAt:a,deletedAt:"",createdBy:"",updatedBy:"",deletedBy:""};else s={firstName:t.firstName,lastName:t.lastName,emailId:t.emailId,mobileNo:parseInt(t.mobileNo),role:t.dropDownRole,is_active:!0,createdAt:a,updatedAt:a,deletedAt:"",createdBy:"",updatedBy:"",deletedBy:""};firebase.database().ref("userDetails").push(s).then(function(){console.log("User's data inserted"),t.$q.notify({color:"green",textColor:"white",message:"Data has been entered succussfully",position:"bottom-left",timeout:3e3}),t.emtpyAllFields(),t.$router.push("/admin/dashboard")}).catch(function(a){console.log(a),t.$q.notify({color:"black",textColor:"white",message:"Data couldn't be saved.Please try again later.",position:"bottom-left",timeout:3e3}),t.emtpyAllFields()})}},emtpyAllFields:function(){var t=this;t.firstName="",t.lastName="",t.emailId="",t.mobileNo="",t.dropDownRole="",t.GeneralPathology="",t.Oncopathology=""},validationForUserData:function(){if(""===this.firstName)return this.firstNameErrorMsg=!0,!1;if(this.firstNameErrorMsg=!1,""===this.lastName)return this.lastNameErrorMsg=!0,!1;if(this.lastNameErrorMsg=!1,""===this.emailId)return this.emailIdErrorMsg=!0,!1;if(this.emailIdErrorMsg=!1,""===this.mobileNo)return this.mobileNoErrorMsg=!0,!1;if(this.mobileNoErrorMsg=!1,""===this.dropDownRole)return this.roleErrorMsg=!0,!1;if(this.roleErrorMsg=!1,"Doctor"===this.dropDownRole){if(""===this.GeneralPathology)return this.GeneralPathologyErrorMsg=!0,!1;if(this.GeneralPathologyErrorMsg=!1,""===this.Oncopathology)return this.OncopathologyErrorMsg=!0,!1;this.OncopathologyErrorMsg=!1}return!0}}},v=f,y=(s("uq7m"),s("KHd+")),C=Object(y["a"])(v,e,o,!1,null,null,null);a["default"]=C.exports},bduK:function(t,a,s){"use strict";s("Z2Ku"),s("L9s1");a["a"]={name:"QCardActions",props:{vertical:Boolean,align:{type:String,default:"start",validator:function(t){return["start","center","end","around","between"].includes(t)}}},computed:{classes:function(){return"q-card-actions-".concat(this.vertical?"vert column justify-start":"horiz row"," ")+"".concat(this.vertical?"items":"justify","-").concat(this.align)}},render:function(t){return t("div",{staticClass:"q-card-actions",class:this.classes},this.$slots.default)}}},o2AP:function(t,a,s){"use strict";var e=s("Cz1F");a["a"]={name:"QSpinnerHourglass",mixins:[e["a"]],render:function(t){return t("svg",{staticClass:"q-spinner",class:this.classes,attrs:{width:this.size,height:this.size,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"}},[t("g",[t("path",{staticClass:"glass",attrs:{fill:"none",stroke:"currentColor","stroke-width":"5","stroke-miterlimit":"10",d:"M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"}}),t("clipPath",{attrs:{id:"uil-hourglass-clip1"}},[t("rect",{staticClass:"clip",attrs:{x:"15",y:"20",width:"70",height:"25"}},[t("animate",{attrs:{attributeName:"height",from:"25",to:"0",dur:"1s",repeatCount:"indefinite",vlaues:"25;0;0",keyTimes:"0;0.5;1"}}),t("animate",{attrs:{attributeName:"y",from:"20",to:"45",dur:"1s",repeatCount:"indefinite",vlaues:"20;45;45",keyTimes:"0;0.5;1"}})])]),t("clipPath",{attrs:{id:"uil-hourglass-clip2"}},[t("rect",{staticClass:"clip",attrs:{x:"15",y:"55",width:"70",height:"25"}},[t("animate",{attrs:{attributeName:"height",from:"0",to:"25",dur:"1s",repeatCount:"indefinite",vlaues:"0;25;25",keyTimes:"0;0.5;1"}}),t("animate",{attrs:{attributeName:"y",from:"80",to:"55",dur:"1s",repeatCount:"indefinite",vlaues:"80;55;55",keyTimes:"0;0.5;1"}})])]),t("path",{staticClass:"sand",attrs:{d:"M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z","clip-path":"url(#uil-hourglass-clip1)",fill:"currentColor"}}),t("path",{staticClass:"sand",attrs:{d:"M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z","clip-path":"url(#uil-hourglass-clip2)",fill:"currentColor"}}),t("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 50 50",to:"180 50 50",repeatCount:"indefinite",dur:"1s",values:"0 50 50;0 50 50;180 50 50",keyTimes:"0;0.7;1"}})])])}}},uq7m:function(t,a,s){"use strict";var e=s("wwU8"),o=s.n(e);o.a},wwU8:function(t,a,s){}}]);