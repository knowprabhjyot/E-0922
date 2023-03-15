import React, { useRef } from 'react'

export default function UncontrolledForm() {

    // Use Ref is another hook which is used to access the DOM directly
    const studentNameInput = useRef(null);
    const studentEmailInput = useRef(null);
    const studentCollegeSelect = useRef(null);
    const studentRollNumberInput = useRef(null);


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

    const submitForm = (event) => {
        event.preventDefault();
        let studentObject = {
            name: studentNameInput.current.value,
            email: studentEmailInput.current.value,
            college: studentCollegeSelect.current.value,
            rollNumber: studentRollNumberInput.current.value
          };

        console.log(studentObject);
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="studentName">Name</label>
            <input ref={studentNameInput} type="text" required placeholder="Enter Student Name" />

            <label htmlFor="studentEmail">Email</label>
            <input ref={studentEmailInput} type="email" required placeholder="Enter Student Email" />

            <label htmlFor="studentEmail">College</label>
            <select ref={studentCollegeSelect}>
                {
                    collegeArray.map((college, index) => {
                        return <option key={index} value={college.abbr}>{college.name}</option>
                    })
                }
            </select>

            <label htmlFor="studentRollNumber">Roll Number</label>
            <input ref={studentRollNumberInput} type="number" placeholder="Enter Student Roll Number" />

            <button>Submit</button>
        </form>
    )
}
