"use client";
import { useState } from "react";
import Input from "./Input";

// Simple phone number validator
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function Contact() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidPhone(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setError(""); // clear error
    e.target.reset(); // reset form
    setPhone(""); // reset phone state if needed
    alert("Form submitted!"); // optional success action
  };

  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-duration="3000"
      className="bg-[#f3f0e8] flex flex-col items-center justify-center text-center pb-8"
    >
      <div className="max-w-80 md:max-w-[25rem] lg:max-w-[32rem] space-y-6">
        <h1 className="text-3xl font-freightDisp font-bold text-[#000000]">
          Get in Touch
        </h1>
        <p className="font-freight font-light md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          totam?
        </p>

        <form
          onSubmit={handleSubmit}
          className="font-freight font-normal flex flex-col gap-4"
        >
          <Input type="text">Name</Input>
          <Input type="email">Email</Input>

          <input
            type="text"
            placeholder="Phone No."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`px-4 py-2 rounded-lg bg-[#94b0b0] placeholder-[#f3f0e8] font-freight font-normal text-[#f3f0e8] focus:outline-none ${
              error && "border border-red-500"
            }`}
            required
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          <textarea
            placeholder="What brings you here?"
            className="px-4 py-2 rounded-lg bg-[#94b0b0] placeholder-[#f3f0e8] font-freight font-normal text-[#f3f0e8] focus:outline-none"
          ></textarea>

          <Input type="text">Preferred time to reach you</Input>

          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              className="h-5 w-5 accent-[#94b0b0] focus:outline-none"
            />
            <label>I agree to be contacted</label>
          </div>

          <button className="text-xl font-freight font-light bg-[#94b0b0] rounded-lg py-2 mt-2">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
