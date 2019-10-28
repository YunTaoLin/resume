<template>
        <div class="container">
            <div class="sex">
            </div>
            <h2>{{title}}作品集</h2>
            <div class="row">
                <form class="col-12 col-lg-6" >
                    <h2>新增作品集</h2>
                    <label>
                        
                        <input type="text" id="title"  v-model="Data.title">
                        <span>網站標題</span>
                    </label>
                    <label>
                        
                        <input type="text" id="webLink"  v-model="Data.webLink">
                        <span>網站連結</span>
                    </label>
                    <label>
                        
                        <textarea  id="context" cols="30" rows="3"  v-model="Data.context" ></textarea>
                        <span class="spical">簡單描述</span>
                    </label>
                    <label>
                        
                        <input type="text" id="gitLink" v-model="Data.gitLink" >
                        <span>原始碼連結</span>
                    </label>
                    <label>
                        
                        <input type="text" id="img" placeholder=""  v-model="Data.img">
                        <span>圖片src</span>
                    </label>
                    <!-- <label>
                        
                        <input type="password" id="password" placeholder=""  v-model="Data.password">
                        <span>使用者密碼</span>
                    </label> -->
                        <p><span><br></span></p>
                    <div class="btn-gruop">
                        <button id="updata" v-on:click="updata">上傳</button>
                        <router-link to='/portfolio'><button id="cancel" class="mt-1" >取消</button></router-link>
                    </div>
                </form>
                <div class="list-control col-12 col-lg-6">
                    <div v-if="Loading" class="list-control-inner col-12" >
                        <p class="Loading">Loading...</p>    
                    </div>
                    <div class="list-control-inner col-12 col-lg-10" v-else>
                            <div class="list-header">
                                <ul>
                                    <li>網站名稱</li>
                                    <li>說明</li>
                                    <li>操作</li>
                                </ul>
                            </div>
                            <div class="list">
                                <ul>
                                    <!-- 要跑v-for -->
                                    <li v-for='(item, index) in worksData' :key='item.id'>
                                        <div class="web-title" :title="item.title">{{item.title}}</div>
                                        <div class="context" :title="item.context">{{item.context}}</div>
                                        <div class="control">
                                            <button id="del" v-on:click="del(index)"><i class="icon icon-trash-empty"></i></button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import $ from 'jquery'
export default {
    name: 'update',
    props: {
        data_url: String,
        title:String
    },
    data(){
            return {
                Data:{
                    method: "write",
                    id:0,
                    title:'',
                    context:'',
                    img:'',
                    gitLink:'',
                    webLink:'',
                    name:'',
                    password:''
                },
                worksData:[],
                Loading: true
            }
    },
    computed:{
        screen(){
            return window.screen.width;
        }
    },
    methods:{
        cancel(){
            this.Data.title='';
            this.Data.context='';
            this.Data.img='';
            this.Data.gitLink='';
            this.Data.webLink='';
            this.Data.name='';
            this.Data.password='';
        },
        updata(){
            let password = prompt ( "請輸入密碼" );
            this.Loading= true;
            $.ajax({
                type: "get",
                data: {
                    method: "Updata",
                    title:$('#title').val(),
                    context:$('#context').val(),
                    img:$('#img').val(),
                    gitLink:$('#gitLink').val(),
                    webLink:$('#webLink').val(),
                    name:"YunTao",
                    password: password
                },
                url: this.data_url    
            }).done((res)=>{
                if(res.res == '密碼錯誤') alert('密碼錯誤，請重新上傳')
                this.get();
            }).fail(() =>{
                this.get();
            })
           this.cancel();
        },
        del(index){
            let password = prompt ( "請輸入密碼" );
            this.Loading= true;
            let del_id = this.worksData[index].id;
             $.ajax({
                type: "get",
                data: {
                    method: "Delete",
                    id: del_id,
                    password: password
                },
                url:this.data_url  
            }).done((res)=>{
                if(res.res == '密碼錯誤') alert('密碼錯誤，刪除失敗')
                this.get();
                
            }).fail(() =>{
            })

        },
        get(){
            this.Loading= true;
            $.ajax({
                type: 'get',
                url: this.data_url,
                data: {
                    method: "read"
                }
            }).done((res)=> {
                this.worksData = res;
                this.Loading = false;
                
            
            }).fail(() =>{
            });
            }
    },
    mounted(){
        $('.banner').css('background',this.bg+'no-repeat center center / 100% 100%')
         this.get();
        
    }
}
</script>


