import { useState, useEffect, useRef } from 'react';
import './Dark.css';
import detectDarkMode from './detectDarkMode.js'

const Dark = () => {
    
    const [darkMode, setDarkMode] = useState(detectDarkMode);
    const btnRef = useRef(null);

    useEffect(()=>{
        console.log(darkMode);
        if(darkMode === 'dark'){
            document.body.classList.add('dark-theme')
            btnRef.current.classList.add('dark__active')
        } else{
            document.body.classList.remove('dark-theme')
            btnRef.current.classList.remove('dark__active')

        }
    }, [darkMode]);

    const toggleDarkMode = () =>{
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        });
    }
    return ( 
        <button ref={btnRef} onClick={toggleDarkMode} className="dark-mode-btn dark__active  d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-none">
                <i className="bi bi-brightness-high"></i>
                <i className="bi bi-moon"></i>
        </button>
     );
     
}
 
export default Dark;