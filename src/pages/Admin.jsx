import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import {  addHotel, getHotels, deleteHotel ,updateHotel,getBookings } from "../services/allAPI";

function Admin()
 {

  const [hotel, setHotel] = useState({
    name: "",
    location: "",
    price: "",
    image: ""
    
  });




const [hotels, setHotels] = useState([]);

const [editId,setEditId] = useState(null);

const [bookings, setBookings] = useState([]);


  // Admin login
const handleAdminLogin = () => {
  localStorage.setItem(
    "currentUser",
    JSON.stringify({
      email: "admin@gmail.com",
      role: "admin"
    })
  );

  navigate("/admin");
};



  const fetchHotels = async () => {
    const result =
      await getHotels();

    setHotels(result.data);
  };




  const fetchBookings = async () => {
  const result = await getBookings();
  console.log(result.data);
  setBookings(result.data);
       };


  useEffect(() => {
    fetchHotels();
  }, []);


useEffect(() => {
  fetchHotels();
  fetchBookings();
}, []);



// add new hotel
  const addNewHotel = async () => {
    await addHotel(hotel);
    fetchHotels();
    setHotel({
    name: "",
    location: "",
    price: "",
    image :"",
    
  });
 
 };


// to edit hotel
 const handleEdit = (hotel) => {
  setHotel({
    name: hotel.name,
    location: hotel.location,
    price: hotel.price,
    image:hotel.image,
  });

  setEditId(hotel.id);
};




// hotel update function
const updateExistingHotel = async () => {
  await updateHotel(editId, hotel);

  fetchHotels();

  setHotel({
    name: "",
    location: "",
    price: "",
    image :"",
  });

  setEditId(null);
};

  const removeHotel = async (id) => {

    await deleteHotel(id);

    fetchHotels();
  };



  return (
    <div className="container-fluid px-3 px-md-5">

      <h2 className="mt-5 text-center text-success mb-5">Admin Dashboard</h2>

     <div className="row justify-content-center">
      
      <div className="col-12 col-lg-6"><input type="text"  placeholder="Hotel Name" className="form-control my-2"  value={hotel.name}  onChange={(e) =>setHotel({ ...hotel, name: e.target.value}) } /></div>
  
      <div className="col-12 col-lg-6">  <input type="text" placeholder="Location"className="form-control  my-2" value={hotel.location}  onChange={(e) => setHotel({ ...hotel, location: e.target.value})}/></div>
  
       <div className="col-12 col-lg-6"> <input type="number"placeholder="Price"className="form-control  my-2" value={hotel.price}  onChange={(e) => setHotel({ ...hotel, price: e.target.value })}/></div>
  
     </div>

    <input type="text-center mt-3" placeholder="Image URL" className="form-control  my-2" value={hotel.image}onChange={(e) =>setHotel({ ...hotel, image: e.target.value })}/>

      {
        editId ?(<button onClick={updateExistingHotel} className="btn btn-warning " > Update Hotel</button>):(<button onClick={addNewHotel} className="btn btn-outline-success" > Add Hotel</button>)
      }


      <hr />

      


    <div className="row mt-3 mb-3">
    {
      hotels.map((item) => (


          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4 ">


            <div  className="card h-300  shadow">
               <img src={item.image} alt={item.name} className="card-img-top"style={{ height: "200px",  objectFit: "cover"}}/>
             
                <div className="card-body">
                  <h5 className=" fw-bolder">{item.name}</h5>
                  <p>{item.location}</p>
                  <h3 >₹{item.price}</h3>
                  <div className="d-flex flex-column flex-md-row gap-2">
                    <button className="btn btn-primary w-100" onClick={() => handleEdit(item)}>Edit </button>
                   <button className="btn btn-danger w-100" onClick={() => removeHotel(item.id) }> Delete Hotel</button>
                  </div>
                </div>
           



            </div>
            
          </div>

      ))
      
      }
      </div>


      <h3 className="mt-5 text-center">Customer Booking Details </h3>

<div className="table-responsive mt-4">
  <table className="table table-bordered table-striped">
    <thead className="table-dark">
      <tr>
        <th>#</th>
        <th>Customer</th>
        <th>Email</th>
        <th>Hotel</th>
        <th>Location</th>
        <th>Check In</th>
        <th>Check Out</th>
        <th>Guests</th>
      </tr>
    </thead>

    <tbody>
      {bookings.map((booking, index) => (
        <tr key={booking.id}>
          <td>{index + 1}</td>
          <td>{booking.customer}</td>
          <td>{booking.email}</td>
          <td>{booking.hotelName}</td>
          <td>{booking.location}</td>
          <td>{booking.checkIn}</td>
          <td>{booking.checkOut}</td>
          <td>{booking.guests}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>





    </div>
  );
}

export default Admin;