<style lang="scss" scoped>
@import "../../css/fontello.css";
   

    .container{
        display: flex;
        flex-direction: column;
        position: relative;
        margin: 100px 10vw;
        background:linear-gradient(45deg,rgba(94, 184, 236, 0.7)  , rgb(66%, 72%, 95% ,.7) );
        border-radius: 20px;
        >h2{
            font-size: 28px;
            text-align: center;
            color: #fefefe;
            margin-bottom: 20px;
            }

        img{
            width: 20vw;
            position: absolute;
            top: 0;
            right: -23vw;
            border-radius: 5px;
            & ~ div{
                width: 200px;
                height: 100px;
                background-color: rgba(255, 255, 255, 0.95);
                position: absolute;
                top: 5vh;
                right: -4vw;
                z-index: 998;
                border-radius: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 700;
                opacity: 0;
                &.say{
                    animation: sex 5s;
                }
                &::after{
                    content: '';
                    border-left: 20px solid rgba(255, 255, 255, 0.95);
                    border-top: 12px solid transparent;
                    border-bottom: 12px solid transparent;
                    position: absolute;
                    top: 55%;
                    right: -20px;
                }
            }
        }
        .row{
            width: 100%;
            margin: 0;
        }
    }
    form{
        display: flex;
        height: auto;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-bottom: 40px;
        h2{
            font-size: 28px;
            margin-bottom:8px; 
            align-self: center;
            color: #aff;
        }
        
        label{
            width: 100%;
            text-align: left;
            display: flex;
            align-items: center;
            span{
                font-family: '微軟正黑體';
                display: inline-block;
                text-align: right;
                width: 30%;
                font-size: 18px;
                font-weight: 900;
                order: -1;
                transition: all .5s;
                &.spical{
                    transform: translateY(-20px);
                }
            }
            input{
                background-color: transparent;
                outline: none;
                color: rgb(17, 17, 17);
                font-size: 18px;
                font-weight: 700;
                border: 1px solid #fff;
                padding: 8px 20px;
                border-radius: 5px;
                width: 60%;
                margin: 10px;
                &:focus ~ span{
                    color: rgba(0, 255, 255, 0.7);
                    text-shadow: 0 2px 10px rgb(252,252,252,.2);
                    }
                
                &::placeholder{
                    color: rgb(10, 82, 43);
                    font-weight: 400;
                    font-size: 14px;
                }    
            }
            textarea{
                background-color: transparent;
                outline: none;
                color: rgb(17, 17, 17);
                font-size: 18px;
                font-weight: 700;
                border: 1px solid #fff;
                padding: 8px 20px;
                width: 60%;
                margin: 10px;
                resize: none;
                border-radius: 5px;
                &:focus ~ span{
                    color: rgba(0, 255, 255, 0.7);
                    text-shadow: 0 2px 10px rgb(252,252,252,.2);
                }
            }
        }
        > P{
            margin-top: -10px;
            margin-left: 35%;
        }
        .btn-gruop{
            display: flex;
            width: 100%;
            transform: translateX(20px);
            justify-content: center;
            button{
                background-color: transparent;
                border: none;
                padding: 10px 20px;
                margin:  0 8px;
                border-radius: 10px;
                vertical-align: bottom;
                cursor: pointer;
                &:focus{
                    outline: none;
                }
                &#updata{
                    background-color: rgb(10, 82, 44);
                    color: #ccc;
                    font-weight: 700;
                    padding: 14px 24px;
                    font-size: 18px;
                    box-shadow: 0px 2px 4px 1px rgba(0, 35, 0, 0.5) ;
                    &:hover{
                        text-decoration: underline;
                    }
                    &:active{
                        box-shadow: 0px 2px 4px rgba(0, 35, 0, 0.6) ;
                    }
                }
                &#cancel{
                    border: 2px solid rgb(37, 37, 37);
                     color: rgb(66, 61, 63);
                     transition: .3s;
                    &:hover{
                        background-color :rgb(37, 37, 37);
                        color: #ccc;
                    }
                }
            }
        }
    }



    .list-control{
        margin: 2vh 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .list-control-inner{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            border: 2px solid aqua;
            height: 52vh;
            border-radius: 20px;
            position: relative;
            overflow: auto;
            @media (max-width:768px) {
                height: 40vh;
                border-radius: 12px;
            }
            .list-header{
                box-sizing: border-box;
                padding: 4px 0;
                font-size: 18px;
                height: 5vh;
                line-height: 5vh;
                font-weight: 400;
                color: #333;
                @media (max-width:768px) {
                    font-size: 16px;
                }
                ul{
                    width: 100%;
                    display: flex;
                    background: rgba(130, 200, 221, 0.2);
                    border-radius: 10px 10px 0 0;
                   
                    li{
                        &:nth-of-type(1){
                            width: 25%;
                            text-align: left;
                            padding-left: 1em;
                            white-space: nowrap;
                        }
                        &:nth-of-type(2){
                            width: 55%;
                        }
                        &:nth-of-type(3){
                            width: 20%;
                            text-align: right;
                            padding-right: 1em;
                            white-space: nowrap;
                        }
                    }
                }
            }
            .list{
                margin-top: 8px;
                height: 55vh;
                width: 100%;
                // background-color: #faa;
                ul{
                    width: 100%;
                    height: 100%;
                    overflow: auto;
                     li{
                        display: flex;
                        width: 100%;
                        font-family: '微軟正黑體';
                        font-weight: 800;
                        font-size: 16px;
                        text-align: center;
                        height: 40px;
                        line-height: 40px;
                        border-top: 1px solid #ccc;
                        @media (max-width:425px) {
                            font-size: 14px;
                        }
                        .context{
                            width: 55%;
                            font-size: 14px;
                            white-space:nowrap;
                            overflow: hidden;
                            text-overflow : ellipsis;
                        }
                        .web-title{
                            width: 25%;
                            color: #add;
                            white-space:nowrap;
                            overflow: hidden;
                            text-overflow : ellipsis;
                            text-align: left;
                            padding-left: 1em;
                            
                        }
                        .control{
                            width: 20%;
                            text-align: right;
                            padding-right: 1em;
                            #del{
                                background-color: transparent;
                                border: none;
                                cursor: pointer;
                                &:focus{
                                    outline: none;
                                }
                            }
                        }
                    }
                }

               
            }
            .Loading{
                font-size: 32px;
                font-weight: 700;
                color: rgba(0, 255, 255, 0.685);
                margin: 0;
            }
            
        }
    }
@keyframes sex {
    0%{opacity: 0;}
    5%{opacity: 1;}
    90%{opacity: 1;}
    100%{opacity: 0;}
    
}
</style>