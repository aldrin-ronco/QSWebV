<template lang="html">
  <div>
    <header class="qs-header">
      <img src="../assets/images/logo-blanco.svg" alt="">
      <div class="box-slicing">
            <a href="#">
                  <img class="rounded" src="../assets/images/user.png" alt="" />
                  <span>Roberto Romero</span>
                  <img src="../assets/images/arrow-profile.svg" alt="">
              </a>
              <div class="box-maintenance">
                <button>My account</button>
                  <button>Logout</button>
              </div>
          </div>
    </header>

    <section>
      <aside class="aside-menu">
        <!-- <a href="#"><img src="../assets/images/icon-dash.svg" alt=""><span>Dashboard</span></a> -->
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
      </aside>
      <aside class="content">

        <!-- <div class="row align-left">
          <div class="breadcrumb">
            <a href="">Facturación</a><span>/ Pedidos</span>
            <a href="" class="btn btn-pedido"><img       src="../assets/images/more.svg" alt=""><span>Nuevo Pedido</span></a>
          </div>

        </div>

        <div class="row content-box filter-box">
          <h2>Filtrar pedidos</h2>
          <div class="formsFields">
            <div class="box-border">
              <a href="" class="icon-btn"><img src="../assets/images/loop.svg" alt=""></a>

              <div class="box-filter-input">
                <a href="" class="btn btn-filter-text"><span>A Producto Masivo</span><img src="../assets/images/close-more.svg" alt=""></a>
                <input type="text">
              </div>
            </div>

            <div class="box-select">
              <select name="" id="">
                <option value="">Almacen</option>
              </select>
            </div>
            <a href="" class="btn btn-filter">Filtrar</a>
          </div>
        </div>
        <div class="row content-box info-box">
          <header>
            <h2>Número</h2>
            <h2 class="large">Tipo</h2>
            <h2>Cliente</h2>
            <h2>Almacén</h2>
            <h2 class="more-large">Vendedor</h2>
          </header>
        </div>
        <div class="row pagination">
          <a href="" class="first"><img src="../assets/images/arrow-double.svg" alt=""></a>
          <a href="" class="before"><img src="../assets/images/arrow-only.svg" alt=""></a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="" class="after"><img src="../assets/images/arrow-only.svg" alt=""></a>
          <a href="" class="last"><img src="../assets/images/arrow-double.svg" alt=""></a>
        </div> -->
        <!-- <input type="text" name="password" value="nada" id="pwd"> -->
      </aside>
    </section>
  </div>
</template>

<script>
export default {
  mounted () {
    // $('#pwd').keydown(function () {
    //   $(this).css('background-color', 'yellow')
    // })
    // $('#pwd').keyup(function () {
    //   $(this).css('background-color', 'white')
    // })
    // $('#pwd').mouseover(function () {
    //   $(this).css('font-size', 20)
    // })
    // $('#pwd').mouseout(function () {
    //   $(this).css('font-size', '1em')
    // })
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
  },
  methods: {
    toggleGroups (e) {
      $('.box-slicing a').click(function (e) {
        console.log('executing!')
        // $(e.target).children('a').slideToggle()
        $(this).siblings().slideToggle(400)
        // $(this).toggleClass('active')
        // e.stopPropagation()
      })
      // $('.second-level a').click(function (e) {
      //   $(this).siblings().show()
      //   $(this).toggleClass('activer')
      // })
      $('a[href*="#"]').click(function () {
        return false
      })
    },
    created () {
      $('.box-slicing a').click(function (e) {
        console.log('executing!')
        $(e.target).siblings().slideToggle(400)
        $(e.target).toggleClass('active')
      })
      $('.second-level a').click(function (e) {
        $(e.target).siblings().show()
        $(e.target).toggleClass('active')
      })
      $('a[href*=#]').click(function () {
        return false
      })
    }
  }
}
</script>

