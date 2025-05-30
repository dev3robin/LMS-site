import React, { useState,useRef,useEffect } from 'react'
import { gsap } from 'gsap';
import '../dashboard/calender.css'
import styles from "./dashboard.module.css";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import HistogramChart from './chart';
import MenuIcon from '@mui/icons-material/Menu';
import LeftsideNav from './leftsidenav';
import RightsideNav from './rightsidenav';
import SearchIcon from '@mui/icons-material/Search';
const Dashboard = () => {
  const [activeNav, setActiveNav] = useState(null);
  const toggleNav = (side) => {       
    setActiveNav((prev) => (prev === side ? null : side)); 
  };
  const leftRef = useRef(null);
  const middleRef = useRef(null);
  const rightRef = useRef(null);

  return (
    <div className={styles.dashboard}>
        <LeftsideNav showNav={activeNav === 'left'} leftRef={leftRef} setActiveNav={setActiveNav} />
        <div className={styles.mainBody}ref={middleRef}>
          <div className={styles.topnav}>
            <div className={styles.dashmenu}>
              <div className={styles.menu} ><MenuIcon /></div>
              <div className={styles.sidenavMenu}>
                <button onClick={() => toggleNav('left')}>Left Nav</button>
                <button onClick={() => toggleNav('right')}>Right Nav</button>
              </div>
            </div>
            <div className={styles.dash}>Dashboard</div>
            <div className={styles.searchDiv}>  
                <input
                  type="text"
                  placeholder="Search..."
                  className={styles.searchInput}
                />
                <button className={styles.searchBtn}>
                  <SearchIcon />
                </button>
            </div>

          </div>
          <div className={styles.bodycontent}>
            <p>Hey, UserName</p>
            <h1>You've got 82 points!</h1>
          </div>
          <div class={styles.chartcontainer}>
            <HistogramChart />
          </div>
          <div className={styles.overviewCard}>
            <h1>Statistics</h1>
            <div className={styles.courses}>
              <svg width="120" height="120">
                <circle cx="60" cy="60" r="40" className={styles.circlebg}/>
                <circle cx="60" cy="60" r="40" class={styles.circlestart}/>
                <circle cx="60" cy="60" r="40" class={styles.circleprogress}/>
                <circle cx="60" cy="60" r="40" class={styles.circlecompleted}/>
              </svg>
              <div class={styles.progresstext}>09 Courses</div>
            </div>
            <div className={styles.status}>
              <div className={styles.completed}>
                <div className={styles.deepspan}></div>
                <div className={styles.analysis}>
                  <span>60%</span>
                  <span>Completed</span>
                </div>
              </div>
              <div className={styles.progress}>
                <div className={styles.lightspan}></div>
                <div className={styles.analysis}>
                  <span>10%</span>
                  <span>Progress</span>
                </div>
              </div>
              <div className={styles.start}>
                <div className={styles.fadespan}></div>
                <div className={styles.analysis}>
                  <span>30%</span>
                  <span>To start</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.awardsContainer}>
            <h1>Awards</h1>
            <div className={styles.awards}>
              <div className={styles.awardsIcon}><MilitaryTechIcon  style={{ fontSize: "42px" }}/></div>
              <div className={styles.medalDescription}>
                <span>Lvel</span>
                <span>Congratulations! You're at 71.</span>
                <div className={styles.tracker}>
                  <div className={styles.progressbarDiv}>
                    <div className={styles.progressbar}></div>
                  </div>
                  <span>71/90</span>
                </div>
              </div>

            </div>

          </div>
          <div className={styles.growth}>
            <h1>Growth</h1>
            <svg viewBox="0 0 100 50" preserveAspectRatio="none">
                <path className={styles.curve} d="M 10 40 Q 30 10, 50 30 T 90 10" />
            </svg>
          </div>
        </div>
        <RightsideNav showNav={activeNav === 'right'} rightRef={rightRef} setActiveNav={setActiveNav}/>
    </div>
  )
}

export default Dashboard
