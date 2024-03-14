import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main className='home container'>
        <div className="home-image">
        <img
          src="https://thumbs.dreamstime.com/b/double-exposure-smart-medical-doctor-working-operating-room-as-concept-43619820.jpg"
          alt="medical_image"
        />
      </div>
        <div className='home-content'>
            <h4>
                This is the best platform for nursing students/graduates to 
                update their clinical knowledge and skills time to time.
            </h4>

            <p className='one'>
                Just Connect to our website . It will connect you to every thing 
                you need.No Need to depend on your colleague,friend or neighbour.
            </p>

            <p className='two'>
                "Many People withhold what they know -a habit known as knowledge hiding.
                They may play dumb,pretend not to know something,promise to share something
                but never do it , or tell people they cant share when in fact they could."
            </p>
        </div>

        
    </main>
  )
}

export default Home