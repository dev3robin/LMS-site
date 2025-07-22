import React, { useEffect, useState } from 'react';
import { getAllFromStore } from '../../idbHelper';
import PendingReq from './pending';

const AuthorDashboard = () => {
  const [allReq,setAllReq]=useState([])
  const [openReq,setOpenReq]=useState(false)
  const [allUsers,setAllUsers]=useState([])

  useEffect(()=>{
    const fetchUsers= async ()=>{
      const users= await getAllFromStore('users')
      setAllUsers(users)
    }
    fetchUsers()
  },[])
    const numOfauthors = allUsers.filter(user => user.userRole === 'author').length;
    const numOfteachers = allUsers.filter(user => user.userRole === 'teacher').length;
    const numOfstudents = allUsers.filter(user => user.userRole === 'student').length;

  useEffect(()=>{
    const fetchReq= async ()=>{
      const allreq= await getAllFromStore('authrequest')
      setAllReq(allreq)
    }
    fetchReq()
  },[openReq])
  const numReq=allReq.length
  const recentPosts = [
    { title: 'Mastering React', date: 'May 25, 2025', status: 'Published' },
    { title: 'Tailwind Tips', date: 'May 21, 2025', status: 'Published' },
  ];

  const draftPosts = [
    { title: 'Next.js vs React', date: 'May 28, 2025' },
    { title: 'Dark Mode with Tailwind', date: 'May 26, 2025' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome back, Author 👋</h1>
        <p className="text-gray-600 mt-1">Here’s an overview of your writing activity.</p>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <div className="text-2xl font-bold text-blue-600">{allUsers.length}</div>
          <div className="text-gray-600">Total Users</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <div className="text-2xl font-bold text-yellow-500">{numOfstudents}</div>
          <div className="text-gray-600">Total Students</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <div className="text-2xl font-bold text-yellow-500">{numOfauthors}</div>
          <div className="text-gray-600">Total Authors</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <div className="text-2xl font-bold text-yellow-500">{numOfteachers}</div>
          <div className="text-gray-600">Total Techers</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <div className="text-2xl font-bold text-yellow-500">{numOfteachers}</div>
          <div className="text-gray-600">Total Courses</div>
        </div>
        <div className="bg-white p-4 rounded-xl 
          shadow text-center flex items-center justify-center"
          role='button' onClick={()=>setOpenReq(true)}>
          <div className="relative inline-block" >
            <div className="text-gray-600">Request</div>
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1.5">
              {numReq>0?numReq:0}
            </span>
          </div>
        </div>

      </section>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Posts */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Posts</h2>
            <button className="text-sm text-blue-600 hover:underline">View All</button>
          </div>
          <ul className="space-y-3">
            {recentPosts.map((post, i) => (
              <li key={i} className="flex justify-between border-b pb-2 text-sm">
                <span>{post.title}</span>
                <span className="text-gray-500">{post.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Drafts */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Drafts</h2>
            <button className="text-sm text-blue-600 hover:underline">Manage</button>
          </div>
          <ul className="space-y-3">
            {draftPosts.map((post, i) => (
              <li key={i} className="flex justify-between border-b pb-2 text-sm">
                <span>{post.title}</span>
                <span className="text-gray-500">{post.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 flex flex-wrap gap-4">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          {/* <PlusCircleIcon className="w-5 h-5" /> */}
          New Post
        </button>
        <button className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">
          {/* <PencilIcon className="w-5 h-5" /> */}
          Edit Profile
        </button>
      </div>
      {openReq && <PendingReq openReq={openReq} allReq={allReq} setOpenReq={setOpenReq}/>}
    </div>
  );
};

export default AuthorDashboard;
