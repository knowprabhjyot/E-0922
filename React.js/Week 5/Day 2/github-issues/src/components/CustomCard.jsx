import { Avatar, Box, Button, Card, CardContent, CardHeader, Chip, Collapse, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function CustomCard(issue) {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const redirectToIssue = (issueId) => {
        navigate(`/issue/${issueId}`);
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <img style={{ width: "100% " }} src={issue.user.avatar_url} alt={issue.user.login} />
                    </Avatar>
                }
                title={issue.user.login}
                subheader={issue.user.id}
            />
            <Typography variant="body2" color="text.secondary">
                <Box display="flex" flexWrap="wrap" gap="4px" padding="12px">
                {
                    issue.labels.map((label) => {
                        return <Chip style={{ padding: "8px"}} label={label.name} />
                    })
                }
                </Box>
            </Typography>

            <Button
                onClick={handleExpandClick}
                aria-expanded={expanded}
            >
                Show more
            </Button>

            <Button
                onClick={() => redirectToIssue(issue.id)}
                aria-expanded={expanded}
            >
                Learn More
            </Button>


            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                    <Typography>
                        {issue.body}
                    </Typography>
                </CardContent>
            </Collapse>


        </Card>
    )
}
