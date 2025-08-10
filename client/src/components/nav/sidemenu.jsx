import React,{useEffect,useState} from 'react';

import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "../nav/sidemenu.css"
import { useSelector } from 'react-redux';


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));
const Menu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { i18n } = useTranslation();
  const isloggedIn=useSelector((state)=>state.user.isLoggedIn)
  const loggedUser=useSelector((state)=>state.user.loggedUD)
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const handleThemeChange = (event) => {
    const isDarkMode = event.target.checked;
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowDropdown(false);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDashboardClick = () => {
    if (!loggedUser || !loggedUser.userRole) return;

    switch (loggedUser.userRole) {
      case 'student':
        navigate('/student-dashboard');
        break;
      case 'teacher':
        navigate('/teacher-dashboard');
        break;
      case 'author':
        navigate('/author-dashboard');
        break;
      default:
        alert('Unknown role');
    };
    toggleSidebar()
  };
  return (
          <div className="menudiv">
            <div className="menuicon" onClick={toggleSidebar}>
              <MenuIcon />
            </div>
            <div className={`menucontent ${isSidebarOpen ? 'show' : ''}`}>
              <div className="closeicon" onClick={toggleSidebar}>
                <CloseIcon />
              </div>
              <div className="cart1"onClick={toggleSidebar}>
                <Link to="/cart">
                  <Button className='flex gap-3' >
                    <span>Cart</span>
                    <ShoppingCartIcon />
                  </Button>
                </Link>
              </div>
              
              <div><Link to='/courses'><Button>Courses</Button></Link></div>
            
              <div className="login1"  onClick={toggleSidebar}><Link to="/login"><Button>login</Button></Link></div>
              <div className="signup1" onClick={toggleSidebar}><Link to="/signUp"><Button>signup</Button></Link></div>
              {isloggedIn && 
                <div className="notes1" onClick={toggleSidebar}><Link to='/notes'><Button>Notes</Button></Link>
              </div>
              }
              {isloggedIn && 
                <div className='assesment1' onClick={toggleSidebar}>
                  <Link to="/assesment"><Button>Assesment</Button></Link>
                </div>}
              {isloggedIn && 
                <div><Button onClick={handleDashboardClick}>Dashboard <span>&#x25BC;</span></Button></div>
              }
              <div className="relative lang1">
               <Button className='flex gap-2'><span>Language</span> <LanguageIcon onClick={() => setShowDropdown(!showDropdown)} className="cursor-pointer" /></Button>
                {showDropdown && (
                  <div className="absolute z-10 right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg">                    
                    <ul className="p-2">
                      <li onClick={() => changeLanguage('en')} className="p-2 hover:bg-gray-200 cursor-pointer">English</li>
                      <li onClick={() => changeLanguage('fr')} className="p-2 hover:bg-gray-200 cursor-pointer">Français</li>
                      <li onClick={() => changeLanguage('hi')} className="p-2 hover:bg-gray-200 cursor-pointer">Hindi</li>
                      <li onClick={() => changeLanguage('bn')} className="p-2 hover:bg-gray-200 cursor-pointer">Bangla</li>
                      <li onClick={() => changeLanguage('ar')} className="p-2 hover:bg-gray-200 cursor-pointer">Arabic</li>
                      <li onClick={() => changeLanguage('es')} className="p-2 hover:bg-gray-200 cursor-pointer">Español</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="theme1">
               <Button className='flex gap-2'><span>Mode</span> <MaterialUISwitch
                  onChange={handleThemeChange}
                  defaultChecked={document.documentElement.getAttribute('data-theme') === 'dark'}
                /></Button>
              </div>
            </div>
          </div>
  )
}

export default Menu