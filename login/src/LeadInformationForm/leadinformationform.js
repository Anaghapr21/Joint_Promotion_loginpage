import React, { useState ,useEffect} from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Grid,
  Menu,
  // FormControl, // Add this import
  FormLabel, // Add this import
  // EmailField
} from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import { Checkbox } from '@material-ui/core';
// import QuestionTableForm from '../QuestionTableForm/questiontableform';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
// import Implementation from '../Implementation/implementation';
import axios from 'axios';
import './leadinformation.css'; // Import your CSS file
// import BASE_URL from '../config';
import 'react-phone-number-input/style.css'; // Import the CSS for styling
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the CSS for styling
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select'

const LeadInformationForm = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [decisionMakerType, setDecisionMakerType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showQuestions, setShowQuestions] = useState(false);
const [leadNo, setLeadNo] = useState('');
// const [selectedDate, setSelectedDate] = useState('');
const [companyName, setCompanyName] = useState('');
const [companyAddress, setCompanyAddress] = useState('');
const [isCompanyAddressValid, setIsCompanyAddressValid] = useState(true);
const [runningPromotions,setRunningPromotions]=useState('');
const [additionalNotes, setAdditionalNotes] = useState('');
const [divisionalOperations,setDivisionalOperations]=useState('');
const [businessVerticals,setBusinessVerticals]=useState('');


const [contactPerson, setContactPerson] = useState('');
const [contactNo, setContactNo] = useState('');
const [emailAddress, setEmailAddress] = useState('');
const [clientRepresentative,setClientRepresentative]=useState('');
const [clientRepresentativeDesignation,setClientRepresentativeDesignation]=useState('');
const [decisionMaker,setDecisionMaker]=useState('');
const [contactDetails,setContactDetails]=useState('');
const [contactedBy,setContactedBy]=useState('');
const [contactedDate,setContactedDate]=useState('');
const [repliedDate,setRepliedDate]=useState('');
const [nextMeeting,setNextMeeting]=useState('');
const [isEmailValid, setIsEmailValid] = useState(true);
const [isContactNoValid,setIsContactNoValid]=useState(true);
const [openModal, setOpenModal] = useState(false);
const [implementationType, setImplementationType] = useState('');
  const [showAdditionalForm, setShowAdditionalForm] = useState(false);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [companyHeadquarter,setCompanyHeadquarter]=useState('');
  const [designation,setDesignation]=useState('');
  const [countryCode,setCountryCode]=useState('');

  const [companyDetailsList,setCompanyDetailsList]=useState([]);
  const [contactPersonTitle, setContactPersonTitle] = useState('');
  const [isCompanyNameTouched,setIsCompanyNameTouched]=useState(false);
  const [isCompanyAddressTouched,setIsCompanyAddressTouched]=useState(false);
  const [isContactPersonTouched,setIsContactPersonTouched]=useState(false);
  const [isContactNoTouched,setIsContactNoTouched]=useState(false);
  const [isEmailTouched,setIsEmailTouched]=useState(false);
  const [isDesignationTouched,setIsDesignationTouched]=useState(false);
  const [isPage1Valid,setIsPage1Valid]=useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [street,setStreet]=useState('');
  const [city,setCity]=useState('');
//   useEffect(() => {
//     // Function to generate lead number based on the last stored lead number
//     const generateLeadNo = () => {
//         // Retrieve the last stored lead number from the database or localStorage
//         let lastLeadNumber = localStorage.getItem('lastLeadNumber');
        
//         if (!lastLeadNumber) {
//             // If there's no last stored lead number, generate a new one with the current date and 1 as the last digit
//             const today = new Date();
//             const day = String(today.getDate()).padStart(2, '0');
//             const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
//             const year = today.getFullYear();
//             lastLeadNumber = `${day}${month}${year}/001`;
//         } else {
//             // Extract the serial number part and parse it as an integer
//             const serialNumber = parseInt(lastLeadNumber.split('/')[1]);
//             if (!isNaN(serialNumber)) {
//                 // Increment the serial number
//                 const incrementedSerial = String(serialNumber + 1).padStart(3, '0');
//                 // Get the date part from the last lead number
//                 const datePart = lastLeadNumber.slice(0, 8);
//                 lastLeadNumber = `${datePart}/${incrementedSerial}`;
//             } else {
//                 // If serial number parsing fails, generate a new lead number
//                 const today = new Date();
//                 const day = String(today.getDate()).padStart(2, '0');
//                 const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
//                 const year = today.getFullYear();
//                 lastLeadNumber = `${day}${month}${year}/001`;
//             }
//         }

//         // Update the lead number state
//         setLeadNo(lastLeadNumber);
//     };

//     generateLeadNo();
// }, []); // Empty dependency array to run this effect only once
useEffect(() => {
  const generateLeadNo = async () => {
      // Retrieve the last stored lead number from the database or localStorage
      let lastLeadNumber = localStorage.getItem('lastLeadNumber');

      if (!lastLeadNumber) {
          // If there's no last stored lead number, generate a new one with the current date and 1 as the last digit
          const today = new Date();
          const day = String(today.getDate()).padStart(2, '0');
          const month = String(today.getMonth() + 1).padStart(2, '0');
          const year = today.getFullYear();
          lastLeadNumber = `${day}${month}${year}/001`;
      } else {
          // Increment the lead number if it exists
          const parts = lastLeadNumber.split('/');
          let serialNumber = parseInt(parts[1]);
          serialNumber++; // Increment by 1

          // Pad the serial number to 3 digits
          const incrementedSerial = String(serialNumber).padStart(3, '0');
          
          // Reconstruct the lead number
          lastLeadNumber = `${parts[0]}/${incrementedSerial}`;
      }

      // Update the lead number state
      setLeadNo(lastLeadNumber);
  };

  generateLeadNo();
}, []);


  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().substr(0, 10); // Format: YYYY-MM-DD
    setCurrentDate(formattedDate);
  }, []);

