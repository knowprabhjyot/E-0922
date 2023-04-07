import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import styled from 'styled-components';
import ThemeContext from '../context/ThemeContext';
import { profileData} from '../constant';
import Avatar from './Avatar';
import Bio from './BioCard';


const CustomTitle = styled.h1`
    font-style: bold;
    font-size: 60px;
    background-color: ${props => props.theme === "light" ? "black" : "#fff"};
`;

export default function Profile({ content }) {

    const { theme } = useContext(ThemeContext);
    const [profileInfo, setProfileInfo] = useState(profileData);

    return (
        <div>
            <CustomTitle theme={theme} />
            <Avatar />
            <Bio />
            

        </div>
    )
}
