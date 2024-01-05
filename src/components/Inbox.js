import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';

const Inbox = () => {
    const [maildata, setmaildata] = useState([]);
    useEffect(()=>{
        axios.get('https://mail-box-cebe9-default-rtdb.firebaseio.com/maildata.json')
      .then(response => {
        setmaildata(response.data);
        console.log(maildata)
      })
      .catch(error => {
        console.error('Error adding expense:', error.message);
      });
      },[])
  
  return (
    <div style={{display:'flex',alignItems:'flex-start',justifyContent:'flex-start',margin:'4vh',border:'solid 1px',borderColor:'lightblue',padding:'2vh',borderRadius:'5px',flexDirection:'column',width:'82%',marginTop:'5vw',position:'absolute',top:'0',right:'0',height:'100vh'}}>
        {maildata && Object.keys(maildata).length > 0 ? (
           <Accordion defaultActiveKey="0" style={{width:'100%'}}>
              {Object.keys(maildata).map(key => (
                 <Accordion.Item key={key} style={{width:'100%',height:'6vh'}}>
                  <Accordion.Header>{maildata[key].to}</Accordion.Header>
                  <Accordion.Body>
                    <h3>{maildata[key].subject}</h3>
                    {maildata[key].maintext}
                  </Accordion.Body>
                  </Accordion.Item>))}
                  </Accordion>)
                  :(<h2>no mails yet</h2>)
        }
    </div>
  )
}

export default Inbox