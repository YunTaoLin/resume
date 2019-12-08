<template >
  <div class="index" >
    <div class="background"></div>
    
    <div class="wrap">
      <div class="mainArea">

<!-- -----------start about------------ -->
        <section class="about">
          <div class="container">
            <img src="../assets/m/01.png" alt="裝飾圖片" class="d-img d-01 wow fadeIn" v-parallax="0.5">
            <img src="../assets/m/05.png" alt="裝飾圖片" class="d-img d-02 wow fadeIn" v-parallax="0.5">
            <div class="row">
              <div class="about_context col-lg-5 col-12 order-lg-0 order-1 wow bounceInLeft">
                <h2>About Me <br><span class="">你好，我是耘滔 YunTao</span></h2>
                <p>畢業於輔仁大學心理學系。<br>
                  曾經的夢想是成為一位UX研究員，<br>
                  後來因緣際會下接觸了前端技術，<br>
                  發現自己在將網站實做出來的過程中，<br>
                  可以獲得極大的成就感，<br>
                  從此便對程式的世界產生了豐富的好奇心。<br>
                  <br>
                  期許未來能夠使用自身的經驗解決各種問題。
                </p>
              </div>
              <div class="col-lg-5 col-12 ">
                <div class="about_pic wow flipInY ">
                  <img src="../assets/大頭照2.jpg" alt="我的大頭照">
                  <div class="say wow fadeIn" data-wow-delay="2s">I'm YunTao !</div>
                </div>
              </div>
            </div>
         </div>
        </section>
