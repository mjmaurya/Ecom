import React,{useEffect,useState} from "react"
import { Table} from "reactstrap"
export const Cart=()=>{
    const [cart,setCart]=useState([])
    useEffect(()=>{
        setCart(JSON.parse(localStorage.getItem("products")||"[]"))
        console.log(localStorage.getItem("products"))
    },[])

    const removeItem=(id)=>{
        const newCart=cart.filter(item=>item._id!==id)
        setCart(newCart)
        localStorage.setItem("products",JSON.stringify(newCart))
    }
    const total=cart.reduce((total,item)=>total+item.price,0)
    return(
        <div className="container">
        
                {cart.length!==0?
                <Table striped style={{width:"100%",overflowX:"scroll"}}>
                   <thead>
            <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
            </thead>
                <tbody>
                    {
                cart.map((item)=>{
                    return(
                        <tr>
                            <td><img width={100} src={item.image} alt={item.name}/></td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td><button className="btn btn-danger" onClick={()=>removeItem(item._id)}>Remove</button></td>
                        </tr>
                    )
                })}
                <tr>
                    <td colSpan={3}>Total</td>
                    <td>{total}</td>
                </tr>
                </tbody>

                </Table>
                :
                <div>
                    <h1>No Items in Cart</h1>
                </div>
                }
        </div>
    )
}