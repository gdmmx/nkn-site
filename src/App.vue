<template>
  <router-view/>
</template>

<script>

  export default {
    name: 'app',
    created() {
      this.getIp( )
    },

    methods: {
      getIp() {
        let script = document.createElement("script"),
          s = document.getElementsByTagName("script")[0];

        script.src = "http://ip-api.com/json/?callback=getCountryCode";
        s.parentNode.insertBefore(script, s);

        let self = this
        let it = setInterval(function () {
          if("Index" !== self.$route.name) {
            return
          }

          if("Home" !== self.$route.name && "Index" !== self.$route.name) {
            return
          }


          let target = '/home/en/'
          if (typeof(userContryCodeRouterMap[getCountryCode]) !== 'undefined') {
            let target = userContryCodeRouterMap[getCountryCode]
          }

          self.$router.push(target)
          clearInterval(it);
          it = null;
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