useEffect(() => {
  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (response.ok) {
        const data = await response.json();
        // Sort countries alphabetically by name
        const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sortedCountries);
      } else {
        console.error('Failed to fetch countries:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchCountries();
}, []);

  const [questions, setQuestions] = useState([
    {
      srNo: 1,
      subject: 'Knowledge About ERP Systems',
      subQuestions: [],
    },
    {
      srNo: 2,
      subject: 'Do you have a clarity of your Business process requirements?',
      subQuestions: [],
    },
    {
      srNo: 3,
      subject: 'Did you document the process as below?',
      subQuestions: [
        'a. Procure to pay cycle (Purchase Cycle)',
        'b. Order to Cash Cycle (Sales Cycle)',
        'c. Hire to Retire (HR & Payroll Cycle)',
        'd. Record to Report (Finance & Accounting)',
        'e. Manufacturing Process',
        'f. Contracting and Services Distribution and Warehouse Management',
      ],
    },
    {
      srNo: 4,
      subject: 'Do your team have a clear understanding about the integrations and reporting requirements for?',
      subQuestions: [
        'a. Procurement process and integrations to Sales, Inventory, Manufacturing, Contracting, Project Management, Accounting and Financial reporting.',
        'b. Sales Process and integrations to Procurement, Inventory, Manufacturing, Contracting, Project Management, Accounting and Financial reporting.',
        'c. Manufacturing Process and integrations to Procurement, Sales, Inventory, Project Management Accounting and Financial reporting.',
        'd. Contracting and Services integrations to Procurement, Sales, Inventory, Project Management, Accounting and Financial reporting.',
        'e. HR and Payroll process and its integrations to Project Management, Accounting and Financial process.',
      ],
    },
    {
      srNo: 5,
      subject: 'Do you have a dedicated team to be part of the Project from start to end as required below?',
      subQuestions: [
        'a. Project Sponsor: for Approving and driving the implementation.',
        'b. Project Manager/Project Lead: Planning, directing, staffing and managing the project.',
        'c. Project Analyst: Collecting, documenting, analyzing the business process.',
        'd. Business Process Experts: Who carry out business process and provide recommendations.',
      ],
    },
    {
      srNo: 6,
      subject: 'Do you have clear information about?',
      subQuestions: ['a. The project budgets',
       'b. By when you would you like to start the project.'],
    },
    {
      srNo: 7,
      subject: 'Current Software details that’s within your organization',
      subQuestions: [],
    },
    
    {
          srNo: 8,
          subject: (
            <div>
            Your Concern’s with respect to your software that is in place.   
            <div>Example</div>
            <div> a. Financial pain points: Current solution is costing too much to access and maintain.</div>
            <br/>
              <div>b. Productivity pain points: Current solution may be too time consuming and you are looking for a solution that makes work more streamlined.</div>
              <br/>
              <div>c. Process pain points: Looking to improve internal processes such as lead generation, hiring, app integrations or social media campaigns.</div>
              <br/>
              <div>d. Support pain points: Customer support is scattered and not available at all. You are looking to solve support pain points by installing a hotline for urgent issues, a help desk, chat bots or a knowledge base for more common, less urgent issues.</div>
            </div>
          ),
          subQuestions: [],

         
        },
    {
      srNo: 9,
      subject: 'Any Questions to us can be put in the remarks for our further analysis and as a next step towards a long-term business partner Journey.',
      subQuestions: [],
    },
  ]);

 
  const renderSubQuestions = (subQuestions) => {
    return (
      <TableCell colSpan={5}>
        {subQuestions.map((subQuestion, index) => (
          <TableRow key={index}>
            <TableCell>{subQuestion}</TableCell>

            <TableCell>
              <Radio />
            </TableCell>
            <TableCell>
              <Radio />
            </TableCell>
            <TableCell>
              <Checkbox />
            </TableCell>
          </TableRow>
        ))}
      </TableCell>
    );
  };

 

  const handleRadioChange = (index, option) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      // Deselect the other option
      if (option === 'yes') {
        updatedQuestions[index] = {
          ...updatedQuestions[index],
          yes: true,
          no: null,
        };
      } else if (option === 'no') {
        updatedQuestions[index] = {
          ...updatedQuestions[index],
          yes: null,
          no: true,
        };
      }
      return updatedQuestions;
    });
  };


  const handleSubquestionRadioChange = (mainIndex, subIndex, option, value) => {
  setQuestions((prevQuestions) => {
    const updatedQuestions = [...prevQuestions];
    // Update the selected option for the subquestion
    updatedQuestions[mainIndex].subquestions[subIndex] = {
      ...updatedQuestions[mainIndex].subquestions[subIndex],
      [option]: value,
    };
    return updatedQuestions;
  });
};




  
  
  

  const handleSupportNeededChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index] = { ...updatedQuestions[index], supportNeeded: value };
      return updatedQuestions;
    });
  };

  const handleRemarksChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index] = { ...updatedQuestions[index], remarks: value };
      return updatedQuestions;
    });
  };
  
  
  const getPageHeading = () => {
    switch (currentPage) {
      case 1:
        // return 'Lead Information' ;
        return '' ;

      case 2:
        return '';
      case 3:
        return 'Questions'
      case 4:
        return 'Client Information Area';
      case 5:
        return 'Loyal IT Solutions Area';
      default:
        return 'Lead Information';
    }
  };
  // const getPageHeadingStyle = () => {
  //   switch (currentPage) {
  //     case 1:
  //       return { fontSize: '24px', fontWeight: 'bold', color: 'black',fontFamily: 'Apple Color Emoji' };
  //     case 2:
  //       return { fontSize: '20px', fontStyle: 'italic', color: 'black',fontFamily: 'Apple Color Emoji' };
  //     case 3:
  //       return { fontSize: '28px', fontWeight: 'bold', color: 'black' ,fontFamily: 'Apple Color Emoji'};
  //     case 4:
  //       return { fontSize: '22px', fontFamily: 'Arial', color: 'black' ,fontFamily: 'Apple Color Emoji'};
  //     case 5:
  //       return { fontSize: '26px', fontWeight: 'bold', textDecoration: 'underline', color: 'black' ,fontFamily: 'Apple Color Emoji'};
  //     default:
  //       return { fontSize: '24px', fontWeight: 'bold', color: 'black' ,fontFamily: 'Apple Color Emoji'};
  //   }
  // };
  // const getPageHeading = () => {
  //   const headingStyle = getPageHeadingStyle();
  
  //   return (
  //     <h1 style={headingStyle}>
  //       {(() => {
  //         switch (currentPage) {
  //           case 1:
  //             return 'Lead Information';
  //           case 2:
  //             return '';
  //           case 3:
  //             return 'Questions';
  //           case 4:
  //             return 'Client Information Area';
  //           case 5:
  //             return 'Loyal IT Solutions Area';
  //           default:
  //             return 'Lead Information';
  //         }
  //       })()}
  //     </h1>
  //   );
  // };
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleDecisionMakerTypeChange = (event) => {
    setDecisionMakerType(event.target.value);
  };


  const handleNextPage = () => {
    if (currentPage === 1) {
      const isPage1Valid = companyName && companyAddress && contactPerson && contactNo && emailAddress && designation;
      if (!isPage1Valid) {
        // Alert or handle invalid form data
        return;
      }
    }
  
    setCurrentPage(currentPage + 1);
    if (currentPage === 1) {
      setShowQuestions(true);
    }
  };
  const handleNextToClientInfo = () => {
    // Handle the logic to navigate to the ClientInformationForm or perform any other action
    // For simplicity, let's increment the currentPage to navigate to the next page
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };


  const handleOpenModal = () => {
    setOpenModal(true);
  };
  
  const handleCloseModal = () => {
    setLeadNo('');
  setSelectedDate('');
  setCompanyName('');
  setCompanyAddress('');
  setContactPerson('');
  setContactNo('');
  setEmailAddress('');
    setOpenModal(false);
    setCurrentPage(1);

  };
  


  // const handleSubmit = () => {
  //   // Add your submit logic here
  //   // For example, you can send the form data to a server or perform other actions
  //   // console.log('Form submitted!');
  //   handleOpenModal();
  // };

  const handleBusinessVerticalsChange = (event) => {
    setBusinessVerticals(event.target.value);
};

