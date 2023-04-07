import React from 'react';
import { useContext } from 'react';
import styled from "styled-components";
import Profile from '../components/Profile';
import ThemeContext from '../context/ThemeContext';


const Wrapper = styled.div`
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    padding: 2px;
`;

export default function Home() {
    const { theme } = useContext(ThemeContext);

    return (
        <Wrapper theme={theme}>
            <Profile content={"Hey, I am Prabh. I am developer and an instructor."} />
        </Wrapper>
    )
}
