// import React,{useEffect, useState} from 'react';
// import {TextField,Button,Container,Typography,Link} from '@mui/material';
// // import RegistrationForm from '../RegistrationForm/registrationform';


// function LoginPage(){
//     const [username,setUsername]=useState('');
//     const [password,setPassword]=useState('');
//     const [csrfToken,setCsrfToken]=useState('');
//     const [loginSuccess,setLoginSuccess]=useState(false);
//     // const [showRegisterForm,setShowRegisterForm]=useState(false);

//     // const handleRegisterLinkClick=(e)=>{
//     //     e.preventDefault();
//     //     setShowRegisterForm(true);
//     // };

//     useEffect(()=>{
//         fetchCsrfToken();
//     },[]);
//     // const handleLogin=()=>{
//     //     console.log('Username:',username);
//     //     console.log('Password:',password);
//     // };

// // const handleLogin=async()=>{
// //     try{
// //         const response=await fetch('/login/',{
// //             method:'POST',
// //             headers:{
// //                 'Content-Type':'application/json',
// //             },
// //             body:JSON.stringify({username,password}),
// //         });
// //         const data=await response.json();
// //         console.log(data);
// //     }
// //     catch(error){
// //         console.error('Error:',error)
// //     }
// // };

// // const fetchCsrfToken=async()=>{
// //     try{
// //         const response=await fetch('/csrf/',{
// //             method:'GET',
// //             credentials:'include',
// //         });
// //         const data=await response.json();
// //         setCsrfToken(data.csrfToken);
// //     }catch (error){
// //         console.error('Error fetching CSRF token:',error);
// //     }
// // };


// const fetchCsrfToken = async () => {
//     try {
//         // Attempt to retrieve CSRF token from localStorage
//         const storedCsrfToken = localStorage.getItem('csrfToken');
        
//         // If CSRF token exists in localStorage, set it in the state
//         if (storedCsrfToken) {
//             console.log('CSRF token retrieved from localStorage:', storedCsrfToken);
//             setCsrfToken(storedCsrfToken);
//         } else {
//             // If CSRF token doesn't exist in localStorage, fetch it from the server
//             const response = await fetch('/csrf/', {
//                 method: 'GET',
//                 credentials: 'include',
//             });
//             const data = await response.json();
//             if (data.csrfToken) {
//                 console.log('CSRF token fetched successfully:', data.csrfToken);
//                 // Set CSRF token in localStorage
//                 localStorage.setItem('csrfToken', data.csrfToken);
//                 setCsrfToken(data.csrfToken);
//             } else {
//                 console.error('CSRF token not found in response:', data);
//             }
//         }
//     } catch (error) {
//         console.error('Error fetching CSRF token:', error);
//     }
// };


// const handleLogin=async()=>{
//     try{
//         if(!csrfToken){
//             console.error('CSRF token not available');
//             return;
//         }
//         const response=await fetch('/login/',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json',
//                 'X-CSRFToken':csrfToken,
//             },
//             credentials:'include',
//             body:JSON.stringify({username,password}),
//         });
//         const data=await response.json();
//         console.log(data);
//         if (response.ok){
//             localStorage.setItem('token',data.token);
//             setLoginSuccess(true);
//         }else{
//             console.error('Login failed:',data.error);
//         }
//     }catch(error){
//         console.error('Error:',error);
//     }
// };

// // const handleRegister=async()=>{
// //     try{
// //         const response=await fetch('/register/',{
// //             method:'POST',
// //             headers:{
// //                 'Content-Type':'application/json',
// //                 'X-CSRFToken':csrfToken,
// //             },
// //             credentials:'include',
// //             body:JSON.stringify({username,password}),
// //         });
// //         const data=await response.json();
// //         console.log(data);
// //     }catch (error){
// //         console.error('Error:',error);
// //     }
// // };
//     return (
//         <Container maxWidth="sm">
//             {/* {showRegisterForm ?(
//                 <RegistrationForm/>
//             ):( */}
//                 {/* <> */}
            
