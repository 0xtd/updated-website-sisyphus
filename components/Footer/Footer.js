"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

const Footer = () => {
  const [disable, setDisable] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const submitHandler = async ({ email }) => {
    try {
      if (email) {
        setDisable(true);
      }
      const data = await axios.post(
        "https://good-blue-skunk-wig.cyclic.app/submit",
        {
          email: email,
        }
      );

      if (data.status === 200) {
        toast.success("We received your data. You will contacted soon!");

        setValue("email", "");
        setDisable(false);
      }
    } catch (e) {
      toast.error(e.message);
      setDisable(false);
    }
  };

  return (
    <footer className="bg-zinc-800 p-8 mt-14">
      <div className="container m-auto md:flex justify-between items-start">
        {/* useful links */}
        <div>
          <div className="border-l-2 pl-2 border-callToAction">
            <h1 className="text-[14px] md:text-[18px] text-white uppercase">
              Useful <span className="text-callToAction font-bold">Links</span>
            </h1>
          </div>
          <ul className="mt-4 text-textSecondary">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services/">Services</Link>
            </li>
            <li>
              <Link href="/about/">About Us</Link>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
          </ul>
        </div>
        {/* connect with us */}
        <div className="mt-8">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex justify-center items-center"
          >
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                className="border border-callToActionDark rounded p-2 bg-primary block"
                {...register("email", {
                  required: "Please enter your Email",
                })}
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>
            <button
              type="submit"
              className={`${
                disable ? "bg-primary" : "bg-callToActionDark"
              } p-[12px] rounded-full ml-4`}
              disabled={disable ? true : false}
            >
              <BsSend size={20} />
            </button>
          </form>
          <p className="capitalize text-sm text-textSecondary my-4 text-center">
            Get connected with us on Social Networks
          </p>
          <div className="flex justify-center items-center">
            <Link href="https://www.facebook.com/profile.php?id=61553686953561" target="_blank">
              <Image
                src="/assets/images/services/marketing/ppc-fb.png"
                alt="facebook icon"
                width={25}
                height={25}
              />
            </Link>
            <Link href="https://www.instagram.com/sisyphusinfotech/" target="_blank" className="mx-4">
              <Image
                src="/assets/images/services/marketing/ppc-insta.png"
                alt="Instagram Icon"
                width={25}
                height={25}
              />
            </Link>
            {/* <Link href="/">
              <Image
                src="/assets/images/services/marketing/ppc-link.png"
                alt="Linkedin icon"
                width={25}
                height={25}
              />
            </Link> */}
          </div>
        </div>
        {/* contact */}
        <div className="mt-8">
          <div className="border-l-2 pl-2 border-callToAction">
            <h1 className="text-[14px] md:text-[18px] text-white uppercase">
              Contact <span className="text-callToAction font-bold">Us</span>
            </h1>
          </div>
          <ul className="mt-4 text-textSecondary">
            <li>
              <AiFillHome size={18} className="inline-block mr-2" />
              <span>74, Rastraguru Ave, Clive House, Ramgarh, Kolkata, West Bengal 700028</span>
            </li>
            <li>
              <MdEmail size={18} className="inline-block mr-2" />
              <span>official@sisyphusinfotech.com</span>
            </li>
            <li>
              <AiFillPhone size={18} className="inline-block mr-2" />
              <span>+91-8910055880/+91-9051977167</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
