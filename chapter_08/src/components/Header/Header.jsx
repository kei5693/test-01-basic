import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';
import {HiMoon, HiSun} from 'react-icons/hi';

export default function Header({ filters, filter, onFilterChange }) {
	const {darkMode, toggleDarkMode} = useDarkMode();
	//const handelDarkMode = ()=>{toggleDarkMode}; 인자, 호출하는게 동일해서 전달이 안되므로
	// <button onClick={handelDarkMode}> 으로 사용하지 않고 바로 toggleDarkMode를 바로 호출 하도록 작성
	return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
