<template>
  <div id="app">
        <header class="header-index js-scroll ">
          
            <div class="container">
                <div class="navbar">
                  <!-- <span>YunTao.Lin</span> -->
                    <div class="social-bar">
                        <a href="https://www.facebook.com/yuntao.lin" class="icon-btn" title="Facebook"><i class="icon icon-facebook-official"></i></a>
                        <a href="https://www.instagram.com/i456919yuntao/?hl=zh-tw" class="icon-btn" title="Instagram"><i class="icon icon-instagram"></i></a>
                        <a href="https://github.com/YunTaoLin" class="icon-btn" title="Github"><i class="icon icon-github"></i></a>
                    </div>
                    <nav class="nav">
                      <ul>
                        <li><router-link class="nav-item" to="/">自我簡介</router-link></li>
                        <li><router-link class="nav-item" to="/portfolio">作品集</router-link></li>
                        <li><router-link class="nav-item" to="/message">站內信</router-link></li>
                      </ul>
                    </nav>
                     <a href="javascript:" class="menu-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                    </a>
                </div>
            </div>
            <div class="popup-menu">
                    <div class="container-fluid">
                      <div class="mark col-12"></div>
                      <nav class="nav col-8 ">
                        <h4>menu</h4>
                        <ul>
                          <li><router-link class="nav-item" to="/">自我簡介</router-link></li>
                          <li><router-link class="nav-item" to="/portfolio">作品集</router-link></li>
                          <li><router-link class="nav-item" to="/message">站內信</router-link></li>
                        </ul>
                      </nav>  
                    </div>          
            </div> 
        </header>
    <h1>林耘滔個人履歷網站 YunTao Lin</h1>
    <router-view class="main"/>
    <footer>
            <div class="container">
                <p class="copyright">copyright © YunTao.Lin</p>
            </div>
    </footer>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  methods:{
    scrollEvent(){
       $(window).on('scroll',()=>{
        const currentPosition = window.scrollY ;
        if($(window).scrollTop() >=200){
          $('.js-scroll').addClass('fading')
          }
        if($(window).scrollTop() <200){
          $('.js-scroll').removeClass('fading')
          }
      })
    },
    menuToggle(){
        $('.header-index').toggleClass('active')
        $('.popup-menu').fadeToggle();
        $('.popup-menu  nav').toggleClass('nav-active')
    }
  },
  mounted(){
    this.scrollEvent();
    $('.menu-toggle').on('click',()=>this.menuToggle() )
    $('.mark').on('click',()=>this.menuToggle() )
  },
   beforeUpdate(){
    $('.js-scroll').removeClass('fading')
    $(window).off('scroll');
    $('.menu-toggle').off('click')
    $('.mark').off('click')
    $('.header-index').removeClass('active')
    $('.popup-menu').hide();
    $('.popup-menu  nav').removeClass('nav-active')
  },
  updated(){
    this.scrollEvent();
    $('.menu-toggle').on('click',()=>this.menuToggle() )
    $('.mark').on('click',()=>this.menuToggle() )
  }
}
</script>




<style lang="scss">
@import "../css/base.css";
@import "../css/fontello.css";
@import "../css/bootstrap-grid.css";
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,700&display=swap');


h1{
  display: none;
}
#app {
  font-family: 'Noto Sans TC', '微軟正黑體';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.main{
  margin-top: 65px;
}
/* 目前在的頁面 */
.router-link-exact-active{
 color: rgba(46, 168, 138) !important;
}

/* $Header
------------------------ */

.header-index {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background: rgb(10, 11, 12);
    box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.5);
    transition: .5s;
    .navbar {
      display: flex;
      justify-content: space-between;
      span{
        color:#fff;
        display: inline-block;
        line-height: 76px;
        // left: 4px;
        // top: 0;
      }
      .social-bar {
            padding: 28px;
            display: inline-block;
            margin-right: auto;
            .icon-btn {
                color: #fefefe;
                font-size: 18px;
                margin: 0 2px;
                i:before{
                  transition: .3s;
                }
                i:hover:before{
                  transform: translateY(-30%);
                }
            }
       } 
      .nav{
      justify-items: flex-end;
      width: 280px;
      display: flex;
      @media (max-width: 425px) {
        display: none;
      }

      ul{
        width: 100%;
        display: flex;
        vertical-align: middle;
        li{
          // width: 30%;
          padding: 0 15px;
          transition: .3s;
          .nav-item{
            font-family: 'Noto Sans TC', '微軟正黑體',sans-serif;
            letter-spacing: 2px;
            width: 100%;
            height: 100%;
            color: #fefefe;
            font-weight: 500;
            display: flex;
            justify-content: center;
            align-items: center;
             &:hover{
              color: rgba(46, 168, 138);
            }
          }
        }
      
      }
    }
    }
}
.fading{
  background: rgb(10, 11, 12,.8);
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.3);
}
.active{
  background: rgb(10, 11, 12) !important;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.7) !important;
}

/* menu-toggle */

.menu-toggle {
    display: block;
    padding: 24px;
    display: none;
    flex-direction: column;
    @media (max-width: 425px) {
        display: flex;
      }
    span {
      display: block;
      width: 32px;
      background-color: #fefefe;
      height: 2px;
      margin: 4px 0;
      transition: all 0.3s;
  }
}
.popup-menu{
  display: none;
  position: fixed;
  right: 0;
  top: 78px;
  height:100vh;
  width:100vw;
  .container-fluid{
    padding: 0;
    height: 100%;
    display: flex;
  }
  .mark{
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .nav{
    background: #000;
    transform: translateX(0);
    transition: .5s;
    &.nav-active{
      transform: translateX(-65vw);
    }
    ul{
      display: flex;
      flex-direction: column;
      li{
        display: inline-block;
        width: 100%;
        font-size: 20px;
        line-height: 32px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        a{
          display: inline-block;
          width:100%;
          padding: 18px 0;
          text-align: left;
        }
      }
    }
  }
}
/* $Footer
------------------------ */
footer {
    padding: 20px 0;
    background-color: #222;
    p {
        max-width: 600px;
        text-align: center;
        margin: 0 auto;
        color: #fefefe;
        // padding-top: 16px;
    }
} 

</style>
