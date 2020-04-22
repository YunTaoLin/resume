<template>
  <section class="Portfolio">
    <div class="Portfolio_item">
      <div class="my_container">
        <div class="row align-items-center">
          <div class="col-12 col-md-7 col-lg-5 order-1 order-md-0">
            <div class="Portfolio_info">
              <h3>方方繪本購物網 | 模擬專案</h3>
              <ul>
                <li><strong>前端使用技術</strong>：
                <code>Vue.js</code> + <code>Vue-router</code> + <code>Vuex</code> + <code>Boostrap4</code> + <code>Scss</code></li>
                <li><strong>後端使用技術</strong>：
                <code>Node.js</code> + <code>Express</code> + <code>MongoDB</code></li>
                <li><strong>網站主題</strong>：
                具備前後台的官方購物網站，前台為會員式購物網，而後台則提供管理員進行商品、訂單、會員管理。</li>
                <li><strong>美術設計</strong>：
                活潑式風格</li>
                <li><strong>網站介紹</strong>：
                  <ul>
                    <li>使用Vue搭建的SPA網站，並以node建立後端伺服器串接MongoDB資料庫。</li>
                    <li>用戶進行註冊、登入，即可對商品進行追蹤、加入購物車並送出訂單。</li>
                    <li>支持在未登入狀態下將商品加入購物車，並在登入後與會員購物車做合併。</li>
                    <li>會員可編輯自己的個人資料，在購物時進行快速輸入。</li>
                    <li>使用Vuex進行狀態管理，會員在商品操作後皆以Ajax與資料庫同步資料。</li>
                    <li>具有後台系統，可新增編輯商品、管理訂單、管理會員資料等操作。</li>
                  </ul>
                </li>
              </ul>
              <div class="btn-group">
                <a href="http://172.105.215.182:3000/" class="my_btn" target="_blank">前往網站</a>
                <a href="https://github.com/YunTaoLin/picture-book" class="my_btn " target="_blank">Github</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 col-lg-7 Portfolio_img">
              <Carousel :img="carousel_1" id="carousel_1" />
          </div>
        </div>
      </div>
    </div>
    <div class="Portfolio_item">
      <div class="my_container">
        <div class="row align-items-center">
          <div class="col-12 col-md-7 col-lg-5 order-1 order-md-0">
            <div class="Portfolio_info">
              <h3>玩髮-實現你的想法 | 模擬專案</h3>
              <ul>
                <li><strong>前端使用技術</strong>：
                <code>Vue.js</code> + <code>Vue-router</code> + <code>Bootstrap4</code></li>
                <!-- <li><strong>其他技術</strong>：
                <code>Google app script（傳送站內信至我個人的雲端試算表）</code></li> -->
                <li><strong>網站主題</strong>：
                髮型沙龍店的形象官網</li>
                <li><strong>美術設計</strong>：
                簡約式風格</li>
                <li><strong>網站介紹</strong>：
                  <ul>
                    <li>全站使用 Vue cli 3 進行開發，搭配Vue-router設置前端路由。</li>
                    <li>包含首頁、型錄、服務介紹、店址、預約系統等頁面。</li>
                    <li>使用瀑布流排版展示熱門髮型。</li>
                    <li>預約系統採用進度表設計，優化使用者操作體驗。</li>
                    <li>支持RWD及移動端優化，可在不同裝置、瀏覽器下使用。</li>
                  </ul>
                </li>
              </ul>
              <div class="btn-group">
                <a href="https://yuntaolin.github.io/play-hair/dist/index.html#/home" class="my_btn" target="_blank">前往網站</a>
                <a href="https://github.com/YunTaoLin/play-hair" class="my_btn" target="_blank">Github</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 col-lg-7 Portfolio_img">
              <Carousel :img="carousel_2" id="carousel_2" />>
          </div>
        </div>
      </div>
    </div>
    <div class="Portfolio_item">
      <div class="my_container">
        <div class="row align-items-center">
          <div class="col-12 col-md-7 col-lg-5 order-1 order-md-0">
            <div class="Portfolio_info">
              <h3>前端共學平台 | 模擬專案</h3>
              <ul>
                <li><strong>前端使用技術</strong>：
                <code>Bootstrap3</code> + <code>Jquery</code> + <code>Scss</code></li>
                <li><strong>後端使用技術</strong>：
                <code>Node.js</code> + <code>Express</code> + <code>MongoDB</code></li>
                <li><strong>網站主題</strong>：
                會員式的共學平台，讓使用者們撰寫文章，並與他人進行互動</li>
                <li><strong>美術設計</strong>：
                簡約式風格</li>
                <li><strong>網站介紹</strong>：
                  <ul>
                    <li>用戶進行註冊、登入，即可在平台上發文。</li>
                    <li>支持以Markdown撰寫文章，且每篇文章皆有按讚、回覆的功能。</li>
                    <li>Session保存會員的登入狀態，並可在網站上進行進階操作。</li>
                    <li>可以編輯自己的個人簡介、更換頭貼，並公開到自己的文章頁面。</li>
                    <li>文章管理功能可顯示文章的詳細數據，另可進行刪除或編輯等操作。</li>
                    <li>支持RWD及移動端優化，可在不同裝置、瀏覽器下使用。</li>
                  </ul>
                </li>
              </ul>
              <div class="btn-group">
                <a href="http://172.105.215.182/login" class="my_btn" target="_blank">前往網站</a>
                <a href="https://github.com/YunTaoLin/MyBlog" class="my_btn " target="_blank">Github</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 col-lg-7 Portfolio_img">
              <Carousel :img="carousel_3" id="carousel_3" />>
          </div>
        </div>
      </div>
    </div>
     
    <otherPortfolio  @loadingOK='loadingOK'/> 
    <loading :loading=loading />
  </section>
