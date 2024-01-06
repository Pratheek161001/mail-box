import Card from 'react-bootstrap/Card';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useDispatch,useSelector} from 'react-redux'
import { toggleLoginSignup } from './Store/authActions';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'

const Logincard=()=> {
    const dispatch=useDispatch()
    const isLogin = useSelector((state) => state.auth.isLogin);
    const emailinputref=useRef();
    const passwordinputref=useRef();
    const navigate = useNavigate();

    const handleToggle = () => {
        dispatch(toggleLoginSignup());
      };
      
      const loginhandler=(event)=>{
        event.preventDefault();
        const enteredemail=emailinputref.current.value;
        const enteredpassword=passwordinputref.current.value;
        let url;
        if(isLogin){
          url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyALbTyMFQDaDymnhFY6x7NimVxtxOtJNCo'
        }
        else{
          url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyALbTyMFQDaDymnhFY6x7NimVxtxOtJNCo'
        }
        fetch(url,
        {
          method:'POST',
          body:JSON.stringify({
            email:enteredemail,
            password:enteredpassword,
            returnsecuretoken:true,
          }),
          headers:{
            'Content-Type':'application/json'
          }
        }).then((res)=>{
          if(res.ok){
            return res.json()
          }
          else{
            return res.json().then(data=>{
              let errormessage='authentication failed';
               throw new Error(errormessage)
            })
          }
        })
        .then((data)=>{
            const dataString = JSON.stringify(data);
            localStorage.setItem('idToken',dataString);
            !isLogin ? handleToggle():navigate('/inbox')
        })
        .catch((err)=>{alert(err.message)})
      }

  return (
    <div style={{display:"flex",alignItems:'center',flexDirection:'column',height:'90vh',width:'100%',justifyContent:'center'}}> 
        <Card style={{ width: '20rem',justifyContent:'center',display:"flex",alignItems:'center',boxShadow:'0 0 10px 0 #ADD8E6'}} >
      <Card.Body>
        <Card.Title style={{textAlign:'center',padding:'3vh'}}><h1>{isLogin ? 'Login' : 'Sign Up'}</h1></Card.Title>
        <Card.Text>
        <Form.Control type="text" placeholder="Email " ref={emailinputref} required />
        <br></br>
        <Form.Control type="password" placeholder="Password " ref={passwordinputref} required />
        </Card.Text>
        <Button variant="primary" style={{marginTop:'2vh',marginBottom:'2vh',width:'100%',borderRadius:'50px'}} onClick={loginhandler}>{isLogin ? 'Login' : 'Sign Up'}</Button>
        <Card.Link  style={{textDecoration:'none',color:'black'}}>{isLogin ? "Don't have an account? " : 'Login with existing account '}<Button variant="outline-primary" style={{borderRadius:'50px',fontSize:'small'}} onClick={handleToggle}>{isLogin ? 'Sign up' : 'Login'} </Button></Card.Link>
        <br></br>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Logincard;