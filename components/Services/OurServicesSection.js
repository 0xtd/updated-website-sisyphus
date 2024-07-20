import React from "react";
import OurServiceCard from "../Elements/Cards/OurServiceCard";
import Image from "next/image";
import CallToActionButton from "../Elements/Buttons/CallToActionButton";

const OurServicesSection = () => {
  return (
    <div className="container m-auto px-6 py-14 font-Poppins">
      <div className="border-l-4 p-4 border-callToAction">
        <h1 className="text-[24px] md:text-[32px] lg:text-[42px] text-white capitalize">
          Our <span className="text-callToAction font-bold">Services</span>
        </h1>
        <p className="text-textSecondary text-base md:text-xl lg:text-3xl">
          Pick the right service for you and let us unlock the potential of your
          business.
        </p>
      </div>
      <OurServiceCard
        graphicUrl="/assets/images/services/development/ux.png"
        iconUrl="/assets/images/services/development/ux-icon.png"
        title="User Experience Design"
        subTitle="UX designer will flesh out the user stories, journeys, and states
        to create a clear, seamless and delightful experience."
      />

      <OurServiceCard
        graphicUrl="/assets/images/services/development/visual-design.png"
        iconUrl="/assets/images/services/development/vd-icon.png"
        title="Visual Design"
        subTitle="Simplicity is the ultimate sophistication. Work with our visual design team to create an elegant design that incorporates the latest trends and capabilities."
        isReverse={true}
      />

      <OurServiceCard
        graphicUrl="/assets/images/services/development/web-development.png"
        iconUrl="/assets/images/services/development/wd-icon.png"
        title="Web Development"
        subTitle="Our developers understand the importance of building a secure, intuitive and well-shaped website using proper technical stack."
      />

      <OurServiceCard
        graphicUrl="/assets/images/services/development/maintenance-support.png"
        iconUrl="/assets/images/services/development/ms-icon.png"
        title="Maintenance and Support"
        subTitle="Maintaining a website involves keeping it up-to-date and making sure it's running as smoothly as possible and operating at peak efficiency. We ensure that."
        isReverse={true}
      />
      {/* digital marketing services */}
      <div className="border-l-4 p-4 border-callToAction">
        <h1 className="text-[24px] md:text-[32px] lg:text-[42px] text-white capitalize">
          Digital <span className="text-callToAction font-bold">Marketing</span>
        </h1>
        <p className="text-textSecondary text-base md:text-xl lg:text-3xl">
          We do provide services of Search Engine Optimization, Content
          Generation and Optimization.
        </p>
      </div>
      {/* seo service */}
      <div className="bg-secondary p-4 mt-14 rounded">
        <h1 className="text-center font-Poppins text-lg font-semibold mb-4">
          Search Engine Optimization
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Image
            src="/assets/images/services/marketing/seo.png"
            alt="Seo graphic"
            width={160}
            height={160}
            className="block my-2"
          />
          <div className="bg-primary p-4 w-full text-sm rounded mb-4 m-auto md:mx-4 lg:mx-8">
            <p className="font-Poppins bg-callToActionDark py-1 pl-2 rounded m-2">
              On Page SEO
            </p>
            <p className="font-Poppins bg-callToActionDark py-1 pl-2 rounded m-2">
              Off Page SEO
            </p>
            <p className="font-Poppins bg-callToActionDark py-1 pl-2 rounded m-2">
              Local SEO
            </p>
          </div>
          <p className="text-sm text-white">
            Improve your search ranking with our SEO services. Let our
            consultants make your website appear on the first page of Google!
          </p>
        </div>
      </div>
      {/* social media optimization and management service */}
      <div className="mt-14 flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="bg-callToActionDark rounded p-6 w-full">
          <h1 className=" text-lg font-medium mb-6">
            Social Media Optimization and Management
          </h1>
          <div className="font-Josefin">
            <div className="flex text-primary m-2">
              <Image
                src="/assets/images/services/marketing/content.png"
                alt="Content graphic"
                width={15}
                height={10}
                className="mr-2"
              />
              <p>Content Creation and Strategy Marketing</p>
            </div>
            <div className="flex text-primary m-2">
              <Image
                src="/assets/images/services/marketing/hash.png"
                alt="Hashtag graphic"
                width={15}
                height={10}
                className="mr-2"
              />
              <p>Content Posting with Hashtag</p>
            </div>
            <div className="flex text-primary m-2">
              <Image
                src="/assets/images/services/marketing/performance.png"
                alt="Performance graphic"
                width={15}
                height={10}
                className="mr-2"
              />
              <p>Performance Analysis</p>
            </div>
            <div className="flex text-primary m-2">
              <Image
                src="/assets/images/services/marketing/report.png"
                alt="Report graphic"
                width={15}
                height={10}
                className="mr-2"
              />
              <p>Report Generation</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <Image
            src="/assets/images/services/marketing/smo.png"
            alt="Smo graphic"
            width={180}
            height={160}
            className="block w-full"
          />
        </div>
      </div>
      {/* ppc service */}
      <div className="mt-14 bg-secondary p-6 rounded">
        <h1 className="text-lg font-medium text-center mb-6">
          Pay Per Click (PPC)
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Image
            src="/assets/images/services/marketing/ppc.png"
            alt="PPC graphic"
            width={160}
            height={160}
            className="block"
          />
          <p className="sm:mt-2 text-sm md:text-base font-Poppins md:ml-8 lg:w-[520px]">
            Improve your search ranking with our SEO services. Let our
            consultants make your website appear on the first page of Google!
          </p>
        </div>
        <div className="flex justify-center items-center mt-4">
          <Image
            src="/assets/images/services/marketing/ppc-fb.png"
            alt="PPC fb graphic"
            width={25}
            height={25}
            className="block m-2"
          />
          <Image
            src="/assets/images/services/marketing/ppc-insta.png"
            alt="ppc insta graphic"
            width={25}
            height={25}
            className="block m-2"
          />
          <Image
            src="/assets/images/services/marketing/ppc-link.png"
            alt="ppc linkedin graphic"
            width={25}
            height={25}
            className="block m-2"
          />
        </div>
      </div>
      {/* other digital marketing services */}
      <div className="mt-14 flex flex-col md:flex-row justify-center items-center">
        <div className="bg-callToActionDark w-full rounded p-6 flex flex-col justify-center items-center md:mr-2 mb-2 md:mb-0">
          <div className="p-8 bg-callToAction rounded-full mb-4">
            <Image
              src="/assets/images/services/marketing/perform-marketing.png"
              alt="perform graphic"
              width={80}
              height={80}
              className="block"
            />
          </div>
          <p className="text-sm font-semibold font-Poppins">
            Performance Marketing
          </p>
        </div>
        <div className="bg-callToActionDark w-full rounded p-6 flex flex-col justify-center items-center md:mx-2 my-2 md:my-0">
          <div className="p-8 bg-callToAction rounded-full mb-4">
            <Image
              src="/assets/images/services/marketing/perform-marketing.png"
              alt="perform graphic"
              width={80}
              height={80}
              className="block"
            />
          </div>
          <p className="text-sm font-semibold font-Poppins">Video Marketing</p>
        </div>
        <div className="bg-callToActionDark w-full rounded p-6 flex flex-col justify-center items-center md:ml-2 mt-2 md:mt-0">
          <div className="p-8 bg-callToAction rounded-full mb-4">
            <Image
              src="/assets/images/services/marketing/perform-marketing.png"
              alt="perform graphic"
              width={80}
              height={80}
              className="block"
            />
          </div>
          <p className="text-sm font-semibold font-Poppins">
            Reputation Marketing
          </p>
        </div>
      </div>
      {/* contact us btn */}
      <div className="flex justify-center items-center mt-14">
        <CallToActionButton btnText="Contact" />
      </div>
    </div>
  );
};

export default OurServicesSection;