const handleDivisionalOperationsChange = (event) => {
    setDivisionalOperations(event.target.value);
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveLeadToDatabase(leadNo);

        // Update localStorage with the latest lead number
        localStorage.setItem('lastLeadNumber', leadNo);
    const leadData = {
        lead_no:leadNo,
        company_name: companyName,
        company_address: companyAddress,
        country: country,
        street:street,
        city:city,
        contact_person: `${contactPersonTitle} ${contactPerson}`,
        contact_no: `${countryCode} ${contactNo}`,
        email: emailAddress,
        designation: designation,
        company_headquarters:companyHeadquarter,
        business_verticals:businessVerticals,
        // running_promotions:runningPromotions,
        // divisional_operations:divisionalOperations,
        additional_notes: additionalNotes,
    };

    try {
        const response = await fetch(`http://localhost:8000/save/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(leadData),
        });

        const responseData = await response.json();

        if (response.ok) {
            console.log('Lead data submitted successfully');
            const emailData = {
              subject: 'Lead Submission Confirmation',
              body: 'Thank you for your lead submission!',
              to: emailAddress,
          };

          await fetch(`http://localhost:8000/send-email/`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(emailData),
          });
            clearFormFields(); // Clear form fields after successful submission if needed
            // alert('Thank you for your submission!\nOur team will get in touch with you'); // Show a thank you message
            alert('Thankyou for Submitting your request to Loyal IT Solutions, an email has been forwarded to your Email Address for future reference.')
            window.location.href = 'https://loyalitsolutions.com/'; // Redirect to another website

        } 
        else {
            console.error('Failed to submit lead data');
            alert('Failed to submit lead data. Please try again later.'); // Show an error message
        }
    } catch (error) {
        console.error('Error submitting lead data:', error);
        alert('Error submitting lead data. Please try again later.'); // Show an error message
    }
};

const saveLeadToDatabase = async (leadNumber) => {
  // Code to save lead to database
};


