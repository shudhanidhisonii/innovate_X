import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import Particle from '../components/particle'; // Assuming you have the Particle component

const Complain = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_va31qkd',
        'template_qede4fe',
        form.current,
        'iNwwc6aSxxnOr-ibj'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
      {/* Particle background */}
      {/* <Particle id="particle-background" /> */}
      
      <form 
        ref={form} 
        onSubmit={sendEmail}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 0 25px skyblue',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          width: '500px',
          height: '500px',
          color: 'white',
          justifyContent: 'center',
          zIndex: 1, // Ensures the form is above the particles
          position: 'relative'
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Complain here</h2>

        <label>Name</label>
        <input 
          type="text" 
          name="name" 
          required 
          style={{
            padding: '10px',
            background: 'transparent',
            border: '1px solid skyblue',
            borderRadius: '8px',
            color: 'white'
          }}
        />

        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          required 
          style={{
            padding: '10px',
            background: 'transparent',
            border: '1px solid skyblue',
            borderRadius: '8px',
            color: 'white'
          }}
        />

        <label>Message</label>
        <textarea 
          name="message" 
          rows="4" 
          required 
          style={{
            padding: '10px',
            background: 'transparent',
            border: '1px solid skyblue',
            borderRadius: '8px',
            color: 'white',
            resize: 'none'
          }}
        />

        <input 
          type="submit" 
          value="Send" 
          style={{
            padding: '12px',
            backgroundColor: 'skyblue',
            border: 'none',
            borderRadius: '8px',
            color: 'black',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        />
      </form>
    </div>
  );
};

export default Complain;
