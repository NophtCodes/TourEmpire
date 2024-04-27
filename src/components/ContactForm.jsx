import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Locate } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Instagram } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const form = useRef();

  const notify = () => toast("The message has been successfully sent!✅");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_l8c1a4d", "template_itd52m2", form.current, {
        publicKey: "yG_II5-rOzHb1knZe",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="container bg-gray-50 min-h-screen flex items-center justify-center py-8 mt-10">
      <div className="form w-full max-w-2xl bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-2">
        <div className="contact-info p-6">
          <h3 className="title text-teal-500 font-semibold text-xl mb-3">
            Let's get in touch
          </h3>
          <p className="text text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info mt-4 text-gray-600">
            <div className="information flex items-center mb-3">
              <Locate className="mr-4 text-teal-500 hover:text-teal-900" />
              <p className="ml-2">Uzbekistan, Tashkent</p>
            </div>
            <div className="information flex items-center mb-3">
              <Mail className="mr-4 text-teal-500 hover:text-teal-900" />
              <p className="ml-2">lorem@ipsum.com</p>
            </div>
            <div className="information flex items-center">
              <Phone className="mr-4 text-teal-500 hover:text-teal-900" />
              <p className="ml-2">123-456-789</p>
            </div>
          </div>

          <div className="social-media mt-4">
            <p className="text-gray-700 mb-2">Connect with us:</p>
            <div className="flex items-center">
              <Mail className="mr-4 text-teal-500 hover:text-teal-900" />
              <Phone className="mr-4 text-teal-500 hover:text-teal-900" />
              <Instagram className="text-teal-500 hover:text-teal-900" />
            </div>
          </div>
        </div>

        <div className="contact-form relative bg-teal-500 p-6">
          <form ref={form} onSubmit={sendEmail}>
            <h3 className="title text-white font-semibold text-xl mb-3">
              Contact us
            </h3>
            <div className="input-container mb-4">
              <p className="text-white mb-1">UserName</p>
              <input
                type="text"
                name="to_name"
                className="input border border-white border-solid bg-teal-500 w-72 text-white rounded-md"
              />
            </div>
            <div className="input-container mb-4">
              <p className="text-white mb-1">Email</p>
              <input
                type="email"
                name="from_name"
                className="input border border-white border-solid bg-teal-500 w-72 text-white rounded-md"
              />
            </div>

            <div className="input-container textarea mb-4">
              <p className="text-white mb-1">Message</p>
              <textarea
                name="message"
                className="input border border-white border-solid bg-teal-500 w-52 text-white rounded-md"
              ></textarea>
            </div>
            <input
              onClick={notify}
              type="submit"
              value="Send"
              className="btn bg-white text-teal-500 font-semibold py-2 px-4 rounded-lg mt-4 hover:bg-teal-400 hover:text-white hover:border-teal-900"
            />
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
