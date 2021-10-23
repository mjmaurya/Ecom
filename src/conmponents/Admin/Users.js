import React,{useState,useEffect} from 'react';
import { Table,Modal,ModalBody,ModalFooter,Button,ModalHeader, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';

const Users = (props) => {
    const [users,setUsers]=useState([]);
    const [modal,setModal]=useState(false);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const toggle=()=>setModal(!modal);
    useEffect(()=>{
  axios.get("http://localhost:3002/api/users")
  .then((responce)=>{
      setUsers(responce.data)
  }).catch(err=>{
      console.log(err)
})
    },[])
    const addUser=()=>{
        if (name && email && password) {
            let user={
                name:name,
                email:email,
                password:password
            }
            for (const user of users) {
                if (user.email===email) {
                    alert("User Allready Exist")
                    return
                }
             
            }
            axios.post('http://localhost:3002/api/users/register',user)
            .then(res=>{
                alert("User Added Succsessfully")
                toggle()
                let newusers=users.concat(user)
                setUsers(newusers)
            })
            .catch(err=>{
                alert("Somthing Went Wrong");
            })
            
        }
        else{
            alert("Please fill all the fields")
        }

    }
    return (
        <div>
            <Button className="btn-warning" onClick={toggle}>Add New User</Button>
            <div style={{overflowX:'auto'}}>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Password</th>
            <th>Email</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
                users?
                users.map((user,index)=>{
                  let date=new Date(user.date)
                return(
                    <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.password}</td>
                    <td>{user.email}</td>
                    <td>{date.toLocaleString()}</td>
                    <td><button className="btn btn-danger" onClick={()=>{
                      axios.get(`http://localhost:3002/api/users/delete-user/${user.email}`)
                      .then((responce)=>{
                        setUsers(users.filter(p=>p.email!==user.email))
                      })
                      .catch(err=>{
                          console.log(err)
                      })
                    }}>Delete</button>
                    <button className="btn btn-primary">Edit</button>
                    </td>

                  </tr>
                )})
                :
                <tr></tr>

            }
        </tbody>
      </Table>
            
      <Modal isOpen={modal} toggle={toggle} backdrop={false}>
        <ModalHeader toggle={toggle}>ADD NEW USER</ModalHeader>
        <ModalBody>
          <FormGroup>
              <Label>Name: </Label>
              <Input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
          </FormGroup>
          <FormGroup>
              <Label>Email: </Label>
              <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
          </FormGroup>
          <FormGroup>
              <Label>Password: </Label>
              <Input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
          </FormGroup>
          <FormGroup>
              <Button className="btn-success" onClick={()=>addUser()}>ADD USER</Button>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>OK</Button>
        </ModalFooter>
      </Modal>

        </div>
        </div>
    );
  }
  
  export default Users;