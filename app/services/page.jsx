'use client'
import Loading from '@/components/Loading';
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true); 
  
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://cfi-mission-backend.vercel.app/services');
        setServices(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setLoading(false); 
      }
    };
  
    useEffect(() => {
      fetchServices();
    }, []);

    if(loading){
        return(
          <Loading/>
        )
      }
  return (
    <div>
        <Navbar/>
        <h1 className=' text-center font-extrabold uppercase text-xl md:text-4xl my-4'>Your Services</h1>
     <div className="flex justify-center items-center m-5 ">
        <div className="md:w-1/3 w-full ">
          {services.map((item) => (
  <motion.div key={item._id || index} whileInView={{ opacity: [0, 1], y: [100, 0], transition: { duration: 1, ease: 'easeInOut' } }}>

<div  className="flex gap-x-3 ">
         

              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 "></div>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800  text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-xl text-black pl-2">
  {item.description
    .split(';')
    .filter(point => point.trim() !== '')
    .map((point, index) => (
      <React.Fragment key={index}>
        {index > 0 && <br  />}
        <span className='m-2'>*</span> {/* Add margin to each bullet point */}
        {point.trim()}
      </React.Fragment>
    ))}
</p>


              
              </div>
            </div>
      </motion.div >

          ))}
        </div>
      </div>
    </div>

  )
}

export default Services