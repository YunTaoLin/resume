<template>
  
    <div class="wrapper">
    <transition name="loading">
        <div class="loading" v-if='loading'>
          Loading...
          <div class="inner-load">
              <svg>
                  <rect id="loading-rect"></rect>
              </svg>
          </div>
        </div>
    </transition>
  <!-- --------------RWD Fullpage Web-------------- -->
      <section>
        <!-- 做為增加按鈕，晚點新增route -->
        <router-link class="plus-btn" to='/works/updataFullpage'><span>管理作品</span> </router-link>
        <header>
          <p class="sm-title">Fullpage Web</p>
          <h3>一頁式網站</h3>
        </header>
        <button id="left-btn" class="left-btn" v-on:click="ToLeft(0)" v-if='nowPage.Fullpage >1 '>〈</button>
        <button id="right-btn" class="right-btn" v-on:click="ToRight(0)" v-if='nowPage.Fullpage < totalPage.Fullpage'>〉</button>
        <div class="work" id="Fullpage">
          <!-- 這邊要用v-for -->
            <div class="work-item" v-for='item in worksData.Fullpage' :key='item.id'>
              <div class="pic">
                <a :href="item.webLink"><img :src="item.img" alt="作品" v-on:error="pleaceImg"></a>
              </div>
              <div class="text">
                <h4><a :href="item.webLink">{{item.title}}</a></h4>
                <p><span>簡介：</span>{{item.context}}</p>
                <p class="Anthor"><a :href="item.webLink">＜前往網站＞</a></p>
                <a :href="item.gitLink" class="btn">Github</a>
              </div>
            </div>
        </div>
      </section>

<!-- ----------------Multipage----------------------------- -->
 <section>
        <!-- 做為增加按鈕，晚點新增route -->
        <router-link class="plus-btn" to='/works/updataMultipage'><span>管理作品</span> </router-link>
        <header>
          <p class="sm-title">Multipage web</p>
          <h3>多頁式網站</h3>
        </header>
        <button id="left-btn" class="left-btn" v-on:click="ToLeft(1)" v-if='nowPage.Multipage >1 '> 〈 </button>
        <button id="right-btn" class="right-btn" v-on:click="ToRight(1)" v-if='nowPage.Multipage < totalPage.Multipage'>〉</button>
        <div class="work" id="Multipage">
          <!-- 這邊要用v-for -->
            <div class="work-item" v-for='item in worksData.Multipage' :key='item.id'>
              <div class="pic">
                <a :href="item.webLink"><img v-bind:src="item.img" alt="作品" v-on:error="pleaceImg"></a>
              </div>
              <div class="text">
                <h4><a :href="item.webLink">{{item.title}}</a></h4>
                <p><span>簡介：</span>{{item.context}}</p>
                 <p class="Anthor"><a :href="item.webLink"> ＜前往網站＞ </a></p>
                <a v-bind:href="item.gitLink" class="btn">Github</a>
              </div>
            </div>
        </div>
      </section>
<!-- ---------------------Practical-------------------------------- -->
  <section>
        <!-- 做為增加按鈕，晚點新增route -->
         <router-link class="plus-btn" to='/works/updataPractical'><span>管理作品</span> </router-link>
        <header>
          <p class="sm-title">Component Design</p>
          <h3>元件設計</h3>
        </header>
        <button id="left-btn" class="left-btn" v-on:click="ToLeft(2)" v-if='nowPage.Practical >1 '> 〈 </button>
        <button id="right-btn" class="right-btn" v-on:click="ToRight(2)" v-if='nowPage.Practical < totalPage.Practical'>〉</button>
        <div class="work" id="Practical">
          <!-- 這邊要用v-for -->
            <div class="work-item" v-for='item in worksData.Practical' :key='item.id'>
              <div class="pic">
                <a :href="item.webLink"><img :src="item.img" alt="作品"  v-on:error="pleaceImg"></a>
              </div>
              <div class="text">
                <h4><a :href="item.webLink" >{{item.title}}</a></h4>
                <p><span>簡介：</span>{{item.context}}</p>
                 <p class="Anthor"><a :href="item.webLink">＜前往網站＞</a></p>
                <a :href="item.gitLink" class="btn">Github</a>
              </div>
            </div>
        </div>
      </section>
    </div>
  </template>

