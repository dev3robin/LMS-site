import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import SettingsIcon from '@mui/icons-material/Settings';
import { faker } from '@faker-js/faker';
import CalendarComponent from './calender';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import '../dashboard/calender.css'
import styles from "./dashboard.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { useNavigate } from 'react-router-dom';
const RightsideNav = ({showNav,setActiveNav}) => {
  const [isSettings,setIsSettings]=useState(false)
  const navigate=useNavigate();
  const dispatch = useDispatch();
  
  const handleLogout=()=>{
    dispatch(logout())
    setIsSettings(false)
    navigate("/login")
  }
    
  const handeleSelect=()=>{
    setIsSettings(false)
  }
  return (
      <div className={`${styles.rightsidenav} ${showNav ? styles.show : ""}`}>
        <ul className={`${styles.settingsItems} ${isSettings ? styles.active : ""}`}>
          <li onClick={handeleSelect}>profile</li>
          <li onClick={handeleSelect}>Theme</li>
          <li onClick={handeleSelect}>Lang</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
        <div className={styles.profileDiv}>
          <div className={styles.profile}>
            <div className={styles.img}><img src={faker.image.avatar()} alt="" />            </div>
            <div className={styles.title}> User name</div>
          </div>
          <div className={styles.buttondiv}>
            <div className={styles.settingsDiv}>
              <div className={styles.settingsBtn}><button onClick={()=>setIsSettings(true)}><SettingsIcon /></button></div>
            </div>
            <button className={styles.closeBtn} onClick={() => {setActiveNav(false)}}><ClearIcon /></button>
          </div>
        </div>
        <div className={styles.activity}>
          <div className="calender ">
            <CalendarComponent />
          </div>
          <div className={styles.courseDetails}>
            <span>Day</span>
            <h2>Basic Marketing</h2>
            <p>The course is hugely interactive withprojects,
              chexklist and actionable lectures bult into every section.
            </p>
          </div>
          <div className={styles.joinedsection}>
            <div className={styles.avatars}>
              <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="User 1" className={styles.avatar}/>
              <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="User 2" className={styles.avatar}/>
              <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="User 3" className={styles.avatar}/>
              <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="User 4" className={styles.avatar}/>
            </div>
            <span className={styles.text}>30+ Joined this course</span>
          </div>
          <div className={styles.duration}>
            <AccessTimeIcon />
            <div className={styles.icon}>
              <span>55 mins</span>
              <span>Duration</span>
            </div>

          </div>
          <div className={styles.duration}>
            <BackupTableIcon />
            <div className={styles.icon}>
              <span>03 lessons</span>
              <span>Course outline</span>
            </div>

          </div>
          <hr />
          <div className={styles.bottom}>
            <button>Start course</button>
            <button>Reschedule</button>
          </div>

        </div>
      </div>
  )
}

export default RightsideNav