import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../context/ThemeContext';
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    padding: 4px;
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    height: 120px;
    margin-bottom: 20px;
    h1 {
        margin-right: auto;
    }
    ul {
        list-style-type: none;
        display: flex;
        gap: 16px;
        li {
            a {
                text-decoration: none;
                color: ${props => props.theme === "light" ? "#333" : "#fff"};
            }
        }
    }
    button {
        margin-left: 16px;
        padding: 4px 12px;
        background-color: ${props => props.theme === "light" ? "#333" : "#fff"};
        color: ${props => props.theme === "light" ? "#fff" : "#333"};
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

`



export default function Nav() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <NavContainer theme={theme}>
            <h1>Prabh</h1>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/portfolio"}>Portfolio</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>
            <button onClick={toggleTheme}>{theme === "light" ? "Dark" : "Light"}</button>
        </NavContainer>
    )
}
