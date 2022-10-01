import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'



const Navbar = () => {
  const {openSidebar, openSubMenu, closeSubMenu} = useGlobalContext();

  const mouseOverHandler = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.right - tempBtn.left) / 2 + tempBtn.left;
    const bottom = tempBtn.bottom - 3;

    openSubMenu(page, {center, bottom});
  }


  const handleSubMenu = (e) => {
    if(!e.target.classList.contains('link-btn')) {
      closeSubMenu()
    }
  }

  return (
    <nav className='nav' 
    onMouseOver={handleSubMenu}
    >
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo'></img>
          <button className='btn toggle-btn' onClick={openSidebar}><FaBars /></button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn'  onMouseOver={mouseOverHandler}>products</button>
          </li>
          <li>
            <button className='link-btn'  onMouseOver={mouseOverHandler}>developers</button>
          </li>
          <li>
            <button className='link-btn'  onMouseOver={mouseOverHandler}>company</button>
          </li>

    
        </ul>
        <button className='btn signin-btn'>Sign In</button>
      </div>

    </nav>
  )
}

export default Navbar