<!-- -----------end about------------ -->
<!-- -----------start skill------------ -->
        <section class="skill">
          <img src="../assets/m/maple.png" alt="裝飾圖片" class="d-img d-03 wow fadeIn" v-parallax="0.5">
          <div class="container">
             <h2>專業技能</h2>
             <div class="row">
               <div class="col-lg-4 col-md-6 col-12">
                 <div class="skill-html ">
                    <h3>
                      <div class="pic">
                        <img src="../assets/CSS3_and_HTM.png" alt="HTML、CSS圖片">
                      </div>
                       HTML、CSS
                    </h3>
                    
                    <ul>
                        <li>了解使用語意化的方式架構HTML。</li>
                        <li>熟悉RWD切版，響應各裝置版型。</li>
                        <li>以模組化方式建構CSS (SCSS)，<br>並遵循OOCSS或BEM命名規則。</li>
                        <li>CSS preprocessor：SCSS</li>
                        <li>熟悉Bootstrap、Element等UI框架。</li>
                    </ul>
                 </div>
                 
               </div>
               <div class="col-lg-4 col-md-6 col-12">
                 <div class="skill-js ">
                    <h3>
                      <div class="pic">
                        <img src="../assets/JS.png" alt="Javascript圖片">
                      </div>
                     Javascript
                    </h3>
                    <ul>
                        <li>熟悉ES6語法，以及JS各項特性與原理。（eg. prototype、closure、scope）</li>
                        <li>能夠使用原生JS實作出Jquery的各種動畫效果。</li>
                        <li>熟悉Ajax串接後端API。</li>
                        <li>熟悉非同步事件處理。</li>
                        <li>有使用過Typescript的經驗。</li>
                    </ul>
                 </div>
                
               </div>
               <div class="col-lg-4 col-md-6 col-12">
                 <div class="skill-vue ">
                    <h3>
                      <div class="pic">
                        <img src="../assets/logo.png" alt="Vue.js圖片">
                      </div>
                      Vue.js
                    </h3>
                    
                    <ul>
                        <li>熟悉Vue的各種功能，<br> 以及使用Vue Devtools進行debug。</li>
                        <li>了解Vue生命週期，以及使用時機。</li>
                        <li>熟悉Vue router與Vuex。</li>
                        <li>熟悉Vue Cli 2、3的相關配置。</li>
                        <li>能夠切割組件進行封裝，便於維護。</li>
                        <li>理解MVVM開發模式。</li>
                    </ul>
                  </div>
                </div>
                 
               <div class="col-lg-6 col-md-6 col-12">
                 <div class="skill-node wow slideInLeft">
                    <h3>
                      <div class="pic">
                        <img src="https://icon-library.net/images/nodejs-icon/nodejs-icon-13.jpg" alt="Node.js圖片">
                      </div>
                      Node.js
                    </h3>
                    
                    <ul>
                        <li>使用Express框架，並配置各項中間件。</li>
                        <li>自行設計路由與API，進行CRUD。</li>
                        <li>配置Session進行狀態管理。</li>
                        <li>熟悉art-template模板引擎。</li>
                        <li>會使用MySQL、MongoDB等資料庫。</li>
                        <li>有獨自開發會員式部落格的經驗(前端+後端)。</li>
                    </ul>
                 </div>
                 <div class="skill-dev wow slideInLeft">
                    <h3>
                      開發工具
                    </h3>
                    
                    <ul>
                        <li>編輯器：VSCode、SublimeText3</li>
                        <li>NPM包管理工具。</li>
                        <li>Git版本控管。</li>
                        <li>Webpack自動化打包。(會配置、擴展)</li>
                        <li>Postman與Json-serve模擬RESTful API。</li>
                        <li>Google Search Console測試SEO成效。</li>
                    </ul>
                 </div>
               </div>
               <div class="col-md-12 col-lg-6">
                 <div class="skill-uiux wow slideInRight">
                   <h3>
                      UIUX相關
                    </h3>
                    <ul>
                        <li>大學期間曾在巨匠電腦進修平面設計。</li>
                        <li>熟悉Adobe PS/AI/XD等軟體的基本操作。作品連結：
                          <a 
                          target="_blank"
                          href="https://drive.google.com/drive/folders/1nvwzZhNg07VXYGoW2Ly_PnikI3dHZoiN?usp=sharing">點我。</a>
                        </li>
                        <li>對設計流程有概念。eg. Wireframe、Prototype</li>
                        <li>大學曾修過使用者經驗專題課程，該作品獲得班級小組第一名。</li>
                        <li>懂得使用Material Design提供的guideline優化UX設計。</li>
                    </ul>
                 </div>
                 <div class="skill-other wow slideInRight">
                   <h3>
                      其他技能
                    </h3>
                    
                    <ul>
                        <li>Linux遠端部屬經驗（Ubuntu）。</li>
                        <li>Google Sheet：一年的功能性報表製作經驗。</li>
                        <li>Google App Script（使用JS操作Google Drive)<br>
                          <ol>
                            <li>簡易API設計，搭配Google Sheet製作簡易資料庫。
                              <a 
                              target="_blank"
                              href="https://script.google.com/d/1S04DF740M--y9k6zVBY7Uvf3QwtmalQvJB2woPRmEzcoiZV0oTjjCQRK/edit?usp=sharing">點我</a>
                              。
                            </li>
                             <li>
                               實習期間獨自完成能夠批量新增、修改試算表的應用程式，協助同事們解決繁瑣重複性高的工作。
                              <a 
                              target="_blank"
                              href="https://script.google.com/macros/s/AKfycbxVy3B3rDhOtD9QKr1fTOJWYfv9kCcGa-YAXaLXrK1RqNWgmGEP/exec">點我</a>
                              。
                            </li>
                          </ol>
                        </li>
                        <li>其他接觸過的程式語言：C++、Python、PHP。</li>
                        
                    </ul>
                 </div>
               </div>
             
          </div>
          </div>
        </section>
  <!-- -----------end skill------------ -->
  <!-- -----------start works------------ -->
        <section class="works">
          <div class="container works-inner wow slideInUp">
            <div class="works-context">
              <h2>作品集 <br><p>Portfolio</p></h2>
              
              <div class="btn-group">
                <router-link class="workLink" to="/portfolio" >前往作品集</router-link>
                <a href="https://github.com/YunTaoLin?tab=repositories" class="gitLink">Github<i class="icon icon-github"></i></a>
              </div>
            </div>
          </div>
        </section>
      </div>
  <!-- -----------end works------------ -->
  
   </div>


    
  </div>
