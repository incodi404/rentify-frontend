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
import { useNavigate, useParams } from "react-router-dom";
import InputField from "@/components/InputField";
import TextArea from "@/components/TextArea";

function UpdatePage() {
  const userData = useSelector((state) => state.auth.userData);
  const authStatus = useSelector((state) => state.auth.status);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState("");
  const { postId } = useParams();
  const [postData, setPostData] = useState({})
  const [alertDialouge, setAlertDialouge] = useState(false);

  if (!authStatus) {
    useNavigate("/login");
  }

  //console.log(postId);

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        const response = await axios({
          url: `${SERVER_LINK}/get/post/${postId}`,
          method: "get",
          withCredentials: true,
        });
        setPostData(response?.data?.data)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetch()
  }, []);

  async function updatePost(data) {
    //console.log(data);
    try {
      setLoading(true);
      const response = await axios({
        url: `${SERVER_LINK}/post/update-post`,
        data: {...data, postId: postId},
        method: "put",
        withCredentials: true,
      });
      console.log(response);
      if(response?.data?.data?.modifiedCount === 0) {
        setRes("Post not updated");
        setAlertDialouge(true);
      }
      if(response?.data?.data?.modifiedCount === 1) {
        setRes("Post updated");
        setAlertDialouge(true);
      }
      // setRes(response?.data?.message);
      // setAlertDialouge(true);
    } catch (error) {
      console.log(error);
      // setRes(error?.response?.data?.message || "Something is wrong");
      // setAlertDialouge(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h3 className="text-center mb-5 text-[20px]">Update</h3>
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
            <p className="text-[12px] mt-2 font-xl opacity-65">
              Share Your Property Details
            </p>
          </>
        }
      >
        <div>
          <form
            onSubmit={handleSubmit(updatePost)}
            className="space-y-5 flex flex-col justify-center"
          >
            <InputField
              label={"House Name"}
              type={"text"}
              placeholder={postData?.homeName}
              {...register("homeName")}
            />
            <InputField
              label={"Which Floor"}
              type={"text"}
              placeholder={postData?.floor}
              {...register("floor")}
            />
            <InputField
              label={"How Many Bedrooms"}
              type={"number"}
              placeholder={postData?.numberOfBedroom}
              {...register("numberOfBedroom")}
            />
            <InputField
              label={"How Many Kitchen"}
              type={"number"}
              placeholder={postData?.numberOfKitchen}
              {...register("numberOfKitchen")}
            />
            <InputField
              label={"Size Of Home (BHK)"}
              type={"number"}
              placeholder={postData?.homeSize}
              {...register("homeSize")}
            />
            <InputField
              label={"How Many Bathroom"}
              type={"number"}
              placeholder={postData?.numberOfBathroom}
              {...register("numberOfBathroom")}
            />
            <InputField
              label={"How Many Dining Room"}
              type={"number"}
              placeholder={postData?.numberOfDiningRoom}
              {...register("numberOfDiningRoom")}
            />
            <InputField
              label={"Is There Any Garden"}
              type={"checkbox"}
              placeholder={postData?.haveAnyGarden}
              {...register("haveAnyGarden")}
            />
            <InputField
              label={"How Many Balcony"}
              type={"number"}
              placeholder={postData?.numberOfBalcony}
              {...register("numberOfBalcony")}
            />
            <InputField
              label={"Is There Any Accessable Terrace"}
              type={"checkbox"}
              placeholder={postData?.haveTerrace}
              {...register("haveTerrace")}
            />
            <InputField
              label={"How Old The House"}
              type={"text"}
              placeholder={postData?.howOldTheHouse}
              {...register("howOldTheHouse")}
            />
            <InputField
              label={"Address"}
              type={"text"}
              placeholder={postData?.address}
              {...register("address")}
            />
            <InputField
              label={"City"}
              type={"text"}
              placeholder={postData?.city}
              {...register("city")}
            />
            <InputField
              label={"District"}
              type={"text"}
              placeholder={postData?.district}
              {...register("district")}
            />
            <InputField
              label={"State"}
              type={"text"}
              placeholder={postData?.state}
              {...register("state")}
            />
            <InputField
              label={"Landmark"}
              type={"text"}
              placeholder={postData?.landMark}
              {...register("landMark")}
            />
            <InputField
              label={"Nearby Place"}
              type={"text"}
              placeholder={postData?.nearByPlace}
              {...register("nearByPlace")}
            />
            <InputField
              label={"How Far From The Hospital(in minutes)"}
              type={"text"}
              placeholder={postData?.howFarFromNearestHospital}
              {...register("howFarFromNearestHospital")}
            />
            <InputField
              label={"Rent(in thousand)"}
              type={"number"}
              placeholder={postData?.rent}
              {...register("rent")}
            />
            <InputField
              label={"Other Charges"}
              type={"number"}
              placeholder={postData?.otherCharges}
              {...register("otherCharges")}
            />
            <InputField
              label={"Total Rent(per month)"}
              type={"number"}
              placeholder={postData?.totalRent}
              {...register("totalRent")}
            />
            <TextArea
              label="More About The House"
              placeholder={postData?.moreDetails}
              {...register("moreDetails")}
            />
            <Button type="submit">Post</Button>
          </form>
        </div>
      </CardComponent>
    </div>
  );
}

export default UpdatePage;
