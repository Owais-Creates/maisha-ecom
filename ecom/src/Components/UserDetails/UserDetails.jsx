import React from 'react';
import './UserDetails.css'
import Details from '../../pages/Details/Details';

function UserDetails() {
  return (

    <>
      <div className="user-details-main">

        <div className="user-details-heading">

          <img src='public/images/user.png' alt="" />

          <h2>User Details</h2>

        </div>

        <div className="user-name">
          <Details name="Owais" email="owaisali5371@gmail.com" password='*********'  />
        </div>

      </div>
    </>

  )
}

export default UserDetails