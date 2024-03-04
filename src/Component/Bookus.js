import React, { useState } from "react";
import "../Component/Book.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Bookus = () => {
  const form = useRef();
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const [mainShootDate, setMainShootDate] = useState("");
  const [howDidYouHear, setHowDidYouHear] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [values, setValues] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !clientName ||
      !clientEmail ||
      !clientNumber ||
      !howDidYouHear ||
      !additionalDetails
    ) {
      toast.error("Please fill out all fields before submitting.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    emailjs
      .sendForm("service_p1f4twh", "template_w0lt6er", form.current, {
        publicKey: "Z1CXTZVTqscb_TIJl",
      })
      .then(
        () => {
          toast.success("🦄 Wow so easy!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setValues([
            ...values,
            {
              clientName,
              clientEmail,
              clientNumber,
              mainShootDate,
              howDidYouHear,
              additionalDetails,
            },
          ]);
          setClientName("");
          setClientEmail("");
          setClientNumber("");
          setMainShootDate("");
          setHowDidYouHear("");
          setAdditionalDetails("");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="book">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <form className="inner-change" ref={form} onSubmit={sendEmail}>
          <label for="couple-name">Couple name*</label>
          <input
            type="text"
            name="client_name"
            id="couple-name"
            required
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />

          <label for="email">Your email-id*</label>
          <input
            type="email"
            name="client_gmail"
            id="email"
            required
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
          />

          <label for="contact-no">Your Contact no*</label>
          <input
            type="number"
            name="client_number"
            id="contact-no"
            required
            value={clientNumber}
            onChange={(e) => setClientNumber(e.target.value)}
          />

          <label for="main-shoot-date">Main Shoot Date*</label>
          <input
            type="date"
            id="main-shoot-date"
            required
            value={mainShootDate}
            onChange={(e) => setMainShootDate(e.target.value)}
          />

          <label for="type-of-shoot">Type of shoot</label>
          <select id="type-of-shoot">
            <option>Couple shoot</option>
            <option>Wedding</option>
            <option>Others Events</option>
          </select>

          <label for="how-did-you-hear">How did you hear about us?*</label>
          <input
            type="text"
            id="how-did-you-hear"
            placeholder="Facebook/Instagram/Friends or Relatives Wedding/Others"
            required
            name="message-1"
            value={howDidYouHear}
            onChange={(e) => setHowDidYouHear(e.target.value)}
          />

          <label for="additional-details">
            If there are any details we are missing out, or you want to let us
            know, please do.*
          </label>
          <br />
          <textarea
            id="additional-details"
            placeholder="Tell us"
            name="message-2"
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
          ></textarea>

          <button className="btn-demo">
            <span className="text">BOOK NOW</span>
            <span>Thanks!</span>
          </button>
        </form>
      </div>
    </>
  );
};
export default Bookus;
