import React, { useState } from 'react'

const StudentForm = () => {

    const [studentInput, setStudentInput] = useState({ studentName: "", studentAge: "", studentCourse: "", studentCity: "" })
    const [studentDetails, setStudentDetails] = useState([])

    const handleStudentFomm = (e) => {
        setStudentInput({ ...studentInput, [e.target.name]: e.target.value })
        console.log(studentInput);
    }

    const handleStudentSubmit = (e) => {
        e.preventDefault()
        setStudentDetails((prev) => [...prev, studentInput])
        alert("Your Form Successfully Register")
        setStudentInput({ studentName: "", studentAge: "", studentCourse: "", studentCity: "" })
    }

    return (
        <>
            <div className='bg-red-100  flex flex-col p-10 justify-center items-center gap-10'>
                <div className='font-normal text-2xl'>
                    <div>Student Register Form</div>
                </div>
                <form onSubmit={handleStudentSubmit}>
                    <div className='flex flex-col gap-4 text-lg'>
                        <input className='w-60 text-center p-2 bg-white border rounded' type="text" placeholder='Enter The Student Name' name='studentName' onChange={handleStudentFomm} value={studentInput.studentName} />
                        <input className='w-60 text-center p-2 bg-white border rounded' type="number" placeholder='Enter the Student Age' name='studentAge' onChange={handleStudentFomm} value={studentInput.studentAge} />
                        <input className='w-60 text-center p-2 bg-white border rounded' type="text" placeholder='Enter the couse' name='studentCourse' onChange={handleStudentFomm} value={studentInput.studentCourse} />
                        <input className='w-60 text-center p-2 bg-white border rounded' type="text" placeholder='Enter the city' name='studentCity' onChange={handleStudentFomm} value={studentInput.studentCity} />
                        <input className='bg-amber-400 p-2 rounded-2xl' type="submit" value={"Register"} />
                    </div>
                </form>
            </div>
            <div>
                <div className='flex flex-col gap-4 justify-center items-center p-10'>
                    <div className='text-2xl'>Student Details</div>
                    <table className='table border-collapse border border-black w-200 text-center'>
                        <thead>
                            <tr>
                                <th className="border border-black p-3">Stud-Id</th>
                                <th className="border border-black p-3">Stud-Name</th>
                                <th className="border border-black p-3">Stud-Age</th>
                                <th className="border border-black p-3">Stud-Course</th>
                                <th className="border border-black p-3">Stud-City</th>
                            </tr>
                        </thead>
                         <tbody>
                            {studentDetails.map((e,i)=>(
                                <tr key={i+1}  className="border border-black">
                                    <td className="border border-black p-3">{i + 1}</td>
                                    <td className="border border-black p-3">{e.studentName}</td>
                                    <td className="border border-black p-3">{e.studentAge}</td>
                                    <td className="border border-black p-3">{e.studentCourse}</td>
                                    <td className="border border-black p-3">{e.studentCity}</td>
                                </tr>
                            ))}
                         </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default StudentForm