<style lang="css">
.after-and-before {
  content: '';
}
a,
input {
  outline: none;
  text-decoration: none;
}
.btn,
input,
select,
label,
a {
  font-size: 14rem;
  font-size: 14px;
  padding: 10px;
  display: block;
  width: 100%;
  color: #555555;
  outline: 0;
}
.btn,
input,
select,
label {
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
}
input,
select,
textarea {
  -webkit-appearance: none;
  background: white;
  border: 1px solid #D3D3D3;
}
select {
  text-transform: uppercase;
}
label {
  padding: 0;
  color: #0F2A45;
  font-weight: 700;
  margin-bottom: 6px;
}
.image-full-screen {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  object-fit: cover;
}
.middle-center {
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn {
  color: white;
  background: #53C7DD;
}
a {
  color: #53C7DD;
}
.formField {
  margin-bottom: 12px;
}
.formField:last-of-type {
  margin-bottom: 0;
}
.formField .red-alert input {
  border-color: #FB4946;
}
.formField a:hover {
  color: #0F2A45;
  text-decoration: none;
}
.wrap {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: #0F2A45;
}
.wrap .login-box {
  padding: 30px 30px 30px;
  text-align: center;
  background: white;
  width: 30em;
}
.wrap .login-box h1 {
  margin: 0 auto 30px;
  text-align: center;
}
.wrap .login-box h1 img {
  width: 100%;
  max-width: 240px;
  display: inline-block;
}
.wrap .login-box label {
  text-align: left;
}
.wrap .login-box h1,
.wrap .login-box .formField {
  display: block;
}
.wrap .login-box .btn {
  padding: 15px 10px;
}
.wrap .login-box input {
  width: calc(100%);
}
.wrap .login-box a {
  width: calc(100%);
  margin-top: 25px;
}
.wrap .login-box .box-select {
  width: 100% !important;
  margin-left: 0;
  position: relative;
}
.wrap .login-box .box-select select {
  background: none;
  border-radius: 4px;
}
.wrap.index-wrap .copyright {
  width: 100%;
  position: absolute;
  z-index: 10;
  bottom: 4%;
  font-size: 12rem;
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  color: white;
  letter-spacing: .5px;
}
header {
  height: 70px;
  background: #0F2A45;
  text-align: left;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: calc(100% - 40px);
  z-index: 100;
}
header h1 {
  width: 225px;
}
header h1 img {
  width: 100%;
}
header .box-slicing {
  float: right;
  /*margin-top: 9px;*/
}
header .box-slicing a {
  height: 100%;
  width: auto;
}
header .box-slicing a img,
header .box-slicing a span {
  vertical-align: middle;
  display: inline-block;
}
header .box-slicing a img.rounded {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
}
header .box-slicing a img:last-of-type {
  margin: 5px 0 0 15px;
}
header .box-slicing a span {
  font-size: 14rem;
  font-size: 14px;
  color: white;
  margin-left: 8px;
}
header .box-slicing .box-maintenance {
  position: absolute;
  display: none;
}
header h1,
header .box-slicing {
  vertical-align: middle;
  display: inline-block;
}
.align-left {
  text-align: left;
}
.vertical-align-middle {
  vertical-align: middle;
  display: inline-block;
}
h2 {
  font-size: 12rem;
  font-size: 12px;
  color: #999999;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}
.box-select {
  width: 25% !important;
  margin-left: -4px;
  position: relative;
}
.box-select:after {
  content: '';
  background: url(../assets/images/triangle-fill.svg) no-repeat;
  width: 10px;
  height: 6px;
  position: absolute;
  top: 18px;
  right: 15px;
  display: block;
}
.box-select select {
  width: 100%;
  color: #9B9B9B;
  font-weight: 400;
  text-transform: none;
  background: #F4F5F9;
  border-radius: 0;
}
section {
  background: #F4F7FA;
}
section aside {
  display: inline-block;
  vertical-align: top;
  height: 100%;
}
section aside.main-menu {
  width: 254px;
  padding: 80px 0 0px;
  background: #EAEDF4;
  position: fixed;
  left: 0;
  top: 0;
  height: calc(100%);
  z-index: 90;
  overflow-y: auto;
}
section aside.main-menu a {
  display: block;
  padding: 15px 15px;
  width: calc(100% - 30px);
  position: relative;
}
section aside.main-menu a span {
  font-size: 16rem;
  font-size: 16px;
  color: #5B82A8;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
}
section aside.main-menu a img {
  margin-right: 15px;
  width: 26px;
}
section aside.main-menu a img.arrow {
  float: right;
  width: 10px;
}
section aside.main-menu a img,
section aside.main-menu a span {
  display: inline-block;
  vertical-align: middle;
}
section aside.main-menu a:after {
  content: '';
  width: 4px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  background: #00CCD3;
  display: none;
}
section aside.main-menu .box-slicing {
  position: relative;
}
section aside.main-menu .box-slicing a {
  position: relative;
}
section aside.main-menu .box-slicing a img:last-of-type {
  margin-right: 0 !important;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(0);
  right: 20px;
  transition: .5s;
  -moz-transition: .5s;
  -webkit-transition: .5s;
}
section aside.main-menu .box-slicing a:hover,
section aside.main-menu .box-slicing a.active {
  background: #D6DCE8;
  display: block;
  padding-left: 15px;
  margin: 0;
  width: calc(100% - 30px);
}
section aside.main-menu .box-slicing a:hover span,
section aside.main-menu .box-slicing a.active span {
  color: #0F2A45 !important;
}
section aside.main-menu .box-slicing a:hover:after,
section aside.main-menu .box-slicing a.active:after {
  display: block;
}
section aside.main-menu .box-slicing a.active img:last-of-type {
  right: 20px;
  transform: translateY(-50%) rotate(90deg);
}
section aside.main-menu .box-slicing .box-maintenance {
  display: none;
}
section aside.main-menu .box-slicing .box-maintenance .second-level {
  background: rgba(15, 42, 69, 0.1);
  position: relative;
}
section aside.main-menu .box-slicing .box-maintenance .second-level a {
  font-size: 16rem;
  font-size: 16px;
  width: calc(100% - 70px) !important;
  padding-left: 55px;
  color: #5B82A8 !important;
  background: rgba(15, 42, 69, 0.1);
}
section aside.main-menu .box-slicing .box-maintenance .second-level a img:last-of-type {
  right: 15px !important;
}
section aside.main-menu .box-slicing .box-maintenance .second-level .container {
  display: none;
  background: rgba(15, 42, 69, 0.1);
}
section aside.main-menu .box-slicing .box-maintenance .second-level .container a {
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  text-indent: 0;
  margin-left: 0;
  width: calc(100% - 65px) !important;
  padding: 10px 10px 10px 55px;
  color: white !important;
}
section aside.main-menu .box-slicing .box-maintenance .second-level .container a:hover,
section aside.main-menu .box-slicing .box-maintenance .second-level .container a.activer {
  color: #5B82A8 !important;
  background: #D6DCE8;
}
section aside.content {
  width: calc(100% - 313px);
  padding: 20px 30px;
  position: absolute;
  left: 253px;
  top: 70px;
}
section aside.content .row {
  display: block;
  width: 100%;
  position: relative;
  margin-bottom: 15px;
}
section aside.content .row .breadcrumb {
  padding: 10px 0;
}
section aside.content .row .breadcrumb a,
section aside.content .row .breadcrumb span {
  vertical-align: middle;
  display: inline-block;
  font-size: 24rem;
  font-size: 24px;
  width: auto;
  padding: 0;
}
section aside.content .row .breadcrumb span {
  color: #0F2A45;
  font-weight: 600;
  margin-left: 10px;
}
section aside.content .row .breadcrumb a {
  color: #777777;
  font-weight: 300;
}
section aside.content .row .breadcrumb a.btn-pedido {
  color: #777777;
  font-weight: 300;
  float: right;
  display: inline-block;
  width: auto;
  padding: 12px 15px;
  background: #59C983;
  line-height: 12px;
  margin-top: -6px;
}
section aside.content .row .breadcrumb a.btn-pedido img,
section aside.content .row .breadcrumb a.btn-pedido span {
  display: inline-block;
  vertical-align: middle;
  font-size: 13rem;
  font-size: 13px;
  font-weight: 100;
  color: white;
  margin: 0;
  padding: 0;
}
section aside.content .row .breadcrumb a.btn-pedido span {
  letter-spacing: 0;
}
section aside.content .row .breadcrumb a.btn-pedido img {
  margin-right: 10px;
}
section aside.content .row .btn {
  padding: 15px 10px;
  font-size: 14rem;
  font-size: 14px;
  font-weight: 600;
}
section aside.content .row .btn img,
section aside.content .row .btn span {
  vertical-align: middle;
  display: inline-block;
}
section aside.content .row.filter-box {
  padding: 15px 30px 20px !important;
  width: calc(100% - 60px) !important;
  background: #FAFAFA !important;
}
section aside.content .row.filter-box h2 {
  display: block;
}
section aside.content .row.filter-box .formsFields {
  position: relative;
}
section aside.content .row.filter-box .formsFields > * {
  vertical-align: middle;
  display: inline-block;
  width: auto;
  border-radius: 0;
}
section aside.content .row.filter-box .formsFields input,
section aside.content .row.filter-box .formsFields select {
  -webkit-appearance: none;
}
section aside.content .row.filter-box .formsFields input {
  background: none;
  border: none;
  width: 100%;
}
section aside.content .row.filter-box .formsFields .box-border {
  width: calc(66% - 28px);
  border-radius: 4px 0 0 4px;
  height: calc(40px - 8px) !important;
}
section aside.content .row.filter-box .formsFields .box-border .icon-btn,
section aside.content .row.filter-box .formsFields .box-border .box-filter-input {
  vertical-align: middle;
  display: inline-block;
}
section aside.content .row.filter-box .formsFields .box-border .box-filter-input {
  height: auto;
  position: relative;
  width: calc(100% - 50px);
  margin-left: 10px;
}
section aside.content .row.filter-box .formsFields .box-border .box-filter-input .btn-filter-text,
section aside.content .row.filter-box .formsFields .box-border .box-filter-input input {
  display: inline-block;
  vertical-align: middle;
}
section aside.content .row.filter-box .formsFields .box-border .box-filter-input .btn-filter-text {
  background: #C3F4D5;
  border: 1px solid #ADCFBA;
  padding: 3px 52px 6px 14px;
  border-radius: 15px;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: auto;
}
section aside.content .row.filter-box .formsFields .box-border .box-filter-input .btn-filter-text span {
  font-size: 13rem;
  font-size: 13px;
  font-weight: 700;
  color: #1F6639;
}
section aside.content .row.filter-box .formsFields .box-border .box-filter-input .btn-filter-text img {
  position: absolute;
  top: 8px;
  right: 12px;
}
section aside.content .row.filter-box .formsFields .box-border .box-filter-input input {
  padding: 0;
  height: 32px;
}
section aside.content .row.filter-box .formsFields a.icon-btn {
  position: relative;
  width: 20px;
  padding: 0;
  margin-top: 2px;
}
section aside.content .row.filter-box .formsFields a.icon-btn img {
  width: 100%;
}
section aside.content .row.filter-box .formsFields a.btn-filter {
  background: #53C7DD;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 10%;
  z-index: 4;
  text-align: center;
  line-height: 42px;
  font-weight: 300;
  border-radius: 0 4px 4px 0;
  letter-spacing: 0;
}
section aside.content .row.filter-box .formsFields .box-border,
section aside.content .row.filter-box .formsFields select,
section aside.content .row.filter-box .formsFields .btn-filter {
  height: calc(50px - 8px);
  padding: 4px 12px;
}
section aside.content .row.filter-box .formsFields .box-border,
section aside.content .row.filter-box .formsFields select {
  border: 1px solid #D3D3D3;
}
section aside.content .row.content-box {
  background: white;
  border: 1px solid #E2E2E2;
  padding: 15px;
  width: calc(100% - 30px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.06);
  -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.06);
}
section aside.content .row.content-box.info-box {
  background: white;
  height: 800px;
  padding: 0;
  width: 100%;
}
section aside.content .row.content-box.info-box header {
  height: auto;
  background: #E6E9F1;
  padding: 0 15px;
  width: calc(100% - 30px);
  position: relative;
  top: auto;
  z-index: 2;
}
section aside.content .row.content-box.info-box header h2 {
  display: inline-block;
  vertical-align: middle;
  width: 15%;
}
section aside.content .row.content-box.info-box header h2.large {
  width: 18%;
}
section aside.content .row.content-box.info-box header h2.more-large {
  width: 35%;
  text-align: center;
}
section aside.content .row.pagination {
  text-align: center;
}
section aside.content .row.pagination a {
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  background: white;
  border: 1px solid #D3D3D3;
  font-size: 14rem;
  font-size: 14px;
  color: #999999;
  line-height: 33px;
  margin: 0 2px;
  width: 32px;
  height: 32px;
  padding: 0;
}
section aside.content .row.pagination a:hover {
  background: #53C7DD;
  color: white;
}
section aside.content .row.pagination a.after,
section aside.content .row.pagination a.last {
  transform: rotate(180deg);
}
@media screen and (max-width: 860px) {
  section aside.main-menu {
    width: calc(84px - 20px);
    overflow: inherit;
  }
  .box-maintenance {
    display: none;
  }
  section aside.main-menu a img {
    margin-right: 0;
  }
  section aside.content {
    left: 83px;
    width: calc(100% - 143px);
  }
  section aside.main-menu .box-slicing .box-maintenance {
    position: absolute;
    top: 0;
    left: 64px;
  }
  section aside.main-menu a span,
  section aside.main-menu .box-slicing a span {
    display: none;
  }
  section aside.main-menu .box-slicing .box-maintenance .second-level {
    background: rgba(15, 42, 69, 0.5);
  }
  section aside.main-menu .box-slicing .box-maintenance .second-level a span {
    display: block;
    color: white !important;
  }
  section aside.main-menu .box-slicing .box-maintenance .second-level .container a {
    color: white !important;
  }
  section aside.main-menu .box-slicing a img:last-of-type {
    transform: translateY(-50%) rotate(0) !important;
  }
}
@media screen and (max-width: 414px) {
  header h1 img {
    width: 70%;
  }
  header .box-slicing a span {
    display: none;
  }
  section aside.content {
    left: 63px;
    width: calc(100% - 83px);
    padding: 20px 10px;
  }
  section aside.content .row .breadcrumb a,
  section aside.content .row .breadcrumb span {
    font-size: 14rem;
    font-size: 14px;
  }
  section aside.content .row.filter-box .formsFields .box-border {
    width: calc(100% - 30px) !important;
    height: auto !important;
  }
  section aside.content .row.filter-box .formsFields > * {
    width: 100% !important;
  }
  section aside.content .row.filter-box .formsFields a.btn-filter {
    position: relative;
    top: auto;
    right: auto;
    height: auto;
  }
  section aside.content .row.filter-box {
    padding: 15px 10px 20px !important;
    width: calc(100% - 26px) !important;
  }
  section aside.content .row.filter-box .formsFields .box-border,
  section aside.content .row.filter-box .formsFields .box-select {
    margin-bottom: 15px;
    margin-left: 0;
  }
  section aside.content .row.content-box.info-box {
    width: 98%;
  }
  section aside.content .row.pagination a {
    line-height: 27px;
    height: 26px;
    width: 26px;
  }
  section aside.main-menu .box-slicing a img:last-of-type {
    right: 10px !important;
  }
}
.qs-header {
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
* {
  box-sizing: border-box;
}
.aside-menu {
  width: 290px;
  padding-top: 40px;
  background: #EAEDF4;
  position: fixed;
  left: 0;
  top: 0;
  height: calc(100%);
  z-index: 90;
  overflow-y: auto;
}
.menu {
  width: 100%;
  margin-top: 30px;
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
