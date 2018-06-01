<template>
  <div class="row nkn-banner" :class="$i18n.locale === 'zh' ? 'nkn-zh-banner':'nkn-en-banner' ">

    <div class="container">
      <div class="row-fluid nkn-open-source-countdown-container">
        <div class="row nkn-open-source-countdown-title">{{ $t('calendar.title') }}</div>
        <div class="row nkn-open-source-countdown-time">
          <div class="nkn-open-source-countdown-d-0">
            <div>{{countdown.d0}}</div>
          </div>
          <div class="nkn-open-source-countdown-d-1">
            <div>{{countdown.d1}}</div>
          </div>
          <div class="nkn-open-source-countdown-colon">
            <div></div>
            <div></div>
          </div>
          <div class="nkn-open-source-countdown-h-0">
            <div>{{countdown.h0}}</div>
          </div>
          <div class="nkn-open-source-countdown-h-1">
            <div>{{countdown.h1}}</div>
          </div>
          <div class="nkn-open-source-countdown-colon">
            <div></div>
            <div></div>
          </div>
          <div class="nkn-open-source-countdown-m-0">
            <div>{{countdown.m0}}</div>
          </div>
          <div class="nkn-open-source-countdown-m-1">
            <div>{{countdown.m1}}</div>
          </div>
        </div>
        <div class="row nkn-open-source-countdown-unit">
          <div class="nkn-open-source-countdown-unit-d">{{ $t('calendar.unitDays') }}</div>
          <div class="nkn-open-source-countdown-unit-h">{{ $t('calendar.unitHours') }}</div>
          <div class="nkn-open-source-countdown-unit-m">{{ $t('calendar.unitMinutes') }}</div>
        </div>
      </div>
      <div class="row row-banner-slogan hidden-xs">
        <p>{{ $t('banner.slogan') }}</p>
      </div>
      <div class="row row-banner-slogan-xs hidden-lg hidden-md hidden-sm">
        <p>{{ $t('banner.slogan') }}</p>
      </div>

      <div class="row hidden-xs">
        <a v-if="$i18n.locale === 'en'" class="a-btn-hover btn-about2 btn-left" target="_blank" :href="urlList.introductionEn">
          {{ $t('banner.introduction') }}
        </a>
        <a v-if="$i18n.locale === 'zh'" class="a-btn-hover btn-about2 btn-left" target="_blank" :href="urlList.introductionCn">
          {{ $t('banner.introduction') }}
        </a>
      </div>

      <div class="row hidden-lg hidden-md hidden-sm">
        <div class="col-lg-6 col-md-6 col-sm-6 col-banner-xs-">
          <a v-if="$i18n.locale === 'en'" class="a-btn-hover btn-about2 btn-center" target="_blank" :href="urlList.introductionEn">
            {{ $t('banner.introduction') }}
          </a>
          <a v-if="$i18n.locale === 'zh'" class="a-btn-hover btn-about2 btn-center" target="_blank" :href="urlList.introductionCn">
            {{ $t('banner.introduction') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import zeroFill from 'zero-fill'

  export default {
    name: "banner",
    data() {
      return {
        urlList: {
          introductionEn: process.env.DOC_URL + 'NKN_Introduction_en.pdf',
          introductionCn: process.env.DOC_URL + 'NKN_Introduction_cn.pdf'
        },
        countdown: {
          d0: "-",
          d1: "-",
          h0: "-",
          h1: "-",
          m0: "-",
          m1: "-"
        },
        countdownTimer: null
      }
    },
    mounted() {
      let _this = this
      if(null !== this.countdownTimer) {
        clearInterval(this.countdownTimer)
      }
      this.countdownTimer = setInterval(function () {
        _this.getCountDown()
      }, 300)
    },
    created() {
    },
    methods: {
      getConfig() {
        return this.axios.get(process.env.CONFIG_URL + 'config.json').then(response => {
          this.urlList.introductionEn = response.data.introduction_en
          this.urlList.introductionCn = response.data.introduction_cn
        }).catch(error => {
          this.urlList.introductionEn = this.$config.introduction_en
          this.urlList.introductionCn = this.$config.introduction_cn
        })
      },
      getCountDown() {
        let target = moment('2018-07-02')
        let today = moment()
        let duration = moment.duration(target.diff(today))

        let days = Math.floor(duration.asDays())
        let hours = duration.hours()
        let minutes = duration.minutes()

        if(days < 0) {
          days = 0
        }

        if(hours < 0) {
          hours = 0
        }

        if(minutes < 0) {
          minutes = 0
        }

        let d = zeroFill(2, days)
        let h = zeroFill(2, hours)
        let m = zeroFill(2, minutes)

        this.countdown.d0 = d[0]
        this.countdown.d1 = d[1]
        this.countdown.h0 = h[0]
        this.countdown.h1 = h[1]
        this.countdown.m0 = m[0]
        this.countdown.m1 = m[1]
      }
    }
  }
</script>

<style scoped>
  .nkn-banner {
    position: relative;
    height: 640px;
  }
  .row-banner-slogan,
  .row-banner-slogan-xs {
    color: white;
    position: relative;
    margin: 20px 0 20px;
    font-size: 18px;
    line-height: 32px;
    padding: 15px;
    max-width: 480px;
    letter-spacing: 0.05em;
  }
  .row-banner-slogan-xs {
    margin-top: 20px;
    width: 100%;
    text-align: left;
  }

  .a-btn-hover,
  .btn-about2,
  .btn-github2 {
    width: 160px;
    height: 56px;
    line-height: 52px;
    border-radius: 38px;
    text-align: center;
    cursor: pointer;
    position: relative;
    margin-left: 25px;
    font-size: 14px;
    font-weight: 200;
    letter-spacing: 0.1em;
    background-color: #0b1943;
    border: #4d6ec3 solid 2px;
    color: white;
  }

  .btn-github2.lg-btn-github2 {
    margin-left: 60px;
  }
  .btn-left {
    float: left;
  }
  .btn-center {
    margin-bottom: 20px;
    float: left;
  }
  .btn-about2:hover,
  .btn-github2:hover {
    background-color: #4f68e1;
    text-decoration: none;
    box-shadow: 0 0 20px 0 #4f68e1;
  }

  /*countdown css*/
  div[class*="nkn-open-source-countdown"] {
    color: #30a4ff;
  }

  .nkn-open-source-countdown-container {
    padding-left: 25px;
  }

  .nkn-open-source-countdown-title {
    margin-top: 120px;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 20px;
  }
  
  .nkn-open-source-countdown-time div[class*="nkn-open-source-countdown"] {
    position: relative;
    float: left;
    width: 58px;
    height: 100px;
    border-top: 50px solid #11496f;
    border-bottom: 50px solid #0E2943;
    margin-right: 4px;
  }

  .nkn-open-source-countdown-time > div > div {
    font-size: 80px;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: -55px;
    width: 100%;
    text-align: center;
  }

  .nkn-open-source-countdown-time .nkn-open-source-countdown-colon {
    border: 0 !important;
    width: 5px !important;
    margin-left: 3px;
    margin-right: 7px !important;
  }

  .nkn-open-source-countdown-time .nkn-open-source-countdown-colon > div {
    border-radius: 50%;
    width: 5px;
    height: 5px;
    background: #30a4ff;
    margin-top: 22.5px !important;
  }

  .nkn-open-source-countdown-time .nkn-open-source-countdown-colon > div:nth-child(2) {
    margin-top: 72.5px !important;
  }

  .nkn-open-source-countdown-unit > div {
    float: left;
    width: 120px;
    line-height: 12px;
    font-size: 12px;
    text-align: center;
    margin-right: 20px;
    margin-top: 10px;
  }

  @media (max-width:768px) {
    .nkn-open-source-countdown-time div[class*="nkn-open-source-countdown"] {
      width: 48px;
      height: 80px;
    }

    .nkn-open-source-countdown-time > div > div {
      font-size: 70px;
      margin-top: -48px;
    }

    .nkn-open-source-countdown-unit > div {
      width: 100px;
    }

    .nkn-open-source-countdown-unit > div:last-child {
      margin-right: 0;
    }

    .nkn-banner.nkn-en-banner {
      position: relative;
      height: 740px;
    }
  }
</style>
