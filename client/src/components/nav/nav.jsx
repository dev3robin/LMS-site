
import React,{useEffect,useState} from 'react';

//importing icons
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';

import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Menu from './sidemenu';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
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
const NavBar = () => {
  const isloggedIn=useSelector((state)=>state.user.isLoggedIn) 
  const cartItems=useSelector(state=>state.cart.cartItems) 
  const [showDropdown, setShowDropdown] = useState(false);
  const { i18n } = useTranslation();
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

  return (
      <>
        <nav className='top-nav'>
          <Menu />
          <div className="logoDiv flex w-full items-center justify-center">
            <Link to="/">
                <img className="logo"src="/logo.PNG" alt=""/>
            </Link>
          </div>
          <div className="searchDiv relative flex items-center justify-end">
              <input
                type="text"
                className="searchInput w-full border-1 rounded-3xl p-2.5 outline-0"
                placeholder='Search'
              />
              <button className="absolute right-2 transition-opacity duration-300 focus-within:opacity-0">
                <SearchIcon />
              </button>
          </div>
          <div className='cart'>
            <Link to='/cart'><ShoppingCartIcon /></Link>
            <span>{cartItems.length}</span>
          </div>
          <div className="login"><Link to="/login"><Button>login</Button></Link></div>
          <div className="signup"><Link to="/signUp"><Button>signup</Button></Link></div>
          {isloggedIn && 
            <div className="dashboard relative ">
              <div className="dashboardBtn"><Button onClick={()=> setShowDashType(true)}>Dashboard <span>&#x25BC;</span></Button></div>
              <div className="dashboardType ">
                <Link to="/student-dashboard"><DashboardIcon />Student Dashboard</Link>
                <Link to="/teacher-dashboard"><DashboardIcon />Teacher Dashboard</Link>
              </div>
            </div>
          }
          {isloggedIn && 
            <div className='assesment'>
              <Link to="/assesment"><Button>Assesment</Button></Link>
            </div>}
          {isloggedIn && 
            <div className="notes"><Link to='/notes'><Button>Notes</Button></Link>
          </div>
          }
          <div className="lang relative">
            <LanguageIcon onClick={() => setShowDropdown(!showDropdown)} className="cursor-pointer" />
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
          <div className="theme">
            <MaterialUISwitch
              onChange={handleThemeChange}
              defaultChecked={document.documentElement.getAttribute('data-theme') === 'dark'}
            />
          </div>
        </nav>

      </>
  )
}

export default NavBar