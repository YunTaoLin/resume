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
                        <li>熟悉HTML5與CSS3，<br>建構符合W3C規範之網站，優化SEO。</li>
                        <li>能夠完全手刻RWD切版，<br>能依照使用者情境設計響應式功能。</li>
                        <li>以模組化方式建構CSS (SCSS)，<br>並遵循OOCSS或BEM命名規則。</li>
                        <li>CSS preprocessor：SCSS</li>
                        <li>CSS frameexperience：Bootstrap、Element</li>
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
                        <li>有使用過Typescript的經驗。</li>
                        <li>node.js搭配Express框架(學習中)</li>
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
                        <li>熟悉Vue的各種基礎功能，<br> 以及使用Vue Devtools進行debug。</li>
                        <li>了解Vue生命週期，以及使用時機。</li>
                        <li>使用Vue router開發SPA網站。</li>
                        <li>使用Vuex進行資料狀態管理。</li>
                        <li>能夠開設Vue Cli專案進行開發。</li>
                        <li>Nuxt.js（學習中）</li>
                    </ul>
                  </div>
                </div>
               <div class="col-lg-6 col-md-6 col-12">
                 <div class="skill-dev wow slideInLeft">
                    <h3>
                      開發工具
                    </h3>
                    
                    <ul>
                        <li>編輯器：VSCode、SublimeText3</li>
                        <li>NPM套件管理。</li>
                        <li>Git版本控管。</li>
                        <li>Webpack自動化打包。</li>
                        <li>Postman與Json-serve模擬RESTful API。</li>
                        <li>有自己整理的Jquery常用插件清單。</li>
                        <li>Google Search Console測試SEO成效。</li>
                        <li>接觸過AWS平台。</li>
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
                        <li>清楚設計流程概念。eg. Wireframe、Prototype</li>
                        <li>大學曾修過使用者經驗專題課程，該作品獲得班級小組第一名。</li>
                        <li>懂得使用Material Design提供的guideline優化UX設計。</li>
                    </ul>
                 </div>
                 <div class="skill-other wow slideInRight">
                   <h3>
                      其他技能
                    </h3>
                    
                    <ul>
                        <li>接觸過的程式語言：C++、Python、PHP。</li>
                        <li>會使用基礎MySQL語法。</li>
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
              <h2>作品集 <span>Portfolio</span></h2>
              <div class="btn-group">
                <router-link class="workLink" to="/portfolio" >前往作品集</router-link>
                <a href="https://github.com/YunTaoLin?tab=repositories" class="gitLink">Github<i class="icon icon-github"></i></a>
              </div>
            </div>
          </div>
        </section>
      </div>
  <!-- -----------end works------------ -->
  <!-- -----------start experience------------ -->
        <section class="experience  lean_bg-top lean_bg-bottom" id="experience">
                    <img src="../assets/m/04.png" alt="裝飾圖片" class="d-img d-04 wow fadeIn" v-parallax="0.5">
                    <img src="../assets/m/02.png" alt="裝飾圖片" class="d-img d-05 wow fadeIn" v-parallax="0.5">
                    <img src="../assets/m/03.png" alt="裝飾圖片" class="d-img d-06 wow fadeIn" v-parallax="0.5">    
                    <div class="container">
                        <h2 class="subtitle wow bounceInUp ">其他經歷</h2>
                        <div class="experience_list">
                            <div class="experience_items wow bounceInLeft" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div class="row">
                                    <div class="col-11 col-md-6 order-md-last">
                                        <div class="imgbox">
                                            <div class="imgbox_inner">
                                                <div class="img"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-11 col-lg-4 offset-lg-1 col-md-5 ">
                                        <div class="experience_item_content--right ">
                                            <h3 class="experience_item_title" id="flow">若水國際-AI數據服務部</h3>
                                            <p class="experience_item_info">2018/11月-2019/6月 擔任專案實習生</p>
                                            <ol>
                                              <li>參與18項AI人工智慧標註專案。</li>
                                              <li>依專案需求整理出標註原則以及執行流程。</li>
                                              <li>製作抽檢相關各式動態報表，檢視每日標註良率。</li>
                                              <li>製作標註原則相關教材、心智圖。</li>
                                              <li>協助標註師團隊各項行政相關事宜。</li>
                                              <li>統計分析標註結果與成效。</li>
                                              <li>與夥伴共同規劃抽檢師評核標準。</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="experience_items wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div class="row">
                                    <div class="col-11 col-md-6">
                                        <div class="imgbox">
                                            <div class="imgbox_inner">
                                                <div class="img"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-11 col-md-5 col-lg-4 ">
                                        <div class="experience_item_content--left ">
                                            <h3 class="experience_item_title">JMOSA學生發展委員會</h3>
                                            <p class="experience_item_info">2017/9月-2018年/2月 - 擔任學生代表共融營總召</p>
                                            <ol>
                                              <li>舉辦規模60人的營隊活動。</li>
                                              <li>為期半年的籌備期擔任會議主席。</li>
                                              <li>規劃各職位進度甘特圖，以及安排集訓期流程。</li>
                                              <li>撰寫企劃書，與夥伴共同籌劃9項課程教案。</li>
                                              <li>與場地、系院、商家進行溝通，調整營期內容。</li>
                                              <li>完成結案報告書，並完成經費核銷。</li>
                                              <li>學會溝通與協調，及團隊間如何有效率地合作。</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="experience_items wow bounceInLeft" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div class="row">
                                    <div class="col-11 col-md-6 order-md-last">
                                        <div class="imgbox">
                                            <div class="imgbox_inner">
                                                <div class="img"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-11 col-lg-4 offset-lg-1 col-md-5 ">
                                        <div class="experience_item_content--right">
                                            <h3 class="experience_item_title">輔大心理系學會</h3>
                                            <p class="experience_item_info">2016/9月-2017/6月 - 擔任公關長 </p>
                                            <ol>
                                              <li>管理學會粉絲專頁。 <a href="https://goo.gl/7iABwk">點我。</a></li>
                                              <li>粉絲專頁追蹤數，由600多位(2016/9月)提升至800多位(2017/7月底)。</li>
                                              <li>撰寫學年間，系上活動宣傳文案、活動倒數文。</li>
                                              <li>舉辦聖誕節抽獎活動，達成2.4K的觸及量。</li>
     
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="experience_items wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div class="row">
                                    <div class="col-11 col-md-6 ">
                                        <div class="imgbox">
                                            <div class="imgbox_inner">
                                                <div class="img"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-11 col-md-5 col-lg-4 ">
                                        <div class="experience_item_content--left">
                                            <h3 class="experience_item_title">勵德青少年服務隊</h3>
                                            <p class="experience_item_info">2016/9月-2017/6月 - 擔任活動長</p>
                                            <ol>
                                              <li>每學期的寒暑假會到誠正矯治學校舉辦為期一週的服務營隊。</li>
                                              <li>參與過4次營隊服務，3次學期間平日服務。(營隊總人數含學員約90人)</li>
                                              <li>規劃營隊期間的各種活動教案、以及籌備期間舉辦社團裡的共融活動。</li>
                                              <li>多次撰寫舞台劇劇本、擔任主持人。</li>
                                              <li>常需要規劃活動，因而學習到如何發揮創意，以及各種活動主持的技巧。</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
        </section>
  <!-- -----------end experience------------ -->
    <div class="fixed-btn-group" >
      <router-link to="/message">
        <div class="fixed-btn" id="contact" >
          <span><i class="icon icon-mail"></i></span>
          <p>站內信</p>
        </div>
      </router-link>
      <div class="fixed-btn" id="toTop" v-on:click="backToTop">
        <span>︿</span>
        <p>Top</p>
      </div>
    </div>
      
   </div>


    
  </div>
