import { useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import ProductService from "../services/productService";
import ProductList from "./ProductList";
import { addToCart, removeFromCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
export default function ProductDetail() {
  let { name } = useParams();

  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} sepete eklendi`);
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    toast.success(`${product.productName} sepetten çıkarıldı`);
  };

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getByProductName(name)
      .then((result) => setProduct(result.data.data));
  }, []);

  // <Card.Meta>{product.category.categoryName}</Card.Meta>  --> line 24.
  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>Remaining : {product.unitsInStock}</Card.Meta>
            <Card.Meta>
              {product.category ? product.category.categoryName : "nau nau"}
            </Card.Meta>
            <Card.Description>{product.quantityPerUnit}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button onClick={() => handleAddToCart(product)}>
                Sepete Ekle
              </Button>
              <Button
                onClick={() => handleRemoveFromCart(product)}
                basic
                color="red"
              >
                Sepetten Çıkar
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
