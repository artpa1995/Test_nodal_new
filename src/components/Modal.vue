<template>
    <div >
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
      
        }
      },
      mounted() {
    
      },
      methods:{
        
         close_modal: function (event) {
          let close = event.target.className;
          if (close == 'modal') {
            this.close = false;
          }
        }
      },
      computed: {
      iconClass() {
          return this.modal ? '' : 'close_modal';
        }
      },
    };
    </script>
  
  <style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Overpass:wght@400;700&display=swap');

.modal_info{

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
  padding-top: 100px;
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
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  max-width: 54rem;
  height: 502px;
  position: relative;
}
.modal_content_bg {
  background-image: url('../assets/image38.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  max-width: 54rem;
  height: 100%;
  -webkit-clip-path: polygon(81% 0, 100% 40%, 100% 201%, 0 0%);
  clip-path: polygon(81% 0, 100% 40%, 100% 201%, 0 0%);
}

.content{
  width: 100%;
  max-width: 270px;
  height: 100%;
  padding-left: 1.25rem;
  padding-top: 2rem;
  box-sizing: border-box;
}

.procent_text{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  color: #2F3639FF;
}

.procent_value {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 104px;
  line-height: 100%;
  color: #2F3639FF;
}

.text_title{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #828688;
  margin-top: 1rem;
}
.line{
  max-width: 4.188rem;
  height: 0.125rem;
  background: #C24DFE;
  border-radius: 10px;
  margin-top: 1.25rem;
}
.content_text{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  width: 100%;
  max-width: 23.313rem;
  display: flex;
  align-items: center;
  position: absolute;
  margin-top: 1.25rem;
  color: #595E61;
}

.close {
  color: #2F3639;
  float: right;
  font-size: 25px;
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




@media screen and (max-width: 1024px) {

  .modal_content{
    width: 45%;
  }
}
@media screen and (max-width: 450px) {
  #sidemenu nav {
   margin-top: 20px;
}
  .modal_content{
    width: 80%;
  }
  
}
@media screen and (max-width: 340px) {

}
@media screen and (max-width: 332px) {
 
}
  </style>
  