import React from 'react'
import '../styles/Home.css'
const Stickies = () => {
  return (
    <>
        <div className='left-sticky'>
            <a href='https://github.com/oghenekaroisrael' className='github-icon'>&#8358;</a>
            <a href='https://www.linkedin.com/in/brume-israel-oghenekaro-581b44136/' className='linkedin-icon'>&#8358;</a>
            <a href='mailto:oghenekaroisrael089@gmail.com' className='gmail-icon'>&#8358;</a>
            <div className='line'></div>
        </div>
        <div className='right-sticky'>
            <a href='mailto:oghenekaroisrael089@gmail.com' className='email-link'>oghenekaroisrael089@gmail.com</a>
            <div className='line'></div>
        </div>
    </>
  )
}

export default Stickies;