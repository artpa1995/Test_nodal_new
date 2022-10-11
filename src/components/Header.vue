<template>
  <div class="header">
      <div class="contents">
       <Buttons  @click=" modal = !modal;" :value=" 'open' " />
          <div class="modal" :class="iconClass"  @click=" close_modal">
              <div class="modal_content">
                <div class="content">
                  <div class="modal_info">
                    <p class="procent">
                      <span class="procent_value">10%</span>
                      <span class="procent_text">off</span>
                    </p>
                    <p class="text_title">your first order</p>
                    <div class="line"></div>
                    <p class="content_text">Subscrive to recieve 10% off promocode plus exclusive offers and deals</p>
                    <div class="email_content">
                      <p class="label_email">Email-adress</p>
                      <input type="email" id="email" class="email" name="email" v-model.trim="email">
                      <div class="erorrs_block">
                        <p class="erorrs" :class="{ empty_fild:email_error}">Please write down your EMAIL</p>
                        <p class="erorrs" :class="{ empty_fild:email_invalid_error}">Please write down your correct EMAIL</p>
                        <p class="erorrs" :class="{ empty_fild:duplicate_email_error}">You have already subscribed to the newsletter</p>
                        <p class="erorrs" :class="{ empty_fild:check_error}">Subscribe is not possible without your consent.</p>
                        <p class="success" :class="{ success_fild:success}">You have successfully subscribed to the newsletter.</p>
                      </div>
                    </div>
                    <Buttons   @click="Subscribe" :value=" 'Subscribe' " />
                    <div class="form_check">
                      <span class="checkbox" @click="check = !check" > <p :class="{ check: check, empty_error:check_error }"></p></span>
                      <span class="form_check_text" @click="check = !check">I’m agree with privacy policy</span>
                    </div>
                </div>
                </div>
                <div class="modal_content_bg">
                   
                </div>
                <span
                    class="close"
                    @click=" modal = !modal;">
                    &times;
                  </span>
          
             </div>
          </div>
    </div>
  </div>
  
</template>

<script>

import Buttons from '@/components/Buttons.vue';



