import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/esm/Button';

const Inbox = () => {
    const [maildata, setmaildata] = useState([]);
    const [clickedItems, setClickedItems] = useState({})
    useEffect(()=>{
        axios.get('https://mail-box-cebe9-default-rtdb.firebaseio.com/maildata.json')
      .then(response => {
        console.log(response.data)
        setmaildata(...maildata,response.data);
        console.log(maildata)
      })
      .catch(error => {
        console.error('Error adding expense:', error.message);
      });
      },[])

      const toggleSeen = (key) => {
        if (!clickedItems[key]) {
          setmaildata((prevMaildata) => ({
            ...prevMaildata,
          [key]: {
            ...prevMaildata[key],
            seen: !prevMaildata[key].seen,
          },
        }));
        setClickedItems((prevClickedItems) => ({
          ...prevClickedItems,
          [key]: true,
        }));
      }
    }
  
  return (
    <div style={{display:'flex',alignItems:'flex-start',justifyContent:'flex-start',margin:'4vh',border:'solid 1px',borderColor:'lightblue',padding:'2vh',borderRadius:'5px',flexDirection:'column',width:'82%',marginTop:'5vw',position:'absolute',top:'0',right:'0',height:'100vh'}}>
        {maildata && Object.keys(maildata).length > 0 ? (
           <Accordion defaultActiveKey="0" style={{width:'100%'}}>
              {Object.keys(maildata).map((key,index) => (
                 <Accordion.Item eventKey={String(key)} key={key} style={{width:'100%',}} onClick={() => toggleSeen(key)}>
                  <Accordion.Header>
                    {!maildata[key].seen && (<><Button variant="primary"style={{width: '10px',height: '10px',borderRadius: '50%', backgroundColor: 'lightblue',}}></Button><p>__</p></>)}
                    {maildata[key].to}
                    </Accordion.Header>
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