</template>

<script>
// @ is an alias to /src

import $ from 'jquery'
export default {
  name: 'home',
  created(){
        $('html, body').scrollTop(0);
  },
  destroyed(){
    $(window).off('scroll');
  }

}
</script>

<style lang="scss" scoped>
$primary-color:rgba(46, 168, 138);
$secondary-color:#35495E;
$black-color:#222;
$white-color: #fefefe;
$spical-color: #0E8846;

  .index{
    font-family: 'Noto Sans TC', sans-serif;
    .background{
      background: url('../assets/bg.jpg') center center / 100% 100%;
      background-repeat: no-repeat;
      position: fixed;
      background-attachment: fixed;
      opacity: .8;
      width: 100vw;
      height: 100vh;
      z-index: -1;
    }

//---------------------
//$main主要區
//---------------------


    .wrap{
      width: 100%;
      padding: 96px 0 24px;
      margin-top: -66px;
      height: 100%;
    }
    .mainArea{
      max-width: 95vw;
      background-color: #fff; 
      margin: 8px auto;
      border-radius: 20px  20px  0 0;
      padding: 4px 0;
      box-shadow: 0 4px 8px 2px rgba(95, 95, 95, 0.2);
      position: relative;
      z-index: 1;
    }
  }

//---------------------
//$About  
//---------------------
.about{
  padding: 60px 0;
  .row{
    display: flex;
    justify-content: center;
  }
  .about_context{
    // margin: 40px 0 0;
     h2{
      font-size: 30px;
      text-align: left;
      padding: 24px 4px;
      line-height: 48px;  
      position: relative;
      @media (max-width:991px) {
        line-height: 60px;
        text-align: center;
      }
      span{
        font-weight: 600;
        font-size: 18px;
        line-height: 32px ;
      }
      &:after{
        content: '';
        height: 4px;
        width: 5em;
        background-color: $primary-color;
        position: absolute;
        left: 0;
        @media (max-width:991px) {
          width: 8em;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
         }
      }
    }
    p{
      text-align: left;
      line-height: 2.5;
      @media (max-width:991px) {
        text-align: center;
        line-height: 2;
      }
    }
  }
 
  .about_pic{
    margin: 80px auto ;
    width: 100%;
    margin-right: auto;
    position: relative;
    @media (max-width:991px) {
      margin: 20px auto ;
      width: 50%;
    }
    
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 2px solid #aaa;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);  
      border-radius: 8px;
    }
    .say{
      width: 8em;
      height: 75px;
      background:$secondary-color;
      color: #FFF;
      position: absolute;
      top: 30%;
      left: 0%;
      transform: translateX(-105%);
      text-align: center;
      z-index: 998;
      border-radius: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
       @media (max-width:991px) {
        font-size: 15px;
        padding: 8px;
        width: 6em;
        height: 50px;
        top: 35%;
        text-align: left;
        border-radius: 10px;
      }
       @media (max-width:375px) {
        font-size: 14px;
        padding: 8px;
        width: 6em;
        height: 50px;
        top: 20%;
        border-radius: 4px;
      }
      &::after{
          content: '';
          border-left: 16px solid $secondary-color;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          position: absolute;
          top: 55%;
          right: 0;
          transform: translateX(95%)
      }   
    }
    
  }
}