//             <Typography variant="h4" align="center" style={{margin:'20px 0'}}>
//                 Login
//             </Typography>
//             <TextField
//             label="Username"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={username}
//             onChange={(e)=>setUsername(e.target.value)}
//             />
//             <TextField
//             label="Password"
//             type="password"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={password}
//             onChange={(e)=>setPassword(e.target.value)}
//             />
//             <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             style={{marginTop:'20px'}}
//             onClick={handleLogin}
//             >Login</Button>
//           {loginSuccess &&(
//             <Typography variant="body1" align="center" style={{marginTop:'20px',color:'green'}}>
//                 Login successful
//             </Typography>
//           )}
//             {/* </> */}
//             {/* )} */}
//         </Container>
//     );
// };

// export default LoginPage;



// import React,{useState} from 'react';
// import {TextField,Button,Container,Typography} from '@mui/material';
// import LeadInformationDisplay from '../LeadInformationDisplay/leadinformationdisplay';

// function LoginPage(){
//     const [username,setUsername]=useState('');
//     const [password,setPassword]=useState('');
//     const [loginSuccess,setLoginSuccess]=useState(false);


//     const handleLogin=async()=>{
//         try{
//             const response=await fetch('http://localhost:8000/login/',{
//                 method:'POST',
//                 headers:{
//                     'Content-Type':'application/json',
//                 },
//                 body:JSON.stringify({username,password}),
//             });
//             // const data=await response.json();
//             // if(response.ok){
//             //     localStorage.setItem('token',data.token);
//             //     setLoginSuccess(true);
//             // }else{
//             //     console.error('Login failed:',data.error);
//             // }
//             if (response.ok){
//                 const data=await response.json();
//                 console.log('Received token:',data.token)
//                 localStorage.setItem('token',data.token);
//                 setLoginSuccess(true);
//             }else if(response.status===404){
//                 console.log('Redirecting to login page...');
//             }else{
//                 const data=await response.json();
//                 console.error('Login Failed:',data.error);
//             }
//         }catch(error){
//             console.error('Error:',error);
//             }
//         };

//     if (loginSuccess){
//         return <LeadInformationDisplay/>
//     }
//         return (
//             <Container maxWidth="sm">
//                 <Typography variant="h4" align="center" style={{margin:'20px 0'}}>
//                     Login
//                 </Typography>
//                 <TextField
//                 label="Username"
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//                 value={username}
//                 onChange={(e)=>setUsername(e.target.value)}
//                 />
//                 <TextField
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//                 value={password}
//                 onChange={(e)=>setPassword(e.target.value)}
//                 />
//                 <Button
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 style={{marginTop:'20px'}}
//                 onClick={handleLogin}
//                 >
//                     Login
//                 </Button>
//                 {/* {loginSuccess &&(
//                     // <Typography variant="body1" align="center" style={{marginTop:'20px',color:'green'}}>
//                     //     Login successful
//                     // </Typography>
//                     <LeadInformationDisplay/>
//                 )} */}
//             </Container>
//         )
//     }


// export default LoginPage;




import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import LeadInformationDisplay from '../LeadInformationDisplay/leadinformationdisplay';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [leadData, setLeadData] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login/', { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      console.log(token);
      setError('');
      setLoggedIn(true);
      fetchLeadInformation(token);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  const fetchLeadInformation = async (token) => {
    try {
      const response = await axios.get('http://localhost:8000/lead-information/', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLeadData(response.data.user_leads);
    } catch (err) {
      console.error('Error fetching lead information:', err);
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <div style={{ maxWidth: 400, margin: 'auto', marginTop: 50 }}>
          <Typography variant="h5" gutterBottom>Login</Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography variant="body2" color="error">{error}</Typography>}
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>Login</Button>
        </div>
      ) : (
        <LeadInformationDisplay leadData={leadData} />
      )}
    </div>
  );
};

export default Login;
