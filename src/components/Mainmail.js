import React, { useEffect, useState } from 'react'
import { convertToRaw,ContentState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Editor } from "react-draft-wysiwyg";
import axios from 'axios';
 
const Mainmail = () => {
  const [subject, setSubject] = useState('');
  const [to, setTo] = useState('');
  const _contentState = ContentState.createFromText("");
  const raw = convertToRaw(_contentState); 
  const [contentState, setContentState] = useState(raw); 
  const [maildata,setmaildata]=useState([])
  const texts = contentState.blocks.map(obj => obj.text);
  const maintext=texts[0]

  const onSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const onToChange = (e) => {
    setTo(e.target.value);
  };
  const newmaildata={to,subject,maintext}

  const sendmail=(e)=>{
    e.preventDefault();
    setmaildata([...maildata,newmaildata])
    axios.post('https://mail-box-cebe9-default-rtdb.firebaseio.com/maildata.json', newmaildata)
    .then(response => {
      console.log('item added');
      alert('mail sent')
    })
    .catch(error => {
      console.error('Error adding expense:', error.message);
    });
  }  

  return (
      <div style={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end',margin:'4vh',border:'solid 1px',borderColor:'lightblue',padding:'2vh',borderRadius:'10px',flexDirection:'column',width:'75%',marginTop:'8vw',position:'absolute',top:'0',right:'0'}}> 
      <Container>
      <div > 
        <h3>New message </h3>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" required>
        <Form.Label column sm="2">
          To :
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext value={to} onChange={onToChange} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Col sm="10">
          <Form.Control plaintext placeholder="subject" value={subject} onChange={onSubjectChange} />
        </Col>
      </Form.Group>
      <div style={{height:'50Vh'}}>
      <Editor
              defaultContentState={contentState}
              onContentStateChange={setContentState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
          />
      </div>
      <Button variant="primary" style={{borderRadius:'15px',fontSize:'15px',alignItems:'end'}} onClick={sendmail}>send</Button>
          </div>
      </Container> 
    </div>      
  )
}
export default Mainmail