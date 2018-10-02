import {Component} from "react";
import React from "react";
import ProductsTable from "./ProductsTable";
import ProductInput from "./ProductInput";

class Main extends Component {
    constructor(props) {
        super(props)

        const createData = function (id, name, price, quantity, unitPrice) {
            return {id, name, price, quantity, unitPrice};
        }

        this.createData = createData;

        this.state = {
            rows: []
        }

        this.addProductHandler = this.addProductHandler.bind(this);
    }

    addProductHandler = (data) => {
        console.log("Product added", data)

        const computeUnitPrice = function(price, quantity) {
            return (price / quantity).toPrecision(2)
        }


        let newData = this.createData(
            this.state.rows.length + 1,
            data.productName,
            data.price,
            data.quantity,
            computeUnitPrice(data.price, data.quantity),
        );


        let newState = Object.assign({}, this.state);
        // TODO: Why does .push(newData) not work?
        newState["rows"] = this.state.rows.concat(newData);
        this.setState(newState);

    }

    render() {
        return (
            <div>
                <div>
                    <ProductsTable rows={this.state.rows}/>
                </div>
                <div>
                    <ProductInput handler={this.addProductHandler}/>
                </div>
            </div>
        );
    }
}

export default Main;