<script>
import $ from 'jquery'
export default {
  name:'Works',
  data(){
    return {
      loading:true,
      view:[0,0,0],
      wherePage:[0,0,0],
      DB_link:[
        // Fullpage
        "https://script.google.com/macros/s/AKfycbz32Dm9svOAHCGziwUm9JmLUZEX6srfBz9X90j92E5akBbc875b/exec",
        // practical
        "https://script.google.com/a/gapp.fju.edu.tw/macros/s/AKfycbyeG3c8vQEPB9N_Xcjx_-ryR1qR2wC1rdjf2ISf/exec",
        // Multipage
        "https://script.google.com/a/gapp.fju.edu.tw/macros/s/AKfycbz4F8nvmDHfZDwlAhT_l31cvd8Zu9nduor2VvhDyA/exec"
      ],
      worksData:{
        Fullpage:[],
        Practical:[],
        Multipage:[]
      },
      cardWidth: 400 

      
    }
  },
 
  
  mounted(){
    let length = this.DB_link.length
    let now =["Fullpage","Practical","Multipage"]
    for(let i= 0 ; i< length ; i++){
        $.ajax({
          type: 'get',
          url: this.DB_link[i],
          data: {}
        }).done((res)=> {
          this.worksData[now[i]] = res;
          if(i ==2 ) {
            $('html, body').scrollTop(0);
            this.loading=false;
            }
          this.cardWidth =  $('.work-item').outerWidth(true);
         
        }).fail(() =>{
           if(i ==2 ) {this.loading=false;}
        });
    }
    
  
  },
  computed:{
    totalPage(){
      //總共有幾個畫面要呈現
      let Fullpage = this.page('Fullpage');
      let Multipage = this.page('Multipage');
      let Practical = this.page('Practical')
      return {Fullpage:Fullpage ,Multipage:Multipage,Practical:Practical}
    },
    nowPage(){
      //目前所在位置,剛近來時在正中間，ex:需要三頁，則進來時在第二頁
       let Fullpage = Math.round(this.totalPage.Fullpage/2)+this.wherePage[0]
       let Multipage = Math.round(this.totalPage.Multipage/2)+this.wherePage[1]
       let Practical = Math.round(this.totalPage.Practical/2)+this.wherePage[2]
      return  {Fullpage:Fullpage ,Multipage:Multipage,Practical:Practical}
     }

     
  },
  methods:{
    ToLeft(index){
      this.$set(this.wherePage,index,this.wherePage[index]-1);
      this.$set(this.view,index,this.view[index]+50)
      let work = document.getElementsByClassName('work')
      $(work[index]).css("transition","1.5s")
      $(work[index]).css("transform","translateX("+this.view[index]+"vw)")
    },
    ToRight(index){
      this.$set(this.wherePage,index,this.wherePage[index]+1);
      this.$set(this.view,index,this.view[index]-50)
      let work = document.getElementsByClassName('work')
       $(work[index]).css("transition","1.5s")
       $(work[index]).css("transform","translateX("+this.view[index]+"vw)","transition",".3s")
    },
    pleaceImg(e){
      $(e.target).attr("src", "https://i.imgur.com/BpdGQ21.png");
    },
    page(who){
      //item總寬度先剪掉視窗寬度，之後平分兩半，計算總共幾個視窗寬度才能容納，且總頁數需奇數。
        return Math.ceil((this.cardWidth*this.worksData[who].length-document.body.clientWidth)/2/(document.body.clientWidth/2))*2+1
    }

  }
}
</script>



<style lang="scss" scoped>
// @import '../../css/global.scss';
// -------start Loading動畫----------
.loading{
  position: fixed;
  width: 100vw;
  height: 95vh;
  background:url('../assets/bg2.jpg')  top center , #191E21;
  background-size: cover;
  color: #fefefe;
  z-index: 998;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 700;
  .inner-load{
    margin: 20px;
    width: 105px;
    height: 105px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
  }
}
svg {
  width: 100px;
  height: 100px;
  rect {
        width: 100px;
        height: 100px;
        fill: none;
        stroke: #00adff;
        stroke-width: 100px;
        stroke-dashoffset: 50%;
        stroke-dasharray: 100;
        transition: 2s;
        animation: animate 1s linear infinite;
    }
  &:hover rect {
        stroke: #ff0;
    }
}
@keyframes animate {
    to {
        stroke-dashoffset: 250%;
    }
}

