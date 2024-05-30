import React, { useState } from "react";
import { Button } from "./ui/button";
import { BsSend } from "react-icons/bs";
import axios from "axios";
import { SERVER_LINK } from "@/constant";
import AlertBox from "@/components/AlertBox";
import { BsCheckCircleFill } from "react-icons/bs";

function InterestButton({ postId }) {
  const [res, setRes] = useState("");
  const [alertDialouge, setAlertDialouge] = useState(false);
  const [loading, setLoading] = useState(false);

  async function interested() {
    //console.log("hi");
    try {
      setLoading(true);
      const response = await axios({
        url: `${SERVER_LINK}/user/interested`,
        data: {
          postId,
        },
        method: "post",
        withCredentials: true,
      });
      //console.log(response);
      setRes(response?.data?.data);
      setAlertDialouge(true);
    } catch (error) {
      //console.log(error);
      setRes(error?.response?.data?.message || "Something is wrong");
      setAlertDialouge(true);
    } finally {
      setLoading(false);
    }
  }

  //console.log(postId);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {res && (
        <AlertBox
          open={alertDialouge}
          setAlertDialouge={setAlertDialouge}
          title={""}
        >
          <div className="flex flex-col justify-center items-center mb-3">
            <BsCheckCircleFill className="text-center text-[40px] text-green-500 mb-5" />
            <p className="opacity-80">
              Owner is{" "}
              <span className="opacity-100 uppercase">{`${res?.seller?.firstName} ${res?.seller?.lastName}`}</span>
            </p>
            <p className="opacity-80">
              Email: <span className="opacity-100">{res?.seller?.email}</span>
            </p>
            <p className="opacity-80">
              Phone: <span className="opacity-100">{res?.seller?.phone}</span>
            </p>
          </div>
          <div className="p-[0.8px] w-full bg-slate-700"></div>
          <p className="mt-3 text-[13px] text-center">Owner Information Has Been Sent To Your Email</p>
        </AlertBox>
      )}
      <Button onClick={interested} className="w-full text-[18px]">
        <BsSend className="mr-2 text-[18px]" /> I'm interested
      </Button>
    </>
  );
}

export default InterestButton;
