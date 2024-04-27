import React from "react";
import { FaFacebookSquare, FaInstagram, FaPhone } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-black">Tour Empire</h1>
        <p className="py-4 text-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-2 text-black">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <MdOutlineAttachEmail size={30} />
          <FaPhone size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-around mt-6 text-black">
        
        <div>
          <h6 className="font-medium text-black">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Features</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-black">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Contact</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-black">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
