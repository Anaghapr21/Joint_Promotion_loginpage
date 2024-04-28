// import React,{useEffect,useState} from 'react';

// function LeadInformationDisplay(){
//     const [leadData,setLeadData]=useState('');

//     useEffect(()=>{
//         // const fetchLeadData=async()=>{
//         //     try{
//         //         const token=localStorage.getItem('token');
//         //         const response=await fetch('http://localhost:8000/lead-information/',{
//         //             method:'GET',
//         //             headers:{
//         //                 'Authorization':'Bearer ${token}',
//         //                 'Content-Type':'application/json'
//         //             }
//         //         });
//         //         const data=await response.json();
//         //         if(response.ok){
//         //             setLeadData(data.user_leads);
//         //         }else{
//         //             console.error('Failed to fetch lead information:',data.error);
//         //         }
//         //     }catch (error){
//         //         console.error('Error lead information:',error);
//         //     }
//         // };
//         // fetchLeadData();

//         // const fetchLeadData = async () => {
//         //     try {
//         //         const token = localStorage.getItem('token');
//         //         console.log('Token:', token); // Log token for debugging
    
//         //         const response = await fetch('http://localhost:8000/lead-information/', {
//         //             method: 'GET',
//         //             headers: {
//         //                 'Authorization': `Bearer ${token}`, // Ensure token is included in the header
//         //                 'Content-Type': 'application/json'
//         //             }
//         //         });
//         //         console.log('Request Headers:', response.headers); // Log headers for debugging
    
//         //         const data = await response.json();
//         //         console.log('Response Data:',data);
//         //         if (response.ok) {
//         //             setLeadData(data.user_leads);
//         //         } else {
//         //             console.error('Failed to fetch lead information:', data.error);
//         //         }
//         //     } catch (error) {
//         //         console.error('Error fetching lead information:', error);
//         //     }
//         // };


//         const fetchLeadData=async () =>{
//             try{
//                 const token=localStorage.getItem('token');
//                 console.log('Token:',token);

//                 const response=await fetch('http://localhost:8000/lead-information/',{
//                     method:'GET',
//                     headers:{
//                         'Authorization':`Bearer ${token}`,
//                         'Content-Type':'application/json'
//                     }
//                 });
//                 console.log('Response Status:',response.status);
//                 console.log('Response Headers:',response.headers);

//                 const data=await response.json();
//                 console.log('Response Data:',data);


//                 if (response.ok){
//                     setLeadData(data.user_leads);
//                 }else{
//                     console.error('Failed to fetch lead information:',data.error);
//                 }
            
//             }catch (error){
//                 console.error('Error fetching lead information:',error);
//             }
//         };
//         fetchLeadData();
//     },[]);

//     // return(
//     //     <div>
//     //         <h1>User's Lead Information</h1>
//     //         {leadData ? (
//     //             <div>
//     //                 <p>Company Name:{leadData.companyName}</p>
//     //                 <p>Company Address:{leadData.companyAddress}</p>
//     //     </div>
//     //         ):(
//     //             <p>Loading lead information...</p>
//     //         )}
//     //         </div>
//     // );

//     return (
//         <div>
//             <h1>User's Lead Information</h1>
//             {leadData ? (
//                 <div>
//                     {leadData.map((lead, index) => (
//                         <div key={index}>
//                         <p>Company Name:{lead.company_name}</p>
//                         <p>Company Address:{lead.company_address}</p>
//                         <p>Country:{lead.country}</p>
//                         <p>Street:{lead.street}</p>
//                         <p>City:{lead.city}</p>
//                         <p>Contact Person:{lead.contact_person}</p>
//                         <p>Contact no:{lead.contact_no}</p>
//                         <p>Designation:{lead.designation}</p>
//                         <p>Company Headquarters:{lead.company_headquarters}</p>
//                         <p>Business Verticals:{lead.business_verticals}</p>
//                         <p>Brief Introduction:{lead.additional_notes}</p>
//                         {/* {console.log("Lead Data:",lead)} */}
//                     </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p>Loading lead information...</p>
//             )}
//         </div>
//     );

// }


// export default LeadInformationDisplay;


// // import React,{useState,useEffect} from "react";

// // const LeadInformationDisplay=()=>{
// //     const [leads,setLeads]=useState([]);
// //     const [error,setError]=useState(null);

