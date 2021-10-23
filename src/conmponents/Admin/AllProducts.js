import React,{useState,useEffect} from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom'

const AllProducts = ({url}) => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
  axios.get("http://localhost:3002/api/products")
  .then((responce)=>{
      setProducts(responce.data)
  }).catch(err=>{
      console.log(err)
})
    },[])
    return (
        <div style={{overflowX:'auto'}}>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
                products?
                products.map((product,index)=>{
                  let date=new Date(product.created_at)
                return(
                    <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{date.toLocaleString()}</td>
                    <td><button className="btn btn-danger" onClick={()=>{
                      axios.delete(`http://localhost:3002/api/products/delete/${product._id}`)
                      .then((responce)=>{
                        setProducts(products.filter(p=>p._id!==product._id))
                      })
                    }}>Delete</button>
                    <Link to={`/admin/dashboard/product/${product._id}`} className="btn btn-primary">Edit</Link>
                    </td>

                  </tr>
                )})
                :
                <tr></tr>

            }
        </tbody>
      </Table>
        </div>
    );
  }
  
  export default AllProducts;