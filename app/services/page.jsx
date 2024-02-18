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
          <h2 className="font-bold uppercase md:text-4xl mx-10 my-5 p-2 border-2  items-center  h-full border-black">
            {category} Services
          </h2>

          <div className="flex justify-center flex-wrap gap-x-10 gap-y-5">
            {services
              .filter((service) => service.category === category)
              .map((service, index) => (
                <div
                  key={index}
                  className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  flex flex-col justify-center items-center"
                >
                  <img src={service.logo} alt="" className="h-20 w-20" />
                  <h1 className="text-xl font-bold mt-4">{service.title}</h1>
                  <div className="table-container max-h-52 overflow-y-auto">
                    <table className="table-auto mt-4 ">
                      <thead>
                        <tr>
                          <th className="px-4 py-2">Place</th>
                          <th className="px-4 py-2">Day</th>
                          <th className="px-4 py-2">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.description.split(";").map((detail, idx) => {
                          const [place, day, time] = detail.split(" - ");
                          return (
                            <tr key={idx}>
                              <td className="border px-4 py-2">{place}</td>
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
