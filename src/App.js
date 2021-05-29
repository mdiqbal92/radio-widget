import React,{useState,useEffect} from 'react';
import './App.css';
import Stations from './Components/Stations/Stations';

function App() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">

     <div className="station__card">
     {
       data && data.length>0 && data.map((item)=><Stations key={item.id} item={item}></Stations>)
     }
     </div>
    </div>
  );
}

export default App;