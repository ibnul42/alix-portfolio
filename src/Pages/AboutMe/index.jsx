import React from "react";

function AboutMe() {
  return (
    <div className="grid grid-cols-11 gap-2 py-5">
     <div className="col-span-11 md:col-span-5 flex justify-center items-center">
      <div className="p-1 rounded-full bg-gradient-to-r from-[#7928ca] to-[#ff0080da] shadow-md">
        <div className="h-80 w-80 md:h-96 md:w-96 rounded-full overflow-hidden">
          <img src="/assets/alix.png" className="h-full w-full object-cover object-top" alt="" />
        </div>
      </div>
     </div>
     <div className="col-span-11 md:col-span-6 flex items-center">
      <div className="flex flex-col gap-3">
        <p className="text-lg font-semibold my-2">I'm a digital artist and media personality who also specializes in UGC. <span className="font-bold">I specifically work with brands/services in the following categories:</span></p>
        <ul className="list-item">
          <li className="custom-style">Vegan/Plant-based lifestyle</li>
          <li className="custom-style">Sustainable fashion</li>
          <li className="custom-style">Skincare / Beauty</li>
          <li className="custom-style">Vegan-Friendly supplements</li>
          <li className="custom-style">CBD</li>
          <li className="custom-style">Men's wellness</li>
        </ul>
        <p className="text-md font-semibold my-2">However each collaboration is a case-by-case basis!</p>
      </div>
     </div>
    </div>
  );
}

export default AboutMe;