//---------------------
//$Skill
//---------------------
.skill{
  position: relative;
  margin-top: 10vh;
  @media (min-width:768px) {
      padding: 0 16px;
    } 
  h3{
    font-size: 28px;
    line-height: 40px;
    display: flex;
    align-items: center;
    margin: 80px 0 20px;
    @media (max-width:768px) {
      justify-content: center;
      margin: 40px 0 20px;
    }    
  }
  .skill-other h3,.skill-dev h3{
    margin: 40px 0 20px;
    @media (max-width:768px) {
      margin: 80px 0 20px;
    } 
  }
   .pic{
      margin-right: 8px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      padding: 6px;
      img{
        width:100%;
        object-fit: cover;
      }
  } 
  ul{
    list-style-type: square;
    padding: 0 16px;
    @media (max-width:767px) {
      margin-left: 12%;
      padding: 0 4px;
    } 
    li{
      text-align: left;
      line-height: 28px;
      margin: 8px;
      letter-spacing: .5px;
      a{
        display: inline-block;
        color: $primary-color;
        transform: scale(1);
        transition: .3s;
        &:hover{
          transform: scale(1.15);
          text-decoration: underline;
        }
      }
      ol{
        padding: 0;
      }
    }
    
  }
}
//---------------------
//$works
//---------------------
.works{
  margin: 120px auto 120px;
  .works-inner{
    border-radius: 8px;
    padding: 20px 0;
    overflow: hidden;
		color: #bfbfbf;
		background-image: url(http://photo.mac69.com/JPG-180507/180507_58/h31HrfASKo_small.jpg);
		background-size: cover;
		background-attachment: fixed;
		background-position: center;
		position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 1;
    }
    .works-context{
      z-index: 2;
      h2{
        color: $white-color;
        font-size: 32px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 8px;
        position: relative;
        margin: 16px 0;
        p {
          padding:0;
          margin: 0;  
          line-height: 1;
          font-family:   Times, serif;
          letter-spacing: 8px;
          color: #ccc
        }
        &:after{
          content: '';
          height: 1px;
          margin: 0 auto;
          background-color: #ccc;
          position: absolute;
          left: 20%;
          right: 20%;
          bottom: -30%;
        }
      }
      .btn-group{
        margin-bottom: 32px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        transform: translateX(-4px);
        a{
          color: #aaa;
          display: inline-block;
          padding: 16px 32px;
          border: 2px solid #aaa;
          font-size: 18px;
          margin: 20px 20px 0;
          border-radius: 4px;
          font-weight: 700;
          letter-spacing: 2px;
          box-shadow: 0 2px 4px 2px rgba(172, 172, 172, 0.2);
          transition: .3s;
          overflow: hidden;
          position: relative;
          &::after{
              content: '';
              background-color: rgba(114, 114, 114, 0.8);
              position: absolute;
              top: 50%;
              left: 50%;
              width: 250px;
              height: 250px;
              transform: translate(-50%,-50%) scale(0);
              border-radius: 50%;
              z-index: -1;
              transition: .5s;
            }
     // ----------按鈕各自樣式-------------
          &.workLink{
            color: aqua;
            border-color: aqua;
            &:hover{
              color: aqua;
              background-color:none;
              border-color: aqua;
            }
            &:hover:after{
                transform: translate(-50%,-50%)  scale(1);
            }
          }
          &.gitLink{
              font-family: 'Comic Sans MS';
              color: #aaa;
              &:hover{
                color: #123;
                background-color:none;
              }
              &:hover:after{
                  transform: translate(-50%,-50%)  scale(1);
              }
          }
        }
      }
    }
    
  }
}



// ---------裝飾圖片-------------

.d-img{
  position:absolute;
  width: 20vw;
  &.d-01{
    right: -2vw;
    top:80vh;
  }
  &.d-02{
    left: -4vw;
    top:20vh;
    opacity: .8;
  }
  &.d-03{
    width: 12vw;
    left: -3vw;
    top:90vh;
    z-index: 2;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  &.d-04{
    width: 15vw;
    left: 3vw;
    top:60vh;
  }
  &.d-05{
    right: 1vw;
    top:120vh;
  }
  &.d-06{
    width: 18vw;
    left: -4.5vw;
    bottom:2vh;
  }
}




















</style>