export default {
  name: 'Header',
  props: {
   
  },
  components: {
    Buttons,

  },
  data() {
    return {
      open: false,
      modal: false,
      lokallang:localStorage.getItem('lang'),
      email_error: false,
      check_error: false,
      email_invalid_error: false,
      errors: [],
      success: false,
      email: null,
      check_error: false,
      empty_error: false,
      check: false,
      duplicate_email_error: false,
    }
  },
  mounted() {

  },
  methods:{
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    
    Subscribe: function (){
      this.email_error = false;
      this.check_error = false;
      this.email_invalid_error = false;
      this.success = false;
      this.duplicate_email_error = false;
 
      let flag = true;
      if (!this.email) {
        this.email_error = true;
        flag = false;
        return;
      } else if (!this.validEmail(this.email)) {
        this.email_invalid_error = true;
        flag = false;
        return;
      }
      if (this.check == false) {
        this.check_error = true;
        flag = false;
        return;
      }
      if(!flag){
        return;
      }
      let  users = [];
      users = JSON.parse(localStorage.getItem("users"));
      let duplicate_email = '';
      if(users !=  null){
        duplicate_email =  users.find((email) => {
        return email == this.email;
      })
      }
    
      if(duplicate_email){
        this.duplicate_email_error = true;
        return
      }
      if(!users){
        users = [];
      }
      users.push(this.email);
      localStorage.setItem("users", JSON.stringify(users));
      this.success = true;
    }
  },
  computed: {
      iconClass() {
          return this.modal ? '' : 'close_modal';
        }
      },
  
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Overpass:wght@400;700&display=swap');


.erorrs_block{
  margin-top: 0.3rem;
}
.erorrs{
  list-style: none;
  color:red;
  background: #ff000021;
  font-style: italic;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  text-align: center;
  border-radius:0.313rem;
  display: none;
  width: 100%;
  margin-bottom:0.313rem;
}

  .success{
  list-style: none;
  color:green;
  background: #4bea6321;
  font-style: italic;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  text-align: center;
  border-radius:0.313rem;
  display: none;
  width: 100%;
  margin-bottom:0.313rem;
  }
.success_fild{
  display: block;
}
 .empty_fild{
  display: block;
}

.form_check {
    display: flex;
    justify-content: flex-start;;
    width: 100%;
    align-items: center;
    margin-top: 1.2rem;
}

.checkbox {
  min-width: 1rem;
  height: 1rem;
  border:0.25rem solid #C24DFEFF;
  cursor: pointer;
  margin-right: 1rem;
  margin-top:0.25rem;
  border-radius:0.313rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.check {
  
  background: #C24DFEFF;
  width: 0.625rem;
  height: 0.625rem;
  background-size: 50%;
  box-shadow: 0px 0px 0.25rem rgba(0, 0, 0, 0.25);
  border-radius:0.25rem;
}

.form_check_text {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.modal_info{
  position: absolute;
  z-index: 120;
  max-width: 23rem;
  width: 100%;
}
.modal_info>p>a{
   text-decoration: none;
}
.modal_info>p>a:hover{
   text-decoration: underline;
}
.close_modal{
  display: none !important;;
}
.modal {
  position: fixed;
  z-index: 1;
  padding-top: 6.25rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}
.modal_content {
  background-image: url('../assets/Rectangle193.png');
  background-position: right;
  background-color: #fefefe;
  background-repeat: no-repeat;
  background-size: 81%;
  border-radius:0.313rem;
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  max-width: 54rem;
  position: relative;
}
.modal_content_bg {
  background-image: url('../assets/image38.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  max-width: 54rem;
  -webkit-clip-path: polygon(81% 0, 100% 40%, 100% 201%, 0 0%);
  clip-path: polygon(81% 0, 100% 40%, 100% 201%, 0 0%);
}

.content{
  width: 100%;
  max-width: 16.875rem;
  height: 100%;
  padding-left: 1.25rem;
  padding-top: 2rem;
  box-sizing: border-box;
  height: 31.875rem;
}

.procent_text{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1.688rem;
  color: #2F3639FF;
}

.procent_value {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 6.5rem;
  line-height: 100%;
  color: #2F3639FF;
}

.text_title{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 100%;
  color: #828688;
  margin-top: 1rem;
}
.line{
  max-width: 4.188rem;
  height: 0.125rem;
  background: #C24DFE;
  border-radius: 0.625rem;
  margin-top: 1.25rem;
}
.content_text{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 120%;
  width: 100%;
  max-width: 23.313rem;
  display: flex;
  align-items: center;
  position: absolute;
  margin-top: 1.25rem;
  color: #595E61;
}
.email_content{
  margin-top: 5rem;
}
.label_email {
  font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 0.75rem;
line-height: 0.875rem;
color: #828688;
}

.email {
  width: 85%;
  max-width: 22.313!important;
  height: 2.5rem;
  background: #FFFFFF;
  border: 1px solid #D5D7D7;
  border-radius: 0.375rem;
  margin-top: 0.5rem;
  padding-left: 1rem;
}
.email:hover {
  border: 1px solid #AF72FFFF;
}
.email:focus{
  border: 1px solid #AF72FFFF;
  outline: none;
}
.email:active{
  border: 1px solid #AF72FFFF;
}

.close {
  color: #2F3639;
  float: right;
  font-size: 1.563rem;
  font-weight: bold;

  position: absolute;
    left: 97%;
    top: 0.75rem;
}

.close:hover,
.close:focus {
  color: #2f3639ab;
  text-decoration: none;
  cursor: pointer;
}

@media screen and (max-width: 845px) {
 
  .close{
    left: 95%;
  }
  .modal_info{
    max-width: 20rem;
  }
  .modal_content_bg {
    background-size: unset;
  }
  .modal_content{
    background-size: unset;
  }
}

@media screen and (max-width: 580px) {
  .modal_content_bg{
    display: none;
  }
}

@media screen and (max-width: 450px) {
  #sidemenu nav {
   margin-top: 1.25rem;
}
  
}

</style>
