import React, { useState } from "react";


function FormForUser(props) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });
  console.log(userData);


// form validTION
const [FirstNameError, setFirstNameError] = useState("")
  const [LastNameError, setLastNameError] = useState("")
  const [AgeError, setAgeError] = useState("")
  
const firstNameValidation=()=>{
  if(userData.firstName){
    let regex= /^[A-Za-z]+$/
    if (regex.test(userData.firstName)){
      setFirstNameError("")
           return true
  
          } else {
            setFirstNameError("Invalid FirstName")
          }
  }else{
    setFirstNameError("userName is required")

  }
}

const lastNameValidation=()=>{
  if(userData.lastName){
    let regex= /^[A-Za-z]+$/
    if (regex.test(userData.firstName)){
      setLastNameError("")
           return true
  
          } else {
            setLastNameError("Invalid LastName")
          }
  }else{
    setLastNameError("Lastname is required")

  }

}

const ageValidation=()=>{
  if(userData.age){
    if(userData.age >0 && userData.age<100){
      setAgeError("")
      return true
    }else{
      setAgeError("Invalid Age")
    }
  }else{
    setAgeError("Age is required")

  }
   
}

let saveData =()=> {
  firstNameValidation()
  lastNameValidation()
  ageValidation()


  if(firstNameValidation() && lastNameValidation() && ageValidation() ){
    props.getDataFromChild(userData);
    setUserData({
    firstName: "",
    lastName: "",
    age:"",
  });
  }
};


  // taking data from user and storing it inside the state of this component by using set method
  let updateUserData = (event) => {
      console.log("event",event);
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
      
    });
  };

  // sending data to parent by accepting function through props
//   let sendDataToParent = () => {
//     props.getDataFromChild(userData);
// // clear the form
//     setUserData({
//       firstName: "",
//       lastName: "",
//       age: "",
//     });
//   };


// let stringify=JSON.stringify(userData)
//   console.log(stringify);
  
//   let person1=JSON.parse(stringify)
//   console.log(person1);
  
//   localStorage.setItem("name",userData.firstName)
//   let getName=localStorage.getItem("name")
//   console.log("name")

  // stopping refressing
  let dontRefresh = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="col-3 offset-4 justify-content-center">
        <form name="userForm" onSubmit={dontRefresh}>
          <h1 className="mt-5 text-center">Login Form</h1>
          <div className="mb-3 mt-5">
            <input
              name="firstName"
              value={userData.firstName}
              onChange={(event) => {
                updateUserData(event);
              }}
              placeholder="Enter First Name"
              type="text"
              className="form-control"
            />
             {FirstNameError && <div className="errorMsg text-danger">{FirstNameError} </div>}
          </div>
          <div className="mb-3">
            <input
              name="lastName"
              value={userData.lastName}
              onChange={(event) => {
                updateUserData(event);
              }}
              placeholder="Eneter Last Name"
              type="text"
              className="form-control"
            />
            {LastNameError && <div className="errorMsg text-danger">{LastNameError}</div>}
          </div>
          <div className="mb-3 ">
            <input
              name="age"
              value={userData.age}
              onChange={(event) => {
                updateUserData(event);
              }}
              placeholder="Eneter Age"
              type="text"
              className="form-control"
            />
            {AgeError && <div className="errorMsg text-danger" >{AgeError}</div>}
          </div>
          <div className="d-grid">
            <button
              // onClick={sendDataToParent}
              id="btn"
              type="submit"
              className="btn btn-primary"
              onClick={saveData}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormForUser;
