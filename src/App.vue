<template>
  <router-view/>
</template>

<script>

  export default {
    name: 'app',
    mounted() {
      this.getIp(function (info, self) {
        let target = '/en/'

        switch (info.country) {
          case '中国':
            target = '/zh/';
            break;

          case '大韩民国':
            target = '/kr/'
            break;

          case '日本':
            target = '/jp/'
            break;
        }

        let prefix = '/home'
        switch (self.$route.name) {
          case 'LogoDownload' :
            prefix = '/logo'
            break;
        }

        self.$router.push(prefix + target)
      })
    },

    methods: {
      getIp(cb) {
        if('Index' !== this.$route.name) {
          return
        }

        let script = document.createElement("script"),
          s = document.getElementsByTagName("script")[0];

        script.src = "https://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js";
        s.parentNode.insertBefore(script, s);

        let self = this
        let it = setInterval(function () {
          if (typeof(remote_ip_info) !== 'undefined') {
            try {
              cb(remote_ip_info, self);
            } catch (error) {
              console.log(error)
            }

            clearInterval(it);
            it = null;
          }
        }, 100);
      }
    }
  }

</script>

<style>
  html {
    overflow-x: hidden;
  }
  body {
    font-family: "PingFang SC", Verdana, "Microsoft YaHei", "微软雅黑", sans-serif;
    overflow-x: hidden;
  }
</style>
