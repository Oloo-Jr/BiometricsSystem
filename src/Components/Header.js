import React from "react";
import { 
    Navbar,
    Container,
    Form,
    FormControl,
    Nav
} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand></Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;