import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
    return (
        <div className='navbar-wrapper'>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand>Dhanush Baalaji</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link href='#about'>About</Nav.Link>
                            <Nav.Link href='#skills'>Skills</Nav.Link>
                            <Nav.Link href='#projects'>Projects</Nav.Link>
                            <Nav.Link href='#footer'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;