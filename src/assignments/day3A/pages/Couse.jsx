import React from 'react'

const Couse = () => {

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
    <div className='bg-blue-200 h-screen flex flex-col justify-center items-center p-5' >
      <div className='text-3xl font-bold p-3'>Course Offered</div>
      <div className='flex gap-10 flex-wrap justify-center items-center'>
        {schools.map((e,i)=>(
          <div   className='flex flex-col gap-2 bg-gray-300 p-4 border rounded w-100'>
            <div>School : {e.schoolName}</div>
            <div>
              <p>Course Offers</p>
              <ul>
                {e.courses.map((v,n)=>(
                  <li>{v}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Couse