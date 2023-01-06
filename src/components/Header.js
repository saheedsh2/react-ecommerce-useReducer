import React from 'react';
import { Navbar, Container, FormControl, Nav, Badge, Dropdown } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context';

const Header = () => {

    const { 
        state: { cart }
    } = CartState()


  return (
    <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
        <Container>
            <Navbar.Brand>
                <Link to='/'>Shoppin Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl syle={{ width: 500 }} placeholder='Search' className='m-auto'/>
            </Navbar.Text>
            <Nav>
                <Dropdown alignright='true'>
                    <Dropdown.Toggle variant='success'>
                        <FaShoppingCart color='white' fontSize='25px' />
                        <Badge>{cart.length}</Badge>

                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth: 370 }}>
                        <span style={{ padding: 10 }}>Cart is Empty</span>

                    </Dropdown.Menu>


                </Dropdown>
            </Nav>

        </Container>

    </Navbar>
  )
}

export default Header