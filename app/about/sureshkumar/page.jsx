import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";

const SureshKumar = () => {
  const tempData = [
    {
      id: 1,
      date: 'Jan 8, 1999',
      title: 'Lorem, ipsum dolor sit amet consectetur',
      description: 'Adipisicing elit. Autem voluptate, doloribus distinctio quam laborum perspiciatis ipsam deserunt ex placeat... Adipisicing elit. Autem voluptate, doloribus distinctio quam laborum perspiciatis ipsam deserunt ex placeat... Adipisicing elit. Autem voluptate, doloribus distinctio quam laborum perspiciatis ipsam deserunt ex placeat...',
      images: [
        "https://plus.unsplash.com/premium_photo-1678233300991-77c08cbe4a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1528724566146-ccc7905835c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: 2,
      date: 'Dec 8, 1992',
      title: 'Lorem, ipsum dolor sit amet consectetur',
      description: 'Adipisicing elit. Autem voluptate, doloribus distinctio quam laborum perspiciatis ipsam deserunt ex placeat... Adipisicing elit. Autem voluptate, doloribus distinctio quam laborum perspiciatis ipsam deserunt ex placeat... Adipisicing elit. Autem voluptate, doloribus distinctio quam laborum perspiciatis ipsam deserunt ex placeat...',
      images: [
        "https://plus.unsplash.com/premium_photo-1678233300991-77c08cbe4a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1528724566146-ccc7905835c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },

    {
        id: 2,
        date: 'Dec 8, 1992',
        title: 'Lorem, ipsum dolor sit amet consectetur',
        description: 'Adipisicing elit. Autem voluptate, doloribus distinctio quam laborum perspiciatis ipsam deserunt ex placeat... Adipisicing elit. Autem voluptate, doloribus distinctio quam laborum perspiciatis ipsam deserunt ex placeat... Adipisicing elit. Autem voluptate, doloribus distinctio quam laborum perspiciatis ipsam deserunt ex placeat...',
        images: [
          "https://plus.unsplash.com/premium_photo-1678233300991-77c08cbe4a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1528724566146-ccc7905835c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
      },
    // Add more items as needed
  ];

  return (
    <div className="">
      <Navbar />

      <div className="flex justify-center m-5 ">
   
        <Link
          href="/about/sureshkumar"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm md:px-20 md:py-5  text-center me-2 mb-2"
        >
          <h1 className=" text-lg p-2 md:text-xl font-bold">
            About Suresh Kumar
          </h1>
        </Link>

        <Link
          href="/about/cfimission"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm md:px-20 md:py-5  text-center me-2 mb-2"
        >
          <h1 className=" text-lg md:text-xl p-2 font-bold  ">
            About Cfi Mission
          </h1>
        </Link>


      </div>

      <div className="flex justify-center items-center m-5 ">
        <div className="md:w-1/3 ">
          {tempData.map((item) => (
            <div key={item.id} className="flex gap-x-3 ">
              <div className="w-16 text-end">
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
              </div>

              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

                <div className="flex gap-2 mt-2">
                  {item.images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index}`} className=" w-28 md:w-64 h-auto " />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SureshKumar;
