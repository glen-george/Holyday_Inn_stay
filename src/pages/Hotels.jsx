import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { getHotels } from "../services/allAPI";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Hotels() {



   const navigate = useNavigate();

  const handleBooking = (hotel) => {
    const user = localStorage.getItem("currentUser");
    console.log("User:", user);

    if (user) {
      navigate(`/booking/${hotel.id}`, {
        state: { hotel }
      });
    } else {
      alert("Please Register/Login first");
      navigate("/register");
    }
  };



  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels().then((res) => {
      setHotels(res.data);
    });
  }, []);

  return (
    <>
    
      <div className="container">

      <h2 className="my-3 text-success text-center mt-4 fs-4 fs-md-2">Available Hotels</h2>



  <div className='row mt-3 mb-3'>
        { 
          hotels.map((hotel) => (

         <div key={hotel.id} className='col-12 col-sm-6 col-md-4 col-lg-3 mt-4'>

            <div  className="card  h-200  p-3 mb-3" >
                <img src={hotel.image} alt={hotel.name} className="card-img-top"style={{ height: "200px",  objectFit: "cover"}}/>

              <div className='card-body'>
                <h4 className='text-white fw-bolder'>{hotel.name}</h4>
                <p>{hotel.location}</p>
                <p>₹{hotel.price}</p>
      
               <button
  className="btn btn-outline-warning"
  onClick={() => handleBooking(hotel)}
>
  Book Now
</button>
              </div>
            </div>


         </div>

  
  
        ))
        
      }
  
  </div>

    </div>
    </>
  )
}

export default Hotels
