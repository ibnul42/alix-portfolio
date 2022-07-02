import React from "react";

function Contact() {
  
  return (
    <div className="">
      <p className="text-3xl font-bold text-center my-3 uppercase">Work With Me</p>
      <p className="text-center my-1">Located in New York, NY</p>
      <div className="flex flex-col justify-center items-center my-1">
        <a href="mailto:ugcalix@gmail.com" className="text-center hover:underline">ugcalix@gmail.com</a>
        <img src="/assets/alix.png" alt="alix" className="w-72 h-96 my-2 border-4 border-orange-500 rounded-md" />
      </div>
    </div>
  );
}

export default Contact;
