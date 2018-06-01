<template>
  <div id="home">
    <video-banner/>
    <nav-bar/>

    <div class="container-fluid">
      <banner/>
      <!--<introduction></introduction>-->
      <why id="nkn-overview-container"/>
      <what/>
      <how/>
      <e-a/>
      <news id="nkn-news-container"/>
      <team id="nkn-team-container"/>
      <partners-and-alliance/>
      <!--<investor></investor>-->
      <slogan/>
      <the-footer/>
      <nav-bottom/>
    </div>
  </div>
</template>

<script>
  import NavBar from './NavBar'
  import Banner from './Banner'
  import Introduction from './Introduction'
  import Why from './highlights/Why'
  import What from './highlights/What'
  import How from './highlights/How'
  import EA from './highlights/EA'
  import News from './News'
  import Team from './Team'
  import Investor from './Investor'
  import Slogan from './Slogan'
  import TheFooter from './TheFooter'
  import NavBottom from './NavBottom'
  import VideoBanner from "./VideoBanner";
  import PartnersAndAlliance from "./PartnersAndAlliance";

  let homeData = {
    scrollToComponents: ""
  }

  export default {
    name: "home",
    components: {
      PartnersAndAlliance,
      VideoBanner,
      NavBar,
      Banner,
      Introduction,
      Why,
      What,
      How,
      EA,
      News,
      Team,
      // Investor,
      Slogan,
      TheFooter,
      NavBottom
    },
    methods: {
      isHome() {
        return ("Home" === this.$route.name || "Index" === this.$route.name)
      },
      scrollTo(targetId) {
        if(!this.isHome()) {
          return
        }

        let $target = $("#" + targetId)
        $(window).scrollTop($target.offset().top)
      },
    },
    mounted() {
      if("" !== this.scrollToComponents) {
        this.scrollTo(this.scrollToComponents)
      }
    },
    data() {
      return homeData
    },
    beforeRouteEnter(to, from, next) {
      if(to.params['scrollTo']) {
        homeData.scrollToComponents = to.params['scrollTo']
      } else {
        homeData.scrollToComponents = ""
      }
      next()
    }
  }
</script>

<style scoped>

</style>
