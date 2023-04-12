import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import IssuesContext from '../context/IssuesContext';
import axios from 'axios';

export default function IssueDetail() {

    const { id } = useParams();
    const issuesData = useContext(IssuesContext);

    // ASSIGNMENT - Create a new Context called as SelectedIssueContext
    // const selectedIssue = useContext(SelectedIssueContext);
    const [issue, setIssue] = useState();
    const navigate = useNavigate();
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        const findIssue = issuesData.find((issue) => {
            if (issue.id == id) {
                return true;
            }
        });

        if (!findIssue) {
            navigate('/');
        }

        setIssue(findIssue);

    }, []);

    useEffect(() => {
       if (issue) {
        axios.get(issue?.user.followers_url).then((response) => {
            setFollowers(response.data);
        })
       }
    }, [issue]);

    return (
        <Box padding="20px">
            <Box display="grid" gridTemplateColumns="30% 70%" gap="20px" >
                <img style={{ 
                    width: "100%",
                    borderRadius: "50%"
                }} src={issue?.user.avatar_url} alt={issue?.user.login} />

                <Box>
                    <Typography variant="h2">{issue?.user.login}</Typography>
                    <Typography variant="h3">ID: {issue?.id}</Typography>
                    <Typography variant="h4"> Admin -  { issue?.site_admin ? "Yes" : "No"}</Typography>

                    <Box display="flex" flexWrap="wrap">
                    {
                        followers.map((follower) => {
                            return <Box >
                                <img style={{ width: "100px"}} src={follower.avatar_url} alt={follower.login} />
                            </Box>
                        })
                    }
                    </Box>
                </Box>
            </Box>
           
        </Box>
    )
}
