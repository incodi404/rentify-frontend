import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import img_1 from "../assets/img-2.jpg";
import img_2 from "../assets/img-1.jpg";
import img_3 from "../assets/img-3.jpg";
import img_4 from "../assets/img-4.jpg";
import img_5 from "../assets/img-5.jpg";
import img_6 from "../assets/img-6.jpg";
import img_7 from "../assets/img-7.jpg";
import logo from "../assets/Colfessions.png";
import email_svg from "../assets/email.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    "Dhanbad",
  ];

  return (
    <div className="w-[90vw]">
      <div className="w-full flex justify-around items-center flex-col xl:flex-row mt-[5rem]">
        <div>
          <h1 className="text-[6vh] font-bold">Where Rent Meets Simplicity</h1>
          <p className="text-gray-500 mt-5 w-[20rem] sm:w-[40rem]">
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
          className="h-[40vh] sm:h-[70vh] w-[20rem] sm:w-[50rem] rounded-full"
          alt=""
        />
      </div>
      <div className="w-full space-y-20 xl:space-y-0 flex justify-around items-center flex-col xl:flex-row xl:space-x-[10rem] px-5 py-20 mt-[5rem]">
        <img src={img_2} alt="" className="w-[40rem] rounded-2xl" />
        <p className="w-[80vw] p-3 text-[18px] opacity-60 m-0">
          Discover your next home effortlessly with our rent-finding website! We
          offer a seamless experience with advanced search filters, real-time
          listings, and virtual tours. Our user-friendly platform ensures you
          find the perfect rental that fits your lifestyle and budget. Start
          your search today and move into your dream home tomorrow!
        </p>
      </div>
      <h2 className="text-[35px] font-bold text-center mt-5 mb-20">
        Available Properties
      </h2>
      <div className="w-full flex justify-center items-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[80%]"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src={img_3} alt="" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src={img_4} alt="" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src={img_5} alt="" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src={img_6} alt="" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src={img_7} alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="w-full space-y-20 xl:space-y-0 flex justify-around items-center flex-col xl:flex-row xl:space-x-[10rem] px-5 py-20 mt-[5rem]">
        <div className="flex flex-col justify-center items-center">
          <img src={email_svg} className="w-[15rem]" alt="" />
          <div className="w-[20rem] sm:w-[40rem] text-right p-3">
            <div className="text-[5vh] font-bold mt-10 mb-10 text-center">
              Get Email Update
            </div>
            <p className="text-gray-500 text-center">
              Experience{" "}
              <span className="text-pink-600 font-bold">Rentify</span> bespoke
              email updates, tailored for both sellers and owners. Discover
              captivating property details and curated tenant profiles
              effortlessly. Elevate your renting journey with seamless
              communication and personalized notifications.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full space-y-20 xl:space-y-0 flex justify-around items-center flex-col xl:flex-row xl:space-x-[2rem] px-5 py-20">
        <img src={logo} alt="" className="rounded-full" />
        <div className="flex flex-col space-y-[2rem]">
          <p className="text-gray-500 mt-5 w-[20rem] sm:w-[40rem]">
            Join our platform to effortlessly list your rental property and find
            the perfect tenant, or explore thousands of rental listings tailored
            to your needs. With advanced search options by address, finding or
            listing your ideal rental is just a click away. Create an account
            today and unlock the best rental opportunities!
          </p>
          <Button className="mt-5 mb-20 sm:mb-5 w-[10rem]">
            <Link to={"/signin"} className="w-full">
              Create An Account
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
