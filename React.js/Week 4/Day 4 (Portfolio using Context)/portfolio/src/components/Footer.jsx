import React from 'react'
import { useContext } from 'react';
import styled from 'styled-components'
import ThemeContext from '../context/ThemeContext';
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    height: 200px;
    padding: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    a {
        text-decoration: none;
        color: ${props => props.theme === "light" ? "#333" : "#fff"};
    }
`;


const RowWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    ul {
        list-style-type: none;
        display: flex;
        gap: 20px;

        li {
            a {
                text-decoration: none;
                color: ${props => props.theme === "light" ? "#333" : "#fff"};
            }
        }
    }

`


export default function Footer(props) {

    const { theme } = useContext(ThemeContext);

    console.log(props);
    const scrollToTop = () => {
        props.rootRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }

    return (
        <>        <FooterContainer theme={theme}>
            <RowWrapper>
                <ul>
                    <li>
                        <Link to="/">docs</Link>
                    </li>
                    <li>
                        <Link to="/">docs</Link>
                    </li>
                    <li>
                        <Link to="/">docs</Link>
                    </li>
                </ul>
            </RowWrapper>
            <h5>
                Reach me here!
            </h5>
            <Link>Instagram</Link>
            <Link>Twitter</Link>
            <Link>Linkekdin</Link>

            <button onClick={scrollToTop}>Scroll To Top</button>

        </FooterContainer>
        </>
    )
}
