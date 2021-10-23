import React from 'react'
import {Route,useRouteMatch} from 'react-router-dom'
import { AddProduct } from './AddProduct';
import AllProducts from './AllProducts';
import { EditProduct } from './EditProduct';
import { Sidebar } from './SideBar';
import Users from './Users';

const DashBoard=()=>{
    const {url}=useRouteMatch();
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar url={url}/>
                    </div>
                <div className="col-sm-10">
                    <Route path={`${url}/newproduct`}>
                       <AddProduct url={url}/>
                    </Route>
                    <Route path={`${url}/products`}>
                       <AllProducts/>
                    </Route>
                    <Route exact path={`${url}/users`}>
                        <Users/>
                    </Route>
                    <Route path={`${url}/product/:id`}>
                        <EditProduct/>
                        </Route>

                    <Route path={`${url}/feedbacks/:id`}>
                        fjieie
                    </Route>
                    <Route exact path={`${url}`}>
                       fnwfijwefj
                    </Route>
                </div>
            </div>
            </div>
        )
}
export default DashBoard;