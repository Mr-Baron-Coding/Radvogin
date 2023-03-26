import { useEffect, useState } from 'react';
import { useAppSelector } from '../hooks';

// icons
import Heb from '../Images/israel-flag-icon.png';
import Eng from '../Images/united-states-flag-icon.png';
import { DarkMode, LightMode } from '@mui/icons-material';
import { FaWhatsapp } from 'react-icons/fa';

type Props = {
    mobileMenu: boolean,
    change: () => void,
    theme: () => void,
    contact: () => void
}

const MobileMenu = ({mobileMenu, change, theme, contact }: Props) => {
    const isEnglish = useAppSelector((state) => state.styles.isEnglish);
    const isDark = useAppSelector((state) => state.styles.isDark);
    const [settings, setSettings] = useState(false);

    useEffect(() => {
        !mobileMenu && setTimeout(() => {
            setSettings(false);
        },750); 
    },[mobileMenu])

  return (
    <div className={`md:hidden w-full h-full z-20 absolute transition-all ease-linear duration-500 bg-mike-bgLight/95 dark:bg-mike-backgroundDark/90 ${mobileMenu ? 'translate-y-0' : '-translate-y-[101%]'} `}>
          <div className={`w-full h-full flex flex-col justify-center font-bold text-xl z-20 gap-6 absolute transition-all ease-linear duration-500 ${settings ? 'translate-x-[101%]' : 'translate-x-0'}`}>
            <div className='text-center' onClick={ contact }>{isEnglish? 'Leave a message' : 'השאירו פרטים'}</div>
            <a aria-label="Chat on WhatsApp" target='_blank' rel="noreferrer" href="https://wa.me/972529258063"><div className='flex justify-center gap-4'>{isEnglish? 'WhatsApp Me' : 'דברו איתי ישירות'}<FaWhatsapp /></div></a>
            <a href='https://www.facebook.com/michael.radvogin' target='_blank' rel="noreferrer"><div className='text-center'>{isEnglish? 'Follow me for latest news' : ' עקבו אחריי ברשתות החברתיות'}</div></a>
            <div className={`flex justify-around items-center font-bold`}>
                <div className='flex justify-center items-center' >{ isEnglish ? <img src={ Heb } alt='heb' className='h-5' onClick={ change }/> : <img src={ Eng } className='h-5' alt='heb' onClick={ change } /> }</div>
                <div className='flex justify-center items-center'>          
                    <span className='hover:cursor-pointer' onClick={ () => theme() }>
                        { !isDark ? <LightMode /> : <DarkMode /> }
                    </span>
                </div>
            </div>
        </div>

    </div>
  )
};

export default MobileMenu;