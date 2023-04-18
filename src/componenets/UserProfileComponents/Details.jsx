import React from 'react'

const Details = () => {
    let user=JSON.parse(localStorage.getItem("user"))
  return (
    <div className='useDetailsWrapper'>
        <div className='field'>
         <h1>First Name</h1>
         <p>{user?.firstName}</p>
        </div>
        <div className='field'>
            <h1>Last Name</h1>
            <p>{user?.lastName}</p>
        </div>
        <div className='field'>
            <h1>Email</h1>
            <p>{user?.email}</p>
        </div>
        <div className='field'>
            <h1>Phone No</h1>
            <p>{user?.phoneNo}</p>
        </div>
    </div>
  )
}

export default Details
