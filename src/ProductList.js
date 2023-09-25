import React, { Component } from "react";
import { prodCollections } from "./ProdCollection";

function displayProducts(category, min, max) {
    $('#product-list').empty();
    prodCollections.forEach((prod) => {
        if ((category === 'All' || prod.category === category)
            && (!min || prod.price >= min)
            && (!max || prod.price <= max)) {
            const listItem = $('<li class="itemLists">').html(`
                    <div class="card p-3 listContainer">
                        <a href="#" id="imgLink">
                            <img class="card-img-top img-responsive rounded-4 imgContent" src="${prod.image}" alt="${prod.name}">
                        </a>
                        <div class="card-body cardBody">
                            <p class="card-text itemName">${prod.name}</p>
                            <p class="card-text itemPrice">Price: &#8377 ${prod.price}</p>
                            <a href="${prod.source}" class="btn btn-primary btnBuy">BUY</a>
                        </div>
                    </div>
                `);
            $('#product-list').append(listItem);
        }
    });
}

class ProductList extends Component {
    render() {
        return (
            <>
            </>
        )
    }
}

export default ProductList;