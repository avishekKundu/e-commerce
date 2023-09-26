import React, { Component } from "react";
import prodCollections from "./ProdCollection";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'All',
            minPrice: '',
            maxPrice: '',
            filterProducts: prodCollections
        }
    }

    changeCategory = (e) => {
        this.setState({ category: e.target.value });
    }

    changeMinPrice = (e) => {
        this.setState({ minPrice: e.target.value });
    }

    changeMaxPrice = (e) => {
        this.setState({ maxPrice: e.target.value });
    }

    filterProduct = () => {
        const { category, minPrice, maxPrice } = this.state;
        const filteredProducts = prodCollections.filter((prod) => (
            (category === 'All' || prod.category === category)
            && (!minPrice || prod.price >= minPrice)
            && (!maxPrice || prod.price <= maxPrice)
        ));

        this.setState({ filteredProducts })
    }

    render() {
        const { category, minPrice, maxPrice, filterProducts } = this.state;
        return (
            <>
                <div className="container text-bg-secondary inputBody">
                    <ul>
                        <li>
                            <label className="my-1 mr-2 prodCategry">Category : </label> <br />
                            <select className="custom-select my-1 mr-sm-2 text-center border border-2 border-dark rounded-3"
                                id="selCategory" value={category} onChange={this.changeCategory} required>
                                <option value="All">Select </option>
                                <option value="Mobile">Mobile</option>
                                <option value="TV">TV</option>
                                <option value="Laptop">Laptop</option>
                                <option value="Headphone">Headphones</option>
                                <option value="Cloth">Clothing</option>
                            </select>
                        </li>
                        <li>
                            <label className="my-1 mr-2 prodPrice">Price Range : </label> <br />
                            <input className="rounded-3 text-center" type="number" id="minPrice" value={minPrice} onChange={this.changeMinPrice} aria-describedby="minPrice"
                                placeholder="Min Price" required /> <br />
                            <br /> <input className="rounded-3 text-center" type="number" id="maxPrice" value={maxPrice} onChange={this.changeMaxPrice} aria-describedby="maxPrice"
                                placeholder="Max Price" required />
                        </li>
                        <li>
                            <button className="btn btn-outline-primary border border-2" id="btnFilter" onClick={this.filterProduct} >
                                Filter
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="container productContainer">
                    <ul className="list-group" id="product-list">
                        {filterProducts.map((prod) => (
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
                </div>
            </>
        )
    }
}

export default Product;