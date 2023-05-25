import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import Aos from 'aos';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Hero from './Component/UI/Hero';
import Services from './Component/UI/Services';
import Portfolio from './Component/UI/Portfolio';
import HireMe from './Component/UI/HireMe';


function App() {

  useEffect(()=>{
    Aos.init();
  }, []);


  return (

    <>
          <Header/>
          <main>
            <Hero/>
            <Services/>
            <Portfolio/>
            <HireMe/>

                  


          </main>

 

          <Footer/>
    </>

  );
}

export default App;
