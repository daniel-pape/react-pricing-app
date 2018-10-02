import {Component} from "react";
import React from "react";
import ProductsTable from "./ProductsTable";
import ProductInput from "./ProductInput";

class Main extends Component {
    constructor(props) {
        super(props)

        let id = 0;
        const createData = function (name, price, quantity, unitPrice) {
            id += 1;
            return { id, name, price, quantity, unitPrice };
        }

        this.createData = createData;

        const rows = [
            createData('Frozen yoghurt', 159, 6.0, 24),
            createData('Ice cream sandwich', 237, 9.0, 37),
            createData('Eclair', 262, 16.0, 24),
            createData('Cupcake', 305, 3.7, 67),
            createData('Gingerbread', 356, 16.0, 49),
        ];

        this.state = {
            rows: rows
        }

        this.addProductHandler = this.addProductHandler.bind(this);
    }

    addProductHandler = () => {
        console.log("Product added")

        let newState = Object.assign({}, this.state);
        let newData = this.createData('Gingerbread', 356, 16.0, 49);
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