import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import img_1 from "../assets/img-2.jpg";
import email_svg from "../assets/email.svg";

function Landing() {

  const indianCities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Jaipur",
    "Ahmedabad",
    "Lucknow",
    "Surat",
    "Kanpur",
    "Nagpur",
    "Visakhapatnam",
    "Indore",
    "Thane",
    "Bhopal",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Faridabad",
    "Meerut",
    "Rajkot",
    "Varanasi",
    "Srinagar",
    "Aurangabad",
    "Dhanbad"
  ];
  

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col justify-around w-full xl:flex-row space-x-10 items-center h-[90vh] mb-10">
        <div className="w-[20rem] sm:w-[40rem]">
          <h1 className="text-[6vh] font-bold">When Rent Meets Simplicity</h1>
          <p className="text-gray-500 mt-5">
            Welcome to <span className="text-pink-600 font-bold">Rentify</span>,
            your ultimate destination for seamless home rentals. Whether you're
            a buyer seeking the perfect rental home or a seller looking for
            reliable tenants, we connect you effortlessly. Explore our extensive
            listings, detailed property descriptions, and user-friendly
            interface to find your ideal match. RentFinder makes renting simple,
            efficient, and stress-free.
          </p>
          <Button className="mt-5 mb-20 sm:mb-5">
            <Link to={"/signin"} className="w-full">
              Create An Account
            </Link>
          </Button>
        </div>
        <img
          src={img_1}
          className="h-[70vh] w-[20rem] sm:w-[50rem] rounded-full"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-around w-full space-x-20 mt-[3rem] xl:flex-row items-center h-[30rem]">
        <img src={email_svg} className="w-[20rem] sm:w-[20rem]" alt="" />
        <div className="w-[20rem] sm:w-[40rem] text-right p-3">
          <div className="text-[7vh] font-bold mt-10 mb-10">
            Get Email Update
          </div>
          <p className="text-gray-500">
            Experience <span className="text-pink-600 font-bold">Rentify</span>{" "}
            bespoke email updates, tailored for both sellers and owners.
            Discover captivating property details and curated tenant profiles
            effortlessly. Elevate your renting journey with seamless
            communication and personalized notifications.
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row space-x-20 items-center justify-around w-full mt-[17rem] xl:mt-[7rem]">
        <div className="text-[7vh] font-bold text-center mb-10">Find By Location</div>
        <div className="flex flex-wrap gap-5 w-[21rem] sm:w-[50rem]">
          {indianCities.map((city)=>(
            <section className="bg-gray-800 space-x-10 p-5 rounded-xl hover:bg-gray-600">{city}</section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
