import React from 'react'

const Management = () => {
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
      <div className='bg-blue-100 p-3 h-screen flex flex-col justify-center items-center'>
        <div>
          <h1 className='text-3xl font-bold p-3'>School Management</h1>
        </div>
        <div className='flex gap-10 p-10'>
          <div className='border-2 rounded-sm p-8 font-black bg-amber-100'>Total Student : {schools.reduce((e, i) => (e + i.students), 0)}</div>
          <div className='border-2 rounded-sm p-8 font-black bg-amber-100'>Total school : {schools.reduce((acc, curvalue, curind) => (acc + curind), 0)}</div>
          <div className='border-2 rounded-sm p-8 font-black bg-amber-100'>Total teacher : {schools.reduce((e, i) => (e + i.teachers), 0)} </div>
        </div>
        <div>
            <div className='flex flex-wrap justify-center items-center gap-5 '>
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
      </div>

    </>
  )
}

export default Management