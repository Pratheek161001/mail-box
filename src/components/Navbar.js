import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbartop() {
  return (
       <Navbar expand="lg" style={{backgroundColor:'#adbde6'}} >
      <Container >
        <Navbar.Brand href="#home"><h3>Mail Box</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{alignItems:'end',justifyContent:'end',marginLeft:'60vw'}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default Navbartop;