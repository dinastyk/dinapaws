import React, { useEffect, useState } from 'react';
//import logo

import Logo from '../assets/img/logo.svg';
//import icons

import {CgMenuRight} from 'react-icons/cg';
//import components

import Nav from './Nav';
import NavMobile from './NavMobile';
import Program from './Program';
//scroll event


const Header = () => {

  const [bg, setBg] = useState(false);
  const [NavMobile, setNavMobile]= useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setBg(true) : setBg(false);
    });
    });

  return (
  <header className={ `${bg? 'bg-white py-3 shadow-md': 'bg-none'}fixed w-full right-0 left-0 z-10
  transition-all duration-300`} 
  
  > <div className= "container mx-auto ">
{ /* logo */}
<a href ='#'>
<img src ={Logo}alt ='' />

</a>
{/* nav */}
<Nav/>
  </div>
{/*program*/}
<Program/>
{/*nav mobile button */}
<div>
  <CgMenuRight className='text-blue text-3xl'/>
</div>
  </header>
);
};

export default Header;
