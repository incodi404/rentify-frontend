import React, { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import AlertBox from "./AlertBox";
import axios from "axios";
import { SERVER_LINK } from "@/constant";

function DeleteButton({ deletePostId }) {
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState("");
  const [alertDialouge, setAlertDialouge] = useState(false);

  async function deletePost() {
    try {
      setLoading(true);
      const response = await axios({
        url: `${SERVER_LINK}/post/delete-post`,
        data: {
          postId: deletePostId,
        },
        method: "delete",
        withCredentials: true,
      });
      console.log(response);
      setRes(response?.data?.message);
      setAlertDialouge(true);
    } catch (error) {
      console.log(error);
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
    <>
      {res && (
        <AlertBox
          open={alertDialouge}
          setAlertDialouge={setAlertDialouge}
          title={res}
        />
      )}
      <Link onClick={deletePost} className="text-red-600 w-full">
        Delete
      </Link>
    </>
  );
}

export default DeleteButton;
