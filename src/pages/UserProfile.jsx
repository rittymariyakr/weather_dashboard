import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function UserProfile() {
  return (
    <div>
    <Header />
    <div className='d-flex'>
        <div className='d-flex flex-column bg-primary' style={{ width: '250px', height: '120vh' }}>
            <Link className='mt-5 ms-3' style={{ textDecoration: 'none', color: 'white' }} to={'/dashboard'}><h5> <i className="fa-solid fa-bars me-2"></i> DashBoard</h5></Link>
            <Link className='mt-3 ms-3' style={{ textDecoration: 'none', color: 'white' }} to={'/settings'}><h5><i class="fa-solid fa-gear"></i> Settings</h5></Link>
            <Link className='mt-3 ms-3' style={{ textDecoration: 'none', color: 'white' }} to={'/userprofile'}><h5><i className="fa-solid fa-user me-2"></i> User Profile</h5></Link>

        </div>
        <div className='p-3 w-100'>
        <h1 className='text-center text-warning'>USER PROFILE</h1>
        </div>

    </div>
</div>
  )
}

export default UserProfile
