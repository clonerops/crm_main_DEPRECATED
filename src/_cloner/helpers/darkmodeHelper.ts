import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};