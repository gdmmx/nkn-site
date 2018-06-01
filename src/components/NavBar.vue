<template>
  <nav class="navbar" :class="[isHome() ? 'navbar-default' : 'navbar-default-blue']">
    <div class="container container-fluid-fix">
      <div class="navbar-header">
        <img v-if="isHome()"  class="nkn-banner-logo" src="./../assets/nkn-logo-white.png" @click="goToHome">
        <img v-if="!isHome()" class="nkn-banner-logo" src="./../assets/white_logo.png" @click="goToHome">
      </div>
      <div class="hidden-xs">
        <ul class="nav navbar-nav navbar-right nkn-nav-menu" :class="[isHome() ? 'narbar-main-pages' : 'narbar-child-pages']">
          <li><a class="scroll-bottom" @click="scrollTo('nkn-overview-container')">{{ $t('navbar.overview') }}</a></li>

          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                aria-haspopup="true" aria-expanded="false">{{ $t('navbar.docs') }}<span class="caret"></span></a>
            <ul class="dropdown-menu nkn-doc-link">
              <li><a v-if="$i18n.locale === 'zh'" target="_blank" :href="urlList.introductionCn">{{ $t('navbar.introduction') }}</a></li>
              <li><a v-if="$i18n.locale !== 'zh'" target="_blank" :href="urlList.introductionEn">{{ $t('navbar.introduction') }}</a></li>
              <li><a target="_blank" :href="urlList.whitePaper">{{ $t('navbar.whitepaper') }}</a></li>
              <li><a target="_blank" :href="urlList.economicModel">{{ $t('navbar.economicModel') }}</a></li>
            </ul>
          </li>

          <li><a class="scroll-bottom" @click="scrollTo('nkn-team-container')">{{ $t('navbar.team') }}</a></li>
          <li><a class="scroll-bottom" @click="scrollTo('nkn-news-container')">{{ $t('navbar.news') }}</a></li>
          <li>
            <div class="dropdown nkn-language-switch">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                {{ $t('navbar.language') }}
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li v-for="(r, i) in urlList.homeURIList"><a @click="changeLocale(i, r.path, r.showTwitter)">{{ r.text }}</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div class="hidden-lg hidden-md hidden-sm">
        <ul class="nav navbar-nav navbar-right narbar-min">
          <li class="dropdown li-bars-style">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
               aria-haspopup="true" aria-expanded="false"><i class="fa fa-bars" aria-hidden="true"></i></a>
            <ul class="dropdown-menu">
              <li><a @click="changeLocale">{{ $t('navbar.language') }}</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

  export default {
    name: "NavBar",
    data() {
      return {
        urlList: {
          introductionEn: process.env.DOC_URL + 'NKN_Introduction_en.pdf',
          introductionCn: process.env.DOC_URL + 'NKN_Introduction_cn.pdf',
          whitePaper: process.env.DOC_URL + 'NKN_Whitepaper.pdf',
          economicModel: process.env.DOC_URL + 'NKN_Economic_Model.pdf',
          homeURIList: {
            'zhHome': {path: '/zh/',  text: "中文", showTwitter: false},
            'enHome': {path: '/en/', text: "English", showTwitter: true},
            'krHome': {path: '/kr/', text: "한국어", showTwitter: true},
          }
        }
      }
    },
    created() {
      // this.getConfig()
    },
    methods: {
      isHome() {
        return ("Home" === this.$route.name || "Index" === this.$route.name)
      },
      goToHome() {
        if (this.$route.name !== 'Home') {
          this.$router.push({name: 'Home'})
        } else {
          this.scrollTop()
        }
      },
      scrollTo(targetId) {
        if(!this.isHome()) {
          this.$router.push({name: 'Home', params:{'scrollTo': targetId}})
          return
        }

        let $target = $("#" + targetId)
        $(window).scrollTop($target.offset().top)
      },
      scrollBottom() {
        $(window).scrollTop($("#home").get(0).scrollHeight)
      },
      scrollTop() {
        $(window).scrollTop()
      },
      changeLocale(name, path, showTwitter) {
        //only one sub uri, hard code to workaround
        if(this.isHome()) {
          this.$router.push('/home' + path)
          if (showTwitter) {
            $("#twitter-widget-0").show();
          } else {
            $("#twitter-widget-0").hide();
          }
        } else {
          this.$router.push('/logo' + path)
        }
      },
      getConfig() {
        return this.axios.get(process.env.CONFIG_URL + 'config.json').then(response => {
          this.urlList.introductionEn = response.data.introduction_en
          this.urlList.introductionCn = response.data.introduction_cn
          this.urlList.whitePaper = response.data.whitepaper
          this.urlList.economicModel = response.data.economic_model
        }).catch(error => {
          this.urlList.introductionEn = this.$config.introduction_en
          this.urlList.introductionCn = this.$config.introduction_cn
          this.urlList.whitePaper = this.$config.whitepaper
          this.urlList.economicModel = this.$config.economic_model
        })
      }
    }
  }