const clearFormFields = () => {
    // Reset form fields
    setCompanyName('');
    setCompanyAddress('');
    setContactPersonTitle('Mr');
    setContactPerson('');
    setCountryCode('+1');
    setContactNo('');
    setEmailAddress('');
    setDesignation('');
    setCountry('');
    setAdditionalNotes('');
    setBusinessVerticals('');
    setCompanyHeadquarter('');
    setRunningPromotions('');
    setDivisionalOperations('');
    setIsCompanyNameTouched(false);
    setIsCompanyAddressTouched(false);
    setIsContactPersonTouched(false);
    setIsContactNoTouched(false);
    setIsEmailTouched(false);
    setIsDesignationTouched(false);
    setIsPage1Valid(false);
};


  
  const handleQuestionsUpdate = (updatedQuestions) => {
    setQuestions(updatedQuestions);
  };
 
  const handleCompanyHeadquarterChange=(e)=>{
    setCompanyHeadquarter(e.target.value);
  };
  


  const renderPage1 = () => {
  
    
    const isPage1Valid = companyName && companyAddress && contactPerson && contactNo && isEmailValid && designation && isCompanyAddressValid && country ;
  
    const validateEmail = (email) => {
      // Use a regular expression for basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const validateContactNo=(contactNo)=>{
      return contactNo.length===10 && /^\d+$/.test(contactNo);
    }
    const handleEmailChange = (e) => {
      const email = e.target.value;
      setEmailAddress(email);
      setIsEmailValid(validateEmail(email));
      setIsEmailTouched(true);
    };

  
    const handleContactNoChange=(e)=>{
      const contactNoValue=e.target.value;
      const isValidLength=contactNoValue.length<=10;
      const isContactNoValidFormat=/^\d+$/.test(contactNoValue);
      if (isValidLength && isContactNoValidFormat){
        setContactNo(contactNoValue);
        setIsContactNoValid(validateContactNo(contactNoValue));
      }else{
        setIsContactNoValid(false);
      }
      if (contactNoValue === '') {
        setContactNo(''); // Clear the contact number state
      }
      setIsContactNoTouched(true);
    }

    const handleImplementationChange = (event) => {
      setImplementationType(event.target.value);
      setShowAdditionalForm(event.target.value === 'multiCompanyMultiCountry');
    };
  
    const handleCountryChange = (event) => {
      setCountry(event.target.value);
    };
 
    const handleDesignationChange=(event)=>{
      setDesignation(event.target.value);
    };

    const handleRemoveCompany = (index) => {
      setCompanyDetailsList(prevList => prevList.filter((_, i) => i !== index));
    };
    
    
    const validateCompanyAddress = (address) => {
      // Split the address into parts (assuming comma as the delimiter)
      const addressParts = address.split(',');
    
      // Check if the address has at least three parts (name, place, pincode)
      if (addressParts.length >= 3) {
        const name = addressParts[0].trim();
        const place = addressParts[1].trim();
        const pincode = addressParts[2].trim();
    
        // Add your specific criteria for each part (you can customize this)
        const isNameValid = name.length > 0;
        const isPlaceValid = place.length > 0;
        const isPincodeValid = /^\d{5}$/.test(pincode); // assuming pincode is a 5-digit number
    
        // Return true only if all parts are valid
        return isNameValid && isPlaceValid && isPincodeValid;
      }
    
      // If there are not enough parts, the address is invalid
      return false;
    };
    
   
    const handleCompanyAddressChange = (e) => {
      const address = e.target.value;
      setCompanyAddress(address);
      setIsCompanyAddressValid(validateCompanyAddress(address));
      setIsCompanyAddressTouched(true);
    };
    

    const handleCompanyNameChange=(e)=>{
      setCompanyName(e.target.value);
      setIsCompanyNameTouched(true);
    };

    
    return (
      // <form  onSubmit={handleSubmit}>
        <>
      <div className="container mx-auto px-4 py-8 ">
      <div className="title text-center mb-8 text-2xl font-semibold">Lead Information</div>
      {/* <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"> */}

      {/* <form action="#" onSubmit={handleSubmit} > */}
          <div className="user-details" style={{width:'500px',marginRight:'5px'}}>
              <div className="input-box" style={{display:'none'}}>
                  <span className="details ">Lead No</span>
                  <input type="text" name='lead_no'disabled
                  value={leadNo}
                  onChange={(e) => setLeadNo(e.target.value)}
                  
                  />
              </div>
              <div className="input-box" style={{display:'none'}}>
                  <span className="details">Date</span>
                  <input type="text" name='date' value={currentDate} onChange={(e)=>setCurrentDate(e.target.value)}disabled/>
              </div>
            
              <div className="input-box">
  <span className="details">Company Name<span style={{color:'red'}}>*</span></span>
  <input 
    type="text" 
    placeholder="Enter company name" 
    value={companyName} 
    onChange={(e) => setCompanyName(e.target.value)} 
    onBlur={()=>setIsCompanyNameTouched(true)}
    required
    name='company_name'
    
  />
  {isCompanyNameTouched && !companyName && <span className="error-message"style={{ color: 'red' }}>Please enter company name</span>}
</div>
              <div className="input-box">
                  <span className="details">Company Address<span style={{color:'red'}}>*</span></span>
                  <input type="text" placeholder="Enter Address"  
                  onChange={(e) => setCompanyAddress(e.target.value)} 
                  onBlur={()=>setIsCompanyAddressTouched(true)}
                  name='company_address'
                  required/>
                  {isCompanyAddressTouched && !companyAddress && <span className='error-message'style={{ color: 'red' }}>Please enter company address</span>}
              </div>
            
               <div className="input-container">
                <div className="input-box">
                <span className="details">Street Name</span>
      
      <input
        type="text"
        placeholder="Enter street Name"
        required
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        name='street'
      />
              </div>
              <div className="input-box">
                <span className="details">City</span>
      
      <input
        type="text"
        placeholder="Enter City Name"
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
        name='city'
      />
              </div>
              </div>
              <div className="input-box">
                  <span className="details">Country<span style={{color:'red'}}>*</span></span>
                  <select
                  style={{width:'100%',height:'44px',borderColor:'#9b59b6',transition: 'all 0.3s ease',border:'1px solid #ccc',outline:'none',borderRadius:'5px',paddingLeft:'15px',fontSize:'16px',borderBottomWidth:'2px'}}
                  value={country}
                  onChange={handleCountryChange}
                  required
                  name='country'
                  >
                  <option value="" disabled>Select Country</option>
                            {countries && countries.length > 0 && countries.map((countryData) => (
                                <option key={countryData.name?.common} value={countryData.name?.common}>
                                    {countryData.name?.common}
                                </option>
                  ))}
                  </select>
              </div>
  <div className="input-container">
  <div className="input-box">
    <span className="details">Contact Person<span style={{ color: 'red' }}>*</span></span>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <select
        value={contactPersonTitle}
        onChange={(e) => setContactPersonTitle(e.target.value)}
        style={{ marginRight: '4px', width: '50px' }}
      >
        <option value="Mr">Mr</option>
        <option value="Ms">Ms</option>
        <option value="Mrs">Mrs</option>
      </select>
      <input
        type="text"
        placeholder="Enter Name"
        required
        value={contactPerson}
        onChange={(e) => setContactPerson(e.target.value)}
        onBlur={()=>setIsContactPersonTouched(true)}
        name='contact_person'
      />
    </div>
    {isContactPersonTouched && !contactPerson && <span className='error-message' style={{ color: 'red' }}>Please enter contact person name</span>}
  </div>

  <div className="input-box">
    <span className="details">Contact No<span style={{ color: 'red' }}>*</span></span>
   
     <div style={{ display: 'flex', alignItems: 'center' }} className='contact_no'>
          <PhoneInput
            international
            country={countryCode} // Set the default country code
            value={contactNo}
            onChange={setContactNo}
            placeholder="Enter contact no"
            onBlur={()=>setIsContactNoTouched(true)}
            required
            maxLength={15}
            className='phoneinput'
          />
        </div>
    {isContactNoTouched && !contactNo && <span className="error-message"style={{ color: 'red' }}>Please enter contact no</span>}
    {isContactNoTouched && contactNo && !isContactNoValid && <span className='error-message' style={{ color: 'red' }}>Invalid contact number format</span>}
  </div>
</div>


              <div className="input-box">
                  <span className="details">Email<span style={{color:'red'}}>*</span></span>
                  <input type="text" placeholder="Enter Your Email" 
                      // onChange={(e) => setEmailAddress(e.target.value)} 
                      onChange={handleEmailChange}
                      onBlur={()=>setIsEmailTouched(true)}
                      name='email'
                   required/>
                   {isEmailTouched && !emailAddress && <span className='error-message'style={{ color: 'red' }}>Please enter email</span>}
                   {isEmailTouched && emailAddress && !isEmailValid && <span className='error-message'style={{ color: 'red' }}>Invalid email format</span>}

              </div>
              {/* <div class="input-box">
                  <span class="details">Designation<span style={{color:'red'}}>*</span></span>
                  <input type="text" placeholder="Enter Designation" required/>
              </div> */}
              <div className="input-box">
  <span className="details">Designation<span style={{color:'red'}}>*</span></span>
  <input 
    type="text" 
    placeholder="Enter Designation" 
    value={designation} 
    onChange={(e) => setDesignation(e.target.value)} 
    onBlur={()=>setIsDesignationTouched(true)}
    required
    name='designation'
  />
  {isDesignationTouched && !designation && <span className='error-message'style={{ color: 'red' }}>Please enter designation</span>}
</div>
              {/* <div className="input-box">
                  <span className="details">Contact Person's Country<span style={{color:'red'}}>*</span></span>
                  <select
                  style={{width:'100%',height:'44px',borderColor:'#9b59b6',transition: 'all 0.3s ease',border:'1px solid #ccc',outline:'none',borderRadius:'5px',paddingLeft:'15px',fontSize:'16px',borderBottomWidth:'2px'}}
                  value={country}
                  onChange={handleCountryChange}
                  required
                  name='country'
                  >
                  <option value="" disabled>Select Country</option>
                            {countries && countries.length > 0 && countries.map((countryData) => (
                                <option key={countryData.name?.common} value={countryData.name?.common}>
                                    {countryData.name?.common}
                                </option>
                  ))}
                  </select>
              </div> */}
              <div className="input-box">
                  <span className="details">Company HeadQuarters</span>
                  <input type="text" placeholder="Headquarters Location" name='company_headquarters'  onChange={(e) => setCompanyHeadquarter(e.target.value)} 
/>
              </div>
              {/* <div className="input-box">
                        <span className="details">Business Verticals</span>
                        <select
                            value={businessVerticals}
                            style={{width:'100%',height:'44px',borderColor:'#9b59b6',transition: 'all 0.3s ease',border:'1px solid #ccc',outline:'none',borderRadius:'5px',paddingLeft:'15px',fontSize:'16px',borderBottomWidth:'2px'}}

                            onChange={handleBusinessVerticalsChange}
                            name='business_verticals'
                        >
                            <option value="" disabled>Select Verticals</option>
                            <option value="Retail">Manufacturing</option>
                            <option value="Manufacturing">Energy</option>
                            <option value="Trading">Construction and Infrastructure</option>
                            <option value="Hospital">Hospital</option>
                            <option value="Education">Education</option>
                            <option value="Rental">Rental</option>
                            <option value="Distribution">Distribution</option>
                        </select>
                    </div> */}
                          <FormControl sx={{ m: 1, minWidth: 120 }} style={{width:'500px',marginLeft:'2px'}}>
                          <span className="details" style={{fontSize:'16px'}}>Business Verticals</span>

        {/* <InputLabel htmlFor="grouped-native-select">Business Verticals</InputLabel> */}
        <Select
          native
          value={businessVerticals}
          onChange={handleBusinessVerticalsChange}
          label="Business Verticals"
          inputProps={{
            id: 'grouped-native-select',
          }}
        >
          {/* <option aria-label="None" value="" /> */}
          <optgroup label="Manufacturing">
          <option value="Automotive">Automotive</option>
          <option value="Aerospace">Aerospace</option>
          <option value="Electronics">Electronics</option>
          <option value="Chemicals">Chemicals</option>
          <option value="Machinery">Machinery</option>
          <option value="Metalworking">Metalworking</option>
          <option value="Plastics and rubber">Plastics and rubber</option>
          <option value="Textiles and apparel">Textiles and apparel</option>
          <option value="Food and beverage">Food and beverage</option>
          <option value="Pharmaceutical">Pharmaceutical</option>
        </optgroup>
        <optgroup label="Energy">
          <option value="Oil and gas">Oil and gas</option>
          <option value="Renewable energy">Renewable energy (solar, wind, hydropower)</option>
          <option value="Nuclear energy">Nuclear energy</option>
          <option value="Power generation and utilities">Power generation and utilities</option>
        </optgroup>

        <optgroup label="Construction and Infrastructure">
          <option value="Residential construction">Residential construction</option>
          <option value="Commercial construction">Commercial construction</option>
          <option value="Civil engineering">Civil engineering</option>
          <option value="Infrastructure development">Infrastructure development</option>
        </optgroup>
        <optgroup label="Transportation and Logistics">
          <option value="Automotive">Automotive</option>
          <option value="Aerospace and defense">Aerospace and defense</option>
          <option value="Rail transportation">Rail transportation</option>
          <option value="Maritime and shipping">Maritime and shipping</option>
          <option value="Logistics and supply chain">Logistics and supply chain</option>
        </optgroup>
        {/* <option aria-label="None" value="" /> */}
          <optgroup label="Information Technology and Telecommunications">
            <option value="Hardware manufacturing">Hardware manufacturing</option>
            <option value="Software development">Software development</option>
            <option value="Telecommunications">Telecommunications</option>
            <option value="Data centers">Data centers</option>
          </optgroup>
          <optgroup label="Chemicals and Pharmaceuticals">
            <option value="Pharmaceuticals">Pharmaceuticals</option>
            <option value="Specialty chemicals">Specialty chemicals</option>
            <option value="Agrochemicals">Agrochemicals</option>
            <option value="Petrochemicals">Petrochemicals</option>
          </optgroup>
          <optgroup label="Mining and Metals">
            <option value="Metal ore mining">Metal ore mining</option>
            <option value="Coal mining">Coal mining</option>
            <option value="Metal production and processing">Metal production and processing</option>
          </optgroup>
          {/* <option aria-label="None" value="" /> */}
        <optgroup label="Food and Beverage">
          <option value="Food processing">Food processing</option>
          <option value="Beverage manufacturing">Beverage manufacturing</option>
          <option value="Agribusiness and farming">Agribusiness and farming</option>
        </optgroup>
        <optgroup label="Textiles and Apparel">
          <option value="Textile manufacturing">Textile manufacturing</option>
          <option value="Apparel and garment industry">Apparel and garment industry</option>
        </optgroup>
        <optgroup label="Healthcare and Biotechnology">
          <option value="Medical devices">Medical devices</option>
          <option value="Biopharmaceuticals">Biopharmaceuticals</option>
          <option value="Healthcare services">Healthcare services</option>
        </optgroup>
        {/* <option aria-label="None" value="" /> */}
        <optgroup label="Financial Services">
          <option value="Banking and finance">Banking and finance</option>
          <option value="Insurance">Insurance</option>
          <option value="Financial technology (FinTech)">Financial technology (FinTech)</option>
        </optgroup>
        <optgroup label="Chemical and Process Industries">
          <option value="Process automation">Process automation</option>
          <option value="Industrial chemicals">Industrial chemicals</option>
          <option value="Pulp and paper">Pulp and paper</option>
        </optgroup>
        <optgroup label="Water and Environmental Management">
          <option value="Water treatment and management">Water treatment and management</option>
          <option value="Environmental consulting">Environmental consulting</option>
          <option value="Waste management">Waste management</option>
        </optgroup>
        <optgroup label="Retail and Consumer Goods">
          <option value="Consumer electronics">Consumer electronics</option>
          <option value="Retail supply chain">Retail supply chain</option>
          <option value="Fast-moving consumer goods (FMCG)">Fast-moving consumer goods (FMCG)</option>
        </optgroup>
        <optgroup label="Hospitality and Tourism">
          <option value="Hotels and accommodations">Hotels and accommodations</option>
          <option value="Travel and tourism">Travel and tourism</option>
        </optgroup>
        <optgroup label="Education and Training">
          <option value="Educational services">Educational services</option>
          <option value="E-learning and training">E-learning and training</option>
        </optgroup>
        <optgroup label="Real Estate and Property Development">
          <option value="Residential real estate">Residential real estate</option>
          <option value="Commercial real estate">Commercial real estate</option>
          <option value="Property development">Property development</option>
        </optgroup>
        <optgroup label="Entertainment and Media">
          <option value="Film and television">Film and television</option>
          <option value="Music and performing arts">Music and performing arts</option>
          <option value="Publishing and journalism">Publishing and journalism</option>
        </optgroup>
        <optgroup label="Government and Public Services">
          <option value="Public administration">Public administration</option>
          <option value="Defense and security">Defense and security</option>
          <option value="Public transportation">Public transportation</option>
        </optgroup>
        <optgroup label="Agriculture and Forestry">
          <option value="Crop farming">Crop farming</option>
          <option value="Livestock farming">Livestock farming</option>
          <option value="Forestry and logging">Forestry and logging</option>
        </optgroup>
        {/* <option aria-label="None" value="" /> */}
  {/* other options... */}
  {/* <optgroup label="Others"> */}
    <option value="Others" style={{ fontWeight: 'bold' }}>Others</option>
  {/* </optgroup> */}
        </Select>
      </FormControl>
             
          </div>
          {/* <div class="input-box">
                  <span class="details">Additional Notes</span>
                  <input type="text" placeholder="Add additional notes here..." />
              </div> */}
              <div className="input-box">
  <span className="details">Brief introduction of your Project Requirements</span>
  <br/>
  <input
    type="text"
    style={{width:'500px',height:'90px',borderColor:'#9b59b6',transition: 'all 0.3s ease',border:'1px solid #ccc',outline:'none',borderRadius:'5px',paddingLeft:'15px',fontSize:'16px',borderBottomWidth:'2px'}}
    placeholder="Enter here..."
    value={additionalNotes}
    onChange={(e) => setAdditionalNotes(e.target.value)}
    name='additional_notes'
  />
</div>
          <div className="button" style={{marginLeft:'450px'}}>
          <Button variant="contained" color="primary" onClick={handleSubmit} type="submit"disabled={!isPage1Valid}>
Submit
</Button>
  
             </div>
        {/* </form> */}
        </div>
        
    {/* </div> */}
    <div className="copyright-text" style={{textAlign:'center'}}>
    © 2024 Loyal IT Solutions PVT LTD
  </div>
    </>
    );
    
  
  };
  

