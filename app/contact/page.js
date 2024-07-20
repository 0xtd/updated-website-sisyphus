"use client";

import { HiInboxIn } from "react-icons/hi";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import CustomHead from "../../utils/CustomHead";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [disable, setDisable] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const submitHandler = async ({
    firstName,
    lastName,
    email,
    phone,
    subject,
    message,
  }) => {
    try {
      if (email) {
        setDisable(true);
      }

      const data = await axios.post(
        "https://good-blue-skunk-wig.cyclic.app/submit-form",
        {
          fname: firstName,
          lname: lastName,
          email: email,
          phone: phone,
          subject: subject,
          message: message,
        }
      );

      if (data.status === 200) {
        toast.success("We received your data. You will contacted soon!");
        setValue("firstName", "");
        setValue("lastName", "");
        setValue("email", "");
        setValue("phone", "");
        setValue("subject", "");
        setValue("message", "");

        setDisable(false);
      }
    } catch (e) {
      toast.error(e.message);
      setDisable(false);
    }
  };

  return (
    <>
      <CustomHead title="Sisyphus | Contact Us" description="Sisyphus" keywords="Sisyphus" />
      <main className="container mx-auto mt-14">
        <div className="min-w-[48%] mx-8">
          <h1 className="text-[24px] md:text-[32px] lg:text-[42px] text-white capitalize">
            Contact <span className="text-callToAction font-bold">Us</span>{" "}
          </h1>
          <br />
          <p className="text-textSecondary text-base md:text-xl lg:text-3xl">
            Looking for a design partner?
            <br />
            You Found
          </p>
        </div>

        {/* social icons */}
        {/* <div className="flex mt-4 text-callToActionDark mx-8">
          <BsFacebook className="cursor-pointer" size={25} />
          <AiFillInstagram className="cursor-pointer mx-2" size={25} />
          <AiFillLinkedin className="cursor-pointer" size={25} />
        </div> */}

        <div className="md:flex justify-center mx-8 mt-14">
          <div className="md:w-[40%] mb-8 md:mb-0">
            <div className="mb-4">
              <h1 className="text-xl md:text-2xl lg:text-[32px] text-white capitalize">
                What will be{" "}
                <span className="text-callToAction font-bold">Next</span> step?
              </h1>
              <p className="text-lg text-textSecondary font-Josefin">
                You are one step closer to build your perfect product.
              </p>
            </div>
            {/* stepper */}
            <Stepper orientation="vertical">
              <Step active={true}>
                <StepLabel>
                  <h1 className="text-callToAction text-lg capitalize font-Poppins">
                    We'll prepare a proposal
                  </h1>
                </StepLabel>
                <StepContent>
                  <p className="text-base text-textSecondary font-Josefin">
                    Required scope, timeline and apr. price will be included if
                    you provide us with detail information about a project
                  </p>
                </StepContent>
              </Step>
              <Step active={true}>
                <StepLabel>
                  <h1 className="text-callToAction text-lg capitalize font-Poppins">
                    Together we discuss it
                  </h1>
                </StepLabel>
                <StepContent>
                  <p className="text-base text-textSecondary font-Josefin">
                    Let's get acquainted and discuss all the possible variants
                    and options. Google Hangouts or Whatsapp woks great.
                  </p>
                </StepContent>
              </Step>
              <Step active={true}>
                <StepLabel>
                  <h1 className="text-callToAction text-lg capitalize font-Poppins">
                    Let's start building
                  </h1>
                </StepLabel>
                <StepContent>
                  <p className="text-base text-textSecondary font-Josefin">
                    When the contract is signed, and all goals are set we can
                    start the first sprint.
                  </p>
                </StepContent>
              </Step>
            </Stepper>
          </div>

          {/* contact form */}
          <div className="bg-secondary py-14 px-8 mx-auto max-w-screen-md rounded md:w-[60%] md:ml-14 md:mt-[-100px]">
            <div className="flex mb-4 bg-slate-400 px-4 py-8 rounded">
              <div className="flex justify-center items-center">
                <HiInboxIn size={35} className="bg-primary p-2 rounded mr-2" />
                <p className="text-sm text-primary">
                  Write us a few words about your project and we'll prepare a
                  proposal for you within 24 hours.
                </p>
              </div>
            </div>
            <form
              className="mx-auto max-w-screen-md"
              onSubmit={handleSubmit(submitHandler)}
            >
              <div className="mb-4 flex justify-between items-center">
                <div className="w-[48%]">
                  <label
                    htmlFor="firstName"
                    className="text-base font-Josefin font-semibold"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full rounded h-[30px] p-2 text-sm text-primary"
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", {
                      required: "Please enter your First Name",
                    })}
                  />
                  {errors.firstName && (
                    <div className="text-red-500">
                      {errors.firstName.message}
                    </div>
                  )}
                </div>
                <div className="w-[48%]">
                  <label
                    htmlFor="lastName"
                    className="text-base font-Josefin font-semibold"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full rounded h-[30px] p-2 text-sm text-primary"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    {...register("lastName", {
                      required: "Please enter your Last Name",
                    })}
                  />
                  {errors.lastName && (
                    <div className="text-red-500">
                      {errors.lastName.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-base font-Josefin font-semibold"
                >
                  Email
                </label>
                <input
                  className="w-full rounded h-[30px] p-2 text-sm text-primary"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  {...register("email", {
                    required: "Please enter your Email",
                  })}
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="text-base font-Josefin font-semibold"
                >
                  Phone
                </label>
                <input
                  className="w-full rounded h-[30px] p-2 text-sm text-primary"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  type="text"
                  {...register("phone", {
                    required: "Please enter your Phone Number",
                  })}
                />
                {errors.phone && (
                  <div className="text-red-500">{errors.phone.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="text-base font-Josefin font-semibold"
                >
                  Subject
                </label>
                <input
                  className="w-full rounded h-[30px] p-2 text-sm text-primary"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  type="text"
                  {...register("subject", {
                    required: "Please enter Message Subject",
                  })}
                />
                {errors.subject && (
                  <div className="text-red-500">{errors.subject.message}</div>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="text-base font-Josefin font-semibold"
                >
                  message
                </label>
                <textarea
                  className="w-full rounded h-[80px] p-2 text-sm text-primary"
                  id="message"
                  name="message"
                  placeholder="Your message"
                  type="text"
                  {...register("message", {
                    required: "Please enter your Message",
                  })}
                />
                {errors.message && (
                  <div className="text-red-500">{errors.message.message}</div>
                )}
              </div>

              <div className="mb-4 flex justify-between mt-6">
                <button
                  className={`${
                    disable ? "bg-primary" : "bg-callToAction"
                  } text-base font-Josefin font-semibold px-4 py-2 rounded`}
                  type="submit"
                  disabled={disable ? true : false}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
