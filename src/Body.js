import React, { Component } from "react";
import prodCollections from "./ProdCollection";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'All',
            minPrice: '',
            maxPrice: '',
            filteredProducts: prodCollections.map((prod) => ({
                ...prod,
                quantity: 0,
            }))
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

        this.setState({ filteredProducts: filteredProducts.map((prod) => ({ ...prod, quantity: 0 })) });
    }

    incrementItem  = (index )=> {
        console.log('increment');
        this.setState((prevState) => {
            const updateItem = [...prevState.filteredProducts];
            updateItem[index] = {...updateItem[index], quantity: updateItem[index].quantity + 1};
            return { filteredProducts: updateItem };
        });
    }

    // incrementItem(index){
    //     console.log('increment');
    //     let initialItem = [...this.state.filteredProducts];
    //     console.log(initialItem[index])
    //     initialItem[index] = {...initialItem[index], quantity: initialItem[index].quantity + 1}
    //     this.setState({filteredProducts: initialItem});
    //     console.log(initialItem[index]);
    //     return;
    // }

    decrementItem = (index) => {
        this.setState((prevState) => {
            const updateItem = [...prevState.filteredProducts];
            if (updateItem[index].quantity > 0)
            updateItem[index] = {...updateItem[index], quantity: updateItem[index].quantity - 1};
            return { filteredProducts: updateItem };
        });
    }

    render() {
        const { category, minPrice, maxPrice, filteredProducts } = this.state;
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
                        {filteredProducts.map((prod, index) => (
                            <li key={prod.id} className="itemLists">
                                <div className="card p-3 listContainer">
                                    <a href={prod.source} id="imgLink">
                                        <img className="card-img-top img-responsive rounded-4 imgContent" src={prod.image} alt={prod.name} />
                                    </a>
                                    <div className="card-body cardBody">
                                        <p className="card-text itemName">{prod.name}</p>
                                        <p className="card-text itemPrice">Price: &#8377; {prod.price}</p>
                                        <div className="container d-flex buyItem">
                                            <i className="fa-solid fa-minus addItem" style={{ color: "black" }} onClick={() => this.decrementItem(index)}></i>
                                            <p id="dispQuantity">{prod.quantity}</p>
                                            <i className="fa-solid fa-plus removeItem" style={{ color: "black" }} onClick={()=> this.incrementItem(index)}></i>
                                            <a href='##' className="btn btn-primary btnBuy">BUY</a>
                                        </div>
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