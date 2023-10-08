import {createContext, useContext, useEffect, useState} from 'react';

// 사용하애 하는 파일에서 일일이 등록해야 하는 번거로움
// import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';
// export const DarkModeContext = createContext();

// 번거로움을 줄임 export를 하지 않고 커스텀 훅을 만들어 사용
const DarkModeContext = createContext();

export function DarkModeProvider({children}) {
	const [darkMode, setDarkMode] = useState(false); // 초기값 false
	const toggleDarkMode = ()=>{
		//setDarkMode((prev)=> !prev); // 이전값의 반대값을 저장
		setDarkMode(!darkMode); // 이전값의 반대값을 저장
		updateDarkMode(!darkMode);
	}

  useEffect(() => {
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

	return (
		<DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
			{children}
		</DarkModeContext.Provider>
	);
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
		localStorage.theme = 'light';
  }
}

// 커스텀 훅
export const useDarkMode = () => useContext(DarkModeContext);