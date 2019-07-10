<template>
  <div>
    
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: '',

  data () {
    return {
    }
  },

  methods: {},
  mounted(){
     axios
      .get(
        "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=8727225",
        {
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"15605021417275674601907"}',
            "X-Host": "mall.film-ticket.film.list"
          }
        }
      )
      .then(res => {
        if (status == 0) {
          console.log(res);
        }
      })    
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>

</style>