.loading-leave-active{
  transition: 1s;
}
.loading-leave-to{
  opacity: 0;
}
    
    
    
    
    
   


// --------end Loading動畫--------------------------
section{
  overflow: hidden;
  position: relative;
  padding:5vh 0 10vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff8ee;
 
  // -------start header------------------
  header{
    margin-top: 20px;
    letter-spacing: 2px;
    width: 50%;
    @media (max-width:425px) {
      width: 100%;
    }
    p{
      width: 50%;
      // background-color: red;
      margin: 0 auto;
      padding: 10px 0;
      color: #999999;
      letter-spacing: 2px;
      // text-transform: uppercase;
      border-bottom: 1px solid #999999;
    }
    h3{
      margin-top: 12px;
      font-size: 32px;
    }
  }
     
  // -------end header------------------


  .left-btn{
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 100%;
    padding: 20px;
    font-weight: 800;
    font-size: 40px;
    color: #111;
    z-index: 99;
    background-color: transparent;
    border: none;
    @media (max-width: 768px) {
        left:-20px;
      };
    @media (max-width: 425px) {
        left:-7%;
        };
    &:focus{outline: none}
    &::before{
      content: '';
      transform: translateX(-50px);
      width: 150px;
      height: 100%;
      background-color: #fdf8f1b6;
      box-shadow: 10px 0  10px #fdf8f1b6;
      // filter: blur(5px);
      mix-blend-mode: screen;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      @media (max-width: 768px) {
        width: 20vw;
        };
      @media (max-width: 425px) {
        width: 25vw;
        };
  }
    
  }
  .right-btn{
    position: absolute;
    top: 0%;
    right: 0;
    display: inline-block;
    height: 100%;
    padding: 20px;
    font-weight: 800;
    font-size: 40px;
    color: #111;
    z-index: 99;
    background-color: transparent;
    border: none;
    @media (max-width: 768px) {
        right:-20px;
      };
    @media (max-width: 425px) {
        right:-7%;
        };
    &:focus{outline: none}
    &::before{
      content: '';
      transform: translateX(50px);
      width: 150px;
      height: 100%;
      background-color: #fdf8f1b6;
      box-shadow: -10px 0  10px #fafafab6;
      // filter: blur(10px);
      mix-blend-mode:  screen;
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
      @media (max-width: 768px) {
        width: 20vw;
        };
      @media (max-width: 425px) {
        width: 25vw;
        };
      }
  }
   &:nth-of-type(even){
   background:rgba(0, 0, 0, 0.5);
    &::before{
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      background: url('../assets/night-sky-stars.jpg')  center bottom / 100% 100%;
      background-size: cover;
      background-attachment: fixed;

    }
    
    .left-btn{
      color: #fff;
      &::before{
      background-color: rgba(15, 20, 22, 0.7);
      box-shadow: 10px 0  10px rgba(15, 20, 22, 0.7);
      mix-blend-mode:  normal ;
      @media (max-width: 768px) {
        width: 20vw;
        };
      @media (max-width: 425px) {
        width: 25vw;
        };
    }
    }
    .right-btn{
      color: #fff;
      &::before{
      background-color: rgba(15, 20, 22, 0.7);
      box-shadow: -10px 0  10px rgba(15, 20, 22, 0.7);
      mix-blend-mode:  normal ;
      @media (max-width: 768px) {
        width: 20vw;
        };
      @media (max-width: 425px) {
        width: 25vw;
        };
    }
    }
    header h3{
      color: #fefefe;
    }
 
  }
  
}

// ------作品展示區---------------
.work{
  display: flex;
  width: auto;
  justify-content: center;
  flex-wrap: nowrap;
  padding: 0 80px;
  position: relative;
  transform: translateX(0vw);
  
}

