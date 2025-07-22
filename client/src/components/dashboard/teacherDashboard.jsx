import React, { useEffect, useState } from 'react';
import AsseCreator from '../assesment/assesmentCreator';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { getAllFromStore } from '../../idbHelper';
const TDashboard = () => {
  const [assCreate,setAssCreate]=useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userAsses,setUserAsses]=useState([])

  useEffect(()=>{
    const fetchAssesments= async ()=>{
      const allassesments = await getAllFromStore('assesments')
      const usersAllassements= allassesments.filter((asses)=>asses.AsseCreator === loggedTecher)
      setUserAsses(usersAllassements)
    }
    fetchAssesments()
  },[])
  return (
    <div className="flex min-h-screen w-full max-w-[1260px] gap-5 p-3 overflow-hidden bg-white">
      {/* Sidebar */}
      <aside
        className={`
          fixed h-screen shadow-md p-4 bg-gray-100 rounded-2xl z-40 transition-all duration-300 
          ${sidebarOpen ? 'left-0' : 'left-[-180px]'} 
          md:relative md:left-0
        `}
      >
        <nav className="space-y-4">
          <div className="font-semibold flex gap-10">
            <span>Dashboard</span>
            <button className='md:hidden' onClick={()=>setSidebarOpen(false)}><CloseIcon /></button>
          </div>
          <div>My Courses</div>
          <div>Assignments</div>
          <div>Students</div>
          <div>Analytics</div>
        </nav>
      </aside>


      {/* Main Content */}
      <main className="flex-1 p-5 shadow-2xl bg-gray-100 rounded-2xl">
        <section className='flex gap-2 items-baseline'>
          <button className=' md:hidden'  onClick={() => setSidebarOpen(!sidebarOpen)}><MenuIcon /></button>
          <h1 className="text-2xl font-bold mb-6">Teacher Dashboard</h1>
        </section>

        {/* Top Stats */}
        <div className="grid w-full gap-4 mb-6 [grid-template-columns:repeat(auto-fill,minmax(150px,1fr))]">
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-blue-600 text-xl font-bold">120</div>
            <div>Total Students</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-blue-600 text-xl font-bold">8</div>
            <div>Total Courses</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-blue-600 text-xl font-bold">25</div>
            <div>Assignments Given</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-blue-600 text-xl font-bold">18</div>
            <div>Submissions Received</div>
          </div>
        </div>

        {/* Course Management and Assignments */}
        <div className=" grid  w-full gap-4 mb-6 [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))]">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-4">Course Management</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Enrolled Students</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ReactJS Basics</td>
                  <td>30</td>
                  <td>80%</td>
                </tr>
                <tr>
                  <td>Python 101</td>
                  <td>45</td>
                  <td>60%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Assignments / Quizzes</h2>
              <button onClick={()=>setAssCreate(true)} className="bg-blue-600 text-white px-3 py-1 rounded">Create New</button>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>Assignment</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Assignment 1</td>
                  <td>Submitted</td>
                </tr>
                <tr>
                  <td>Quiz 1</td>
                  <td>Due in 2 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity and Performance */}
        <div className="grid w-full gap-4 mb-6 [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))]">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-2 text-sm">
              <li>💬 Student A submitted Assignment 2</li>
              <li>💬 Student B scored 9/10 in Quiz 1</li>
              <li>📘 Course "Data Structures" was published</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-4">Student Performance</h2>
            <div className="flex items-end space-x-2 h-32">
              {[30, 50, 40, 60, 70, 55, 80].map((val, i) => (
                <div key={i} className="bg-blue-300 w-6" style={{ height: `${val}%` }}></div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {assCreate && <AsseCreator assCreate={assCreate} setAssCreate={setAssCreate}/>}
    </div>
  );
};

export default TDashboard;
