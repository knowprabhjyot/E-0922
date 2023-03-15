import React, { useState } from 'react'
import { setValueInLocalStorage } from '../utils/localstorage';
import './ControlledForm.css';


export default function ControlledForm() {
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentCollege, setStudentCollege] = useState("");
  const [studentRollNumber, setStudentRollNumber] = useState(0);
  // const [finalStudentRecord, setFinalStudentRecord] = useState([]);

  // const [collegeArray, setCollegeArray] = 
  const collegeArray = [
    {
      name: "Cornerstone College",
      abbr: "CICCC"
    },
    {
      name: "Vancouver Community College",
      abbr: "VCC"
    },
    {
      name: "Simon Fraser University",
      abbr: "SFU"
    },
    {
      name: "University of British columbia",
      abbr: "UBC"
    }
  ]

  const changeStudentName = (event) => {
    setStudentName(event.target.value);
  }

  const submitForm = (event) => {
    event.preventDefault();
    // console.log()
    let studentObject = {
      name: studentName,
      email: studentEmail,
      college: studentCollege,
      rollNumber: studentRollNumber
    };
    setValueInLocalStorage('students', studentObject);
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="studentName">Name</label>
        <input type="text" onChange={changeStudentName} required value={studentName} placeholder="Enter Student Name" />

        <label htmlFor="studentEmail">Email</label>
        <input type="email" onChange={(event) => setStudentEmail(event.target.value)} required value={studentEmail} placeholder="Enter Student Email" />

        <label htmlFor="studentEmail">College</label>
        <select value={studentCollege} onChange={(event) => setStudentCollege(event.target.value)}>
          {
            collegeArray.map((college, index) => {
              return <option key={index} value={college.abbr}>{college.name}</option>
            })
          }
        </select>

        <label htmlFor="studentRollNumber">Roll Number</label>
        <input type="number" onChange={(event) => setStudentRollNumber(event.target.value)} required value={studentRollNumber} placeholder="Enter Student Roll Number" />

        <button>Submit</button>
      </form>
    </div>
  )
}