</template>

<script>
// @ is an alias to /src

import $ from 'jquery'
export default {
  name: 'home',
  data(){
    return {
      // fixed_btn : false
    }
  },
  methods:{
    backToTop(){
      $('html, body').animate({scrollTop: 0}, 1000);
    }
  },
  created(){
        $('html, body').scrollTop(0);
  },
  mounted(){ 
    if($(window).scrollTop() < 1000) {
      $('.fixed-btn-group').hide();
    }
    $(window).on('scroll',()=>{
      if($(window).scrollTop() >=1000){
         $('.fixed-btn-group').fadeIn(500)
        }
      if($(window).scrollTop() < 1000){
         $('.fixed-btn-group').fadeOut(500)
        }
    })
    
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
    overflow-x: hidden;
    width: 100%;
    height: 100%;
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
      // overflow-y: hidden;
      &:after{
        content:'';
        position: absolute;
        bottom: -60px;
        left: 0;
        width:100%;
        height: 120px;
        background-color: #fff;
        box-shadow: 0 4px 8px 2px rgba(95, 95, 95, 0.2);
        transform: skewY(-3deg);
        border-radius: 2px ;
        z-index: 0;
      }
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
  .skill-other h3{
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
        span{
          font-size: 18px;
          color: #ccc;
          display: inline-block;
          line-height: 48px;
          letter-spacing: 2px;
          position: absolute;
          padding: 7px 0 0 2%;
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
              text-decoration: underline;
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
//---------------------
//$experience
//---------------------
.experience {
    padding: 80px 0;
    position: relative;
  h2{
    padding: 0 5%;
    margin-top: 60px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before,&::after{
      content: '';
      width: 3em;
      height: 4px;
      background-color: $primary-color;
      margin: 0.5em;
      @media (max-width: 576px) {
        display: none;
      }
    }
  }

  /* experience list */
  .experience_items {
      margin:  100px 0;
      color: #111;
      @media (max-width:768px ) {
        margin: 40px 0;
      }
      .img {
          width: 100%;
          display: block;
      }
      /* imgbox */
      .imgbox {
          width: 100%;
          overflow: hidden;
          border-radius: 8px;
      }

      .imgbox_inner {
          width: 100%;
          padding-top: 75%;
          position: relative;
      }

      .imgbox_inner .img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          box-shadow: inset 0px 0px 60px 20px rgba(221, 221, 221, 0.7);
          opacity: .6;
          transition: .8s;
      }

      @media (max-width:1200px) {
          .imgbox_inner .img {
              box-shadow: none;
              opacity: 1;
          }
      }
      ol {
          padding-inline-start: 1em;
          li{
            line-height: 18px;
            padding: 8px 0;
          }
      }
  }
  .experience_items .row {
      padding: 0 5%;
  }
  .experience_item_content--right {
          padding-top: 24px;
          margin-right: -80px;
          transition: .8s;
          text-align: left;
    }
  .experience_item_content--left {
          padding-top: 24px;
          margin-left: -80px;
          transition: .8s;
          text-align: left;
  }
  .experience_item_title {
          font-size: 32px;
          font-family: 'Noto Sans TC', 'Raleway', 'Helvetica', 'roboto', arial, sans-serif;
          font-weight: 400;
          color: #123;
          margin:2vh auto;
  }
  .experience_item_info {
      font-size: 16px;
      line-height: 32px;
  }

  @media (max-width:768px) {
      .experience_list{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .experience_item_content--right {
          padding-top: 16px;
          margin-right: 0;
          transition: .8s;
          text-align: center;
          ol{
          text-align: left; 
          }
      }
      .experience_item_content--left {
          padding-top: 16px;
          margin-left: 0;
          transition: .8s;
          text-align: center;
          ol{
          text-align: left; 
          }
      }
      .experience_item_title {
          font-size: 24px;
          font-weight: 700;
          font-family: 'Noto Sans TC', 'Raleway', 'Helvetica', 'roboto', arial, sans-serif;
          color: #484848;
      }
  }

  @media (max-width:1200px) {
      .experience_item_content--right {
          padding-top: 0;
          margin-right: 0;
          transition: .8s;
      }
      .experience_item_content--left {
          padding-top: 0;
          margin-left: 0;
          transition: .8s;
      }
      .experience_item_title {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          font-family: 'Noto Sans TC', 'Raleway', sans-serif, 'Helvetica', 'roboto', arial;
          font-weight: 400;
          color: #484848;
      }
      .experience_item_info {
          font-size: 16px;
          line-height: 24px;
      }
  }

  .experience_items .row:hover .experience_item_content--right {
      transform: translateX(-15%);
  }

  .experience_items .row:hover .experience_item_content--left {
      transform: translateX(20%);
  }

  @media (max-width:1200px) {
      .experience_items .row:hover .experience_item_content--right {
          transform: none;
      }
      .experience_items .row:hover .experience_item_content--left {
          transform: none;
      }
  }

  .row:hover .img {
      box-shadow: none;
      opacity: 1;
  }


  /* experience_background */

  .experience_list .experience_items:nth-child(1) .img {
      background-image: url('../assets/若水.jpg');
  }

  .experience_list .experience_items:nth-child(2) .img {
      background-image: url('../assets/學發.jpg');
  }

  .experience_list .experience_items:nth-child(3) .img {
      background-image: url('../assets/系學會.jpg');
  }

  .experience_list .experience_items:nth-child(4) .img {
      background-image: url('../assets/勵德.jpg');
  }
}
//---------------------
//$fixed-btn
//---------------------
.fixed-btn-group{
  position: fixed;
  right: 10vw;
  bottom: 8vh;
  z-index: 99;
  @media (max-width: 992px) {
    right: 4vw;
    bottom: 8vh;
    }
  @media (max-width: 768px) {
    right: 3vw;
    bottom: 7vh;
  }
  .fixed-btn{
    background-color: #fff;
    color: #005BB0;
    padding: 4px;
    width: 5em;
    height: 5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 12px 0;
    box-shadow: 0 0 8px 1px rgba(71, 53, 40, 0.3);
    transition: .3s;
    cursor: pointer;
   
    @media (max-width: 991px) {
        padding: 0px;
        width: 4em;
        height: 4em;
      }
    
    &:hover{
      background-color: #005BB0;
      color: #FFf;
    }
    span{
      font-size: 24px;
      font-weight: 700;
      @media (max-width: 991px) {
        font-size: 18px;
      }
    }
    p{
      font-size: 14px;
      line-height: 24px;
      margin: 0;
      padding: 0;
      
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
