import React from 'react'
import layoutTaskOne from '../layoutT1/LayoutTaskOne';

const TaskOne = () => {

  //task 1

  const employees = [{ name: "Ravi", salary: 25000 },
  { name: "Priya", salary: 45000 },
  { name: "Arun", salary: 55000 },
  { name: "Kumar", salary: 35000 }];


  // sorting

  for (let i = 0; i <= employees.length - 1; i++) {
    for (let j = 0; j < employees.length - 1; j++) {
      if (employees[j].salary > employees[j + 1].salary) {
        let temp = employees[j];
        employees[j] = employees[j + 1];
        employees[j + 1] = temp;
      }
    }
  }

  console.log(` task : 1 => Second largest salary person was ${employees[employees.length - 2].name} and Salary : ${employees[employees.length - 2].salary}`);

  // task 2


  const givenString = "javascript"


  let LargestCount = 0;
  let newChar = ""

  for (let i = 0; i <= givenString.length - 1; i++) {
    let count = 0
    let char = ""
    for (let j = 0; j < givenString.length - 1; j++) {

      if (givenString[i] == givenString[j]) {
        count++
        char = givenString[i]
      }
    }
    if (count > LargestCount) {
      LargestCount = count
      newChar = char
    }

  }


  console.log(`Task 2 : Repeated char in String was : ${newChar}`);

  // TAsk 3 Count Course

  const students = [{ name: "Ravi", course: "MERN" },
  { name: "Priya", course: "Java" },
  { name: "Arun", course: "MERN" },
  { name: "Kumar", course: "Python" },
  { name: "John", course: "MERN" }];

  const uniqCourse = []


  for (let i = 0; i <= students.length - 1; i++) {
    let isRepeated = false;
    for (let j = 0; j <= uniqCourse.length - 1; j++) {
      if (uniqCourse[j] == students[i].course) {
        isRepeated = true;
        break;
      }
    }
    if (!isRepeated) {
      uniqCourse.push(students[i].course)
    }
  }

  // create an obj 

  let courseObj = {}

  for (let i = 0; i <= uniqCourse.length - 1; i++) {
    courseObj[uniqCourse[i]] = 0
  }


  for (let i = 0; i <= uniqCourse.length - 1; i++) {
    for (let j = 0; j <= students.length - 1; j++) {
      if (uniqCourse[i] == students[j].course) {
        courseObj[uniqCourse[i]] += 1
      }
    }
  }

  console.log("Task 3", courseObj);



  // task4

  const numbers = [1, 2, 3, 4, 6, 7, 8];

  let missedNumber = null;

  for (let i = 1; i <= numbers.length + 1; i++) {

    let found = false;

    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] === i) {
        found = true;
        break;
      }
    }

    if (!found) {
      missedNumber = i;
      break;
    }
  }

  console.log(missedNumber);


  // task 5


  const originalArray = [10,20,30,20,40,30,50]; 

  const copyArray = []

  const duplicateArray = []

  for(let i=0 ; i<=originalArray.length-1 ; i++){

     let isDuplicate = false;

    for(let j =0 ; j<=copyArray.length-1;j++){
      if(originalArray[i] == copyArray[j]){
        isDuplicate = true;
        break
      }

    }

    if(!isDuplicate){
      copyArray.push(originalArray[i])
    }else{
      duplicateArray.push(originalArray[i])
    }




  }

  console.log(duplicateArray);
  



  









  return (
    <>
      <div className='p-10'>

        <p> task 1 : Task Create a function to find: Second Highest Salary Employee Expected Output: Priya - 45000</p>
        <br />
        <p>Task 2: Most Repeated Character const word = "javascript"; Task Create a function to find: Most repeated character Expected Output: a
        </p>
        <br />
        <p>
          Task 3: Count Courses
        </p>

        <br />
        <p>Task 4: Missing Number const numbers = [1,2,3,4,6,7,8]; Task Find missing number. Expected Output: 5</p>

        <br />

        <p>Task 5: Duplicate Values const numbers = [10,20,30,20,40,30,50]; Task Return only duplicate values. Expected Output: [20,30]</p>

        <br />

        <h1>Output on Console</h1>

        <br />

        <a className='bg-black text-white p-2 rounded-xl' href="https://github.com/kameshwar736/BackEnd_Task_Live/blob/main/src/task/t1/pagesT1/TaskOne.jsx" target="_blank" rel='noopener noreferrer'>View code on git Hub</a>


      </div>
    </>
  )
}

export default TaskOne