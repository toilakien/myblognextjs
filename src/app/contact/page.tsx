import React from "react";

const Contact = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container absolute top-36 z-50">
        <div className="text-white text-center">SAY HELLO</div>
        <div className="text-white text-center text-4xl font-extrabold">
          CONTACT ME
        </div>
        <div className="flex">
          <div className="basis-1/2 p-4">
            <div className="text-white text-2xl font-bold"> Contact form</div>
          </div>
          <div className="basis-1/2 p-4">
            <div className="text-white text-2xl font-bold">Contact info</div>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
