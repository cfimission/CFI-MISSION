"use client";
import Loading from "@/components/Loading";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const validCategories = ["Weekly", "Monthly", "Other"];

  const fetchServices = async () => {
    try {
      const response = await axios.get(
        "https://cfi-mission-backend.vercel.app/services"
      );
      setServices(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching services:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />

      {validCategories.map((category) => (
        <div key={category}>
          <h2 className="font-bold uppercase md:text-4xl mx-10 my-5 p-2   items-center  h-full  text-[#1D24CA] text-center">
            {category} Services
          </h2>
          

          <div className="flex justify-center flex-wrap gap-x-10 gap-y-5">
            {services
              .filter((service) => service.category === category)
              .sort((a, b) => a.sno - b.sno) 
              .map((service, index) => (
                <div
                  key={index}
                  className="max-w-sm p-6 bg-[#1D24CA] text-white border border-gray-200 rounded-lg shadow  flex flex-col  items-center"
                >
                  <div className="flex justify-center flex-col items-center ">

                  <img src={service.logo} alt="" className="h-20 w-20 rounded-full" />
                  <h1 className="md:text-xl text-md  font-bold mt-4">{service.title.split(';')[0]}</h1> 
                  <p className="text-sm text-left pt-2">{service.title.split(';')[1]}</p>
                  </div>

                  <div className="table-container max-h-52 overflow-y-auto w-full">
                    <table className="table-auto mt-4  w-full">
                      <thead>
                        <tr>
                          <th className="px-4 py-2">Place</th>
                          <th className="px-4 py-2">Day</th>
                          <th className="px-4 py-2">Time</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        {service.description.split(";").map((detail, idx) => {
                          const [place, day, time] = detail.split(" - ");
                          return (
                            <tr key={idx}>
                              <td className="border px-4 py-2 ">{place}</td>
                              <td className="border px-4 py-2">{day}</td>
                              <td className="border px-4 py-2">{time}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>


                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
