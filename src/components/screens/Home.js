import React from 'react'
import '../Chat_app.css'
import Buttons from './Buttons'





function Home() {
  return (
    <div className='container'>
        <h1>Welcome to Chat App</h1>
        <div className="image">
            <img
            src="https://img.freepik.com/premium-vector/people-different-occupations-flat-vector-set_580420-1002.jpg" // Replace "image.jpg" with the actual path to your image file
            alt="Your Image Alt Text"
          />
        </div>
       
        <Buttons
        content="Enter to the chat"
        data='Enter to data'
        />
        
       
        
    </div>
  )
}

export default Home