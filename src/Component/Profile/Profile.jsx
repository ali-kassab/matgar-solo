import React from 'react'
import '../Profile/Profile.css'
export default function Profile({ userdata }) {
  console.log(userdata);

  return <>


    <div className='container profile'>
      <div className="profileitem">

        <h2 className='text-center'> welcome {userdata?.name} </h2>

      </div>
    </div>

  </>
}
