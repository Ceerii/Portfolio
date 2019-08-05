import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import { MdArrowDownward } from "react-icons/md";


 

class Home extends React.Component{
  constructor(){
    super();
    this.state = {
      scrolled: false
    };
  }
 componentDidMount(){
   window.addEventListener('scroll', () => {
     const isTop = window.scrollY < 200;
     if(isTop !== true){
         this.setState({scrolled: true});
     }else{
      this.setState({scrolled: false});
     }
   });
 
}
componentWillUnmount(){
  window.removeEventListener('scroll');
}
  render(){


    return (
       <div className="container">
       <div className="brackets-container"><div className={this.state.scrolled ? 'first-container' : ' scrolled'}><p className="container-name">Welcome!</p></div>
         <div className="brackets">
          <p >Chiamaka Nkem-Eze</p>
         </div>
         </div>
       <div className="second-container">
       <div className="bigtext">
       <p className="mainbigtext">JUNIOR FRONT-END WEB DEVELOPER</p>
       </div>
       <div className="third-container">
          <p >Projects  </p>
          <MdArrowDownward className="check-below"/>
         </div>
       </div>
      
       <div className="fourth-container">
         <div className="fourth-container-image">
         
         <p>WASHLY APP</p>
         <div className="content">
         <p>WASHLY APP</p>
         </div>
         </div>
         <div className="fourth-container-image">
         <div></div>
         <p>MEAL PLANNER APP</p>
         <div className="content">
         <p>WASHLY APP</p>
         </div>
         </div>
         <div className="fourth-container-image">
         <div></div>
         <p>YAMI MOVIE RENTAL</p>
         <div className="content">
         <p>WASHLY APP</p>
         </div>
         </div>
         <div className="fourth-container-image">
         
         <p>CURRENCY CONVERTER</p>
         <div className="content">
         <p>WASHLY APP</p>
         </div>
         </div>
       </div>
       <div className="social-icon-container"> 
         <ul>
         <li><FaGithub title="Github" className="social-icon one"/></li>
         <li><FaLinkedinIn title="LinkedIn" className="social-icon two"/></li>
         <li><FaFileAlt title="CV" className="social-icon three"/></li>
         <li><IoMdMail title="GMAIL" className="social-icon four"/></li>
       </ul>
       </div>
       </div>
    );
  };
};


export default Home;