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

function PostCreate() {
  const auth = useSelector((state) => state.auth.status);
  const data = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState("");
  const [alertDialouge, setAlertDialouge] = useState(false);
  const [loading, setLoading] = useState(false);
  const userData = useSelector((state)=> state.auth.userData)

  //console.log(auth);
  //console.log(data);

  useEffect(() => {
    if (auth === false) {
      navigate("/login");
    }
  }, [auth]);

  async function createPost(data) {
    //console.log(data);
    try {
      setLoading(true);
      const response = await axios({
        url: `${SERVER_LINK}/post/create-post`,
        data: data,
        method: "post",
        withCredentials: true,
      });
      setRes(response?.data?.message);
      setAlertDialouge(true);
    } catch (error) {
      setRes(error?.response?.data?.message || "Something is wrong");
      setAlertDialouge(true);
    } finally {
      setLoading(false);
    }
  } 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {res && (
        <AlertBox
          open={alertDialouge}
          setAlertDialouge={setAlertDialouge}
          title={res}
        />
      )}
      <CardComponent
        title={
          <>
            <UserInfo
            firstName={userData?.firstName}
            lastName={userData?.lastName}
            />
            <p className="text-[12px] mt-2 font-xl opacity-65">Share Your Property Details</p>
          </>
        }
      >
        <div>
          <form
            onSubmit={handleSubmit(createPost)}
            className="space-y-5 flex flex-col justify-center"
          >
            <InputField
              label={"House Name"}
              type={"text"}
              {...register("homeName")}
            />
            <InputField
              label={"Which Floor"}
              type={"text"}
              {...register("floor")}
            />
            <InputField
              label={"How Many Bedrooms"}
              type={"number"}
              {...register("numberOfBedroom")}
            />
            <InputField
              label={"How Many Kitchen"}
              type={"number"}
              {...register("numberOfKitchen")}
            />
            <InputField
              label={"Size Of Home (BHK)"}
              type={"number"}
              {...register("homeSize")}
            />
            <InputField
              label={"How Many Bathroom"}
              type={"number"}
              {...register("numberOfBathroom")}
            />
            <InputField
              label={"How Many Dining Room"}
              type={"number"}
              {...register("numberOfDiningRoom")}
            />
            <InputField
              label={"Is There Any Garden"}
              type={"checkbox"}
              {...register("haveAnyGarden")}
            />
            <InputField
              label={"How Many Balcony"}
              type={"number"}
              {...register("numberOfBalcony")}
            />
            <InputField
              label={"Is There Any Accessable Terrace"}
              type={"checkbox"}
              {...register("haveTerrace")}
            />
            <InputField
              label={"How Old The House"}
              type={"text"}
              {...register("howOldTheHouse")}
            />
            <InputField
              label={"Address"}
              type={"text"}
              {...register("address")}
            />
            <InputField
              label={"City"}
              type={"text"}
              {...register("city")}
            />
            <InputField
              label={"District"}
              type={"text"}
              {...register("district")}
            />
            <InputField
              label={"State"}
              type={"text"}
              {...register("state")}
            />
            <InputField
              label={"Landmark"}
              type={"text"}
              {...register("landMark")}
            />
            <InputField
              label={"Nearby Place"}
              type={"text"}
              {...register("nearByPlace")}
            />
            <InputField
              label={"How Far From The Hospital(in minutes)"}
              type={"text"}
              {...register("howFarFromNearestHospital")}
            />
            <InputField
              label={"Rent(in thousand)"}
              type={"number"}
              {...register("rent")}
            />
            <InputField
              label={"Other Charges"}
              type={"number"}
              {...register("otherCharges")}
            />
            <InputField
              label={"Total Rent(per month)"}
              type={"number"}
              {...register("totalRent")}
            />
            <TextArea
              label="More About The House"
              {...register("moreDetails")}
            />
            <Button type="submit">Post</Button>
          </form>
        </div>
      </CardComponent>
    </div>
  );
}

export default PostCreate;
