import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-5  '>
        <a
            className='hover:opacity-50 transition duration-500'
            href='https://www.linkedin.com/in/pablovasquezcancino/'
            target='_blank'
            rel='noreferrer'
        >
            <AiFillLinkedin  className='w-8 h-8' />
        </a>
        <a
            className='hover:opacity-50 transition duration-500'
            href='https://github.com/pavloVasquez'
            target='_blank'
            rel='noreferrer'
        >
            <AiFillGithub  className='w-8 h-8'/>
        </a>
    </div>
  )
}

export default SocialMediaIcons