const [isNextButtonEnabled,setIsNextButtonEnabled]=useState(true);
const [requiredFields, setRequiredFields] = useState({
  companyName: '',
  contactPerson:'',
  email:'',
  mobileNo:'',
  designation:''
  // Add other required fields here
});
const handleImplementationChange=(value)=>{
  setIsNextButtonEnabled(value === 'no');
};

const handleRequiredFieldsChange = (isRequiredFieldsFilled) => {
  // Check if all required fields are filled
  const allRequiredFieldsFilled = areRequiredFieldsFilled(); // Assuming this function checks all required fields

  // Update state to enable/disable the Next button
  setIsNextButtonEnabled(allRequiredFieldsFilled && isRequiredFieldsFilled);
};
const areRequiredFieldsFilled = () => {
  for (const key in requiredFields) {
    if (requiredFields[key] === '') {
      return false;
    }
  }
  return true;
};

//   const renderPage2 = () => {
//     return (
//       <>
//       <Implementation // Render the ImplementationComponent from implementation.js
//         implementationType={implementationType}
//         setImplementationType={setImplementationType}
//         showAdditionalForm={showAdditionalForm}
//         setShowAdditionalForm={setShowAdditionalForm}
//         country={country}
//         setCountry={setCountry}
//         onImplementationChange={handleImplementationChange}
//         onRequiredFieldsChange={handleRequiredFieldsChange}
//         setIsNextButtonEnabled={setIsNextButtonEnabled}

