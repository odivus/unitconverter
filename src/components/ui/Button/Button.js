import React, {useState} from 'react';
import {useClearTimer} from '../../hooks/use-clear-timer';

import './Button.css';

const Button = ({ children }) => {
  let timer;
  const [spanCoords, setSpanCoords] = useState({ 
    display: false,
    width: '',
    height: '',
    left: '', 
    top: '', 
  });

  const {
    display,
    width,
    left,
    top
  } = spanCoords;

  const spanStyle = {
    display: display ? 'block' : 'none',
    width: `${width}px`,
    height: width,
    left: `${left}px`,
    top: `${top}px`,
  }

  function createRipple(event) {
    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();

    const diameter = Math.max(buttonRect.width, buttonRect.height);
    const radius = diameter / 2;
    const left = event.clientX - (buttonRect.left + radius);
    const top = event.clientY - (buttonRect.top + radius);

    setSpanCoords({
      display: !display,
      width: diameter,
      height: diameter,
      left,
      top,
    });

    timer = setTimeout(() => {
      setSpanCoords({
        ...spanCoords,
        display: false,
        });
    }, 600);
  }

  useClearTimer(timer);

  return (
    <button 
      onClick={createRipple}>
        {children}
      <span className='ripple' style={spanStyle}>&nbsp;</span>
    </button>
  );
};

export default Button;
