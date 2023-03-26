import { useState, useEffect } from 'react';
import './App.css';
import Screens from './Comp/Screens';
import MobileMenu from './Comp/MobileMenu';
import ContactForm from './Comp/ContactForm';
import { useAppDispatch, useAppSelector } from './hooks';
import { changeTheme, changeLang } from './Features/styleSlice';

// icons 
import { FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import Heb from './Images/israel-flag-icon.png';
import Eng from './Images/united-states-flag-icon.png';
import { DarkMode, LightMode } from '@mui/icons-material';

function App() {
  const dispatch = useAppDispatch();
  const isEnglish = useAppSelector((state) => state.styles.isEnglish);
  const isDark = useAppSelector((state) => state.styles.isDark);
  const [isContactOpen, setContactOpen] = useState(false);
  const [mobileMenu, setMenu] = useState(false);

  useEffect(() => {  
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[]);

  // change theme color dark/bright
  const themeChange = () => {
    dispatch(changeTheme())
    document.documentElement.classList.contains('dark') ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
  };

  // change language and site direction
  const langChange = () => {
    dispatch(changeLang());
    if (isEnglish) {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'he';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  };

  // close the contact form
  const close = () => {
    setContactOpen(!isContactOpen);
  };

  // mobile menu closer
  const closeMenues = () => {
    setContactOpen(true);
    setMenu(false);
  };

  return (
    <div className='h-full min-h-[700px] min-w-[320px] relative bg-mike-bgLight dark:bg-mike-backgroundDark grid grid-rows-[10%,_85%,_5%] md:grid-rows-[15%,_80%,_5%] text-mike-fontDark dark:text-mike-fontLight select-none overflow-hidden'>
      <ContactForm isContactOpen={ isContactOpen } close={() => close() } />
      <MobileMenu mobileMenu={mobileMenu} change={ () => langChange() } theme={ () => themeChange() } contact={ () => closeMenues() } />
      <div className='row-start-1 border-b-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 grid grid-rows-none md:grid-cols-[50%,_25%,_25%]'>
        <div className={`md:col-start-1 text-xl md:text-2xl lg:text-4xl ${ isEnglish ? 'border-r-2' : 'border-l-2'} border-mike-backgroundDark/10 dark:border-mike-bgLight/10 p-5 md:px-8 md:py-10 subpixel-antialiased text-center ${isEnglish ? 'md:text-left font-Radbo' : 'md:text-right font-RadboHeb'}`}>
          { isEnglish ? 'Radvogin - Real Estate' : 'רדבוגין - נדל"ן' }
        </div>
        <div className={`hidden md:col-start-2 ${ isEnglish ? 'md:border-r-2' : 'md:border-l-2'} border-b-2 md:border-b-0 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 md:flex justify-evenly items-center text-lg md:text-2xl`}>
          <a href='https://www.linkedin.com/in/michaelradvogin/' target='_blank' rel="noreferrer">
            <FaLinkedin className='transition-all hover:rounded-xl hover:text-mike-fontDark/40 dark:hover:text-mike-fontLight/40 cursor-pointer' />
          </a>
          <HiMail onClick={ () => setContactOpen(!isContactOpen) } className='transition-all hover:rounded-xl hover:text-mike-fontDark/40 dark:hover:text-mike-fontLight/40 cursor-pointer' />
          <a aria-label="Chat on WhatsApp" target='_blank' rel="noreferrer" href="https://wa.me/972529258063"><FaWhatsapp className='hover:text-mike-fontDark/40 dark:hover:text-mike-fontLight/40 cursor-pointer' /></a>
        </div>
        <div className='md:col-start-3 hidden md:flex justify-around items-center'>
          <span className='hover:cursor-pointer' onClick={ () => themeChange() }>{ !isDark ? <LightMode /> : <DarkMode /> }</span>
          <span className='grid items-center w-6 h-6 overflow-hidden rounded-full'>
            { isEnglish ? <img src={ Heb } alt='heb' onClick={ () => langChange() }/> : <img src={ Eng } alt='heb' onClick={ () => langChange() } /> }
          </span>
        </div>
        <div className={`md:hidden h-8 w-8 top-3 absolute z-30 ${ isEnglish ? 'right-3' : 'left-3'} flex flex-col justify-center items-center gap-1.5`} onClick={() => setMenu(!mobileMenu)}>
          <div className={`transition-all duration-700 ease-in-out h-[2px] rounded-full dark:bg-mike-bgLight bg-mike-backgroundDark ${mobileMenu ? 'origin-top-left -rotate-[22.5deg] translate-y-4 -translate-x-1.5 w-4' : 'w-full'}`}></div>
          <div className={`transition-all duration-700 ease-in-out h-[2px] rounded-full dark:bg-mike-bgLight bg-mike-backgroundDark ${mobileMenu ? 'origin-top-right rotate-[22.5deg] translate-y-2 translate-x-1.5 w-4' : 'w-full'}`}></div>
          <div className={`transition-all duration-700 ease-in-out h-[2px] rounded-full dark:bg-mike-bgLight bg-mike-backgroundDark ${mobileMenu ? 'origin-bottom-left rotate-90 -translate-y-1 w-4' : 'w-full'}`}></div>
          <div className={`transition-all duration-700 ease-in-out h-[2px] rounded-full dark:bg-mike-bgLight bg-mike-backgroundDark ${mobileMenu ? 'origin-bottom-right rotate-90 translate-y-1 -translate-x-0.5  w-4' : 'w-full'}`}></div>
        </div>
      </div>

      <Screens />

      <div className='row-start-3 border-t-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 grid place-content-end px-5'>{isEnglish ? 'All Rights Reserved Michael Radvogin 2023' : 'כל הזכויות שמורות מיכאל רדבוגין 2023'}</div>
    </div>
  );
}

export default App;
