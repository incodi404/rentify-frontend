import AlertBox from "@/components/AlertBox";
import CardComponent from "@/components/CardComponent";
import UserInfo from "@/components/UserInfo";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { SERVER_LINK } from "@/constant";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputField from "@/components/InputField";
import TextArea from "@/components/TextArea";
import PostCard from "@/components/PostCard";

function MyProfile() {
  const auth = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.userData);
  const [data, setData] = useState([]);
  const [res, setRes] = useState("");
  const [alertDialouge, setAlertDialouge] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //console.log(auth);
  //console.log(data);

  useEffect(() => {
    if (auth === false) {
      navigate("/login");
    }
    if (user?.designation === "buyer") {
      async function fetch() {
        try {
          setLoading(true);
          const response = await axios({
            url: `${SERVER_LINK}/get/interested`,
            method: "get",
            withCredentials: true,
          });
          setData(response?.data?.data);
        } catch (error) {
          setRes(error?.response?.data?.message || "Something is wrong");
          setAlertDialouge(true);
        } finally {
          setLoading(false);
        }
      }

      fetch();
    }
  }, [auth]);

  async function deleteAccount() {
    //console.log(data.city);
    setLoading(true);
    try {
      setLoading(true);
      const res = await axios({
        url: `${SERVER_LINK}/user/delete-account`,
        method: "get",
        withCredentials: true,
      });
      //console.log("filter", res?.data?.data);
      setRes(res?.data?.message);
      setAlertDialouge(true);
    } catch (error) {
      console.log(error);
      setRes(error?.response?.data?.message || "Something is wrong");
      setAlertDialouge(true);
    } finally {
      setLoading(false);
    }
  }

  //console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user?.designation === "seller") {
    return (
      <div className="flex flex-col gap-5 justify-center">
        {res && (
          <AlertBox
            open={alertDialouge}
            setAlertDialouge={setAlertDialouge}
            title={res}
          />
        )}
        <div>
          <h3 className="text-center text-[25px] mb-4">My Profile</h3>
          <CardComponent
            title={
              <UserInfo firstName={user?.firstName} lastName={user?.lastName} />
            }
          >
            <div>
              <p className="opacity-70 flex flex-col sm:flex-row">
                Email:{" "}
                <span className="ml-0 mb-3 text-[15px] sm:ml-5 sm:text-[15px] sm:mb-2">
                  {user?.email}
                </span>
              </p>
              <p className="opacity-70">
                Phone: <span className="ml-4">{user?.phone}</span>
              </p>
              <p className="opacity-70">
                You are a {user?.designation}
              </p>
            </div>
            <Button className="mt-4 bg-red-600" onClick={deleteAccount}>
              Delete Account
            </Button>
          </CardComponent>
        </div>
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
      <div>
        <h3 className="text-center text-[25px] mb-4">My Profile</h3>
        <CardComponent
          title={
            <UserInfo firstName={user?.firstName} lastName={user?.lastName} />
          }
        >
          <div>
            <p className="opacity-70 flex flex-col sm:flex-row">
              Email:{" "}
              <span className="ml-0 mb-3 text-[15px] sm:ml-5 sm:text-[15px] sm:mb-2">
                {user?.email}
              </span>
            </p>
            <p className="opacity-70">
              Phone: <span className="ml-4">{user?.phone}</span>
            </p>
            <p className="opacity-70">
              You are a {user?.designation}
            </p>
          </div>
          <Button className="mt-4 bg-red-600" onClick={deleteAccount}>
            Delete Account
          </Button>
        </CardComponent>
      </div>
      <h3 className="text-center text-[25px]">My Interest</h3>
      {data.map((post, index) => (
        <PostCard
          key={index}
          title={
            <div className="flex justify-between">
              <UserInfo
                firstName={post?.seller?.firstName}
                lastName={post?.seller?.lastName}
              />
            </div>
          }
          homeName={post?.post?.homeName}
          floor={post?.post?.floor}
          numberOfBedroom={post?.post?.numberOfBedroom}
          numberOfKitchen={post?.post?.numberOfKitchen}
          homeSize={post?.post?.homeSize}
          numberOfBathroom={post?.post?.numberOfBathroom}
          numberOfDiningRoom={post?.post?.numberOfDiningRoom}
          haveAnyGarden={post?.post?.haveAnyGarden}
          numberOfBalcony={post?.post?.numberOfBalcony}
          haveTerrace={post?.post?.haveTerrace}
          howOldTheHouse={post?.post?.howOldTheHouse}
          moreDetails={post?.post?.moreDetails}
          address={post?.post?.address}
          landMark={post?.post?.landMark}
          nearByPlace={post?.post?.nearByPlace}
          howFarFromNearestHospital={post?.post?.howFarFromNearestHospital}
          rent={post?.post?.rent}
          otherCharges={post?.post?.otherCharges}
          totalRent={post?.post?.totalRent}
          city={post?.post?.city}
          district={post?.post?.district}
          state={post?.post?.state}
          date={post?.post?.date}
        ></PostCard>
      ))}
    </div>
  );
}

export default MyProfile;
