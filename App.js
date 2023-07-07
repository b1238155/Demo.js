import React from 'react';
import './App.css';  


 import  {Routes,Route} from 'react-router-dom';

// import Sidebar from './components/Sidebar';

import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import MyForm from './components/MyForm';
import Board from './components/Board';
import Clock from './components/Clock';
import Demo from './components/Demo';

function App() {
   
    return (
           
        <div>

              
    {/* <Sidebar> */}
      
                <Routes>
            <Route path='/' element={<LoginPage/>}/>
             <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/myform' element={<MyForm/>}/> 
            <Route path='/board' element={<Board/>}/>
            <Route path='/clock' element={<Clock/>}/>
             <Route path='/demo' element={<Demo/>}/>
              
           </Routes>
           
    {/* </Sidebar>         */}
        
           </div> 
    
    
    );
    };

    export default App;
