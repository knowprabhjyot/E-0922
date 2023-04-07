import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../context/ThemeContext';

const BioContainer = styled.div`
    background-color: ${props => props.theme === "light" ? "#333" : "#fff"};
    color: ${props => props.theme === "light" ? "#fff" : "#333"};
    border-radius: 12px;
    padding: 12px;
    h1 {
        font-size: 48px;
    }
    p {
        font-weight: 400;
        font-size: 24px;

    }
    h5 {
        background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
        color: ${props => props.theme === "light" ? "#333" : "#fff"};
        border-radius: 20px;
        padding: 12px;
        text-align: center;
    }
`;

const RowWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`

export default function Bio({ title, content, technologies }) {

    const { theme } = useContext(ThemeContext);

    return (
        <BioContainer theme={theme}>
            <h1>{title}</h1>
            <p>{content}</p>
            <RowWrapper>
                {
                    technologies.map((technology) => {
                        return <h5>{technology}</h5>
                    })
                }
            </RowWrapper>
        </BioContainer>
    )
}
