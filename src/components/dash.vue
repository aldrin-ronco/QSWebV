<template>
  <div class="dash-board container">
    <header id="header_lv_1">
      <div class="header_lv_1_text">
        <h1>
          <strong>
            Quality WEB
          </strong>
          <small>Dash Board</small>
        </h1>
      </div>
      <div class="header_lv_1_img">
        <img src="http://lorempixel.com/90/90" alt="">
      </div>
    </header>
      <header id="header_lv_2">
        <nav class="flex-container">
          <a href="#" class="flex-item">INVENTARIO</a>
          <a href="#" class="flex-item">TESORERÍA</a>
          <a href="#" class="flex-item selected">FACTURACIÓN</a>
          <a href="#" class="flex-item">CARTERA</a>
          <a href="#" class="flex-item">CONTABILIDAD</a>
          <a href="#" class="flex-item">NÓMINA</a>
          <a href="#" class="flex-item">CONFIGURACIÓN</a>
          <a href="#" class="flex-item">NIIF</a>
          <a href="#" class="flex-item">PRESUPUESTO</a>
        </nav>
      </header>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
body {
background-color: rgba(231,12,43,.5);
}
#header_lv_1 {
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  /*background-color: #ffffcc;*/
  padding-left: 10px;
  margin-top: 10px;
  /*border-radius: .5em;
  border: 1px solid silver;*/
  /*box-shadow: 2px 2px 2px 0px silver;*/
}
#header_lv_1 img {
  border-radius: 50%;
  padding-right: 5px;
}
#header_lv_1 h1 {
  font-family: arial;
  font-size: 4em;
  text-shadow: 0 1px 0 #ccc,
                 0 2px 0 #c9c9c9,
                 0 3px 0 #bbb,
                 0 4px 0 #b9b9b9,
                 0 5px 0 #aaa,
                 0 6px 1px rgba(0,0,0,.1),
                 0 0 5px rgba(0,0,0,.1),
                 0 1px 3px rgba(0,0,0,.3),
                 0 3px 5px rgba(0,0,0,.2),
                 0 5px 10px rgba(0,0,0,.25),
                 0 10px 10px rgba(0,0,0,.2),
                 0 20px 20px rgba(0,0,0,.15);
  /*text-shadow: 2px 2px 2px rgba(0,0,0,.3);*/
}
#header_lv_2 nav {
  /*font-family: tahoma;
  font-size: 1em;
  padding: 20px;
  background: #6699ff;  */
}
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.flex-item {
  flex-grow: 1;
  font-size: .8em;
  padding: 10px;
  background: #6699ff;
  border: 1px solid transparent;
  flex-basis: 50px;
  text-align: center;
  color: white;
  margin-top: 10px;
}
#header_lv_2 nav a:hover {
  text-decoration: none;
  color:white;
  background-color: gray;
}
#header_lv_2 nav a:visited {
  text-decoration: none;
}
#header_lv_2 nav a.selected {
  font-family: arial;
  background-color: gray;
  font-weight: bold;
  font-size: .8em;
}
#header_lv_2 nav a.selected:hover {
  text-decoration: none;
  color:white;
  background-color: gray;
}
</style>
