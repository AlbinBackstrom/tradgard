import React, { useEffect, useRef, useState } from 'react';
import './menu-styles.scss';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [shrink, setShrink] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) { // Assuming you want to shrink the header after 100px of scroll
      setShrink(true);
    } else {
      setShrink(false);
    }
  };
  const menuRef = useRef();
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={shrink ? 'header shrink' : 'header'}>
      <div className={shrink ? 'menu-container shrink' : 'menu-container'}>
        <button type="button" onClick={toggleMenu} className={shrink ? 'menu-icon shrink' : 'menu-icon'}>
          <span>☰</span>
        </button>
        {isOpen && (
        <div ref={menuRef} className="menu-items">
          <a href="/">Hem</a>
          <a href="/pruning">Trädbeskärning</a>
          <a href="/grass">Gräsmattor</a>
          <a href="/stenanlaggning">Stenanläggning</a>
          <a href="/contact">Kontakta</a>
        </div>
        )}
        <a className={shrink ? 'title shrink' : 'title'} href="/">Trädgårdsanläggning AB</a>
      </div>
    </div>
  );
}

export default Menu;
