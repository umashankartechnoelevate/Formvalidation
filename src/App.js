import logo from './logo.svg';
import './App.css';
import FormForUser from './components/FormForUser';
import DisplayUserData from './components/DisplayUserData';
import { useState, useEffect } from 'react';
// import FormForUser from './components/FormForUser';




function getData(){

  const storeData= localStorage.getItem(`form`)
  if(!storeData){
      return { firstName: "",
      lastName: "",
      Age:"", }
  }else{
      return JSON.parse(storeData)
  }
}
function App() {

  const [dataFromChild, setDataFromChild] = useState(getData())

  // getting data from child by passing a function 
  let getDataFromChild=(userData)=>{
    console.log("data received from child to parent ",userData)


    // creating a copy to upadate dont update directely take a copy then push the element inside the state by using copied element
    let dataFromChildcopy=[...dataFromChild]

    dataFromChildcopy.push(userData)

    // now updating that data by set method
    setDataFromChild(
      dataFromChildcopy
    )

  }

  useEffect(() => {
    localStorage.setItem("form",JSON.stringify(dataFromChild))
  
  }, [dataFromChild])


  
  return (
    <div className="App">
     
    <FormForUser getDataFromChild={getDataFromChild} />  {/* passing function as a props to get data from child */}
     <DisplayUserData dataFromChild={dataFromChild} /> 
    </div>
  );
}

export default App;