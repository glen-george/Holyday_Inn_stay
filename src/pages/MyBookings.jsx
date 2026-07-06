import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";



import { getBookings, deleteBooking } from "../services/allAPI";
import Header from "../components/Header";

function MyBookings() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const fetchData = async () => {
    const result = await getBookings();

    const myBookings = result.data.filter((item) => item.email === user.email);

    setBookings(myBookings);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeBooking = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this booking?",
    );

    if (confirmDelete) {
      await deleteBooking(id);
      fetchData();
    }

   
  };

  return (

    
    <>
      <div className="container mt-4" >
        <h2>My Bookings</h2>
  
        {bookings.length > 0 ? (
          bookings.map((item) => (
            <div key={item.id} className="card col-12 col-md-6 col-lg-4 mb-4">
              <img
                src={item.hotelImage}
                alt={item.hotelName}
                style={{ width: "200px", height: "150px", objectFit: "cover" }}
              />
  
              <h5 className="mt-3">{item.hotelName}</h5>
              <p> <strong>Customer:</strong> {item.customer} </p>
              <p> <strong>Room Type:</strong> {item.room}</p>
              <p><strong>Location:</strong> {item.location}</p>
              <p><strong>Check In:</strong> {item.checkIn}</p>
              <p><strong>Check Out:</strong> {item.checkOut}</p>
              <p><strong>Guests:</strong> {item.guests}</p>
              <p><strong>Price:</strong> ₹{item.price}</p>
              <p><strong>Status:</strong> {item.status} </p>
               <button className="btn btn-outline-warning mb-2" onClick={() => navigate(`/booking/${item.id}`, {state: { booking: { ...item }, edit: true,},})}>Edit</button>
              <button  className="btn btn-danger" onClick={() => removeBooking(item.id)}>Cancel Booking</button> </div>))) : (
          <p>No bookings found.</p>
        )}
         <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>Back</button>
      </div>
    </>
  );
}

export default MyBookings;
