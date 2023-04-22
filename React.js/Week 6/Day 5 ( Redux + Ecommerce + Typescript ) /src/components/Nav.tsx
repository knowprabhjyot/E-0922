import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 20px;

    h1 {
        margin-right: auto;
    }

    li {
        a {
            text-decoration: none;
            color: #242424;
            background-color: #c6dfdf;
            padding: 8px 16px;
            border-radius: 4px;
        }
    }
  }
`;

export default function Nav() {
  return (
    <NavContainer>
      <ul>
        <h1>Logo</h1>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart</Link>
        </li>
      </ul>
    </NavContainer>
  );
}
