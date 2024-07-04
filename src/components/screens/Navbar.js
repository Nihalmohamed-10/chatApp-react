import React from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
       <Link to="/"><MdArrowBackIos/></Link> 
        
    </div>
  )
}

export default Navbar