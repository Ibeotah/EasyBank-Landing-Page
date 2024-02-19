import { useState } from "react";
import reactLogo from "./assets/react.svg";
import facebookIcon from "./assets/images/icon-facebook.svg";
import youtubeIcon from "./assets/images/icon-youtube.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import pinterestIcon from "./assets/images/icon-pinterest.svg";
import instagramIcon from "./assets/images/icon-instagram.svg";
import logoImage from "./assets/images/logo.svg";
import onboardingIcon from "./assets/images/icon-onboarding.svg";
import onlineIcon from "./assets/images/icon-online.svg";
import budgetingIcon from "./assets/images/icon-budgeting.svg";
import closeIcon from "./assets/images/icon-close.svg";
import hamburgerIcon from "./assets/images/icon-hamburger.svg";
import apiIcon from "./assets/images/icon-api.svg";
import faviconImage from "./assets/images/favicon-32x32.png";
import desktopIcon from "./assets/images/bg-intro-desktop.svg";
import mobileIcon from "./assets/images/bg-intro-mobile.svg";
import mockupsImage from "./assets/images/image-mockups.png";
import currencyImage from "./assets/images/image-currency.jpg";
import restaurantImage from "./assets/images/image-restaurant.jpg";
import planeImage from "./assets/images/image-plane.jpg";
import confettiImage from "./assets/images/image-confetti.jpg";
import { RiTwitterFill } from "react-icons/ri";
import "./App.css";
import "./index.css";

