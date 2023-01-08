import React from "react";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  Badge,
  Dropdown,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
// import Cart from "./Cart";

const Header = () => {
  const {
    state: { cart },
    dispatch
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shoppin Cart</Link>
        </Navbar.Brand>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success" align="end">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge bg='none'>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }} >
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="cartItemImg"
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₦ {prod.price.split(".")[0]}</span>

                      </div>
                      <AiFillDelete
                        fontSize='20px'
                        style={{ cursor: 'pointer'}}
                        onClick={() => dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: prod,
                        })
                    }
                       />
                    </span>
                  ))}
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty</span>
              )}
              <Link to='/cart' >
                <Button style={{width: '95%', margin: '0 10px'}}>
                    Go To Cart
                </Button>
              </Link>
            </Dropdown.Menu>
          </Dropdown>

       

          
        </Nav>
        <Navbar.Text className="search">
          <FormControl
            syle={{ width: 300 }}
            placeholder="Search"
            className="m-auto"
          />
        </Navbar.Text>
   
        
      </Container>
    </Navbar>
  );
};

export default Header;
