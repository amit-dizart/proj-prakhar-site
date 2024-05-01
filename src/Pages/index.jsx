import React from "react";
import Header from "../Components/Header";
import "./index.css";
import logo from "../assets/logo.png";
import ScrollDown from "../Components/Swipedown";
import image from "../assets/Functions-of-a-Consulting-Company.webp";
import appointment from "../assets/appointment.png";
import contact from "../assets/contact.webp";
import bb from "../assets/bb.png";
import dizlogo from "../assets/dizlogo.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { InlineWidget } from "react-calendly";

export default function Pages() {
  const emailAddress = "Info@asoc.in";
  const phoneNo = "9660638585";
  return (
    <div className="bg-gradient-to-bl from-slate-800 to-black">
      {/* <Header /> */}
      <div id="Home" className="welcomeSection">
        <div className="flex flex-col justify-center items-center gap">
          <div className="text-[30px] welcomeText sm:text-[60px]">
            {" "}
            Welcome to
          </div>
          <div>
            <img className="w-[140px] mt-[-30px]" src={logo} alt="" />
          </div>

          <div className="mt-[-10px] ">Trusted Demand Generation Partner</div>
        </div>
        <div className="scrollDown">
          <div className="welcomeText mb-[55px]">Swipe Down</div>
          <ScrollDown />
        </div>
      </div>

      <div id="About" className="aboutUsSection p-2 sm:p-0 mb-12">
        <div className="text-[30px] welcomeText sm:text-[40px] mb-12 ">
          About Us
        </div>

        <div className="flex flex-col md:flex-row md:justify-center items-center gap-5 ">
          <div className="md:w-[50%]">
            <img className=" md:w-[90%]" src={bb} alt="" />
          </div>

          <div className="md:w-[40%] text-justify">
            Welcome to ASOC, your premier destination for transformative managed
            sales service outsourcing solutions. At ASOC, we specialize in
            revolutionizing the way businesses approach sales, providing
            comprehensive outsourcing services that empower organizations to
            optimize revenue & drive sustainable growth. With a deep
            understanding of the intricacies of sales process across various
            industries, we pride ourselves on delivering tailored solutions that
            are strategically designed to meet the unique needs and objectives
            of each client. Whether you're a burgeoning startup or an
            established enterprise, we are dedicated to unlocking your full
            sales potential and propelling your business towards unparalleled
            success At ASOC, we are more than just a service provider – we are
            your trusted partner in success. With our dedicated team by your
            side, you can rest assured that your sales operations are in capable
            hands, allowing you to focus on what you do best – growing your
            business. Join us on a journey of innovation and transformation, and
            discover the limitless possibilities that await when you harness the
            power of managed sales service outsourcing with ASOC. Together,
            let's redefine the future of sales and unlock new opportunities for
            growth and prosperity.
          </div>
        </div>
      </div>

      <div id="Services" className="aboutUsSection p-2 sm:p-0  mb-12">
        <div className="text-[30px] welcomeText sm:text-[40px] mb-3 ">
          Our Offering
        </div>

        <div className="flex flex-col md:flex-row md:justify-center items-center gap-5 ">
          <div className="md:w-[40%] text-justify">
            Experience the difference with ASOC's Appointment Setting service.
            Our dedicated team utilizes cutting-edge strategies to connect you
            with high-value prospects, ensuring every interaction is a step
            towards your business goals. With our personalized approach, you'll
            not only save time but also maximize your ROI. Don't let
            opportunities slip away - partner with ASOC today and take your B2B
            growth to new heights.
          </div>
          <div className="md:w-[50%]">
            <img className=" md:w-[90%]" src={appointment} alt="" />
          </div>
        </div>
      </div>

      <div id="Meeting" className="aboutUsSection p-2 sm:p-0 mb-12">
        <div className="text-[30px] welcomeText sm:text-[40px] mb-12 ">
          Let's talk
        </div>

        <div className="flex flex-col md:flex-row md:justify-center gap-10 ">
          <div className="md:w-[50%] lg:mt-24 ">
            <img className=" md:w-[90%]" src={contact} alt="" />
          </div>

          <div className="w-[60%] border-8 rounded-3xl border-white">
            <InlineWidget
            
              styles={{
                height: "775px",
              }}
              url=""
            />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="sb_footer section_padding">
          <div className="sb_footer_links">
            <div className="sb_footer_links_div">
              <h4>Address</h4>
              <a href={`tel:${phoneNo}`}>Phone: {phoneNo}</a>
              <a href={`mailto:${emailAddress}`}>Email: {emailAddress}</a>
              <a href="" style={{ pointerEvents: "none" }}>
                <p>Jaipur, Rajasthan, India</p>
              </a>
            </div>

            <div className="sb_footer_links_div">
              <h4>Quick Links</h4>
              <a href="#Home">
                <p>Home</p>
              </a>
              <a href="#About">
                <p>About</p>
              </a>
              <a href="#Services">
                <p>Services</p>
              </a>
            </div>

            <div className="sb_footer_links_div">
              <h4>Get In Touch</h4>
              <div className="socialmedia">
                <a href="https://www.linkedin.com/company/asocpvtltd/">
                  <p>
                    <FaLinkedin
                      style={{ color: "#0077b5", fontSize: "30px" }}
                    />
                  </p>
                </a>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="sb_footer_below">
            <div className="sb_footer_copyright">
              <p>@{new Date().getFullYear()} ASOC. All right reserved</p>
            </div>
            <div className="sb_footer_below_links">
              <a href="https://www.linkedin.com/company/dizart-solutions-llp/">
                <div>
                  <p>Developed By : Dizart Solutions</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/dizart-solutions-llp/">
                <img
                  style={{
                    marginLeft: "5px",
                    height: "20px",
                    width: "20px",
                  }}
                  src={dizlogo}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
