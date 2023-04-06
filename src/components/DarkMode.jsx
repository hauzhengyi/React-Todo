import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export const DarkMode = ({}) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('todo-theme') || 'light'
  );

  useEffect(() => {
    document.querySelector('body').setAttribute('data-theme', theme);
    localStorage.setItem('todo-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="DarkMode">
      <FontAwesomeIcon icon={faMoon} onClick={() => toggleTheme()} />
      <FontAwesomeIcon icon={faSun} onClick={() => toggleTheme()} />
    </div>
  );
};
