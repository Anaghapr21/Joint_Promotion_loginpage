import React,{useEffect, useState} from 'react';
import { TextField,Button,Container,Typography } from '@mui/material';

function RegistrationForm(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [csrfToken,setCsrfToken]=useState('');

    useEffect(()=>{
        fetchCsrfToken();
    },[]);

    const fetchCsrfToken=async()=>{
        try{
            const response=await fetch('/csrf/',{
                method:'GET',
                credentials:'include',
            });
            const data=await response.json();
            setCsrfToken(data.csrfToken);
        }catch (error){
            console.error('Error fetching CSRF token:',error);
        }
    };
    const handleRegister=async()=>{
        try{
            if(!csrfToken){
                console.error('CSRF token not available');
                return;
            }
            const response=await fetch('/register/',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'X-CSRFToken':csrfToken,
                },
                body:JSON.stringify({username,password}),
            });
            const data=await response.json();
            console.log(data);
        }catch (error){
            console.error('Error:',error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" style={{margin:'20px 0'}}>
                Register
            </Typography>
            <TextField
            label="Username"
            fullWidth
            margin="normal"
            variant="outlined"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
            <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{marginTop:'20px'}}
            onClick={handleRegister}
            >
                Register
            </Button>
        </Container>
    );
}

export default RegistrationForm;