</template>

<script>
import $ from 'jquery'
import otherPortfolio from '../components/OtherPortfolio'
import loading from '../components/Loading'
import Carousel from '../components/Carousel'
export default {
  components:{
    otherPortfolio,loading,Carousel
  },
  data(){
    return {
      loading:true,
      carousel_1:['/static/book1.PNG','/static/book2.PNG','/static/book3.PNG','/static/book4.PNG'],
      carousel_2:['/static/hair1.PNG','/static/hair2.PNG','/static/hair3.PNG','/static/hair4.PNG'],
      carousel_3:['/static/blog1.PNG','/static/blog2.PNG','/static/blog3.PNG','/static/blog4.PNG','/static/blog5.PNG']
    }
  },
   created(){
    $('html, body').scrollTop(0);
  },
  destroyed(){
    $(window).off('scroll');
  },
  methods:{
    loadingOK(){
      this.loading=false;
      
    }
  }
}
</script>

<style lang="scss" scoped>



/* $Main
------------------------ */
  .Portfolio{
    font-size: 16px;
    color: #2c3e50;
    @media (max-width:991px) {
      font-size: 14px;
    }
    .Portfolio_item{
      padding: 100px 0;
      background-color: rgb(204, 200, 196);
    }
    .Portfolio_item:nth-of-type(1){
      background-color: rgb(204, 200, 196);
   }
   code{
     color: #222;
   }
   
  }
 
  .Portfolio_info{
      line-height: 1.5;
      margin: auto 0;
      padding: 40px;
      color: #222;
      text-align: left;
      position: relative;
      z-index: 2;
      h3{
        margin-top: 0;
        @media (max-width:991px) {
          font-size: 36px;
        }
      }
      ul> li>ul{
        list-style-type: disc;
        line-height: 1.5;
        margin-left: 0;
        padding-inline-start:1.5em;
      }
      .my_btn{
        display: inline-block;
        padding: 12px 24px;
        line-height: 1.5;
        margin-top: 40px;
        text-align: center;
        letter-spacing: 3px;
        background-color: #000;
        color: #fff;
        &:nth-of-type(2){
          margin-left: 12px;
          width: 108px;
          background-color: transparent;
          padding: 10px 22px;
          border: 2px solid #333;
          color: #333;
          letter-spacing: 1px;
          font-weight: 600;
        }
      }
    }

  .Portfolio_img{
    opacity: .95;
    @media (max-width:765px) {
      margin-left:0;
    }
    img{
      width: 100%;
      object-fit: cover;
    }
  }
   .Portfolio_item:nth-of-type(2){
      background-color: rgb(60, 61, 61);
      h3{
        color: #fff !important;
      }
      .Portfolio_info{
      // background-color: #fefefe;
        &,code{
          color: #eee !important;
        }
        line-height: 1.7;
        .my_btn{
          font-weight: 500;
          background-color: rgb(219, 54, 54);
          // font-weight: 600;
          color: #fff; 
          &:nth-of-type(2){
            background-color: transparent;
            border: 2px solid #ccc;
            color: #ccc;
            font-weight: 600;
          }
        }
      }
   }

   


</style>