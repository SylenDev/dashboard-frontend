<template>
    <div class="overflow-x-auto bg-gray-600">
      
      <div class="my-4 text-white text-center">
        <div>
          <h3>Pagina {{ productStore.page }} / {{ productStore.lastPage }}</h3>
          <h5>Total de Productos {{ productStore.totalProducts }}</h5>
        </div>
      </div>
      <table class="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr class="bg-gray-800 text-white uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">ID</th>
            <th class="py-3 px-6 text-left">Name</th>
            <th class="py-3 px-6 text-left">Price</th>
            <th class="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 text-sm font-light">
          <tr v-for="product in products" :key="product.id" class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-6 text-left whitespace-nowrap">{{ product.id }}</td>
            <td class="py-3 px-6 text-left">{{ product.name }}</td>
            <td class="py-3 px-6 text-left">{{ product.price }}</td>
            <!-- Botones de acciones -->
            <td class="py-3 px-6 text-center flex ">
              <div class="flex item-center justify-center">
                <div @click="handleEditPreview(product.id)" class="transform hover:text-purple-500 hover:scale-110 mr-3">
                  <button id="modal-trigger" class="bg-yellow-500 hover:bg-yellow-400 text-yellow-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span>EDITAR</span>
                  </button>
                </div>
                <div @click="handleDelete(product.id)" class="transform hover:text-purple-500 hover:scale-110">
                  <button class="bg-red-500 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span>ELIMINAR</span>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal con form para los datos del producto a editar -->
      <Modal :isVisible="showModalEdit" @handleClose="closeModalEdit" title="Edit Product">
        <form @submit.prevent="handleEdit">
          <div class="mb-4">
            <label  for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input required type="text" id="name" name="name" v-model="product.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-6">
            <label for="price" class="block text-gray-700 text-sm font-bold mb-2">Price</label>
            <input required min="1" type="text" id="price" name="price" v-model="product.price" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="flex justify-end">
            <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
              Save
            </button>
          </div>
        </form>
        <div v-if="showEditConfirmation" class="bg-teal-100 borader-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
          <div class="flex">
            <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
            <div>
              <p class="font-bold">Producto modificado correctamente</p>
            </div>
          </div>
        </div>
      </Modal>
      <!-- Botoncito para añadir un nuevo producto -->
      <div class="my-10">
        <div class="pl-6">
          <button class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" @click="showModalAdd = true">
            Add Product
          </button>
        </div>
        
      </div>
      <!-- Modal con form para los datos del nuevo producto -->
      <Modal :isVisible="showModalAdd" @handleClose="closeModalAdd" title="Add Product">
        <form @submit.prevent="handleAdd">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input required type="text" id="name" name="name" v-model="product.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-6">
            <label for="price" class="block text-gray-700 text-sm font-bold mb-2">Price</label>
            <input min="1" type="text" id="price" name="price" v-model="product.price" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="flex justify-end">
            <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
              Save
            </button>
          </div>
        </form>
        <div v-if="showAddConfirmation" class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
          <div class="flex">
            <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
            <div>
              <p class="font-bold">Producto agregado correctamente</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '../stores/product-store' ;
  import Modal from './Modal.vue';

  export default {
    components: {
      Modal,
    },
    data() {
      return {
        productStore: useProductStore(),
        showModalEdit: false,
        showEditConfirmation: false,
        showModalAdd: false,
        showAddConfirmation: false,
        products: [],
        product: {
          id: null,
          name: '',
          price: 1,
        },
      };
    },
    computed:{
    },
    async created(){
      this.products = await this.productStore.getProducts()
    },
    methods: {
      async obtenerProducto(id) {
        this.product = await this.productStore.getProductDetail(id);
        this.showModalEdit = true;
      },
      async handleDelete(id) {
        console.log('delete', id)
        //await this.productStore.deleteProduct(id);
      },
      async handleEditPreview(id) {
        this.showModalEdit = true;
        await this.obtenerProducto(id);
      },
      async handleEdit() {
        let body = {
          id: this.product.id,
          name: this.product.name,
          price: this.product.price,
        };
        try {
          await this.productStore.updateProduct( {body} );
          this.showEditConfirmation = true;
        } catch (error) {
          console.log(error);
        } finally {
          await this.sleep(2200);
          this.showEditConfirmation = false;
          this.showModalEdit = false;
          this.products = await this.productStore.getProducts();
        }

      },
      async handleAdd() {
        delete this.product.id; 
        try{
          await this.productStore.addProduct(this.product);
        } catch (error) {
          console.log(error);
        } finally {
          this.showAddConfirmation = true;
          await this.sleep(2200);
          this.showAddConfirmation = false;
          this.showModalAdd = false;
        }
      },
      closeModalEdit() {
        this.showModalEdit = !this.showModalEdit;
      },
      closeModalAdd() {
        this.showModalAdd = !this.showModalAdd;
      },
      async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      },
    },

    

  };
  </script>
  
  <style scoped>
  table {
    border-collapse: separate;
    border-spacing: 0 10px;
  }
  
  th {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  
  td {
    background-color: #fff;
  }
  
  tr:hover td {
    background-color: #f3f4f6;
  }
  </style>
  