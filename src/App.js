import { useEffect, useState } from 'react';
import './App.css';
import Barchart from './components/Barchart';
import Linechart from './components/LineChart';
import Piechart from './components/PieChart';
import { UserData } from './data/Data'

function App() {

  const [userData, setUserData]=useState({
    labels:UserData.map((data) => {
      return data.year
    }),

    datasets:[{
      label:"Users Gained",
      data:UserData.map((data) => {
        return data.userGain
      }),
      backgroundColor:['#6065AD', '#0E6EE7', '#AB5498'],
      borderWidth:2,
      borderColor:"black"
    }]
  });

useEffect(() => {
  return userData;

},[UserData]);

  return (
    <div style={{
      display:'flex'
    }}>
      <div style={{
        width:500
      }}> 
         <Barchart chartData = {userData} />
      </div>

      <div style={{
        width:300
      }}> 
         <Piechart chartData = {userData} />
      </div>

      <div style={{
        width:500
      }}> 
         <Linechart chartData = {userData} />
      </div>
    </div>
  );
}

export default App;
