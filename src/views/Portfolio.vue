<template>
  <section class="Portfolio">
    <div class="Portfolio_item">
      <div class="my_container">
        <div class="row align-items-center">
          <div class="col-12 col-md-7 col-lg-5 order-1 order-md-0">
            <div class="Portfolio_info">
              <h3>前端共學平台 | 模擬專案</h3>
              <ul>
                <li><strong>前端使用技術</strong>：
                <code>Bootstrap</code> + <code>Jquery</code> + <code>Ajax</code></li>
                <li><strong>後端使用技術</strong>：
                <code>Node.js</code> + <code>Express</code> + <code>MongoDB</code></li>
                <li><strong>網站主題</strong>：
                會員式的共學平台，讓使用者們撰寫文章，並與他人進行互動</li>
                <li><strong>美術設計</strong>：
                簡約式風格</li>
                <li><strong>網站介紹</strong>：
                  <ul>
                    <li>用戶進行註冊、登入，即可在平台上發文。</li>
                    <li>每篇文章皆有按讚、回覆的功能，可即時更新用戶所輸入的留言</li>
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
              <img src="../assets/Portfolio/blog.jpg" alt="">
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
                <code>Vue.js</code> + <code>Bootstrap</code> + <code>Ajax</code></li>
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
              <img src="../assets/Portfolio/玩髮.jpg" alt="">
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
export default {
  components:{
    otherPortfolio,loading
  },
  data(){
    return {
      loading:true
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
      console.log('有')
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
      
    }
    .Portfolio_item:nth-of-type(1){
      background-color: rgb(204, 200, 196);
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
        color: #eee !important;
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