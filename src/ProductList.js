import React, { Component } from "react";
import prodCollections from "./ProdCollection";

function DisplayProducts({ category, min, max }) {
    const filteredProducts = prodCollections.filter((prod) => (
        (category === 'All' || prod.category === category)
        && (!min || prod.price >= min)
        && (!max || prod.price <= max)
    ));

    return (
        <ul className="list-group" id="product-list">
            {filteredProducts.map((prod) => (
                <li key={prod.id} className="itemLists">
                    <div className="card p-3 listContainer">
                        <a href={prod.source} id="imgLink">
                            <img className="card-img-top img-responsive rounded-4 imgContent" src={prod.image} alt={prod.name} />
                        </a>
                        <div className="card-body cardBody">
                            <p className="card-text itemName">{prod.name}</p>
                            <p className="card-text itemPrice">Price: &#8377; {prod.price}</p>
                            <a href='##' className="btn btn-primary btnBuy">BUY</a>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

class ProductList extends Component {
    render() {
        return (
            <>
                <DisplayProducts category="All" min={null} max={null} />
            </>
        )
    }
}

export { DisplayProducts, ProductList };