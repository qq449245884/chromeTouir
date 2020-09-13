<template>
  <div>
    <input placeholder="name" />
    <input placeholder="password" @keyup.tab="login" />
    <button>Login</button>
  </div>
</template>
<script>
export default{
  methods:{
    login(){
      alert('触发了')
    }
  }
}
</script>
<style scoped>
div{
  width: 200px;
  height: 200px;
  background: red;
}
</style>