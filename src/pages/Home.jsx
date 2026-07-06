import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";





function Home() {


  const brands =[{
    image :"https://images.unsplash.com/photo-1566073771259-6a8506099945",
    name:"EVEN Hotels",
    description:"Experience a premium stay with spaces designed for relaxation, dining options featuring fresh and flavourful selections and best-in-class fitness facilities.",
    link:"/",

  },{
    image :"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    name:"Holiday Inn",
    description:"Experience a premium stay with spaces designed for relaxation, dining options featuring fresh and flavourful selections and best-in-class fitness facilities.",
    link:"/",

  },{
    image :"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    name:"InterContinental",
    description:"Luxury hotels and resorts offering world-class hospitality and premium experiences.",
    link:"/",
  },
  {
    
    image :"https://cf.bstatic.com/xdata/images/hotel/max1024x768/717748142.jpg?k=bc112a1a99d4a1a946c7ef32651dcc0ed067f802fc82b50920216b3ae03fc092&o=",
    name:"Grand Hyatt",
    description:"Experience timeless luxury, global sophistication, and exceptional hospitality with InterContinental Hotels & Resorts.",
    link:"/",
  }
  
];

const roomImages = [
    "https://assets.simplotel.com/simplotel/image/upload/x_0,y_201,w_1776,h_998,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/the-residency-chennai/Suite(403)_-_Bedroom(out-in)?1780012800041",

    "https://www.jaypeehotels.com/blog/wp-content/uploads/2024/09/Blog-6-scaled.jpg",

    "https://bookyourluxuryhotelsuite.com/wp-content/uploads/2018/12/Deluxe_Suite_Gulf_Hotel_Bahrain-1024x768.jpg",

    "https://www.royalorchidhotels.com/images/OverviewImage/03_Feb_2023_08_04_15acc.jpg",

    "https://images.trvl-media.com/lodging/118000000/117850000/117843300/117843205/f7e052c6.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",

    "https://images.trvl-media.com/lodging/16000000/15360000/15350800/15350701/a0c7b869.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_t-S5GraRJj4EpRn_eqoCG3PYzUyyyGYOWA&s",

    "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2023/02/28/0141/DELRD-P0377-King-Bed.jpg/DELRD-P0377-King-Bed.16x9.jpg",
  ];


// testimonisals
  const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28EoPy4AouT82GICrSYAez3HHCYYfYKmisg&s",
  "https://img.magnific.com/premium-photo/confident-manager-portrait_53419-2687.jpg?semt=ais_hybrid&w=740&q=80",
  "https://img.magnific.com/free-photo/horizontal-portrait-beautiful-cheerful-young-female-model-with-bobbed-hairstyle-pleasant-gentle-smile-healthy-skin-wears-green-sweater_273609-3528.jpg?semt=ais_hybrid&w=740&q=80",
  "https://img.magnific.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?semt=ais_hybrid&w=740&q=80",
  "https://img.magnific.com/free-photo/happy-businessman-smiling-camera_1163-4660.jpg?semt=ais_hybrid&w=740&q=80",
  "https://img.magnific.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740&q=80",
  "https://img.magnific.com/premium-photo/portrait-business-woman-with-smile-consultant-confidence-with-startup-success-formal-j_807701-13967.jpg?semt=ais_hybrid&w=740&q=80",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTordMp6FGjSOsfhgzjDa0SAGAh7I9UP7f9XJFdmVFA7vbfU4z68lWj5XE&s=10"

];
const [currentIndex ,setcurrentIndex ] = useState(0)

const [selectedImage, setSelectedImage] = useState(null);


const nextSlide = ()=>{
        setcurrentIndex((prev)=>{
      return    prev === brands.length-1 ? 0 : prev + 1
        })

}


