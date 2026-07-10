

// Create a useLocalStorage() custom hook to save and retrieve Student Name from Local Storage.
// Refreshing the page should preserve the data.

const useLocalStorage = (keyValue) => {
 
  

    const saveUserFunc = (newUser)=>{
        console.log(newUser);
       const checkKey = JSON.parse(localStorage.getItem(keyValue)) || []
       checkKey.push(newUser)
       localStorage.setItem(keyValue,JSON.stringify(checkKey))
    }

    return {saveUserFunc}

}



export default useLocalStorage