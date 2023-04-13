import { Box } from '@mui/material';
import React, { useContext, useState } from 'react'
import CustomCard from '../components/CustomCard';
import IssuesContext from '../context/IssuesContext'

export default function Issues() {
    const issuesData = useContext(IssuesContext);
    return (
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="20px" margin="20px">
            {
                issuesData.map((issue) => {
                    return <CustomCard {...issue} />
                })
            }
        </Box>
    )
}
