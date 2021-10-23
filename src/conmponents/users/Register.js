import axios from 'axios';
import React,{useState}  from 'react'
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap'

const Register=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")

    const registerUser=()=>{
        if (name && email && password) {
            let user={
                name:name,
                email:email,
                password:password
            }
    axios.get("http://localhost:3002/api/users")
  .then((responce)=>{
      let users=responce.data
      for (const user of users) {
          if (user.email===email) {
              alert("You Are ALlready Register")
              window.location.href='/login'
              return
          }
      }
      axios.post('http://localhost:3002/api/users/register',user)
            .then(res=>{
                alert("User Added Succsessfully")
                window.location.href='/login'
            })
            .catch(err=>{
                alert("Somthing Went Wrong");
            })

  }).catch(err=>{
      console.log(err)
})
        }
        else{
            alert("Please fill all the fields")
        }
    }
    return(
        <div className="container">
            <div>
                Registration
            </div>
            <Form>
            <FormGroup>
                    <Label>Name: </Label>
                    <Input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" required/>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" required/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
                </FormGroup>

                <FormGroup>
                    <Button onClick={()=>registerUser()}>Submit</Button>
                </FormGroup>
            </Form>

        </div>
    )
    }

    export default Register;