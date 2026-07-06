import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
    <div className="container-fluid  bg-success " >
     <div className='row p-5  '>
       <div className="col-md-1"></div>
       <div className="col-md-5 text-white">
            <p>The Holiday Inn Cochin is a premier 5-star hotel located on the NH Bypass at Chakkaraparambu, Vennala, Kochi It's a top choice for business travelers and families.</p>
            <p>Holiday Inn is an iconic, full-service hotel chain owned by IHG Hotels & Resorts. It is designed to provide comfortable, upper-midscale accommodations for both business and leisure travelers.</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 ">
              <ul style={{ listStyle: "none" }}>
  <li className="mb-3">
    <Link to="/" className="text-white  footer-link fw-bolder text-decoration-none" >
      Home
    </Link>
  </li>

  <li className="mb-3">
    <Link to="/hotels" className="text-white fw-bolder footer-link text-decoration-none ">
      Hotels
    </Link>
  </li>

  <li className="mb-3">
    {/* <Link to="/booking/:id" className="text-white fw-bolder footer-link text-decoration-none ">
      Bookings
    </Link> */}
  </li>
</ul>
  
        </div>

     </div>

     <div>
      <p className='text-center text-white py-3'>© 2026 IHG. All rights reserved. Most hotels are independently owned and operated </p> 
     </div>
    </div>
    </>
  )
}

export default Footer