function App() {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isSecondImageVisible, setIsSecondImageVisible] = useState(false);

  const handleImageClick = () => {
    setIsImageVisible(!isImageVisible);
    setIsNavbarVisible(!isNavbarVisible);
    setIsSecondImageVisible(!isSecondImageVisible);
  };
  return (
    <>
      <div className="flex flex-row w-full h-14 bg-neutral-white md:gap-x-40 md:justify-evenly">
        <img
          src={logoImage}
          alt="Easybank logo"
          className="h-5 my-5 mx-6 lg:h-3 lg:my-5 lg:mx-[-0.2rem]"
        />
        {isImageVisible ? (
          <img
            src={hamburgerIcon}
            alt="Hamburger"
            className="lg:hidden h-4 mx-[196px] my-6 cursor-pointer"
            onClick={handleImageClick}
          />
        ) : (
          <img
            src={closeIcon}
            alt="Close"
            className="lg:hidden h-4 mt-6 ml-52"
            onClick={handleImageClick}
          />
        )}

        <nav
          className="text-[9.6px] text-neutral-grayishblue lg:space-x-4 lg:my-5 font-publicsans font-normal hidden lg:inline"
          id="navbar"
        >
          {/* Horizontal Navbar on Large Screens */}
          <a href="#home" className="custom">
            Home
          </a>
          <a href="#about" className="custom">
            About
          </a>
          <a href="#contact" className="custom">
            Contact
          </a>
          <a href="#blog" className="custom">
            Blog
          </a>
          <a href="#careers" className="custom">
            Careers
          </a>
        </nav>

        <nav
          className={`text-[16px] text-primary absolute left-24 top-[76px] border px-[100px] py-5 border-white bg-neutral-white h-52 w-64 font-publicsans font-normal lg:hidden z-10 ${
            isImageVisible ? "hidden" : ""
          }`}
          id="navbar"
        >
          {/* Vertical Navbar on Small Screens */}
          <a href="#home" className="custom block mb-3">
            Home
          </a>
          <a href="#about" className="custom block mb-3">
            About
          </a>
          <a href="#contact" className="custom block mb-3 ml-[-6px]">
            Contact
          </a>
          <a href="#blog" className="custom block mb-3 ml-1">
            Blog
          </a>
          <a href="#careers" className="custom block mb-3 ml-[-6px]">
            Careers
          </a>
        </nav>

        <a
          href="#request-invite"
          className="bg-primary-limegreen h-8 w-32 text-center rounded-2xl my-3 font-publicsans hover:opacity-70 hidden lg:inline"
        >
          <div className="text-[9.6px] text-neutral-verylightgray py-2 font-normal">
            Request Invite
          </div>
        </a>
      </div>
      <div className="flex flex-col overflow-hidden">
        <div className="bg-neutral-verylightgray w-full lg:h-[496px] h-[720px]">
          <div className="hidden lg:flex flex-col font-publicsans w-64 h-52 lg:mx-28 lg:my-36">
            <div className="text-primary text-3xl">
              Next generation digital banking
            </div>
            <div className="text-neutral-grayishblue text-[10px] my-4 font-normal">
              Take your financial life online. Your Easybank account be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </div>
            <a
              href="#request-invite"
              className="bg-primary-limegreen h-8 w-32 text-center rounded-2xl my-0 font-publicsans font-bold hover:bg-opacity-70 lg:block"
            >
              <div className="text-[9.6px] text-neutral-verylightgray py-2 opacity-99">
                Request Invite
              </div>
            </a>
          </div>

          <img
            src={desktopIcon}
            alt="Desktop"
            className=" hidden lg:block lg:h-[736px] lg:relative lg:top-[-42.5rem] lg:left-[31.6rem]"
          />
          <img
            src={mockupsImage}
            className=" relative bottom-[9.2rem] left-3 w-[416px] lg:bottom-[83rem] lg:left-[40.8rem] lg:h-[696px] lg:w-[680px]"
          />
          <img
            src={mobileIcon}
            alt="Mobile"
            className="my-[-38rem] w-[440px] lg:hidden"
          />
          <div className="flex flex-col font-publicsans w-full mx-14 my-[576px]  lg:hidden">
            <div className="text-primary text-[44px] leading-[1.16]">
              <div>Next generation</div>
              <div className="pl-3">digital banking</div>
            </div>
            <p className="text-neutral-grayishblue text-[16px] mx-[-16px] my-4 font-normal w-[376px] px-1.5 tracking-wide">
              Take your financial life online. Your Easybank account be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <a
              href="#request-invite"
              className="bg-primary-limegreen h-11 w-40 text-center rounded-3xl mx-16 my-2 font-publicsans font-bold hover:bg-opacity-70"
            >
              <div className="text-[14.4px] text-neutral-verylightgray py-2.5 opacity-99">
                Request Invite
              </div>
            </a>
          </div>
        </div>
        <div className="bg-gray-100 w-full lg:h-[496px] h-[1360px]">
          <div className="flex flex-col h-20 w-[416px] mx-24 my-[88px]">
            <div className="text-primary font-publicsans lg:text-xl lg:px-4 hidden lg:block">
              Why choose Easybank?
            </div>
            {/* This is for small screen */}
            <div className="text-primary font-publicsans text-3xl lg:hidden my-[-16px] mx-10">
              <div>Why choose </div>
              <div className="mx-2">Easybank?</div>
            </div>
            <div className="text-neutral-grayishblue lg:text-[10.6px] font-publicsans  lg:px-4 lg:my-4 hidden lg:block">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </div>
            {/* This is for small screen */}
            <div className="text-neutral-grayishblue lg:text-[10.6px] font-publicsans  px-4 mx-[-3.8rem] my-7 w-[400px] lg:hidden">
              <div>We leverage Open Banking to turn your bank</div>
              <div>account into your financial hub. Control your</div>
              <div className="px-16">finances like never before.</div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-28 lg:mx-[112px]">
            <div className="flex flex-col gap-y-4 lg:gap-y-4 lg:h-[176px] lg:w-[160.2px]">
              <img
                src={onlineIcon}
                alt="online"
                className="lg:h-10 lg:w-10 hidden lg:block"
              />
              <div className="text-primary text-xl lg:text-sm font-publicsans hidden lg:block">
                Online Banking
              </div>
              <div className="text-neutral-grayishblue font-publicsans lg:text-[9.6px] hidden lg:block">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </div>
              {/* This is for small screen */}
              <img
                src={onlineIcon}
                alt="online"
                className="h-16 w-16 mx-[184px] my-5 lg:hidden"
              />
              <div className="text-primary text-xl mx-36 w-40 font-publicsans lg:hidden">
                Online Banking
              </div>
              <div className="text-neutral-grayishblue font-publicsans lg:hidden">
                <div className="mx-11">
                  Our modern web and mobile applications allow
                </div>
                <div className="mx-10">
                  you to keep track of your finances wherever you
                </div>
                <div className="mx-40 w-32">are in the world.</div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 h-[176px] w-[160.2px]">
              <img
                src={budgetingIcon}
                alt="budgeting"
                className="lg:h-10 lg:w-10 hidden lg:block"
              />
              <div className="text-primary lg:text-sm font-publicsans hidden lg:block">
                Simple Budgeting
              </div>
              <div className="text-neutral-grayishblue font-publicsans text-[9.6px] hidden lg:block">
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </div>
              {/* This is for small screen */}
              <img
                src={budgetingIcon}
                alt="budgeting"
                className="h-16 w-16 mx-[184px] my-5 lg:hidden"
              />
              <div className="text-primary text-xl mx-36 w-48 font-publicsans lg:hidden">
                Simple Budgeting
              </div>
              <div className="text-neutral-grayishblue font-publicsans lg:hidden">
                <div className="mx-10 w-[360px]">
                  See exactly where your money goes each month.
                </div>
                <div className="mx-11 w-[360px]">
                  Receive notifications when you’re close to your
                </div>
                <div className="mx-[168px] w-28"> hitting limits.</div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 h-[176px] w-[160.2px]">
              <img
                src={onboardingIcon}
                alt="onboarding"
                className="h-10 w-10 hidden lg:block"
              />
              <div className="text-primary text-sm font-publicsans hidden lg:block">
                Fast Onboarding
              </div>
              <div className="text-neutral-grayishblue font-publicsans text-[9.6px] hidden lg:block">
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </div>
              {/* This is for small screen */}
              <img
                src={onboardingIcon}
                alt="onboarding"
                className="h-16 w-16 mx-[184px] my-20 lg:hidden"
              />
              <div className="text-primary text-xl mx-36 my-[-4rem] w-48 font-publicsans lg:hidden">
                Fast Onboarding
              </div>
              <div className="text-neutral-grayishblue font-publicsans my-[72px] lg:hidden">
                <div className="mx-16 w-[360px]">
                  We don’t do branches. Open your account in
                </div>
                <div className="mx-14 w-[360px]">
                  minutes online and start taking control of your
                </div>
                <div className="mx-[152px] w-40">finances right away.</div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 h-[176px] w-[160.2px]">
              <img
                src={apiIcon}
                alt="Api"
                className="h-10 w-10 hidden lg:block"
              />
              <div className="text-primary lg:text-sm font-publicsans hidden lg:block">
                Open API
              </div>
              <div className="text-neutral-grayishblue font-publicsans text-[9.6px] hidden lg:block">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </div>
              {/* this is for small screen */}
              <img
                src={apiIcon}
                alt="Api"
                className="h-16 w-16 mx-[184px] my-36 lg:hidden"
              />
              <div className="text-primary text-xl mx-44 my-[-8rem] w-48 font-publicsans lg:hidden">
                Open API
              </div>
              <div className="text-neutral-grayishblue font-publicsans my-36 lg:hidden">
                <div className="mx-12 w-[360px]">
                  Manage your savings, investments, pension, and
                </div>
                <div className="mx-16 w-[360px]">
                  much more from one account. Tracking your
                </div>
                <div className="mx-[116px] w-56">
                  money has never been easier.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-verylightgray w-full lg:h-[496px] h-[2216px]">
          <div className="text-primary font-publicsans text-3xl lg:text-xl mx-[116px] my-20 lg:px-4 lg:mx-24 lg:my-24">
            Latest Articles
          </div>
          <div className="flex flex-col gap-y-6 lg:flex-row mx-12 my-[-48px] lg:gap-x-28 lg:mx-[110px] lg:my-[-72px]">
            <div className="flex flex-col gap-x-0">
              <img
                src={currencyImage}
                alt="Currency"
                className="w-full lg:h-32 lg:w-40 rounded-t"
              />
              <div className="flex flex-col px-7 py-10 lg:p-4 bg-neutral-white h-[240px] lg:h-[120px] lg:w-40 rounded-b font-publicsans">
                <div className="text-[11.2px] lg:text-[6.4px] text-neutral-grayishblue">
                  By Claire Robinson
                </div>
                <div className="text-primary lg:text-[9.6px] text-opacity-[99] leading-[10.4px]  lg:my-1 hover:text-primary-limegreen hidden lg:block">
                  Receive money in any currency with no fees
                </div>
                {/* This is for small screens */}
                <div className="text-primary text-opacity-[99] leading-[20px]  my-3 hover:text-primary-limegreen lg:hidden w-[272px]">
                  Receive money in any currency with no fees
                </div>
                <div className="text-neutral-grayishblue text-[13.6px] lg:text-[8px] w-[296px] lg:w-full">
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-x-0">
              <img
                src={restaurantImage}
                alt="Restaurant"
                className="w-full lg:h-32 lg:w-40 rounded-t"
              />
              <div className="flex flex-col px-7 py-10 lg:p-4 bg-neutral-white h-[240px] lg:h-[120px] lg:w-40 rounded-b font-publicsans">
                <div className=" text-[11.2px] lg:text-[6.4px] text-neutral-grayishblue">
                  By Wilson Hutton
                </div>
                <div className="text-primary lg:text-[9.6px] text-opacity-[99] leading-[10.4px] lg:my-1 hover:text-primary-limegreen hidden lg:block ">
                  Treat yourself without worrying about money
                </div>
                {/* This is for small screens */}
                <div className="text-primary text-opacity-[99] leading-[20px]  my-3 hover:text-primary-limegreen lg:hidden w-[272px]">
                  Treat yourself without worrying about money
                </div>
                <div className="text-neutral-grayishblue text-[13.6px] lg:text-[8px] w-[296px] lg:w-full">
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-x-0">
              <img
                src={planeImage}
                alt="Plane"
                className="w-full lg:h-32 lg:w-40 rounded-t"
              />
              <div className="flex flex-col px-7 py-10 lg:p-4 bg-neutral-white h-[240px] lg:h-[120px] lg:w-40 rounded-b font-publicsans">
                <div className="text-[11.2px] lg:text-[6.4px] text-neutral-grayishblue">
                  By Wilson Hutton
                </div>
                <div className="text-primary lg:text-[9.6px] text-opacity-[99] leading-[10.4px] lg:my-1 hover:text-primary-limegreen hidden lg:block">
                  Take your Easybank card wherever you go
                </div>
                {/* This is for small screens */}
                <div className="text-primary text-opacity-[99] leading-[20px]  my-3 hover:text-primary-limegreen lg:hidden w-[272px]">
                  Take your Easybank card wherever you go
                </div>
                <div className="text-neutral-grayishblue text-[13.6px] lg:text-[8px] w-[296px] lg:w-full">
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-x-0">
              <img
                src={confettiImage}
                alt="Confetti"
                className="w-full lg:h-32 lg:w-40 rounded-t"
              />
              <div className="flex flex-col px-7 py-10 lg:p-4 bg-neutral-white h-[240px] lg:h-[120px] lg:w-40 rounded-b font-publicsans">
                <div className="text-[11.2px] lg:text-[6.4px] text-neutral-grayishblue">
                  By Claire Robinson
                </div>
                <div className="text-primary lg:text-[9.6px] text-opacity-[99] leading-[10.4px] lg:my-1 hover:text-primary-limegreen hidden lg:block">
                  Our invite-only Beta accounts are now live!
                </div>
                {/* This is for small screens */}
                <div className="text-primary text-opacity-[99] leading-[20px]  my-3 hover:text-primary-limegreen lg:hidden w-[272px]">
                  Our invite-only Beta accounts are now live!
                </div>
                <div className="text-neutral-grayishblue text-[13.6px] lg:text-[8px] w-[296px] lg:w-full">
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary w-full h-[520px] lg:h-32">
          <div className="flex flex-col gap-x-10 py-10 lg:py-8 mx-40 lg:mx-[112px]">
            <img
              src={logoImage}
              alt="Easybank logo"
              className=" h-5 w-[120px] lg:h-3 lg:w-[64px]"
            />
            <span class="text-neutral-white text-[22.4px] lg:text-[12px] font-publicsans font-bold my-[-28px] mx-7 lg:my-[-16px] lg:mx-4">
              easybank
            </span>
            <div className="flex flex-row my-14 mx-[-24px] gap-x-2 lg:my-12 lg:mx-0 lg:gap-x-0">
              <img
                src={facebookIcon}
                alt="facebook"
                className="h-6 lg:h-[10.4px]"
              />

              <img
                src={youtubeIcon}
                alt="Youtube"
                className="h-6 lg:h-[10.4px] mx-[6px]"
              />
              <div className="h-[11.2px] mx-[-1px] cursor-pointer hover:text-primary-limegreen hidden lg:block">
                <RiTwitterFill />
              </div>
              <img
                src={twitterIcon}
                alt="twitterIcon"
                className="h-6 lg:hidden"
              />

              <img
                src={pinterestIcon}
                alt="Pinterest"
                className="h-6 lg:h-[11px] mx-1"
              />
              <img
                src={instagramIcon}
                alt="Instagram"
                className="h-6 lg:h-[11px] mx-[1.2px]"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row my-[-64px] mx-[12rem] lg:my-[-136px] lg:mx-[24rem] lg:space-x-20">
            <ul className="lg:text-[8.8px] space-y-3 lg:space-y-2 text-neutral-verylightgray font-publicsans text-opacity-75">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-limegreen inline-block lg:inline w-40"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-limegreen mx-1 lg:mx-0"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-limegreen mx-4 lg:mx-0"
                >
                  Blog
                </a>
              </li>
            </ul>
            <ul className="lg:text-[8.8px] space-y-3 lg:space-y-2 my-3 lg:my-0 text-neutral-verylightgray font-publicsans text-opacity-75">
              <li>
                <a href="#" className="hover:text-primary-limegreen">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-limegreen">
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-limegreen inline-block lg:inline w-32 mx-[-20px] lg:mx-0"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col my-[72px] mx-[9rem] lg:mx-[60rem] w-[280px]">
            <a
              href="#request-invite"
              className="bg-primary-limegreen h-[40px] w-[168px] lg:h-[30px] lg:w-32 text-center rounded-3xl my-3 font-publicsans font-normal hover:bg-opacity-90"
            >
              <div className="text-[14.4px] lg:text-[9.6px] text-neutral-verylightgray py-2">
                Request Invite
              </div>
            </a>
            <div className="text-[15.2px] lg:text-[8.8px] text-neutral-grayishblue font-publicsans mx-[-32px] my-4 lg:mx-[-8px] lg:my-0">
              © Easybank. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
