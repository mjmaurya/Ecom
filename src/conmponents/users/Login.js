import React,{useState,useEffect}  from 'react'
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap'
import axios from 'axios';

const Login=()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [adminEmail,setAdminEmail]=useState("");
    const [adminPassword,setAdminPassword]=useState("");

    const submit=()=>{
        axios.post("http://localhost:3002/api/users/login",{email,password})
        .then(respoce=>{
            if (respoce) {
                localStorage.user=email
                localStorage.token=respoce.data.token
                localStorage.role='user'
                window.location.href="/";
            }
        })
        setEmail("")
        setPassword("")
    }
   const handleAdminLogin=()=>{
        if (adminEmail && adminPassword) {
            if (adminEmail==='admin' && adminPassword==="admin") {
                localStorage.user=adminEmail
            localStorage.role='admin'
            window.location.href="/admin/dashboard";
            }
            else{
                alert("Invalid Credentials")
            }
        }
        else{
            alert("Please fill all the fields")
        }
    }
    useEffect(()=>{
        if(localStorage.user!=='null'){
            if (localStorage.role==='admin') {
                window.location.href="/admin/dashboard";
            }
            else{
                window.location.href="/";
            }
        }
        else{
            console.log("Fill the details")
        }
    },[])
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Admin Login</h1>
                <Form>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" value={adminEmail} placeholder="Enter Email" required onChange={(e)=>setAdminEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" value={adminPassword} onChange={(e)=>setAdminPassword(e.target.value)} placeholder="Enter Password"/>
                </FormGroup>

                <FormGroup>
                    <Button className="btn-primary m-2" onClick={()=>handleAdminLogin()}>Login</Button>
                </FormGroup>
                </Form>
                </div>
                <div className="col-md-6">
                    <h1>User Login</h1>
                <Form>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" value={email} placeholder="Enter Email" required onChange={(e)=>setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
                </FormGroup>

                <FormGroup>
                    <Button onClick={()=>submit()}>Submit</Button>
                </FormGroup>
            </Form>
            </div>
            </div>

        </div>
    )
    }

    export default Login;