.work-item{
  flex-shrink:0;
  margin: 0 20px;
  width: 360px;
  height: 480px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #111;
  position: relative;
  box-shadow: 2px 10px 20px rgb(212,192,212,.4);
  @media (max-width:425px) {
    margin: 0 12px;
    width: 240px;
    height: 320px;
  }
  &:last-child::after{
    content: '';
    position: absolute;
    top: 0;
    right: -100px;
    width: 100px;
    height: 20px;
    // background-color: #F00;
  }
    .pic{
      width: 100%;
      height: 60%;
      border-radius: 7px 7px 0 0 ;
      overflow: hidden;
      @media (max-width:425px) {
        height: 50%;
      }
      a{
        width: 100%;
        height: 100%;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .5s;
        }
      }
      &:hover img{
        transform: scale(1.3);
      }
    
    }
  .text{
    border-top: 1px solid #aaa;
    padding: 10px;
    text-align: left;
    h4{
      margin: 10px;
      @media (max-width:425px) {
        font-size: 18px;
        margin: 4px;
      }
    }
    p{
      padding-left: 10px;
      width: 90%;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      @media (max-width:425px) {
        font-size: 14px;
        line-height: 16px;
      }
    }
    .Anthor{
      position: absolute;
      left: 10px;
      bottom: 4px;
      a{
        color:#35495E;
        font-weight: 700;
        font-size: 18px;
        position: relative;
        transition: .5s;
        @media (max-width:425px) {
          font-size: 16px;
          line-height: 18px;
        }
        &:hover{
          color: #0E8846;
        }
        &:after{
          content: '';
          width: 0;
          height: 2px;
          background-color: #0E8846;;
          position: absolute;
          bottom: -0.3em;
          left: 0;
          transition: .5s;
        }
        &:hover:after{
          width: 5.5em;
        }
      }
    }
    a.btn{
      position: absolute;
      display: inline-block;
      padding: 10px;
      border: 1px solid rgb(46, 168, 138);
      color: rgb(46, 168, 138);
      border-radius: 15px;
      right: 15px;
      bottom: 15px;
      font-weight: 400;
      font-family:  'Comic Sans MS';
      transition: .3s;
      @media (max-width:425px) {
        font-size: 14px;
        padding: 6px;
        border-radius: 4px;
        }
      &:hover{
        background-color: rgb(46, 168, 138);
        color: #fff;
      }
      
    }
    
  }
 
  }
  .plus-btn{
    position: absolute;
    top: 7vh;
    right:10vw;
    font-size: 18px;
    display: inline-block;
    font-weight: 700;
    font-family: '微軟正黑體';
    padding:15px 20px;
    background-color: #f9fef9;
    border: 1.5px solid #0E8846;
    color: #0E8846;
    box-shadow: 2px 3px 3px rgb(0,0,0,.2);
    border-radius: 15px;
    cursor: pointer;
    overflow: hidden;
    transition: .5s;
    z-index: 100;
    @media (max-width: 425px) {
      top: auto;
      bottom: 5%;
      right:5%;
      padding:5px 8px;
      font-size: 14px;
      border-radius: 4px;
      border: 1.5px solid #666;
      background-color: #666;
      color: #fff;
      };
    span{
      position: relative;
      z-index: 666;
    }
    &::after{
      content: '';
      background-color: #0E8846;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 150px;
      height: 150px;
      transform: translate(-50%,-50%) scale(0);
      border-radius: 50%;
      z-index: 1;
      transition: .5s;
      
    }
    
    &:hover{
      color: #f9fef9;
    }
    &:hover:after{
      transform: translate(-50%,-50%)  scale(1);

    }

  }
@keyframes sp-hover {
  0%{
    color: #0E8846;
  }
  50%{
    color: #f3f3f3;
  }
  100%{
     color: #0E8846;
  }
  
}
@keyframes sp-inner-hover {
  0%{
    transform: translate(-50%,-50%) scale(0);
  }
  50%{
    transform: translate(-50%,-50%)  scale(1);
  }
  100%{
    transform: translate(-50%,-50%)  scale(0);
  }
}

</style>
  
