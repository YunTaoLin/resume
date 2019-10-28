<template>
    <div class="wrap">
        <div class="banner">
                <div class="container-fluid">
                    <div class="col-xl-6 offset-xl-1 col-lg-8">
                        <div class="form-area wow fadeInUp">
                            <!-- <transition name="fade"> -->
                                <div v-if="success" class="success">
                                    <h2>
                                        <i class="icon icon-mail"></i>
                                        站內信已送出！
                                    </h2>
                                    <button @click="success = false">＜發送其他訊息＞</button>
                                </div>
                                <form v-else>
                                    <h2>站內信</h2>
                                    <label >
                                        <span>我的姓名：</span>     
                                        <input type="text" placeholder="Your Name" v-model='name'>
                                    </label>
                                    <label >
                                        <span>我的信箱：</span> 
                                        <input type="email" placeholder="Your Email" v-model='email'>
                                    </label>
                                    <label >
                                        <span>我的留言：</span> 
                                        <textarea  cols="30" rows="7" placeholder="Your Message" v-model='message'></textarea>
                                    </label>
                                    <button id="msg-btn" @click="updataMessage">{{ submit? '上傳中...' : '送出'}}</button>
                                </form>
                            <!-- </transition> -->
                            
                        </div>
                    </div>
                </div>
        </div>







    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return{
            name: '',
            email: '',
            message: '',
            submit: false,
            success: false
        }
    },
    methods:{
        clear(){
            this.name =  '';
            this.email =  '';
            this.message = '';
        },
        updataMessage(){
            this.submit= true;
             $.ajax({
                type: "post",
                data: {
                    name:this.name,
                    email:this.email,
                    message:  this.message
                },
                url: "https://script.google.com/macros/s/AKfycbwpjzFqOY8QwZSb3F9GJ_VX5euGVDHaVrcc24oqb4bqez4lJnE/exec"    
            }).done(()=>{
                this.clear();
                this.submit= false;
                this.success=  true;

            }).fail((err) =>{
                this.clear();
                this.submit= false;
                this.success=  true;
            })
        }
    },
    created(){
        $('html, body').scrollTop(0);
    }
    
}
</script>










<style lang="scss" scoped>

    .banner{
        width: 100%;
        height: 90vh;
        background: url('../assets/msg-bg.jpg');
        background-color: #222;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        display: flex;
        align-items: center;
    }   
    .form-area{
            background: linear-gradient(45deg,rgba(83, 182, 179, 0.7), rgba(222, 144, 183, 0.7));
            padding: 5%;
            margin: 0 12%;
            border-radius: 16px;
            box-shadow: 0 2px 8px 8px rgba(24, 27, 27, 0.5);
            @media (max-width:425px) {
                 margin:  0 4%;
                }
            form{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                width:100%;
                font-family: 'Noto Sans TC', sans-serif;
                h2{
                    font-size: 32px;
                    line-height: 48px;
                    margin: 4px 0 20px;
                    color:#a3ffff;
                    align-self: center;
                    position: relative;
                    z-index: 2;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &:before,&:after{
                        content: '';
                        display: block;
                        z-index: -1;
                        width: 3.5em;
                        height: 1.5px;
                        background-color: #a3ffffa9;
                        margin:12px;
                        @media (max-width:425px) {
                            width: 3em;
                        }
                    }
                    @media (max-width:768px) {
                            font-size: 20px;
                            line-height: 32px;
                        }
                    
                }
                label{
                    color: rgb(225, 225, 225);
                    width: 100%;
                    font-weight: 400;
                    margin: 20px 0;
                    display: flex;
                    justify-content: space-between;
                    &:nth-child(3){
                        display: flex;
                        justify-content: center;
                        }
                    @media (max-width:425px) {
                        flex-direction: column;
                        align-items: center;
                        margin: 8px 0;
                        }
                    span{
                        width: 6em;
                        margin-left: auto;
                        padding-top: 5px;
                        font-size: 18px;
                        @media (max-width:768px) {
                            font-size: 16px;
                            margin-bottom: 12px;
                            margin-right: auto;
                        }
                    }
                    input,textarea{
                        width: 75%;
                        padding: 8px;
                        line-height: 1.5em;
                        background-color: rgba(247, 247, 247, 0.2);
                        border: 2px solid #fff;
                        border-radius: 4px;
                        &:focus{
                            outline: none;
                            border-color: rgba(0, 255, 255, 0.4);
                        }
                        @media (max-width:425px) {
                            width: 100%;
                            font-size: 14px;
                            margin-left: 0;
                        }
                        &::placeholder{
                            color:#333;
                        }
                    }
                    
                }
                #msg-btn{
                    background-color: rgba(51, 51, 51, 0.2) ;
                    color: #fefefe;
                    border: 2px solid #eee;
                    padding: 12px 0;
                    width: 7em;
                    letter-spacing: 4px;
                    border-radius: 4px;
                    transform: translateX(-4.5vw);
                    transition:.3s;
                    cursor: pointer;
                    &:hover{
                        background-color: rgba(0, 78, 78, 0.5);
                        color: #fefefe ;
                        border: 2px solid rgba(0, 255, 255);
                        }
                    }
                }
                .success{
                    height: 40vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    h2{
                        color:#fefefe;
                    }
                    button{
                        border: none;
                        background-color: transparent;
                        cursor: pointer;
                        align-self: flex-end;
                        padding: 4px 12px;
                        font-weight: 700;
                        font-size: 18px;
                        color: #444;
                        margin-right: 15%;
                        transition: .3s;
                        &:hover{
                            color:#a3daff;
                        }
                        &:active{
                            outline: none;
                        }
                    }
                }
            }
    
    
</style>