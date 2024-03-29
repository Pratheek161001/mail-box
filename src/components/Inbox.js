import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/esm/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Sidemenu from './Sidemenu';

const Inbox = () => {
    const [maildata, setmaildata] = useState([]);
    const [clickedItems, setClickedItems] = useState({})
    const [count, setcount] = useState(1)

    const fetchData = () => {
        axios.get('https://mail-box-cebe9-default-rtdb.firebaseio.com/maildata.json')
      .then(response => {
        const fetchedMaildata = response.data || [];
        setmaildata(fetchedMaildata);
        let computedCount = 0;
        for (const key in fetchedMaildata) {
          if (fetchedMaildata[key] && !fetchedMaildata[key].seen) {
            computedCount++;
          }
        }
        setcount(computedCount);
      })
      .catch(error => {
        console.error('Error adding expense:', error.message);
      });
      }

      useEffect(() => {
        fetchData();
      }, []);

      const toggleSeen = async (key,subject,maintext,to) => {
        if (!clickedItems[key]) {
          try {
            await axios.put(`https://mail-box-cebe9-default-rtdb.firebaseio.com/maildata/${key}.json`, {maintext:maintext,subject:subject,to:to,seen: true }); 
            setmaildata((prevMaildata) => ({
              ...prevMaildata,
              [key]: {
                ...prevMaildata[key],
                seen: true,
              },
            }));
            setClickedItems((prevClickedItems) => ({
              ...prevClickedItems,
              [key]: true,
            }));
            if (!maildata[key].seen) {
              setcount(prevCount => prevCount - 1); 
            }
          } catch (error) {
            console.error('Error updating data in Firebase:', error);
          }
        }
    }
      const deletehandler=(event,key)=>{
        event.preventDefault();
        axios.delete(`https://mail-box-cebe9-default-rtdb.firebaseio.com/maildata/${key}.json`)
      .then(response => {
        fetchData()
        console.log(maildata)
        console.log('deleted');
      })
      .catch(error => {
        console.error('Error adding expense:', error.message);
      });
      }

  return (<><Sidemenu count={count}/>
   <div style={{display:'flex',alignItems:'flex-start',justifyContent:'flex-start',margin:'4vh',border:'solid 1px',borderColor:'lightblue',padding:'2vh',borderRadius:'5px',flexDirection:'column',width:'82%',marginTop:'5vw',position:'absolute',top:'0',right:'0',height:'100vh'}}>
        {maildata && Object.keys(maildata).length > 0 ? (
           <Accordion defaultActiveKey="0" style={{width:'100%'}}>
              {Object.keys(maildata).map((key,index) => (
                 <Accordion.Item eventKey={String(key)} key={key} style={{width:'100%',}} onClick={() => toggleSeen(key,maildata[key].subject, maildata[key].maintext,maildata[key].to)}>
                  <Accordion.Header>
                    {!maildata[key].seen && (<><Button variant="primary"style={{width: '10px',height: '10px',borderRadius: '50%', backgroundColor: 'lightblue',}}></Button><p>__</p></>)}
                    {maildata[key].to}
                    <CloseButton style={{marginLeft:'58vw'}} onClick={(event)=>deletehandler(event,key)}/>
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
  </>
   
  )
}

export default Inbox