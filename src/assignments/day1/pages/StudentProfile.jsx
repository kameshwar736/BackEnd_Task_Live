import React from 'react'

const StudentProfile = () => {


    const stuDetail = {name : "Kameshwar" , course : "MERN" , city : "Chennai" , institute : "SLA Institute"}


    return (
        <>
            <div>
                <h1>STudent Detail</h1>
                <p>Student Name : {stuDetail.name}</p>
                <p>Course : {stuDetail.course}</p>
                <p>city : {stuDetail.city}</p>
                <p>Institute : {stuDetail.institute}</p>
            </div>

        </>
    )
}

export default StudentProfile