import React from "react";

const previousWork = [
  {
    title: "Empathy Wines",
    imageLink: "/assets/previous/empathy-wines.jpg"
  },

  {
    title: "Korres",
    imageLink: "/assets/previous/korres.jpg",
  },
  {
    title: "Laroche Posay",
    imageLink: "/assets/previous/laroche-posay.jpg",
  },
  {
    title: "Liquid Death",
    imageLink: "/assets/previous/liquid-death.jpg",
  },
  {
    title: "Truly Beauty",
    imageLink: "/assets/previous/truly-beauty.jpg",
  },
  {
    title: "Uniglitter Labs",
    imageLink: "/assets/previous/uniglitter-labs.jpg",
  },
];

function Portfolio() {
  return (
    <div className="text-white flex flex-col gap-5">
      <div className="">
        <p className="text-2xl font-bold text-center">Previous Work</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {previousWork.map((item, index) => (
          <div
            key={index}
            className="col-span-1 mx-auto bg-gradient-to-r from-orange-400 to-purple-400 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden w-72"
          >
            <div className="h-44 flex justify-center items-center overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-105"
                src={item.imageLink}
                alt=""
              />
            </div>
            <div className="my-2">
              <h5 className="text-center text-2xl font-bold tracking-tight text-purple-900 dark:text-white">
                {item.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div className="my-2">
        <p className="text-2xl font-bold text-center">More of my Previous Work</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <video src={'https://res.cloudinary.com/aristomarketbd/video/upload/v1656786324/alix/vdo1_boesez.mp4'} className="col-span-3 md:col-span-1 h-96 w-80 mx-auto" autoPlay={false} controls="controls" />
        <video src={'https://res.cloudinary.com/aristomarketbd/video/upload/v1656786377/alix/vdo2_g5tfvu.mp4'} className="col-span-3 md:col-span-1 h-96 w-80 mx-auto" autoPlay={false} controls="controls" />
        <video src={'https://res.cloudinary.com/aristomarketbd/video/upload/v1656786347/alix/vdo3_d3yrl1.mp4'} className="col-span-3 md:col-span-1 h-96 w-80 mx-auto" autoPlay={false} controls="controls" />
      </div>
    </div>
  );
}

export default Portfolio;