//         // Pass any other props or state variables needed by ImplementationComponent
//       />
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//       <Button variant="contained" color="primary" onClick={handlePreviousPage} style={{marginBottom:'300px'}}>
//         Back
//       </Button>
//       {currentPage === 2 && (
//         <Button variant="contained" color="primary" onClick={handleNextToClientInfo} disabled={!isNextButtonEnabled} style={{marginBottom:'300px'}}>
//           Next
//         </Button>
//       )} 
//     </div>
//     </>
//     );
//   };

//   const renderPage3 = () => {
//     return (
//       <>
//         {showQuestions && (
//         <QuestionTableForm
//           questions={questions}
//           handleRadioChange={handleRadioChange}
//           // handleSubquestionRadioChange={handleSubquestionRadioChange}
//           handleSupportNeededChange={handleSupportNeededChange}
//           handleRemarksChange={handleRemarksChange}
//           handleQuestionsUpdate={setQuestions} // Pass the setQuestions function

//         />
//       )}
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Button variant="contained" color="primary" onClick={handlePreviousPage}>
//           Back
//         </Button>
//         {currentPage === 3 && (
//           <Button variant="contained" color="primary" onClick={handleNextToClientInfo}>
//             Next
//           </Button>
//         )}
//       </div>
//       </>
//     );
//         };
  
