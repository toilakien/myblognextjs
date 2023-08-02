import React from "react";

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="container h-full absolute top-36 bg-slate-700">
        <div className="text-white text-center p-2">ABOUT</div>
        <div className="font-extrabold text-4xl text-white text-center p-4 mb-4">
          MY KIEN LE
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row justify-center basis-1/2">
            <img
              className="w-96 border-4"
              src="https://img.freepik.com/free-photo/anxious-man-working-side-view_23-2149729593.jpg"
              alt=""
            />
          </div>
          <div className="basis-1/2 p-4 ">
            <div className="text-white text-4xl ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <p className="text-white mt-4 mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <hr />
            <div className="flex justify-between mt-8">
              <div>
                <p className="text-white">Name: Le Van Kien</p>
                <p className="text-white">Skype: Kien Le</p>
                <p className="text-white">Experience: 1 years</p>
              </div>
              <div>
                <p className="text-white">Email: kienle17042001@gmail.com</p>
                <p className="text-white">Phone: +84 386785259</p>
                <p className="text-white"> Address: HaNoi ,VietNam</p>
              </div>
            </div>
            <div className="mt-8">
              <button className="border-2 rounded-lg text-white p-2 opacity-75 hover:opacity-100 mr-4">
                Dowload CV
              </button>
              <button className="border-2 rounded-lg text-white p-2 opacity-75 hover:opacity-100">
                Hire me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
