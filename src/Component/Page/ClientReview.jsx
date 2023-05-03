import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image from "/public/OIP.jpg"
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ClientReview = () => {
  const [client,setClient] = useState([])
  const [ratings, setRatings] = useState(0);

  useEffect(() => {
    fetch("https://dragons-kitchen-server-akram409.vercel.app/reviewData")
    .then(res => res.json())
    .then(data => setClient(data))
  },[])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-32 mb-32">
      <h1 className="text-4xl font-bold mb-10 text-center">Client Review</h1>
    <Slider className="" {...settings}>
    {client.map(cl => 
    <div className="card px-3"><div className=" bg-base-100 shadow-2xl  ">
    <figure className="img-fluid w-full h-1/2" >
      <img
        className="w-1/2 h-full"
        src={image}
        alt=""
      />
    </figure>
    <div className="card-body">
      <h2 className="text-3xl font-bold">{cl.client_name}</h2>
      <p className=""><strong>Review</strong>: {cl.review}</p>
      <div className="flex mb-2 items-center gap-1">
        <div>
          <p>
            <strong>Rating : </strong>
            {cl.rating}
          </p>
        </div>
        <Rating
          style={{ maxWidth: 130 }}
          value={cl.rating}
          readOnly
        />
      </div>
    </div>
  </div></div>)}
   </Slider>
  </div>
  );
};

export default ClientReview;
