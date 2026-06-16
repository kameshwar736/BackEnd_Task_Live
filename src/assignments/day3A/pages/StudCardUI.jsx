import React from 'react'

const StudCardUI = () => {

    const schools = [

  {
    id: 1,
    schoolName: "ABC Matric Higher Secondary School",
    city: "Chennai",

    principal: {
      name: "Ramesh Kumar",
      experience: 15
    },

    courses: [
      "LKG",
      "UKG",
      "Primary",
      "High School",
      "Higher Secondary"
    ],

    sports: [
      "Cricket",
      "Football",
      "Basketball"
    ],

    students: 2500,
    teachers: 120
  },

  {
    id: 2,
    schoolName: "Green Valley Public School",
    city: "Coimbatore",

    principal: {
      name: "Priya Sharma",
      experience: 12
    },

    courses: [
      "LKG",
      "UKG",
      "Primary",
      "Middle School"
    ],

    sports: [
      "Kabaddi",
      "Volleyball",
      "Athletics"
    ],

    students: 1800,
    teachers: 85
  },

  {
    id: 3,
    schoolName: "Sunrise International School",
    city: "Madurai",

    principal: {
      name: "Arun Prakash",
      experience: 18
    },

    courses: [
      "Primary",
      "Middle School",
      "High School",
      "Higher Secondary"
    ],

    sports: [
      "Cricket",
      "Tennis",
      "Swimming"
    ],

    students: 3200,
    teachers: 150
  },

  {
    id: 4,
    schoolName: "Oxford Higher Secondary School",
    city: "Salem",

    principal: {
      name: "Meena Lakshmi",
      experience: 14
    },

    courses: [
      "Primary",
      "High School",
      "Higher Secondary"
    ],

    sports: [
      "Football",
      "Basketball"
    ],

    students: 2100,
    teachers: 95
  },

  {
    id: 5,
    schoolName: "Future Star Academy",
    city: "Trichy",

    principal: {
      name: "Vignesh Kumar",
      experience: 10
    },

    courses: [
      "LKG",
      "UKG",
      "Primary",
      "Middle School",
      "High School"
    ],

    sports: [
      "Athletics",
      "Cricket",
      "Kho Kho"
    ],

    students: 2800,
    teachers: 130
  },

  {
    id: 6,
    schoolName: "Royal International School",
    city: "Erode",

    principal: {
      name: "Sathya Narayanan",
      experience: 20
    },

    courses: [
      "Primary",
      "Middle School",
      "High School",
      "Higher Secondary"
    ],

    sports: [
      "Tennis",
      "Swimming",
      "Football"
    ],

    students: 3500,
    teachers: 175
  }

];

  return (
    <>
        <div className='flex flex-col justify-center items-center gap-10'>
            <h1 className='text-2xl mt-4'>School detail</h1>

            <div className='flex flex-col justify-center items-center gap-5 '>
                {schools.map((e,i)=>(
                    <div className='flex flex-col gap-2 bg-gray-300 p-4 border rounded w-100'>
                        <div>
                            <h1>School Name : {e.schoolName}</h1>
                            <p>City : {e.city}</p>
                        </div>
                        <div>
                            <p>Pricipal : {e.principal.name}</p>
                            <p>Student Count : {e.students}</p>
                            <p>teachers Count :{e.teachers}</p>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default StudCardUI