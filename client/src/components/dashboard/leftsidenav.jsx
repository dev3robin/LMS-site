import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from "./dashboard.module.css";

const LeftsideNav = ({showNav,setActiveNav}) => {
  return (
  <div className={`${styles.leftsidenav} ${showNav ? styles.show : ""}`}>
    <div className={styles.profileitems}>
      <div className={styles.logo}>
        <Link to="/">
            <img src="public\Capture.PNG" alt=""/>
        </Link>
        <div className={styles.LNCbtn}onClick={()=>{setActiveNav(false)}}><CloseIcon /></div>
      </div>
      <ul className={styles.list}>
        <li><button><DashboardIcon />Overview</button></li>
        <li><button><MessageIcon />Messages</button></li>
        <li><button><AccountBoxIcon />Profile</button></li>
        <li><button><LibraryBooksIcon />Courses</button></li>
        <li><Link to='/cart'><button><ShoppingCartIcon />Cart</button></Link></li>
        <li><button><FindInPageIcon />Documents</button></li>
        <li><button><SettingsIcon />Settings</button></li>
      </ul>
    </div>
    <div className={styles.report}>
      <button>Download</button>
    </div>
  </div>
  )
}

export default LeftsideNav