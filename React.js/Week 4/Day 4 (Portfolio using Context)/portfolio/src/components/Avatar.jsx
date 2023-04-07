import React from 'react'
import { useContext } from 'react';
import styled from 'styled-components'
import ThemeContext from '../context/ThemeContext';

const AvatarContainer = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: ${props => props.theme === "light" ? "1px solid #333" : "1px solid #fff"};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 24px;
    img {
        width: 100%;
    }
`;

export default function Avatar() {

    const { theme } = useContext(ThemeContext);

    return (
        <AvatarContainer theme={theme}>
            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png" alt="" />
        </AvatarContainer>
    )
}
