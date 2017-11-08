/**
 * Created by Administrator on 2017/10/11.
 */
import React, {Component} from "react";

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }
    handleInput(e) {
        this.props.handleInput(e.target.value);
    }
    handleCheckbox(e) {
        this.props.handleCheckBox(e.target.checked);
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Search..."
                       value={this.props.filterText}
                    onChange={this.handleInput}
                />
                <p>
                    <input type="checkbox" checked={this.props.inStockOnly}
                           onChange={this.handleCheckbox}
                    />
                    Only show products in stock
                </p>
            </div>
        )
    }
}
class ProductCategoryRow extends Component {
    render() {
        return <tr>
            <th colSpan='2'>{this.props.category}</th>
        </tr>
    }
}
class ProductRow extends Component {
    render() {
        var name = this.props.product.stocked ? this.props.product.name :
            <span style={{color: 'red'}}> {this.props.product.name}</span>;

        return (<tr>
            <td>{name}</td>
            <td>{this.props.product.price}</td>
        </tr>)
    }
}

class ProductTable extends Component {
    render() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}
var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }
    componentDidMount() {
        console.log(this.props.params.id)
    }
    handleInput(value) {
        this.setState({
            filterText: value
        })
    }
    handleCheckBox(value) {
        this.setState({
            inStockOnly: value
        })
    }
    render() {
        return (
            <div>
                <SearchInput
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    handleInput={this.handleInput}
                    handleCheckBox={this.handleCheckBox}
                />
                <ProductTable products={PRODUCTS}
                              filterText={this.state.filterText}
                              inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
}