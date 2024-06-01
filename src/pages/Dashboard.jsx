import CardComponent from "@/components/CardComponent";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SERVER_LINK } from "@/constant";
import UserInfo from "@/components/UserInfo";
import PostCard from "@/components/PostCard";
import DropDown from "@/components/DropDown";
import InterestButton from "@/components/InterestButton";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputField";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import AlertBox from "@/components/AlertBox";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.auth.userData);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState("");
  const [alertDialouge, setAlertDialouge] = useState(false);

  useEffect(() => {
    if (user?.designation === "seller") {
      async function fetchMyPost() {
        setLoading(true);
        try {
          setLoading(true);
          const res = await axios({
            url: `${SERVER_LINK}/get/my-post`,
            method: "get",
            withCredentials: true,
          });
          console.log("Seller", res);
          setData(res?.data?.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }

      fetchMyPost();
    }
    if (user?.designation === "buyer") {
      async function fetchAllPost() {
        try {
          setLoading(true);
          const res = await axios({
            url: `${SERVER_LINK}/get/all-post`,
            method: "get",
            withCredentials: true,
          });
          //console.log("Buyer", res.data.data);
          setData(res.data.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }

      fetchAllPost();
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  async function filterData({ city, address }) {
    //console.log(data.city);
    setLoading(true);
    try {
      setLoading(true);
      let res;
      if (address.length > 0) {
        res = await axios({
          url: `${SERVER_LINK}/get/filter/${city?.toLowerCase()}/${address}`,
          method: "get",
          withCredentials: true,
        });
      }
      res = await axios({
        url: `${SERVER_LINK}/get/filter/${city?.toLowerCase()}/""`,
        method: "get",
        withCredentials: true,
      });
      console.log("filter", res?.data?.data);
      setData(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setRes(error?.response?.data?.message || "Something is wrong");
      setAlertDialouge(true);
    } finally {
      setLoading(false);
    }
  }

  //console.log(data);

  if (!authStatus) {
    navigate("/login");
  }

  if (user?.designation === "seller") {
    return (
      <div className="flex flex-col gap-5 justify-center">
        <Link
          to={"/post-create"}
          className="w-[20rem] sm:w-[30rem] text-center border-[1px] py-4 rounded-full hover:bg-sky-950"
        >
          Make A Post
        </Link>
        <h3 className="text-center text-[25px]">My Posts</h3>
        {data.map((post, index) => (
          <PostCard
            key={index}
            title={
              <div className="flex justify-between">
                <UserInfo
                  firstName={user?.firstName}
                  lastName={user?.lastName}
                />
                <DropDown deletePostId={post?._id} post={post?._id} />
              </div>
            }
            homeName={post?.homeName}
            floor={post?.floor}
            numberOfBedroom={post?.numberOfBedroom}
            numberOfKitchen={post?.numberOfKitchen}
            homeSize={post?.homeSize}
            numberOfBathroom={post?.numberOfBathroom}
            numberOfDiningRoom={post?.numberOfDiningRoom}
            haveAnyGarden={post?.haveAnyGarden}
            numberOfBalcony={post?.numberOfBalcony}
            haveTerrace={post?.haveTerrace}
            howOldTheHouse={post?.howOldTheHouse}
            moreDetails={post?.moreDetails}
            address={post?.address}
            landMark={post?.landMark}
            nearByPlace={post?.nearByPlace}
            howFarFromNearestHospital={post?.howFarFromNearestHospital}
            rent={post?.rent}
            otherCharges={post?.otherCharges}
            totalRent={post?.totalRent}
            city={post?.city}
            district={post?.district}
            state={post?.state}
            date={post?.date}
          ></PostCard>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 justify-center">
      {res && (
        <AlertBox
          open={alertDialouge}
          setAlertDialouge={setAlertDialouge}
          title={res}
        />
      )}
      <form
        className="flex space-x-2 items-center"
        onSubmit={handleSubmit(filterData)}
      >
        <InputField
          {...register("city")}
          className="w-[5rem]"
          placeholder="City"
        />
        <InputField
          {...register("address")}
          className="w-[10rem]"
          placeholder="Address"
        />
        <Button type="submit" className="h-[2.3rem] rounded-full">
          Find
        </Button>
      </form>
      {data.reverse().map((post, index) => (
        <PostCard
          key={index}
          title={
            <UserInfo
              firstName={post?.sellerId?.firstName}
              lastName={post?.sellerId?.lastName}
            />
          }
          homeName={post.homeName}
          floor={post.floor}
          numberOfBedroom={post?.numberOfBedroom}
          numberOfKitchen={post?.numberOfKitchen}
          homeSize={post?.homeSize}
          numberOfBathroom={post?.numberOfBathroom}
          numberOfDiningRoom={post?.numberOfDiningRoom}
          haveAnyGarden={post?.haveAnyGarden}
          numberOfBalcony={post?.numberOfBalcony}
          haveTerrace={post?.haveTerrace}
          howOldTheHouse={post?.howOldTheHouse}
          moreDetails={post?.moreDetails}
          address={post?.address}
          landMark={post?.landMark}
          nearByPlace={post?.nearByPlace}
          howFarFromNearestHospital={post?.howFarFromNearestHospital}
          rent={post?.rent}
          otherCharges={post?.otherCharges}
          totalRent={post?.totalRent}
          city={post?.city}
          district={post?.district}
          state={post?.state}
          date={post?.date}
        >
          <InterestButton postId={post?._id} />
        </PostCard>
      ))}
    </div>
  );
}

export default Dashboard;
