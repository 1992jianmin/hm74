<template>
<div class ="container">
<img src="../../assets/images/welcome.jpg">
    </div>
</template>

<script>
export default {
  // 测试
  created () {
    this.$http.get('articles').then(res => console.log(res.data))
  }
}
</script>

 <style  scoped lang="less">
    .container{
        text-align: center;
    }
 </style>
