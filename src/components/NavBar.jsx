import React from "react";
import {Link, Route} from 'react-router-dom'
import Home from "./Home";
import PizzaBuilder from "./PizzaBuilder";
import styled from 'styled-components'

const Nav = styled.div`
  display: flex;


`

export default function NavBar() {
  return(
      <Nav>
        <h1>Zavier's Pizza</h1>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/pizza' id="order">Order Now</Link>
        </div>
    </Nav>
  )
}