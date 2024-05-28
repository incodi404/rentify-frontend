import * as React from "react";

import InputField from "@/components/InputField";
import CardComponent from "@/components/CardComponent";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { SERVER_LINK } from "@/constant";
import AlertBox from "@/components/AlertBox";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SelectField from "@/components/SelectField";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [response, setResponse] = React.useState("");
  const [error, setError] = React.useState("");
  const [alertDialouge, setAlertDialouge] = React.useState(false);
  const [loading, setLoading] = React.useState(false)

  const signin = async (data) => {
    //console.log(data);
    try {
      setLoading(true)
      const res = await axios.post(
        `${SERVER_LINK}/user/email-verification`,
        data
      );
      setLoading(false)
      if (res.status === 200) {
        console.log(res.data.message)
        setResponse(res.data.message)
        setAlertDialouge(true)
      }
    } catch (error) {
      //console.log(error?.response?.data?.message);
      setResponse(error?.response?.data?.message)
      setAlertDialouge(true)
    }
  };

  if(loading) {
    return <div>loading...</div>
  }

  //console.log(error);

  return (
    <>
      {response && (
        <AlertBox
          open={alertDialouge}
          setAlertDialouge={setAlertDialouge}
          title={"Check your inbox and verify your email id"}
          description={response}
        />
      )}
      {response && (
        <AlertBox
          open={alertDialouge}
          setAlertDialouge={setAlertDialouge}
          title={response || "Something went wrong"}
        />
      )}
      <CardComponent
        title={"Create An Account"}
        description={"Make Finding Rent Easy"}
      >
        <form onSubmit={handleSubmit(signin)}>
          <div className="space-y-5 flex flex-col justify-center">
            <InputField
              label={"First Name"}
              type={"text"}
              {...register("firstName", {
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Should not contain any special character or number",
                },
              })}
            />
            {errors?.firstName && (
              <p className="text-[14px] text-red-600">
                {errors?.firstName?.message}
              </p>
            )}
            <InputField
              label={"Last Name"}
              type={"text"}
              {...register("lastName", {
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Should not contain any special character or number",
                },
              })}
            />
            {errors?.lastName && (
              <p className="text-[14px] text-red-600">
                {errors?.lastName?.message}
              </p>
            )}
            <InputField
              label={"Email"}
              type={"email"}
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email",
                },
              })}
            />
            {errors?.email && (
              <p className="text-[14px] text-red-600">
                {errors?.email?.message}
              </p>
            )}
            <InputField
              label={"Password"}
              type={"password"}
              {...register("password", {
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/,
                  message:
                    "Password must have minimum 1 capital letter, 1 number, 1 special character. Password length should be minimum 8.",
                },
                minLength: {
                  value: 8,
                  message:
                    "Password must have minimum 1 capital letter, 1 number, 1 special character. Password length should be minimum 8.",
                },
                maxLength: {
                  value: 20,
                  message:
                    "Password must have minimum 1 capital letter, 1 number, 1 special character. Password length should be minimum 8.",
                },
              })}
            />
            {errors?.password && (
              <p className="text-[14px] text-red-600">
                {errors?.password?.message}
              </p>
            )}
            <InputField 
            label={"Phone"} 
            type={"text"} 
            {...register("phone", {
              pattern: {
                value: /^\+\d+(\.\d+)?$/,
                message: "Phone number should contain country code"
              },
              minLength: {
                value: 10,
                message: "Invalid phone number"
              }
            })} 
            />
            {errors?.phone && (
              <p className="text-[14px] text-red-600">
                {errors?.phone?.message}
              </p>
            )}
            <SelectField
              label="Designation"
              valueArray={["Seller", "Buyer"]}
              placeholder="Your Designation"
              {...register("designation")}
            />
            <Button>
              <button type="submit">Create</button>
            </Button>
          </div>
        </form>
        <div className="flex justify-center mt-5 opacity-70 text-[14px]">
          <p>
            Already Have An Account?{" "}
            <Link to={"/login"} className="underline">
              Log In
            </Link>
          </p>
        </div>
      </CardComponent>
    </>
  );
}

export default Signin;
