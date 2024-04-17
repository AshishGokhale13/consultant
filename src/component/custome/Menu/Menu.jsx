import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import './menu.css'
import { useRef } from 'react';
function Menu() {
  const [active, setActive] = useState(false);
  const referedMenu=useRef(null);
  
  useEffect(()=>{
        if(active){
        referedMenu.current.classList.add('show')
        referedMenu.current.classList.remove('hide');
        }
        else{
          referedMenu.current.classList.add('hide');
        referedMenu.current.classList.remove('show');
        }
  },[active]);


  const updateStatus = () => {
    setActive(!active)
  }


  return (
    <>
      <div class="area">
        <div className='Menu py-2' onClick={updateStatus}>
          <span className='h5 d-flex justify-content-between align-items-center px-2' >Home <FaHome /></span>
        </div>
        <div className='dj hide   ' ref={referedMenu}>
          <div className='px-3'><h5>1</h5></div>
          <div className='px-3'><h5>1</h5></div>
          <div className='px-3'><h5>1</h5></div>
          <div className='px-3'><h5>1</h5></div>
        </div>
      </div>
    </>
  )
}

export default Menu;