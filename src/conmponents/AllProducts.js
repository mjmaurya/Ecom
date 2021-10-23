import React,{Component} from 'react';
import ProductCard from './ProductComponent';
import axios from 'axios';


class AllProducts extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3002/api/products')
        .then(responce=>{
            this.setState({
                products:responce.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        console.log(this.state.products)
        return(
            <div className="container-fluid">
                <div className="container">
                    {this.state.products?<div className="row">
                    {
                        this.state.products.map((product,index)=> <ProductCard key={index} product={product}/>)
                    }
                    </div>
                    :null}
                </div>
            </div>
        )
    }
}
export default AllProducts;