const prevSlide = ()=>{
  setcurrentIndex((prev)=>{
   return prev === 0 ? brands.length-1 :prev - 1 ;

  })
}



  return (
    <>

  

    {/* hero section */}
      <section className="hero-banner">
        <div className="hero-bg">

          
         <div className="container">
           <div  className="row align-items-center">
            
              <div className="col-lg-6 col-12">
              <div className="banner_content">
                <h1 className="hero-title" style={{fontWeight:"bolder"}}>Find your better Stay!!</h1>
                <p className="mt-3" style={{fontSize:"20px"}}>Find the best for you</p>
    
                <div className=" text-center">
                  <h3 className="text-success fw-bolder ">HolidayInn</h3>
                  <Link
                    to="/hotels"
                    className="explore_btn"
                    style={{ textDecoration: "none" }}
                  >
                    Explore Hotels
                  </Link>
                </div>
              </div>
              </div>
             
              <div className="col-lg-6 col-12">
                <img
        src="https://digital.ihg.com/is/image/ihg/holiday-inn-chennai-5090399241-4x3"
        alt="Hotel"
        style={{maxHeight:"450px",objectFit:"cover"}} className="img-fluid rounded shadow"
      />
              </div>
           </div>
         </div>


        </div>
      </section>

      {/* about Holiday inn kochi  */}
      <div className="container mb-5">
        <h1 className="text-center my-5 font-bolder  text-success" style={{fontWeight:"700"}}>Explore Kochi in Style at HolidayInn Cochin</h1>
        <div className="row ">
         <div className="col-lg-1"></div>
          <div className="col-lg-5 col-12">
            <p>Welcome to the enchanting world of Holiday Inn Cochin, where every moment is designed to nurture the soul of the urban traveller. Nestled amidst the pulsating IT hub (Infopark), Smart City, and the iconic Lulu Mall, our oasis of tranquillity beckons those seeking respite from the everyday hustle and bustle.</p>
            <p>While Cochin is undeniably a bustling commercial hub, it is also a treasure trove of iconic temples and churches, each an architectural marvel steeped in history and spirituality. Yet, Cochin is more than a city; it is a gateway to the myriad wonders of God's own country.</p>
            <p>From business endeavours to leisure stays, this hotel near MG Road in Kochi is perfectly attuned to cater to your needs. Each of the five restaurants, lounge, and bar offers a fusion of regional delights and global cuisines, waiting to tantalise your palate. Or you can simply journey into serenity at our award-winning spa, a haven of relaxation and rejuvenation that invites the weary wanderer to find solace. Our 209 spacious rooms and suites create an ambience that feels like a home away from home.</p>
            <p>Let Holiday Inn Cochin, one of the family-friendly hotels in Kochi, be your guiding light as you uncover the wondrous secrets of this captivating city.</p>
            <p>Enjoy a comfortable and memorable stay at Holiday Inn, featuring modern rooms, excellent hospitality, convenient locations, delicious dining options, and amenities designed for both business and leisure travelers.</p>
          </div>
           <div className="col-lg-1"></div>
          <div className="col-lg-5 col-12">
            <img src="https://thumbs.dreamstime.com/b/young-men-women-share-relaxed-moment-hotel-room-engaging-laptops-mobile-phone-intimate-atmosphere-fosters-connection-446210517.jpg" alt="" style={{ maxHeight: "600px", objectFit: "cover" }} className=" img-fluid rounded shadow about-img " />

          </div>
        </div>
      </div>






{/* fixed image */}
<div className="fixed-bg"
style={{backgroundImage:'url("https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/04/a-happy-hotel-guest.jpg" )',minHeight: "80vh"}}>

  <div className="bg-tint">
 <div className="container ">
      <h2 className=" text-center fw-bolder   text-white">MORE WAYS TO SAVE ON YOUR STAY.</h2>
      <div className="card-grid">
        <div className="card">
          <h3>Great rates are just a click away</h3>
          <p>With IHG One Rewards, you can get access to our exclusive Member Rate..</p>
        </div>
  
         <div className="card">
           <h3>EBuy, gift, or transfer points</h3>
          <p>Enjoy endless possibilities with Points Purchase.</p>
        </div>
  
         <div className="card">
           <h3>Treat yourself to a Reward Night</h3>
          <p>Redeem your IHG One Rewards points for a Reward Night at our 7,000+ hotels and resorts around the world, starting at just 10,000 points.</p>
          
        </div>
      </div>  
   </div>
  </div>

</div>

{/* card images scroll section */}
<section className="images">
  <div className="container">
    <h1 className="section-title text-success">Rooms and Suite</h1>
    <p className="ms-4">Swipe to see more...</p>
    <div className="img-row">
       {roomImages.map((img, index) => (

              <div className="img-card" key={index}>
                <img src={img}  className="img-fluid" onClick={() => setSelectedImage(img)}/>
              </div>
            )
            )}


  {/* Popup Modal */}

      {  selectedImage  && 
        <div className="image-modal" onClick={() => setSelectedImage(null)} >
          <span className="close-btn">&times;</span>

          <img src={selectedImage} alt="Selected Room" className="modal-image" onClick={(e) => e.stopPropagation()}/>
        </div>
      }
     
    </div>

  </div>
</section>







{/* card slider */}

<section className="brands-section">
   <h2 className="brands-title"> Other IHG brands you'll love </h2>
    <div className="brand-card"> 
      <div className="brand-image"> 
        <img src={brands[currentIndex].image} alt="EVEN Hotels" /> 
        </div>


         <div className="brand-content">
           <h3>{brands[currentIndex].name}</h3>
            <p> {brands[currentIndex].description}</p> 
            
            <a href={brands[currentIndex].link}>{brands[currentIndex].name}&gt;</a>
             </div>

           </div>

               <div className="slider-btn">
                 <button onClick={prevSlide}>&lt;</button> <span>{currentIndex+ 1}/ {brands.length}</span> <button onClick={nextSlide}>&gt;</button>
               </div>
    </section>




<section>
  <div className="container my-5">
    <h3 className="text-center brands-title mb-5">
      Our Testimony
    </h3>

    <div className="row align-items-center">

      {/* Left Side */}
      <div className="col-lg-5 col-12 mb-4 mb-lg-0">
        <h3 className="mt-3">
          Trusted by Professionals Worldwide.
        </h3>

        <p className="mt-3">
          From check-in to check-out, everything was seamless. The room was clean,
          comfortable, and well-maintained. Excellent value for money!
        </p>

        <p>
          I booked this hotel online at the last minute and was pleasantly surprised.
          Great location, friendly staff, and excellent service throughout my stay.
        </p>

        <p>
          The hotel exceeded my expectations. The booking experience was hassle-free,
          and the amenities were exactly as advertised.
        </p>

        <p>
          I appreciated how smooth the reservation process was. The hotel offered
          excellent hospitality, and the overall experience was relaxing and memorable.
        </p>
      </div>

      <div className="col-lg-1 d-none d-lg-block"></div>

    
      <div className="col-lg-6 col-12">
        <div className="row">
          {images.map((img, index) => (
            <div
              key={index}
              className="col-4 col-md-3 mb-3 text-center"
            >
              <img
                src={img}
                alt=""
                className="img-fluid rounded-circle testimonial-img"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  );
}

export default Home;
