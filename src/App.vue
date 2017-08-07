<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,700,700i');
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
/*Aplicar control boder-box a el modelo de cajas*/
/*html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}*/
html {
  font-size: 62.5%;
  /* Sets up the Base 10 stuff */
}
body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  margin: 0;
  letter-spacing: -0.5px;
}

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;*/
}

.isa_info, .isa_success, .isa_warning, .isa_error {
margin: 10px 0px;
padding:12px;

}
.isa_info {
    color: #00529B;
    background-color: #BDE5F8;
}
.isa_success {
    color: #4F8A10;
    background-color: #DFF2BF;
}
.isa_warning {
    color: #9F6000;
    background-color: #FEEFB3;
}
.isa_error {
    color: #D8000C;
    background-color: #FFBABA;
}
.isa_info i, .isa_success i, .isa_warning i, .isa_error i {
    margin:10px 22px;
    font-size:2em;
    vertical-align:middle;
}
/*Spinners*/
.glyphicon.spinning {
    animation: spin 1s infinite linear;
    -webkit-animation: spin2 1s infinite linear;
}
@keyframes spin {
    from { transform: scale(1) rotate(0deg); }
    to { transform: scale(1) rotate(360deg); }
}
@-webkit-keyframes spin2 {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
}
</style>
