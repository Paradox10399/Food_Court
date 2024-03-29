import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSidebarContext } from '../../Context/sidebarContext'

function NavBar() {
  const {openSidebar} = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60){
      setScrolled(true);
    }else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
  })
  
  return (
    <nav className={`navbar bg-info-subtle z-3 w-100 ${scrolled ? 'position-fixed top-0': ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>FOOD COURT</Link>
        <button className="navbar-toggler" onClick={() => openSidebar()} type='button'>
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
    </nav>
  )
}

export default NavBar
