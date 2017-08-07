<template>
  <div>
    <v-card>
      <v-card-title>
        <h6>CLIENTES REGISTRADOS</h6>
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model='filter'
          @input.native="customSearch($event)"
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers='headers' :items='customers' class="elevation-1" hide-actions>
        <template slot='items' scope='props'>
           <td class="text-xs-left">{{ props.item.codcli }}</td>
           <td class="text-xs-left">{{ props.item.nombre_com }}</td>
           <td class="text-xs-left">{{ props.item.cedula }}</td>
           <td class="text-xs-left">{{ props.item.tels }}</td>
           <td class="text-xs-left">{{ props.item.direccion }}</td>
        </template>
      </v-data-table>
    </v-card>
    <div class="text-xs-center pt-3">
      <v-pagination v-model="pagination.page_no" :length="Math.ceil(pagination.total / pagination.page_size)"></v-pagination>
    </div>
    <pre></pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import tools from './../helpers/tools.js'
import _ from 'lodash'
export default {
  name: 'customer',
  data () {
    return {
      pagination: {page_no: 1, page_size: 10, total: 0},
      filter: '',
      headers: [
        {
          text: 'Código',
          sortable: false,
          align: 'left',
          value: 'codcli'
        },
        {
          text: 'Nombre del cliente',
          sortable: false,
          align: 'left',
          value: 'nombre_com'
        },
        {
          text: 'NIT',
          sortable: false,
          align: 'left',
          value: 'cedula'
        },
        {
          text: 'Teléfonos',
          sortable: false,
          align: 'left',
          value: 'tels'
        },
        {
          text: 'Direccion',
          sortable: false,
          align: 'left',
          value: 'Direccion'
        }
      ],
      customers: []
    }
  },
  created: function () {
    this.fetchData()
  },
  computed: {
    ...mapGetters([
      'axios_instance'
    ])
  },
  watch: {
    'pagination.page_no': function (val) {
      this.paginate(this.pagination.page_size, val, this.filter)
    }
  },
  methods: {
    fetchData () {
      let vm = this
      vm.axios_instance.get(tools.getBaseApi('/customers?page_size=9&page_no=1'), {timeout: 30000})
      .then(function (response) {
        console.log(response)
        vm.customers = response.data.data
        vm.pagination = response.data.pagination
      })
    },
    customSearch: _.debounce(function (e) {
      let vm = this
      vm.axios_instance.get(tools.getBaseApi('/customers?page_size=9&page_no=1&filter=' + e.target.value), {timeout: 30000})
      .then(function (response) {
        vm.customers = response.data.data
        vm.pagination = response.data.pagination
      })
    }, 500),
    paginate (pageSize, pageNo, filter) {
      let vm = this
      vm.axios_instance.get(tools.getBaseApi(`/customers?page_size=${pageSize}&page_no=${pageNo}&filter=${filter}`), {timeout: 30000})
      .then(function (response) {
        vm.customers = response.data.data
        vm.pagination = response.data.pagination
      })
    }
  }
}
</script>

<style lang="css" scoped>

</style>
