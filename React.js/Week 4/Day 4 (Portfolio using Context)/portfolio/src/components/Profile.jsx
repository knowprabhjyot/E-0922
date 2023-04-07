import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import styled from 'styled-components';
import ThemeContext from '../context/ThemeContext';
import { profileData } from '../constant';
import Avatar from './Avatar';
import Bio from './BioCard';
import SkillCard from './SkillCard';


const CustomTitle = styled.h1`
    font-style: bold;
    font-size: 60px;
    background: ${props => props.theme === "light" ? "linear-gradient(134.01deg, #333 0.05%, #4CA9FF 95.52%)" : "linear-gradient(134.01deg, #3BF686 40.75%, #4CA9FF 90.52%)"};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const RowWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    margin: 24px;
    gap: 12px;
`

const FlexContainerColumn = styled.div`
    display: flex;
    justify: content-center;
    align-items: center;
`

export default function Profile({ content }) {

    const { theme } = useContext(ThemeContext);
    const [profileInfo, setProfileInfo] = useState(profileData);

    return (
        <div>
            <CustomTitle theme={theme}>
                {profileInfo.title}
            </CustomTitle>
            <FlexContainerColumn theme={theme}>
                <Avatar />

            </FlexContainerColumn>
            <RowWrapper>
                <Bio title={profileInfo.bioTwo.title} content={profileInfo.bioTwo.content} technologies={["React", "Angular", "UX/UI"]} />
                {
                    profileInfo.skills.map((skillSet) => {
                        return <SkillCard {...skillSet} />
                    })
                }
            </RowWrapper>
        </div>
    )
}
