<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>


<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.ivu-btn-primary{
  background: #3973e1!important;
}
/* .ivu-steps-head-inner{
  font-size: 16px!important;
  background: #3973e1!important;
} */
.ivu-steps-item .ivu-steps-status-process{
  font-size: 16px!important;
  background: #3973e1!important;
}
.ivu-form .ivu-form-item-label{
    color: #2A2C2E!important;
}
.ivu-input,.ivu-select-input,.ivu-select-selection,.ivu-input-number-input-wrap,.ivu-input-number-input,.ivu-input-number{
    height: 36px!important;
    color: #2A2C2E!important;
}
.ivu-input{
    &::-webkit-input-placeholder{
      color:#838DA0!important;
    }
    &::-moz-placeholder{
      color:#838DA0!important;
    }
    &::-ms-input-placeholder{
      color:#838DA0!important;
    }
  }
  .ivu-select-placeholder{
    color:#838DA0!important;
  }
.ivu-steps-status-process{
  .ivu-steps-head-inner{
    border-color: #3973e1!important;
    background-color: #3973e1!important;
  }
}
.ivu-steps-status-finish{
  .ivu-steps-head-inner{
    border-color: #3973e1!important;
    background-color: #fff!important;
    color:#3973e1;
    .ivu-steps-icon{
      color:#3973e1!important;
    }
  }
}
.ivu-modal-body{
  padding-right: 0!important;
}
.ivu-form-item-error-tip{
  color:#ea1e24!important;
}
</style>
