import React, { Component } from "react";
import ProductList from "./ProductList";

class Product extends Component {
    render() {
        return (
            <div class="container productContainer">
                <ProductList />
            </div>
        )
    }
}

export default Product;