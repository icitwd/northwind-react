import axios from "axios";

export default class ProductService {
  getProducts() {
    return axios.get("http://localhost:8083/api/products/getall");
  }

  getByProductName(productName) {
    return axios.get(
      "http://localhost:8083/api/products/getByProductName?productName=" +
        productName
    );
  }
  addProduct(
    categoryId,
    discontinued,
    productName,
    quantityPerUnit,
    reorderLevel,
    supplierId,
    unitPrice,
    unitsInStock,
    unitsOnOrder
  ) {
    return axios.post(
      `http://localhost:8083/api/products/add?category.categoryId=${categoryId}&discontinued=${discontinued}&productName=${productName}&quantityPerUnit=${quantityPerUnit}&reorderLevel=${reorderLevel}&supplierId=${supplierId}&unitPrice=${unitPrice}&unitsInStock=${unitsInStock}&unitsOnOrder=${unitsOnOrder}`
    );
  }
}
