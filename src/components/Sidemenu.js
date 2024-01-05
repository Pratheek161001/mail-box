import React from 'react'
import Button from 'react-bootstrap/Button';

const Sidemenu = () => {
  return (
    <div style={{backgroundColor:'#e8ecf8',width:'15%',height:'95vh',borderRadius:'5px',display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'3vh'}}>
    <Button variant="primary" style={{fontSize:'1.5vw',width:'12vw'}}>Compose</Button>
    <br></br>
    <Button variant="primary" style={{fontSize:'1.2vw',width:'12vw',backgroundColor:'transparent',border:'none',color:'black',fontWeight:'normal',paddingTop:'2vh'}}>Inbox</Button>
    <br></br>
    <Button variant="primary" style={{fontSize:'1.2vw',width:'12vw',backgroundColor:'transparent',border:'none',color:'black',fontWeight:'normal',paddingTop:'2vh'}}>Sent</Button>
    <br></br>
    <Button variant="primary" style={{fontSize:'1.2vw',width:'12vw',backgroundColor:'transparent',border:'none',color:'black',fontWeight:'normal',paddingTop:'2vh'}}>Drafts</Button>
    <br></br>
    <Button variant="primary" style={{fontSize:'1.2vw',width:'12vw',backgroundColor:'transparent',border:'none',color:'black',fontWeight:'normal',paddingTop:'2vh'}}>Archive</Button>
    </div>
  )
}

export default Sidemenu