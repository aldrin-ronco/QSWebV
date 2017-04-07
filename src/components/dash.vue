<template>
    <div class="menu">
      <ul class="level1">
        <li>
          <a href="#"><span class="inventario">INVENTARIO</span><img src="../assets/images/arrow.svg" class="arrow"></a>
          <ul class="level2">
            <li><a href="#"><span>1. PARAMETROS</span><img src="../assets/images/arrow.svg" class="arrow"></a>
              <ul class="level3">
                <li><a href="#">1.1 Catálogo de productos & servicios</a></li>
                <li><a href="#">1.2 Definición de transacciones de inventario</a></li>
                <li><a href="#">1.3 Administración de unidades de medida</a></li>
              </ul>
            </li>
            <li><a href="#">2. PROCESOS</a>
              <ul class="level3">
                <li><a href="#">2.1 Entradas, Salidas & Transferencias entre bodegas</a></li>
                <li><a href="#">2.2 Reimpresión de transacciones de inventario</a></li>
                <li><a href="#">2.3 Toma & aplicación de inventario</a></li>
              </ul>
            </li>
            <li><a href="#">CONSULTAS</a></li>
          </ul>
        </li>
        <li><a href="#"><span class="facturacion">FACTURACIÓN</span><img src="../assets/images/arrow.svg" class="arrow"></a></li>
        <li><a href="#"><span class="tesoreria">TESORERIA</span><img src="../assets/images/arrow.svg" class="arrow"></a></li>
        <li><a href="#"><span class="cartera">CARTERA</span><img src="../assets/images/arrow.svg" class="arrow"></a></li>
      </ul>
    </div>
</template>

<script>
export default {
  mounted () {
    $('.level1 li').click(function () {
      // $(this).children('a').children('img').css('transform', 'rotate(90deg)')
      $(this).children('.level2').children('li').slideToggle(200)
      // console.log($(this).children('.level2').children('li'))
    })
    // $('level2 li').click(function () {
    //   $(this).children('.level3').children('li').slideToggle(200)
    // })
    $('.level2 li').click(function () {
      // console.log($(this).children('.level3').children('li'))
      $(this).children('.level3').children('li').slideToggle(200) // Realizo el Slide
      $(this).children('.level3').children('li').css('display', 'flex') // display Flex para que aparezcan centrados
    })
    $('li').click(function (e) {
      e.stopPropagation()
    })
  }
}
</script>

<style lang="css">
* {
  box-sizing: border-box;
}
.menu {
  width: 100%;
}
.level1 {
  padding: 0;
  position: relative;
}
.level1 li {
  background-color:  #EAEDF4;
  list-style: none;
  position: relative;
}
.level1 li a:after {
  content: '';
  width: 4px;
  height: 100%;
  background: #00CCD3;
  /*z-index: 2;*/
  position: absolute;
  top: 0;
  right: 0;
  display: none;
}
.level1 li a:hover:after {
  display: block;
}
.level1 li a {
  padding-left: 10px;
  text-decoration: none;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: .8em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.level1 li a:hover {
  background: #D6DCE8;
}
.level1 li a span.inventario:before {
  content: url('../assets/images/icon-inventario.svg');
  vertical-align: -50%;
  padding: 0 10px 0 0;
}
.level1 li a span.facturacion:before {
  content: url('../assets/images/icon-facturacion.svg');
  vertical-align: -50%;
  padding: 0 10px 0 0;
}
.level1 li a span.tesoreria:before {
  content: url('../assets/images/icon-tesoreria.svg');
  vertical-align: -50%;
  padding: 0 10px 0 0;
}
.level1 li a span.cartera:before {
  content: url('../assets/images/icon-cartera.svg');
  vertical-align: -50%;
  padding: 0 10px 0 0;
}
.level2 {
  padding: 0;
  width: 100%;
  position: relative;
}
.level2 li {
  background-color: #b8c2da;
  display: none;
  position: relative;
}
.level2 li a {
  color: black;
}
.level3 {
  padding: 0;
  width: 100%;
  position: relative;
}
.level3 li {
  background-color: #eaedf4;
  height: 30px;
  margin: auto 0 auto;
  display: none;
}
.level3 li a {
  margin: 0;
  font-family: 'calibri', 'Open Sans', sans-serif;
  font-size: .9em;
  color: gray;
}
</style>
