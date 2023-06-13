import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";
import { Slide } from "react-awesome-reveal";

const Contact = () => {
  return (
    <Slide direction="up" triggerOnce="true">
      <div id="contact" className="w-full lg:h-screen">
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
          <p className="text-xl tracking-widest uppercase text-jelly-bean-600">
            Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full ">
                <div>
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={ContactImg}
                    alt="Contact image"
                    width={500}
                    height={500}
                  />
                </div>
                <div>
                  <h2 className="py-4">Emre Turan</h2>
                  <p>Front-End Developer</p>
                  <p className="py-4">
                    I am available for freelance or full-time positions. Contact
                    me and let&apos;s talk.
                  </p>
                </div>
                <div>
                  {/* <p className="pt-8">Let&apos;s Talk</p> */}
                  <div className="flex items-center justify-between py-4">
                    <a
                      href="https://www.linkedin.com/in/emre-turan/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href="https://github.com/etdesign"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </a>

                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                    <Link href="/resume">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form
                  action="https://getform.io/f/8db7eb7a-7da9-4044-90c6-27d5bdd44a1e"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2 text-jelly-bean-950 ">
                        Name
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300 "
                        type="text"
                        name="name"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2 text-jelly-bean-950">
                        Phone Number
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-jelly-bean-950">
                      Email
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-jelly-bean-950">
                      Subject
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-jelly-bean-950">
                      Message
                    </label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows="10"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <button className="w-full p-4 text-gray-100 mt-4 ">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-12">
            <Link href="/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-jelly-bean-600"
                  size={30}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Contact;
