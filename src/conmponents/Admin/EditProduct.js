import React,{useState,useEffect} from "react"
import {FormGroup,Input,Label } from "reactstrap"
import axios from "axios"
import {useParams} from 'react-router-dom'
export const EditProduct = () => {
    const product_id=useParams().id;
    const [productName,setProductName] = useState("")
    const [productPrice,setProductPrice] = useState("")
    const [productDescription,setProductDescription] = useState("")
    const [productImage,setProductImage] = useState("")
    const [discount,setDiscount] = useState("")
    const [productCategory,setProductCategory] = useState("")
    const [productQuantity,setProductQuantity] = useState("")

    const updateProduct=()=>{
        let product = {
            name:productName,
            price:productPrice,
            desc:productDescription,
            image:productImage,
            discount:discount,
            category:productCategory,
            stock:productQuantity
        }
        if(productName && productPrice && productDescription && productImage && discount && productCategory && productQuantity){
        axios.patch(`http://localhost:3002/api/products/update-product/${product_id}`,product)
        .then(res=>{
            alert("Product Updated Successfully")
        })
        .catch(err=>{
            alert("Something went wrong")
        });
        }
        else{
            alert("Please fill all the fields")
        }

    }
    useEffect(()=>{
        axios.get(`http://localhost:3002/api/products/${product_id}`)
        .then((responce)=>{
            let data=responce.data
            setProductName(data.name);
            setDiscount(data.discount)
            setProductCategory(data.category)
            setProductDescription(data.desc)
            setProductImage(data.image)
            setProductQuantity(data.stock)
            setProductPrice(data.price)
        }).catch(err=>{
            console.log(err)
      })
          },[])

    return (
        <div className="container">
            <div>
                <h1>Add Product</h1>
            </div>
            <div>
            <FormGroup className="m-1">
                <Label for="productName">Product Name</Label>
                <Input type="text" required name="productName" value={productName} onChange={(e)=>setProductName(e.target.value)} id="productName" placeholder="Product Name" />
            </FormGroup>
            <FormGroup className="m-1">
                <Label for="productPrice">Product Price</Label>
                <Input type="number" required min={0}  value={productPrice} onChange={(e)=>setProductPrice(e.target.value)} name="productPrice" id="productPrice" placeholder="Product Price" />
            </FormGroup>
            <FormGroup className="m-1">
                <Label for="productPrice">Discount: </Label>
                <Input type="number" required min={0} value={discount} onChange={(e)=>setDiscount(e.target.value)} name="productPrice" id="productPrice" placeholder="Product Price" />
            </FormGroup>
            <FormGroup className="m-1">
                <Label for="productDescription">Product Description</Label>
                <Input type="textarea" required value={productDescription} onChange={(e)=>setProductDescription(e.target.value)} rows={5} name="productDescription" id="productDescription" placeholder="Product Description" />
            </FormGroup>
            <FormGroup className="m-1">
                <Label for="productImage">Product Image</Label>
                <Input type="url" required value={productImage} onChange={(e)=>setProductImage(e.target.value)} name="productImage" id="productImage" placeholder="Product Image" />
            </FormGroup>
            <FormGroup>
                <Label for="productQUantity">Product Quantity</Label>
                <Input type="number" required min={0}  value={productQuantity} onChange={(e)=>setProductQuantity(e.target.value)} name="productQuantity" id="productQuantity" placeholder="Product Quantity" />
            </FormGroup>
            <FormGroup className="m-1">
                <Label for="productCategory">Product Category</Label>
                <Input type="select" name="productCategory" value={productCategory} onChange={(e)=>setProductCategory(e.target.value)} id="productCategory" placeholder="Product Category" >
                    <option value="">Select Category</option>
                    <option value="Vegetable">Vegetable</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Meat">Meat</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Bread">Bread</option>
                    <option value="Cereals">Cereals</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Others">Others</option>
                </Input>
            </FormGroup>
            <button className="btn btn-primary" onClick={()=>updateProduct()} >Add Product</button>
            </div>
        </div>
    )
}

