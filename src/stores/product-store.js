import { defineStore } from 'pinia';
import axios from 'axios';

let pathBase = 'http://localhost:3000/api/products'
// Configuración de la solicitud
const config = {
    headers: {
      'Content-Type': 'application/json',
    },
 }
export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: [],
        productDetail: {},
        totalProducts: 0,
        page: 1,
        lastPage: 1,
    }),
    actions:{

        async getProducts(){
            let response = await axios.get(pathBase);
            this.products = response.data.data;
            this.totalProducts = response.data.meta.total;
            this.page = response.data.meta.page;
            this.lastPage = response.data.meta.lastPage;
            return this.products;
        },
        async getProductDetail(id){
            let response = await axios.get(`${pathBase}/${id}`);
            this.productDetail = response.data;
            return this.productDetail;
        },
        async addProduct(product){
            let response = await axios.post(pathBase, product, config);
            return response.data;
        },
        async updateProduct(payload){
            console.log('payload', payload);    
            const { body } = payload;

            let response = await axios.patch(`${pathBase}/${body.id}`, body);
            return response.data;
        },
        async deleteProduct(id){
            let response = await axios.delete(`${pathBase}/${id}`);
            return response.data;
        }
    }
});
