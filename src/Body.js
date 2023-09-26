import React, { Component } from "react";
import prodCollections  from "./ProdCollection";
import { ProductList } from "./ProductList";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'All',
            minPrice: 0,
            maxPrice: 0,
            filterProduct: prodCollections
        }
    }


    render() {
        return (
            <div class="container productContainer">
                <ProductList />
            </div>
        )
    }
}

export default Product;