// //     useEffect(()=>{
// //         const fetchLeads=async()=>{
// //             try{
// //                 const response=await fetch('http://localhost:8000/lead-information/',{
// //                     method:'GET',
// //                     headers:{
// //                         'Authorization':`Bearer ${localStorage.getItem('token')}`
// //                     }
// //                 });
// //                 if(!response.ok){
// //                     throw new Error('Failed to fetch leads');
// //                 }
// //                 const data=await response.json();
// //                 if(data.error){
// //                     throw new Error(data.error);
// //                 }
// //                 setLeads(data.user_leads);
// //             }catch(error){
// //                 setError(error.message);
// //             }
// //         };
// //         fetchLeads();
// //     },[]);

// //     return(
// //         <div>
// //             {error && <p>Error:{error}</p>}
// //             {leads.length=== 0 && !error && <p>Loading...</p>}
// //             {leads.length >0 &&(
// //                 <table>
// //                     <thead>
// //                         <tr>
// //                             <th>Company Name</th>
// //                             <th>Company Address</th>
// //                             <th>Country</th>
// //                             <th>Contact Person</th>
// //                             <th>Contact No</th>
// //                             <th>Email</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {leads.map((lead,index)=>(
// //                             <tr key={index}>
// //                                 <td>{lead.company_name}</td>
// //                                 <td>{lead.company_address}</td>
// //                                 <td>{lead.country}</td>
// //                                 <td>{lead.contact_person}</td>
// //                                 <td>{lead.contact_no}</td>
// //                                 <td>{lead.email}</td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             )}
// //         </div>
// //     );
// // };

// // export default LeadInformationDisplay;




// // import React,{useState,useEffect} from 'react';

// // function LeadInformationDisplay(){
// //     const [leadData,setLeadData]=useState([]);

// //     useEffect(()=>{
// //         async function fetchLeadData(){
// //             const token=localStorage.getItem('token');
// //             try{
// //                 const response=await fetch('http://localhost:8000/lead_information/',{
// //                     method:'GET',
// //                     headers:{
// //                         'Authorization':`Bearer ${token}`,
// //                     },
// //                 });
// //                 if (response.ok){
// //                     const data=await response.json();
// //                     setLeadData(data.user_leads);
// //                 }else{
// //                     console.error('Failed to fetch lead data:',response.statusText);
// //                 }
// //             }catch (error){
// //                 console.error('Error:',error);
// //             }
// //         }
// //         fetchLeadData();
// //     },[]);

// //     return (
// //         <div>
// //             <h2>Lead Information</h2>
// //             <ul>
// //                 {leadData.map((lead,index)=>(
// //                     <li key={index}>
// //                         <p>Company Name:{lead.company_name}</p>
// //                     </li>
// //                 ))}
// //             </ul>
// //         </div>
// //     );
// // }

// // export default LeadInformationDisplay

// import React, { useEffect, useState } from 'react';

// function LeadInformationDisplay() {
//     const [leadData, setLeadData] = useState([]);

//     useEffect(() => {
//         const fetchLeadData = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 const response = await fetch('http://localhost:8000/lead-information/', {
//                     method: 'GET',
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     }
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     setLeadData(data.user_leads);
//                 } else {
//                     const data = await response.json();
//                     console.error('Failed to fetch lead information:', data.error);
//                 }
//             } catch (error) {
//                 console.error('Error fetching lead information:', error);
//             }
//         };
//         fetchLeadData();
//     }, []);

//     return (
//         <div>
//             <h1>User's Lead Information</h1>
//             {leadData.length > 0 ? (
//                 <div>
//                     {leadData.map((lead, index) => (
//                         <div key={index}>
//                             <p>Company Name: {lead.company_name}</p>
//                             <p>Company Address: {lead.company_address}</p>
//                             <p>Country: {lead.country}</p>
//                             {/* Add other lead fields here */}
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p>Loading lead information...</p>
//             )}
//         </div>
//     );
// }

// export default LeadInformationDisplay;


import React from 'react';
import { Typography } from '@material-ui/core';

const LeadInformationDisplay = ({ leadData }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>Lead Information</Typography>
      {leadData ? (
        <div>
          {leadData.map((lead, index) => (
            <div key={index} style={{ marginBottom: 20 }}>
              <Typography variant="subtitle1">{lead.company_name}</Typography>
              <Typography variant="body1">Address: {lead.company_address}, {lead.city}, {lead.country}</Typography>
              <Typography variant="body1">Contact Person: {lead.contact_person}</Typography>
              {/* Display other lead information here */}
            </div>
          ))}
        </div>
      ) : (
        <Typography variant="body1">Loading lead information...</Typography>
      )}
    </div>
  );
};

export default LeadInformationDisplay;
