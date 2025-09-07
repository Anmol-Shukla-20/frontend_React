import React from 'react'

const EventHandling = () => {
  
    // navigator.geolocation.getCurrentPosition((position) => {
    //     console.log(position.coords.latitude,position.coords.longitude);
    // });
    
  return (
    <div className = 'h-screen' onMouseMove = {(e) => {
      console.log(e.clientX,e.clientY);
      const cursor = document.getElementById('cursor');
      cursor.style.left  = e.clientX-10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
        
    }}>

      <img
          id = 'cursor' 
          className = 'w-20 absolute'
          src = "/plankton.png" alt = "Cursor"
      />
        <div className = 'container mx-auto p-4'>
            <h2 className = 'text-cemter mt-5 font-bold text-3xl'>Event Handling</h2>
            <button 
            onClick ={() => {alert('Button was Clicked')}} 
            className = 'block bg-blue-500 text-white mt-5 p-3 rounded-md'>Click Event</button>

            <input
                type = "text"
                className = 'border rounded px-4 py-2 w-full mt-5'
                /* onchange = {() =>{ console.log('input changed')}} */
                onChange={(e) => {console.log(e.target.value)}}
            />
            {/* <input type = "color" className = 'mt-5'
            onchange = {(e) => { console.log(e.target.value)}}
            /> */}

            <input type = "color" className = 'mt-5'
            onChange = {(e) => {
              console.log(e.target.value);
              document.body.style;e.backgroundColor = e.target.value;            
            }}
            />

            <input
                type = "color" 
                className = 'border rounded px-4 py-2 w-full mt-5'
                onKeyDown = {(e) => {
                    console.log(e.code);
                }}
            />

        </div>
    </div>
  )
}

export default EventHandling;