//   const renderPage4=()=>{
//     const isPage3Valid = clientRepresentative && clientRepresentativeDesignation && decisionMaker && contactDetails;

//     return (
//         <>     
//         <TableCell>
//               <TextField label="Client Representative Name" variant="filled" color="success" focused  style={{width:'300px'}} required value={clientRepresentative} onChange={(e)=>setClientRepresentative(e.target.value)}/>
      
//            <br/><br />
//               <TextField label="Client Representative Designation" variant="filled" color="success" focused style={{width:'300px'}} required value={clientRepresentativeDesignation} onChange={(e)=>setClientRepresentativeDesignation(e.target.value)}/>
//            <br/>
//            </TableCell>

//            <TableCell>
//               {/* <TextField label="Type of Decision Maker" variant="filled" color="success" focused style={{width:'300px'}}/> */}
//               <TextField
//             label="Type of Decision Maker"
//             variant="filled"
//             color="success"
//             focused
//             style={{ width: '300px' }}
//             select
//             // value={decisionMakerType}
//             // onChange={handleDecisionMakerTypeChange}
//             value={decisionMaker}
//             onChange={(e)=>setDecisionMaker(e.target.value)}
//             required
//           >
//             <MenuItem value="Option1">Primary Contact</MenuItem>
//             <MenuItem value="Option2">Influencer</MenuItem>
//             <MenuItem value="Option3">Decision Maker</MenuItem>
//             {/* Add more options as needed */}
//           </TextField>
//         <br/><br/>
            
