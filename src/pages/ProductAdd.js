import React from "react";
import { Button, Form, Input } from "antd";

import ProductService from "../services/productService";
import { useState } from "react";
let asd = new ProductService();
export default function ProductAdd() {
  // returns all values and methods from your Formik tag
  const [product, setProduct] = useState({});
  function onAddProduct(
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
    asd
      .addProduct(
        categoryId,
        discontinued,
        productName,
        quantityPerUnit,
        reorderLevel,
        supplierId,
        unitPrice,
        unitsInStock,
        unitsOnOrder
      )
      .then((result) => {
        console.log("hi");
      });
  }

  return (
    <div>
      <Form
        className="ui form"
        onFinish={(values) => {
          onAddProduct(
            values.categoryId,
            values.discontinued,
            values.productName,
            values.quantityPerUnit,
            values.reorderLevel,
            values.supplierId,
            values.unitPrice,
            values.unitsInStock,
            values.unitsOnOrder
          );
          console.log(values.categoryId);
        }}
      >
        <Form.Item label="productName" name="productName">
          <Input />
        </Form.Item>
        <Form.Item label="unitPrice" name="unitPrice">
          <Input />
        </Form.Item>
        <Form.Item label="unitsInStock" name="unitsInStock">
          <Input />
        </Form.Item>
        <Form.Item label="quantityPerUnit" name="quantityPerUnit">
          <Input />
        </Form.Item>
        <Form.Item label="category" name="categoryId">
          <Input />
        </Form.Item>
        <Form.Item label="supplierId" name="supplierId">
          <Input />
        </Form.Item>
        <Form.Item label="reorderLevel" name="reorderLevel">
          <Input />
        </Form.Item>
        <Form.Item label="discontinued" name="discontinued">
          <Input />
        </Form.Item>
        <Form.Item label="unitsOnOrder" name="unitsOnOrder">
          <Input />
        </Form.Item>

        <Button color="green" type="submit" htmlType="submit">
          Ekle
        </Button>
      </Form>
    </div>
  );
}
