import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Sidemenu = (props) => {
  const navigate=useNavigate()
  const navigatehandler=()=>{navigate('/compose')}
  const navigateinbox=()=>{navigate('/inbox')}
  const navigatesent=()=>{navigate('/inbox')}
  return (
    <div style={{backgroundColor:'#e8ecf8',width:'15%',height:'95vh',borderRadius:'5px',display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'3vh'}}>
    <Button variant="primary" style={{fontSize:'1.5vw',width:'12vw'}} onClick={navigatehandler}>Compose</Button>
    <br></br>
    <Button variant="primary" style={{fontSize:'1.2vw',width:'12vw',backgroundColor:'transparent',border:'none',color:'black',fontWeight:'normal',paddingTop:'2vh'}} onClick={navigateinbox}>Inbox {props.count>=1?props.count:''}</Button>
    <br></br>
    <Button variant="primary" style={{fontSize:'1.2vw',width:'12vw',backgroundColor:'transparent',border:'none',color:'black',fontWeight:'normal',paddingTop:'2vh'}} onClick={navigatesent}>Sent</Button>
    <br></br>
    <Button variant="primary" style={{fontSize:'1.2vw',width:'12vw',backgroundColor:'transparent',border:'none',color:'black',fontWeight:'normal',paddingTop:'2vh'}}>Drafts</Button>
    <br></br>
    <Button variant="primary" style={{fontSize:'1.2vw',width:'12vw',backgroundColor:'transparent',border:'none',color:'black',fontWeight:'normal',paddingTop:'2vh'}}>Archive</Button>
    </div>
  )
}

export default Sidemenu