//               <TextField label="Contact Details" variant="filled" color="success" focused style={{width:'300px'}} required value={contactDetails} onChange={(e)=>setContactDetails(e.target.value)}/>
//             </TableCell>
            
//             {currentPage > 1 && currentPage < 5 && (
//           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <Button variant="contained" color="primary" onClick={handlePreviousPage}>
//               Back
//             </Button>
//             <Button variant="contained" color="primary" onClick={handleNextPage} disabled={!isPage3Valid}>
//               Next
//             </Button>
//           </div>
//         )}
//         </>
//     );
//   };

//   const renderPage5=()=>{
//     const isPage4Valid = contactedBy && contactedDate && repliedDate && nextMeeting;

//     return(
//         <>
//         <TableCell>
//               <TextField label="Contacted By" variant="filled" color="success" focused  style={{width:'300px'}} required  value={contactedBy} onChange={(e)=>setContactedBy(e.target.value)}/>
      
//            <br/><br />
//            <TextField
//           label="Replied Date"
//           variant="filled"
//           color="primary"
//           focused style={{ width: '100%' }}
//           type="date"
//           InputLabelProps={{ shrink: true }}
//           required value={repliedDate} onChange={(e)=>setRepliedDate(e.target.value)}
//         />
//               {/* <TextField label="Replied Date" variant="filled" color="success" focused style={{width:'300px'}} required value={repliedDate} onChange={(e)=>setRepliedDate(e.target.value)}/> */}
//            <br/>
//            </TableCell>

//            <TableCell>
//            <TextField
//           label="Contacted Date"
//           variant="filled"
//           color="primary"
//           focused style={{ width: '180%' }}
//           type="date"
//           InputLabelProps={{ shrink: true }}
//           required value={contactedDate} onChange={(e)=>setContactedDate(e.target.value)}
//         />
//               {/* <TextField label="Contacted Date" variant="filled" color="success" focused style={{width:'300px'}} required value={contactedDate} onChange={(e)=>setContactedDate(e.target.value)}/> */}
//         <br/><br/>
//         <TextField
//           label="Next Meeting Date"
//           variant="filled"
//           color="primary"
//           focused style={{ width: '180%' }}
//           type="date"
//           InputLabelProps={{ shrink: true }}
//           required value={nextMeeting} onChange={(e)=>setNextMeeting(e.target.value)}
// />
//               {/* <TextField label="Next Meeting Date" variant="filled" color="success" focused style={{width:'300px'}} required value={nextMeeting} onChange={(e)=>setNextMeeting(e.target.value)}/> */}
//             </TableCell>
//             <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
//         <Button variant="contained" color="primary" onClick={handlePreviousPage}>
//           Back
//         </Button>
//         {/* <Button variant="contained" color="primary" onClick={handleSubmit}> */}
//         <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!isPage4Valid}>

//           Submit
//         </Button>
//       </div>

//             </>
//     )
//   }

return (
  <div style={{marginTop:'60px',width:'1000px',marginLeft:'100px'}}>
        <style>{`
    body {
      // background-color: #7986cb; 
      /* Set your desired background color */
      margin: 0; /* Remove default body margin */
      padding: 0; /* Remove default body padding */
    }
   

  `}</style>
    {/* <TableContainer component={Paper} style={{ margin: 'auto', width: '70%', marginTop: '50px'}}> */}
    <TableContainer style={{ margin: 'auto', width: '70%', marginTop: '50px'}}>

      <Typography variant="h5" style={{ marginLeft: '390px' }}>
      {getPageHeading()}
      </Typography>
      {/* <form style={{ marginTop: '50px' }}> */}
      <form>
        <Table style={{ width: '70%', margin: 'auto'}}>
          <TableBody>
            <TableRow>
              <TableCell>
                {currentPage === 1 && renderPage1()}
                {/* {currentPage === 2 && renderPage2()}
                {currentPage === 3 && renderPage3()}
                {currentPage === 4 && renderPage4()}
                {currentPage === 5 && renderPage5()} */}
              </TableCell>
              
            </TableRow>
          </TableBody>
          
        </Table>
      
      </form>
     
    </TableContainer>
    
    <Dialog open={openModal} onClose={handleCloseModal}>
      <DialogTitle style={{fontFamily:'cursive'}}>Thank You!</DialogTitle>
      <DialogContent>
        <Typography>
          Your form has been submitted successfully.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} variant='contained' color='secondary' style={{marginRight:'140px'}}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);
};
export default LeadInformationForm;
