import React from 'react';
import { Link } from 'react-router-dom';

function Buttons({content,data,dataButton}) {
  return (
    <div className='divButton'>
      <Link to="/chat" ><button>{content}</button></Link>
      <Link to="/data" ><button>{data}</button></Link>

      
      
    </div>
  );
}

export default Buttons;