<template>
    <div>
        <nav-bar/>
        <div class="container nkn-logo-download-container">
            <div class="row nkn-logo-download-title">
                <h1 class="nkn-logo-download-title-text">NKN LOGO</h1>
                <img class="nkn-title-under-line hidden-xs" src="./../assets/banner/whatwedoline2x.png" alt="">
                <img class="nkn-title-under-line-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/banner/whatwedoline2x.png" alt="">
            </div>

            <div class="row nkn-logo-container" v-for="logo in logos">
                <div class="nkn-logo">
                    <img :src="logo.src" :width="logo.srcWidth + 'px'"/>
                </div>
                <div class="nkn-logo-download-btn-group">
                    <div class="nkn-logo-download-btn" v-for="(file, k) in logoFiles">
                        <a class="btn nkn-logo-download-btn" target="_blank"
                           :href="logo.downloadPath + file"
                        >{{k}}</a>
                    </div>
                </div>
            </div>
        </div>
        <the-footer/>
    </div>
</template>

<script>
  import NavBar from "./NavBar";
  import TheFooter from "./TheFooter";

  export default {
    components: {
      TheFooter,
      NavBar},
    name: "logo-download",
    data() {
      return {
        logos: [
          {src:require('./../assets/logos/A.png'), srcWidth: 256, downloadPath: '/static/logos/A/'},
          {src:require('./../assets/logos/B.png'), srcWidth: 106, downloadPath: '/static/logos/B/'},
          {src:require('./../assets/logos/C.png'), srcWidth: 150, downloadPath: '/static/logos/C/'},
          {src:require('./../assets/logos/D.png'), srcWidth: 150, downloadPath: '/static/logos/D/'},
        ],
        logoFiles: {
          'PNG 36x36': '36.png',
          'PNG 72x72': '72.png',
          'PNG 144x144': '144.png',
          'PNG 512x512': '512.png',
          'PNG 1024x1024': '1024.png',
          'PNG SVG': 'logo.svg',
        },
      }
    }
  }
</script>

<style scoped>
    .nkn-logo-download-container{
        max-width: 1170px;
    }

    .nkn-logo-download-container > .nkn-logo-download-title {
        margin-top: 80px;
        margin-bottom: 60px;
        text-align: center;
    }

    .nkn-logo-download-container > .nkn-logo-download-title > .nkn-logo-download-title-text {
        font-size: 24px;
        line-height: 24px;
        margin: 0 !important;
        color: #253a7e;
    }

    .nkn-title-under-line {
        height: 4px;
        width: 64px;
        margin-top: 20px;
    }

    .nkn-title-under-line-xs {
        height: 2px;
        width: 64px;
        margin-top: 20px;
    }

    .nkn-logo-download-container > .nkn-logo-container {
        padding: 0 15%;
        border-bottom: 1px solid #e0e3ed;
        display: flex;
        position: relative;
    }

    .nkn-logo-download-container > .nkn-logo-container > .nkn-logo {
        text-align: center;
        height: 300px;
        line-height: 300px;
        min-width: 256px;
    }

    .nkn-logo-download-container > .nkn-logo-container > .nkn-logo-download-btn-group {
        position: absolute;
        right: 15%;
        top: 90px;
        width: 535px;
    }

    .nkn-logo-container > .nkn-logo-download-btn-group > .nkn-logo-download-btn {
        height: 50px;
        width: 178px;
        line-height: 50px;
        display: inline-block;
        padding-left: 18px;
        margin-bottom: 20px;
    }


    .nkn-logo-download-btn-group > .nkn-logo-download-btn > a {
        height: 50px;
        width: 160px;
        line-height: 50px;
        text-align: center;
        display: inline-block;
        border: 1px solid #253a7e;
        font-size: 18px;
        font-weight: 400;
        color: #253a7e;
        padding: 0;
    }

    .nkn-logo-download-btn-group > .nkn-logo-download-btn > a:hover {
        background: #253a7e;
        color: #ffffff;
    }

    @media (max-width:1200px) {
        .nkn-logo-download-container > .nkn-logo-container > .nkn-logo-download-btn-group {
            width: 427px;
        }

        .nkn-logo-container > .nkn-logo-download-btn-group > .nkn-logo-download-btn {
            height: 50px;
            width: 142px;
            line-height: 50px;
            display: inline-block;
            padding-left: 18px;
            margin-bottom: 20px;
        }


        .nkn-logo-download-btn-group > .nkn-logo-download-btn > a {
            width: 126px;
            font-size: 14px;
            font-weight: 400;
        }
    }

    @media (max-width:1024px) {
        .nkn-logo-download-container > .nkn-logo-container {
            display: block;
            height: auto;
            width: 90%;
            margin: 0 auto;
            padding: 0 5%;
        }

        .nkn-logo-download-container > .nkn-logo-container > .nkn-logo {
            float: left;
            width: 100%;
        }

        .nkn-logo-download-container > .nkn-logo-container > .nkn-logo-download-btn-group {
            position: relative;
            clear: both;
            width: 100%;
            right: auto;
            top: auto;
        }

        .nkn-logo-container > .nkn-logo-download-btn-group > .nkn-logo-download-btn {
            height: 50px;
            width: 50%;
            line-height: 50px;
            display: inline-block;
            padding-left: 0;
            margin-bottom: 20px;
            text-align: center;
        }


        .nkn-logo-download-btn-group > .nkn-logo-download-btn > a {
            width: 90%;
            font-size: 12px;
            font-weight: 400;
        }
    }

</style>