</script>

<style scoped>
  .navbar-default {
    background-color: transparent;
    border-color: transparent;
    border-radius: 0;
    height: 135px;
    text-transform: none;
    margin-bottom: 0 !important;
    z-index: 1;
  }
  .navbar-header img{
    margin-top: 40px;
    margin-left: 15px;
    width: 75px;
  }

  .nkn-nav-menu {
    margin-top: 36px !important;
    margin-right: -25px !important;
  }

  .nkn-nav-menu li {
    text-align: right !important;
  }
  .navbar-default-blue {
    background-color: #253a7e;
    border-radius: 0;
    height: 135px;
    color: white;
    margin-bottom: 0;
  }

  .li-language-style {
    border: 1px solid #253a7e;
    border-radius: 20px;
    height: 34px;
  }
  .li-bars-style {
    position: absolute;
    right: -20px;
    top: 52px;
    z-index: 999;
  }
  .li-bars-style > ul > li > a {
    height: 40px;
    line-height: 32px !important;
  }
  .narbar-min > li > a {
    font-size: 27px !important;
  }

  .nkn-banner-logo:hover {
    cursor: pointer;
  }

  .navbar-nav {
    margin-top: 56px;
    margin-right: 25px;
  }
  .navbar-nav > li {
    margin-left: 25px;
    margin-right: 25px;
  }
  .navbar-nav > li > a {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .narbar-main-pages > li > a:hover {
    color: #26bcff;
  }

  .narbar-main-pages > li > a,
  .narbar-main-pages > li > a:active,
  .narbar-main-pages > li > a:focus,
  .narbar-main-pages > li > a:visited {
    text-transform: none;
    font-size: 16px;
    font-weight: 300;
    color: white;
    background-color: transparent;
  }
  .narbar-child-pages > li > a,
  .narbar-child-pages > li > a:active,
  .narbar-child-pages > li > a:focus,
  .narbar-child-pages > li > a:visited {
    text-transform: none;
    font-size: 16px;
    color: white;
    background-color: transparent;
  }

  .navbar-default .navbar-nav>.open>a,
  .navbar-default .navbar-nav>.open>a:hover,
  .navbar-default .navbar-nav>.open>a:focus {
    color: #26bcff;
    background-color: transparent;
  }

  .nkn-doc-link {
    min-width: 100px;
  }

  .dropdown-menu>li>a {
    color: #253A7E;
    background-color: white;
  }
  .dropdown-menu>li>a:hover,
  .dropdown-menu>li>a:focus {
    color: #26bcff;
    background-color: white;
  }
  .dropdown-toggle:hover {
    color: #26bcff !important;
  }

  .scroll-bottom:hover {
    cursor: pointer;
  }

  .nkn-language-switch > button.btn {
    padding: 5px 15px;
    background: transparent;
    font-size: 16px;
    font-weight: 300;
    color: white !important;
  }

  .nkn-language-switch > button.btn:hover {
    color: #26bcff !important;
  }

  .nkn-language-switch .dropdown-menu {
    min-width: 100px !important;
  }
</style>
