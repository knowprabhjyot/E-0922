import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../context/ThemeContext';


const SkillContainer = styled.div`
    background-color: ${props => props.theme === "light" ? "#333" : "#fff"};
    color: ${props => props.theme === "light" ? "#fff" : "#333"};
    border-radius: 12px;
    border: ${props => props.theme === "light" ? "1px solid #333" : "1px solid #fff"};
    margin: 4px;
    text-align: center;
`;

export default function SkillCard(props) {

    const { theme } = useContext(ThemeContext);

    return (
        <SkillContainer theme={theme}>
            <h6>{props.title}</h6>
            <p>{props.content}</p>
        </SkillContainer>
    )
}
