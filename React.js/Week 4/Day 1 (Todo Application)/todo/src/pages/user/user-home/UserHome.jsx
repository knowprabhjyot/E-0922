import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function UserHome() {

    const navigate = useNavigate();

    useEffect(() => {
        const currentuser = localStorage.getItem('current-user');

        if (!currentuser) {
            navigate('/user/login');
        }
    }, []);

    return (
        <div>UserHome</div>
    )
}
