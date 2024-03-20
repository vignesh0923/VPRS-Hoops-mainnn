import React from "react";
import { useRef, useState } from 'react';
import Navbar from "../Navbar/navbar";
import emailjs from '@emailjs/browser';
function Registrations() {
  const form = useRef();


  const validateForm = () => {
    let isValid = true;

    // Check if any required fields are empty
    const requiredFields = ['user_Namee', 'user_Agee', 'user_Datee', 'user_Parentt', 'user_contact', 'user_Add', 'user_emery', 'user_session', 'user_tshirt', 'user_exp', 'user_last'];
    requiredFields.forEach(field => {
      const input = form.current.elements[field];
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });

    // Check if contact number is valid
    const contactNumber = form.current.elements['user_contact'].value;
    if (!/^\d{10}$/.test(contactNumber)) {
      isValid = false;
      form.current.elements['user_contact'].classList.add('error');
    } else {
      form.current.elements['user_contact'].classList.remove('error');
    }

    // Check if email format is valid
    const email = form.current.elements['user_Email'].value;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      isValid = false;
      form.current.elements['user_Email'].classList.add('error');
    } else {
      form.current.elements['user_Email'].classList.remove('error');
    }

    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please fill out all required fields correctly.');
      return;
    }

    emailjs
      .sendForm('service_yxy3o2s', 'template_u5z7jpl', form.current, {
        publicKey: 'pw1QIwo54-lpt4IZe',
      })
      .then(
        () => {
          alert("Your message has been sent successfully!");
          alert('');
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
        },
      );
  };

  return (
    <div className="bg-black ">
      <Navbar/>
      <h1 className="text-[25px] text-[#ff4c00] font-[700] text-center p-[20px] lg:text-[30px]">
        SUMMER CAMP REGISTRATION
      </h1>

      <div>
      <form ref={form} onSubmit={sendEmail} >
        {/* -------------------Participant Information----------------- */}

        <h1 className="text-[20px] text-[#ff4c00] font-[700] text-start pt-[50px] pb-[20px] pl-[20px] lg:ml-[110px] lg:text-[25px]">
          Participant Information
        </h1>
        <section className="flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:place-items-center md:place-content-around xl:place-content-center">
          <div>
            <h1 className="text-white text-[20px] mb-2 lg:text-[25px]">Name</h1>
            <input
              type="text"
              re
              name="user_Namee"
              placeholder="Enter Your Name"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">Age</h1>
            <input
            name="user_Agee"
              type="number"
              placeholder="Enter your age"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">Gender</h1>
            <select name="user_Genderr" className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]">
              <option>MALE</option>
              <option>FEMALE</option>
            </select>
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">Date of Birth</h1>
            <input
            name="user_Datee"
              type="date"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">
              Parent/Guardian Name
            </h1>
            <input
            name="user_Parentt"
              type="text"
              placeholder="Enter Your Parent/Guardian Name"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">Contact Number</h1>
            <input
            name="user_contact"
              type="number"
              placeholder="Enter Your Number"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">Address</h1>
            <textarea
            name="user_Add"
              type="text"
              placeholder="Address"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">
              Emergency Contact Name
            </h1>
            <input
            name="user_emery"
              type="number"
              placeholder="Emergency Contact Name"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
        </section>
        {/* -------------------Participant Information----------------- */}

        {/* -------------------Camp Preferences----------------- */}

        <h1 className="text-[20px] text-[#ff4c00] font-[700] text-start pt-[50px] pb-[20px] pl-[20px] lg:ml-[110px] lg:text-[25px]">
          Camp Preferences
        </h1>
        <section className="flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:place-items-center md:place-content-around">
          <div>
            <h1 className="text-white text-[20px] mb-2">Preferred Session</h1>
            <select name="user_session" className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]">
              <option>Morning</option>
              <option>Evening</option>
              <option>Both Morning / Evening</option>
            </select>
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">T-Shirt Size</h1>
            <select name="user_tshirt" className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div>
            <p className="text-white text-[18px] font-[500] mb-2">
              Any Medical Conditions (Please Specify)
            </p>
            <textarea
            name="user_medical"
              placeholder="Message"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
        </section>

        {/* -------------------Camp Preferences----------------- */}

        {/* -------------------Additional Information----------------- */}

        <h1 className="text-[20px] text-[#ff4c00] font-[700] text-start pt-[50px] pb-[20px] pl-[20px] lg:ml-[110px] lg:text-[25px]">
          Additional Information
        </h1>
        <section className="flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:place-items-center md:place-content-around">
          <div>
            <h1 className="text-white text-[20px] mb-2">
              Any previous basketball experience?
            </h1>
            <select name="user_exp" className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="ml-[0px]">
            <p className="text-white text-[11px] font-[500] mb-2 lg:text-[15px]">
              What are you hoping to learn or achieve at our summer camp?
            </p>
            <textarea
            name="user_last"
              placeholder="Message"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px] "
            />
          </div>
          <button className="bg-[#FF0000] hover:bg-[#ffff] hover:text-[#FF0000] text-2xl font-black rounded-[8px] text-[#ffff] w-[200px] p-[10px]">
            <input type="submit" value="Send" />
          </button>
          
        </section>
        </form>

        {/* -------------------Additional Information----------------- */}

        {/* -------------------Terms and Conditions----------------- */}

        <h1 className="text-[20px] text-[#ff4c00] font-[700] text-start pt-[50px] pb-[20px] pl-[20px] lg:ml-[110px] lg:text-[25px]">
          Terms and Conditions *
        </h1>
        <section className="flex flex-col items-center justify-center gap-8 md:pb-[10px]">
          <p className="text-white text-justify px-[20px] lg:w-[80%]">
            By submitting this registration form, I acknowledge that
            participation in the VPRS Hoops Academy Foundation Free Summer Camp
            is voluntary and at my own risk. I understand that the camp
            organizers will take all necessary precautions to ensure the safety
            and well-being of participants, but cannot be held liable for any
            injuries or accidents that may occur during the camp. I agree to
            abide by the rules and regulations set forth by the academy and to
            conduct myself in a respectful and sportsmanlike manner at all
            times.
          </p>
          <p className="text-[#FF0000] text-[10px] text-center p-[20px] md:text-[10px] md:p-0">
          Let's make this summer unforgettable on the court!
        </p>
       
        
        </section>

        {/* -------------------Terms and Conditions----------------- */}
      </div>
    </div>
  );
}

export default Registrations;
