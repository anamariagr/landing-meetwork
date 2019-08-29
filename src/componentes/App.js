import React, { Component } from  'react';
import Header from './Header';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionTree from './SectionTree';
import SectionFour from './sectionFour';
import SectionFive from './SectionFive'; 
import SectionSeven from './SectionSeven'; 
import SectionEight from './SectionEight'; 
import SectionNine from './SectionNine';


class App extends Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
              <div className="col-md-12 background-hero">
                <Header/>
              </div>
              <div className="col-md-12 section-two " id="downdload"> 
                <SectionOne/>
              </div>
              <div className="col-md-12 backgroundTwo" id="comuniti"> 
                <SectionTwo/>
              </div>
              <div className="col-md-12 background-sectionThree"> 
                <SectionTree/>
              </div>
              <div className="col-md-12 background-section-four">  
                <SectionFour/>
              </div>
              <div className="col-md-12 background-section-five ">  
                <SectionFive/>
              </div>
              <div className="col-md-12 background-section-six" id="prices">  
               <SectionSeven/>
              </div>
              <div className="col-md-12 backgroundEight">  
               <SectionEight/>
              </div>
              <div className="col-md-12 sectionNinebackground">  
              <SectionNine/>
              
              </div>
              <div className=" col-md-12 fotter">
              
              </div>
              
        </div>
          
      </div>
     
      
    );
  }
}

export default App;
